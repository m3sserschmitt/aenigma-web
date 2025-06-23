
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";

interface NavigationProps {
  currentPage?: 'index' | 'how-it-works';
}

const Navigation = ({ currentPage = 'index' }: NavigationProps) => {
  const { t } = useLanguage();

  const handleDownload = () => {
    window.open('https://github.com/m3sserschmitt/aenigma-android/releases/download/v1.0.1/aenigma-v1.0.1.apk', '_blank');
  };

  return (
    <nav className="fixed top-0 w-full bg-appSurface/80 backdrop-blur-sm border-b border-appSurfaceHighest z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Logo size="lg" />
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a 
            href="/#features" 
            className={`hover:text-appPrimary transition-colors ${
              currentPage === 'index' ? 'text-appOnSurface' : 'text-appOnSurface'
            }`}
          >
            {t('nav.features')}
          </a>
          <a 
            href="/#security" 
            className={`hover:text-appPrimary transition-colors ${
              currentPage === 'index' ? 'text-appOnSurface' : 'text-appOnSurface'
            }`}
          >
            {t('nav.security')}
          </a>
          <a 
            href="/how-it-works" 
            className={`hover:text-appPrimary transition-colors ${
              currentPage === 'how-it-works' ? 'text-appPrimary font-medium' : 'text-appOnSurface'
            }`}
          >
            {t('nav.howItWorks')}
          </a>
          <a 
            href="/#download" 
            className={`hover:text-appPrimary transition-colors ${
              currentPage === 'index' ? 'text-appOnSurface' : 'text-appOnSurface'
            }`}
          >
            {t('nav.download')}
          </a>
        </div>
        
        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          <Button 
            variant="outline" 
            className="border-appPrimary text-appPrimary hover:bg-appPrimary hover:text-appOnPrimary"
            onClick={handleDownload}
          >
            <Download className="h-4 w-4 mr-2" />
            {t('nav.getApp')}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
