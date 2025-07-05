
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "@/components/Logo";
import { APP_CONSTANTS } from "@/constants/app";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 border-t border-appSurfaceHighest">
      <div className="container mx-auto text-center">
        <div className="mb-4 flex justify-center">
          <Logo size="md" />
        </div>
        <p className="text-appOnBackground mb-4">
          {t('footer.tagline')}
        </p>
        <div className="flex justify-center space-x-6 text-sm text-appOnBackground mb-6">
          <a href="/#privacy" className="hover:text-appOnPrimary transition-colors">{t('footer.privacyPolicy')}</a>
          <a href={APP_CONSTANTS.GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-appOnPrimary transition-colors">{t('footer.sourceCode')}</a>
        </div>
        
        {/* Privacy Policy Section */}
        <div id="privacy" className="max-w-2xl mx-auto mb-6 p-6 bg-appSurface/30 rounded-lg border border-appSurfaceHighest">
          <h3 className="text-lg font-semibold text-appOnPrimary mb-3">{t('footer.privacyTitle')}</h3>
          <p className="text-appOnBackground text-sm leading-relaxed">
            {t('footer.privacyText')}
          </p>
        </div>
        
        <p className="text-appSecondary text-sm mt-4">
          {t('footer.copyright')}
        </p>
        
        <p className="text-appSecondary text-sm mt-2 flex items-center justify-center">
          {t('footer.madeWithLove')}
          <img src="/flags/romania.png" alt="Romania" className="h-4 w-6 ml-2 object-cover" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
