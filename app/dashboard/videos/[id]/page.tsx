"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Share2,
  Eye,
  Calendar,
  User,
  BookOpen,
  Video,
  Clock,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Loader2,
} from "lucide-react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import { Category } from "@/types/category";
import { videos } from "@/data/mockData";

interface VideoDetail {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail_url: string;
  duration: number;
  category: Category;
  views_count: number;
  uploadedBy?: string;
  uploadedAt?: Date;
  isFavorite?: boolean;
}

export default function VideoDetailPage() {
  const params = useParams();
  const router = useRouter();
  const videoId = params.id as string;

  const videoRef = useRef<HTMLVideoElement>(null);

  const [video, setVideo] = useState<VideoDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Charger la vidéo
  useEffect(() => {
    const loadVideo = async () => {
      setIsLoading(true);

      const response = await fetch(`/api/videos/${videoId}`);
      const data = await response.json();
      console.log("Détails de la vidéo :", data.data);
      setVideo(data.data);


      // setTimeout(() => {
      //   // const found = videos.find((vid) => vid.id === videoId);
      //   if (found) {
      //     setVideo({
      //       id: found.id,
      //       title: found.title,
      //       description: found.description,
      //       url: found.url,
      //       thumbnail: found.thumbnail_url,
      //       duration: found.duration,
      //       category: found.category.name,
      //       views: found.views_count + 1,
      //       uploadedBy: "Expert M Impôt",
      //       uploadedAt: found.uploadedAt,
      //       isFavorite: false,
      //     });
      //     setDuration(found.duration);
      //     setIsFavorite(false);
      //   }
      //   setIsLoading(false);
      // }, 500);
    };

    loadVideo();
  }, [videoId]);

  // Gestion du lecteur vidéo
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        videoRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleToggleFavorite = async () => {
    // TODO: Appel API pour ajouter/retirer des favoris
    setIsFavorite(!isFavorite);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: video?.title,
        text: video?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papier");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <Loader2 className="w-10 h-10 text-[#3DA7E3] animate-spin mx-auto mb-4" />
          <p className="text-black/60">Chargement de la vidéo...</p>
        </div>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="text-center py-20">
        <Video className="w-16 h-16 text-black/20 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-black mb-2">
          Vidéo non trouvée
        </h2>
        <p className="text-black/60 mb-6">
          La vidéo que vous recherchez n&apos;existe pas ou a été supprimée.
        </p>
        <Link href="/dashboard/videos">
          <Button
            variant="primary"
            className="bg-[#F49600] hover:bg-[#F49600]/90"
          >
            Retour aux vidéos
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header avec retour */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-black/60" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-black">{video.title}</h1>
            <p className="text-sm text-black/60 mt-1">{video.category.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleFavorite}
            className={`p-2 rounded-lg transition-colors ${
              isFavorite
                ? "bg-[#F49600]/10 text-[#F49600]"
                : "hover:bg-gray-100 text-black/60"
            }`}
          >
            <Heart
              className={`w-5 h-5 ${isFavorite ? "fill-[#F49600]" : ""}`}
            />
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-black/60"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lecteur vidéo */}
        <div className="lg:col-span-2">
          <Card className="border border-gray-200 overflow-hidden p-0">
            <div className="relative bg-black">
              <video
                ref={videoRef}
                src={video.url}
                poster={video.thumbnail_url}
                className="w-full aspect-video"
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
              />

              {/* Contrôles vidéo personnalisés */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center gap-4">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="text-white hover:text-[#3DA7E3] transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>

                  {/* Time */}
                  <span className="text-white text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>

                  {/* Progress bar */}
                  <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#3DA7E3] rounded-full transition-all"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    />
                  </div>

                  {/* Volume */}
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-[#3DA7E3] transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>

                  {/* Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    className="text-white hover:text-[#3DA7E3] transition-colors"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Informations de la vidéo */}
        <div className="space-y-4">
          <Card className="border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-4">
              Informations
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Eye className="w-4 h-4 text-black/40 mt-0.5" />
                <div>
                  <p className="text-sm text-black/60">Vues</p>
                  <p className="font-medium text-black">
                    {video.views_count.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-black/40 mt-0.5" />
                <div>
                  <p className="text-sm text-black/60">Durée</p>
                  <p className="font-medium text-black">
                    {Math.floor(video.duration / 60)}:
                    {(video.duration % 60).toString().padStart(2, "0")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-4 h-4 text-black/40 mt-0.5" />
                <div>
                  <p className="text-sm text-black/60">Publié par</p>
                  <p className="font-medium text-black">{video.uploadedBy}</p>
                </div>
              </div>
              {video.uploadedAt && (
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-black/40 mt-0.5" />
                  <div>
                    <p className="text-sm text-black/60">Date de publication</p>
                    <p className="font-medium text-black">
                      {new Date(video.uploadedAt).toLocaleDateString("fr-FR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>

          <Card className="border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-2">
              Description
            </h3>
            <p className="text-black/70 text-sm leading-relaxed">
              {video.description}
            </p>
          </Card>

          <Card className="border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-3">Actions</h3>
            <div className="space-y-2">
              <Link href="/dashboard/videos">
                <Button variant="outline" className="w-full">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Voir toutes les vidéos
                </Button>
              </Link>
            </div>
          </Card>

          {/* Vidéos recommandées */}
          <Card className="border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-3">
              Vidéos recommandées
            </h3>
            <div className="space-y-3">
              {videos
                .filter(
                  (vid) =>
                    vid.id !== video.id && vid.category === video.category?.id,
                )
                .slice(0, 3)
                .map((relatedVideo) => (
                  <Link
                    key={relatedVideo.id}
                    href={`/dashboard/videos/${relatedVideo.id}`}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-24 h-14 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden relative">
                      <img
                        src={
                          relatedVideo.thumbnail ||
                          "https://via.placeholder.com/96x56?text=Video"
                        }
                        alt={relatedVideo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute bottom-0.5 right-0.5 bg-black/70 text-white text-[10px] px-1 rounded">
                        {Math.floor(relatedVideo.duration / 60)}:
                        {(relatedVideo.duration % 60)
                          .toString()
                          .padStart(2, "0")}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-black group-hover:text-[#3DA7E3] transition-colors line-clamp-2">
                        {relatedVideo.title}
                      </p>
                      <p className="text-xs text-black/40 mt-1">
                        {relatedVideo.views.toLocaleString()} vues
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
