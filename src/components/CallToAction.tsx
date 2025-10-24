
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { APP_CONSTANTS } from "@/constants/app";
import googlePlayBadge from "@/assets/google-play-badge.png";

const CallToAction = () => {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-20 px-4 bg-gradient-to-r from-appPrimary/10 to-appSecondary/10">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-appOnPrimary">
            {t('cta.title')}
          </h2>
          
          <p className="text-xl text-appOnBackground mb-12 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              className="h-16 flex items-center"
              onClick={() => window.open(APP_CONSTANTS.PLAY_STORE_URL, '_blank')}
            >
              <img src={googlePlayBadge} alt={t('cta.playStoreButton')} className="h-16" />
            </button>
            
            <Button 
              size="lg" 
              className="bg-appPrimary hover:bg-appPrimary/80 text-appOnPrimary text-lg px-10 h-16 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open(APP_CONSTANTS.APK_DOWNLOAD_URL, '_blank')}
            >
              <Download className="h-6 w-6 mr-3" />
              {t('cta.downloadButton')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-appSurfaceHighest text-appOnSurface hover:bg-appSurface hover:border-appPrimary text-lg px-10 h-16 transition-all duration-300"
              onClick={() => window.open(APP_CONSTANTS.GITHUB_REPO_URL, '_blank')}
            >
              <Github className="h-6 w-6 mr-3" />
              {t('cta.githubButton')}
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-appSurface/30 rounded-lg border border-appSurfaceHighest">
              <div className="text-3xl font-bold text-appPrimary mb-2">OpenSSL</div>
              <div className="text-appOnSurface">{t('cta.openssl')}</div>
            </div>
            
            <div className="p-6 bg-appSurface/30 rounded-lg border border-appSurfaceHighest">
              <div className="text-3xl font-bold text-appPrimary mb-2">100%</div>
              <div className="text-appOnSurface">{t('cta.openSource')}</div>
            </div>
            
            <div className="p-6 bg-appSurface/30 rounded-lg border border-appSurfaceHighest">
              <div className="text-3xl font-bold text-appSecondary mb-2">0</div>
              <div className="text-appOnSurface">{t('cta.dataCollection')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
