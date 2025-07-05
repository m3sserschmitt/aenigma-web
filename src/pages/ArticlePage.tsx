import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { BlogArticle } from "@/types/blog";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ErrorAlert } from "@/components/ui/error-alert";
import { formatDate } from "@/utils/date";
import { APP_CONSTANTS } from "@/constants/app";

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
        
        // Try to get article metadata from localStorage first
        const cachedArticles = localStorage.getItem(APP_CONSTANTS.STORAGE_KEYS.BLOG_ARTICLES);
        let articles: BlogArticle[] = [];
        
        if (cachedArticles) {
          articles = JSON.parse(cachedArticles);
        } else {
          // Fallback: fetch from server if not in cache
          const indexResponse = await fetch(APP_CONSTANTS.ARTICLES_API_URL);
          if (!indexResponse.ok) {
            throw new Error(`Failed to fetch article index: ${indexResponse.status}`);
          }
          articles = await indexResponse.json();
        }
        
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

          {loading && <LoadingSpinner message="Loading article..." />}

          {error && <ErrorAlert message={error} />}

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