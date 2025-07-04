export interface BlogArticle {
  title: string;
  description: string;
  date: string;
  url: string;
}

export interface BlogListResponse {
  articles: BlogArticle[];
}