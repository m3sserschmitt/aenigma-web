import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import { BlogArticle } from "@/types/blog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

const Blog = () => {
  const { t } = useLanguage();
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
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

      <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-7xl w-[98vw] h-[90vh] p-0 bg-muted flex flex-col border-0">
          <DialogHeader className="p-4 pb-2 shrink-0">
            <DialogTitle className="text-appOnSurface">
              {selectedArticle?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 p-4 pt-0 min-h-0">
            {selectedArticle && (
              <div className="bg-muted rounded-lg overflow-hidden h-full shadow-2xl relative z-10">
                <iframe
                  src={selectedArticle.url}
                  title={selectedArticle.title}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Blog;