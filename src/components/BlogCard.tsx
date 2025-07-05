import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { BlogArticle } from "@/types/blog";
import { Calendar, ArrowRight } from "lucide-react";
import { formatDate } from "@/utils/date";

interface BlogCardProps {
  article: BlogArticle;
  onRead: (article: BlogArticle) => void;
}

const BlogCard = ({ article, onRead }: BlogCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="bg-appSurface border-appSurfaceHighest hover:border-appPrimary/30 transition-all duration-200 group">
      <CardHeader>
        <CardTitle className="text-appOnSurface group-hover:text-appPrimary transition-colors">
          {article.title}
        </CardTitle>
        <div className="flex items-center space-x-2 text-sm text-appOnSurface/70">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(article.date)}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-appOnSurface/80">
          {article.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="border-appPrimary text-appPrimary hover:bg-appPrimary hover:text-appOnPrimary group/btn"
          onClick={() => onRead(article)}
        >
          {t('blog.readMore')}
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;