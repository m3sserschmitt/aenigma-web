import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { BlogArticle } from "@/types/blog";

const ArticlePage = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [content, setContent] = useState<string>("");
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const url = searchParams.get("url");

  useEffect(() => {
    const fetchArticleData = async () => {
      if (!url) {
        setError("No article URL provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        // Fetch article details from index.json
        const indexResponse = await fetch('https://articles.aenigma.ro/index.json');
        if (!indexResponse.ok) {
          throw new Error(`Failed to fetch article index: ${indexResponse.status}`);
        }
        
        const articles: BlogArticle[] = await indexResponse.json();
        const foundArticle = articles.find(article => article.url === url);
        
        if (!foundArticle) {
          throw new Error('Article not found');
        }
        
        setArticle(foundArticle);
        
        // Fetch markdown content
        const contentResponse = await fetch(url);
        if (!contentResponse.ok) {
          throw new Error(`Failed to fetch article content: ${contentResponse.status}`);
        }
        
        const markdownContent = await contentResponse.text();
        setContent(markdownContent);
      } catch (err) {
        console.error('Error fetching article:', err);
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticleData();
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
              {article?.title || "Article"}
            </h1>
            
            {article?.date && (
              <p className="text-appOnSurface/70 mb-8">
                {formatDate(article.date)}
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