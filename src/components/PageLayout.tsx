
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  currentPage?: 'index' | 'how-it-works' | 'blog';
  className?: string;
}

const PageLayout = ({ children, currentPage = 'index', className = '' }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen bg-appBackground text-appOnBackground ${className}`}>
      <Navigation currentPage={currentPage} />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
