import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import { BlogArticle } from "@/types/blog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

const Blog = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Replace with your actual JSON URL
        const response = await fetch('https://articles.aenigma.ro/index.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: BlogArticle[] = await response.json();
        setArticles(data || []);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError(t('blog.error'));
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [t]);

  const handleReadArticle = (article: BlogArticle) => {
    navigate(`/blog/${encodeURIComponent(article.url)}`);
  };

  return (
    <PageLayout currentPage="index">
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t('blog.title')}
            subtitle={t('blog.subtitle')}
            className="mb-16"
          />

          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 text-appPrimary animate-spin" />
              <span className="ml-2 text-appOnSurface">{t('blog.loading')}</span>
            </div>
          )}

          {error && (
            <Alert className="mb-8 border-red-500/50 bg-red-500/10">
              <AlertDescription className="text-red-400">
                {error}
              </AlertDescription>
            </Alert>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-appOnSurface/70">{t('blog.noArticles')}</p>
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <BlogCard
                  key={`${article.url}-${index}`}
                  article={article}
                  onRead={handleReadArticle}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;