import { useState, useEffect } from "react";
import { BlogArticle } from "@/types/blog";
import { APP_CONSTANTS } from "@/constants/app";
import { Language } from "@/types/language";

interface UseBlogArticlesReturn {
  articles: BlogArticle[];
  loading: boolean;
  error: string | null;
}

export const useBlogArticles = (errorMessage: string, language: Language): UseBlogArticlesReturn => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Check localStorage first (language-specific cache)
        const cacheKey = `${APP_CONSTANTS.STORAGE_KEYS.BLOG_ARTICLES}-${language}`;
        const timestampKey = `${APP_CONSTANTS.STORAGE_KEYS.BLOG_ARTICLES_TIMESTAMP}-${language}`;
        const cachedArticles = localStorage.getItem(cacheKey);
        const cacheTimestamp = localStorage.getItem(timestampKey);
        
        if (cachedArticles && cacheTimestamp) {
          const isExpired = Date.now() - parseInt(cacheTimestamp) > APP_CONSTANTS.CACHE_EXPIRY_MS;
          if (!isExpired) {
            setArticles(JSON.parse(cachedArticles));
            setLoading(false);
            return;
          }
        }
        
        // Fetch from server
        const response = await fetch(APP_CONSTANTS.getArticlesIndexUrl(language));
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: BlogArticle[] = await response.json();
        
        // Cache the data (language-specific)
        localStorage.setItem(cacheKey, JSON.stringify(data));
        localStorage.setItem(timestampKey, Date.now().toString());
        
        setArticles(data || []);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [errorMessage, language]);

  return { articles, loading, error };
};