import { User } from "lucide-react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fallback?: string;
}

export default function Avatar({
  src,
  alt = "Avatar",
  size = "md",
  fallback,
}: Readonly<AvatarProps>) {
  const sizes = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
    xl: "w-16 h-16 text-xl",
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`rounded-full object-cover ${sizes[size]}`}
      />
    );
  }

  if (fallback) {
    return (
      <div
        className={`rounded-full bg-gray-100 flex items-center justify-center ${sizes[size]}`}
      >
        <span className="text-[#F49600] font-medium">
          {getInitials(fallback)}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`rounded-full bg-gray-200 flex items-center justify-center ${sizes[size]}`}
    >
      <User className="w-1/2 h-1/2 text-gray-500" />
    </div>
  );
}
