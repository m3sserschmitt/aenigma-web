import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";

const ArticlePage = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const title = searchParams.get("title") || "Article";
  const url = searchParams.get("url");
  const date = searchParams.get("date");

  useEffect(() => {
    const fetchMarkdown = async () => {
      if (!url) {
        setError("No article URL provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const markdownContent = await response.text();
        setContent(markdownContent);
      } catch (err) {
        console.error('Error fetching markdown:', err);
        setError('Failed to load article content');
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [url]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <PageLayout currentPage="blog">
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              asChild
              className="mb-6 text-appOnSurface hover:text-appPrimary"
            >
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('blog.backToList')}
              </Link>
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold text-appOnSurface mb-4">
              {title}
            </h1>
            
            {date && (
              <p className="text-appOnSurface/70 mb-8">
                {formatDate(date)}
              </p>
            )}
          </div>

          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 text-appPrimary animate-spin" />
              <span className="ml-2 text-appOnSurface">Loading article...</span>
            </div>
          )}

          {error && (
            <Alert className="mb-8 border-red-500/50 bg-red-500/10">
              <AlertDescription className="text-red-400">
                {error}
              </AlertDescription>
            </Alert>
          )}

          {!loading && !error && content && (
            <div className="prose prose-lg max-w-none prose-headings:text-appOnSurface prose-p:text-appOnSurface prose-strong:text-appOnSurface prose-code:text-appPrimary prose-pre:bg-appSurface prose-pre:border prose-pre:border-appSurfaceHighest prose-blockquote:border-l-appPrimary prose-blockquote:text-appOnSurface/80">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default ArticlePage;