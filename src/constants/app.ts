// App-wide constants
export const APP_CONSTANTS = {
  // URLs
  APK_DOWNLOAD_URL: 'https://github.com/m3sserschmitt/aenigma-android/releases/download/v1.1.1/aenigma-v1.1.1.apk',
  GITHUB_REPO_URL: 'https://github.com/m3sserschmitt/aenigma-android',
  
  // Articles Index URLs
  getArticlesIndexUrl: (language: 'en' | 'ro') => 
    `https://articles.aenigma.ro/index-${language}.json`,
  
  // Cache settings
  CACHE_EXPIRY_MS: 10 * 60 * 1000, // 10 minutes
  
  // Blog pagination
  ARTICLES_PER_PAGE: 6,
  INITIAL_ARTICLES_COUNT: 9,
  
  // LocalStorage keys
  STORAGE_KEYS: {
    BLOG_ARTICLES: 'blog-articles',
    BLOG_ARTICLES_TIMESTAMP: 'blog-articles-timestamp',
    LANGUAGE: 'aenigma-language',
  }
} as const;