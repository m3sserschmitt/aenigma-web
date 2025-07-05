import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import { BlogArticle } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ErrorAlert } from "@/components/ui/error-alert";
import { useBlogArticles } from "@/hooks/useBlogArticles";
import { APP_CONSTANTS } from "@/constants/app";

const Blog = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const { articles, loading, error } = useBlogArticles(t('blog.error'), language);
  const [displayedCount, setDisplayedCount] = useState<number>(APP_CONSTANTS.INITIAL_ARTICLES_COUNT);

  const handleReadArticle = (article: BlogArticle) => {
    const params = new URLSearchParams({
      url: article.url
    });
    navigate(`/blog/article?${params.toString()}`);
  };

  const handleShowMore = () => {
    setDisplayedCount(prev => prev + APP_CONSTANTS.ARTICLES_PER_PAGE);
  };

  const displayedArticles = articles.slice(0, displayedCount);
  const hasMoreArticles = displayedCount < articles.length;

  return (
    <PageLayout currentPage="index">
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t('blog.title')}
            subtitle={t('blog.subtitle')}
            className="mb-16"
          />

          {loading && <LoadingSpinner message={t('blog.loading')} />}

          {error && <ErrorAlert message={error} />}

          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-appOnSurface/70">{t('blog.noArticles')}</p>
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedArticles.map((article, index) => (
                  <BlogCard
                    key={`${article.title}-${article.date}-${index}`}
                    article={article}
                    onRead={handleReadArticle}
                  />
                ))}
              </div>
              
              {hasMoreArticles && (
                <div className="flex justify-center mt-12">
                  <Button 
                    onClick={handleShowMore}
                    variant="outline"
                    className="border-appPrimary text-appPrimary hover:bg-appPrimary hover:text-appOnPrimary"
                  >
                    Show More Articles
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;