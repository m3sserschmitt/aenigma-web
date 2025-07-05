import { useState, useEffect } from "react";
import { BlogArticle } from "@/types/blog";
import { APP_CONSTANTS } from "@/constants/app";

interface UseBlogArticlesReturn {
  articles: BlogArticle[];
  loading: boolean;
  error: string | null;
}

export const useBlogArticles = (errorMessage: string): UseBlogArticlesReturn => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Check localStorage first
        const cachedArticles = localStorage.getItem(APP_CONSTANTS.STORAGE_KEYS.BLOG_ARTICLES);
        const cacheTimestamp = localStorage.getItem(APP_CONSTANTS.STORAGE_KEYS.BLOG_ARTICLES_TIMESTAMP);
        
        if (cachedArticles && cacheTimestamp) {
          const isExpired = Date.now() - parseInt(cacheTimestamp) > APP_CONSTANTS.CACHE_EXPIRY_MS;
          if (!isExpired) {
            setArticles(JSON.parse(cachedArticles));
            setLoading(false);
            return;
          }
        }
        
        // Fetch from server
        const response = await fetch(APP_CONSTANTS.ARTICLES_API_URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: BlogArticle[] = await response.json();
        
        // Cache the data
        localStorage.setItem(APP_CONSTANTS.STORAGE_KEYS.BLOG_ARTICLES, JSON.stringify(data));
        localStorage.setItem(APP_CONSTANTS.STORAGE_KEYS.BLOG_ARTICLES_TIMESTAMP, Date.now().toString());
        
        setArticles(data || []);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [errorMessage]);

  return { articles, loading, error };
};