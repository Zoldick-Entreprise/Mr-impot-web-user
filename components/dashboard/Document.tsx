import { FileText, ChevronRight, Eye, Download} from "lucide-react";
import Link from "next/link";
import { documents } from "@/data/mockData";
import Badge from "../common/Badge";
import Card from "../common/Card";
import { useEffect, useState } from "react";
import { Document } from "@/types";

export default function GetDocument() {
    const [documents, setDocuments] = useState<Document[]>([

    ]);

    useEffect(() => {
        const fetchDocuments = async () => {
            const res = await fetch("/api/documents?paginate=10&page=1");
            const response = await res.json();
            setTimeout(() => {
                setDocuments(response.data);
            }, 300);
        };

        fetchDocuments();
    }, []);

    return(
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Documents récents
                  </h2>
                  <Link
                    href="/dashboard/documents"
                    className="text-sm text-[#3DA7E3] hover:underline flex items-center gap-1"
                  >
                    Voir tout
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {documents.map((doc) => (
                    <Link
                      key={doc.id}
                      href={`/dashboard/documents/${doc.id}`}
                      className="group"
                    >
                      <Card className="border border-gray-200 hover:border-[#3DA7E3] hover:shadow-md transition-all h-full">
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div
                              className="p-2 rounded-lg"
                              style={{ backgroundColor: "#3DA7E310" }}
                            >
                              <FileText
                                className="w-5 h-5"
                                style={{ color: "#3DA7E3" }}
                              />
                            </div>
                            <Badge variant="default" size="sm">
                              {doc.format}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                            {doc.title}
                          </h3>
                          <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                            {doc.description}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {doc.document_views}
                            </span>
                            <span className="flex items-center gap-1">
                              <Download className="w-3 h-3" />
                              {doc.downloads}
                            </span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
    )
}