import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const BlogArticle = () => {
  const { articleUrl } = useParams<{ articleUrl: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const decodedUrl = articleUrl ? decodeURIComponent(articleUrl) : '';

  const handleBack = () => {
    navigate('/blog');
  };

  const handleOpenExternal = () => {
    if (decodedUrl) {
      window.open(decodedUrl, '_blank');
    }
  };

  return (
    <PageLayout currentPage="index">
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-appSurface border border-appSurfaceHighest rounded-lg overflow-hidden h-[calc(100vh-6rem)]">
            {decodedUrl && (
              <iframe
                src={decodedUrl}
                title="Blog Article"
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogArticle;