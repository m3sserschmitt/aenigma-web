
import { Shield, Lock, Key, FileSignature, QrCode, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-appBackground text-appOnBackground flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-appSurface/80 backdrop-blur-sm border-b border-appSurfaceHighest z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/531ed3bb-9999-4fdf-940c-e6f1ba71c700.png" alt="Aenigma Logo" className="h-10 w-10" />
            <a href="/" className="text-xl font-bold text-appOnPrimary hover:text-appPrimary transition-colors">Aenigma</a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/#features" className="hover:text-appPrimary transition-colors text-appOnSurface">{t('nav.features')}</a>
            <a href="/#security" className="hover:text-appPrimary transition-colors text-appOnSurface">{t('nav.security')}</a>
            <a href="/how-it-works" className="text-appPrimary font-medium">{t('nav.howItWorks')}</a>
            <a href="/#download" className="hover:text-appPrimary transition-colors text-appOnSurface">{t('nav.download')}</a>
          </div>
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <Button 
              variant="outline" 
              className="border-appPrimary text-appPrimary hover:bg-appPrimary hover:text-appOnPrimary"
              onClick={() => window.open('https://github.com/m3sserschmitt/aenigma-android/releases/download/v1.0.1/aenigma-v1.0.1.apk', '_blank')}
            >
              <Download className="h-4 w-4 mr-2" />
              {t('nav.getApp')}
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content Container - Flex */}
      <div className="flex-1 flex flex-col pt-24">
        {/* Hero Section */}
        <section className="flex-shrink-0 pb-12 px-4">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-10 w-10 text-appPrimary mr-3" />
              <h1 className="text-4xl font-bold text-appOnPrimary">
                {t('howItWorks.title')}
              </h1>
            </div>
            <p className="text-lg text-appOnBackground max-w-3xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>
          </div>
        </section>

        {/* Content Sections - Flex Container */}
        <div className="flex-1 flex flex-col gap-12 px-4">
          {/* Hybrid Encryption & Protection */}
          <section className="flex-shrink-0 py-12 bg-appSurface/30">
            <div className="container mx-auto">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-appPrimary mr-3" />
                  <h2 className="text-2xl font-bold text-appOnPrimary">
                    {t('howItWorks.hybrid.title')}
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                <div className="flex-1 min-w-[300px]">
                  <FeatureCard
                    icon={<Shield className="h-8 w-8 text-appPrimary" />}
                    title={t('howItWorks.aes.title')}
                    description={t('howItWorks.aes.description')}
                    delay={0}
                  />
                </div>
                <div className="flex-1 min-w-[300px]">
                  <FeatureCard
                    icon={<Key className="h-8 w-8 text-appPrimary" />}
                    title={t('howItWorks.rsa.title')}
                    description={t('howItWorks.rsa.description')}
                    delay={0.1}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Keys & Signing */}
          <section className="flex-shrink-0 py-12">
            <div className="container mx-auto">
              <div className="flex flex-wrap lg:flex-nowrap gap-8 max-w-6xl mx-auto">
                {/* Keys Section */}
                <div className="flex-1 min-w-[300px]">
                  <h2 className="text-2xl font-bold mb-6 text-appOnPrimary flex items-center justify-center lg:justify-start">
                    <Key className="h-6 w-6 text-appPrimary mr-2" />
                    {t('howItWorks.keys.title')}
                  </h2>
                  
                  <div className="flex flex-col gap-6 mb-6">
                    <FeatureCard
                      icon={<Key className="h-6 w-6 text-appPrimary" />}
                      title={t('howItWorks.publicKey.title')}
                      description={t('howItWorks.publicKey.description')}
                      delay={0}
                    />
                    <FeatureCard
                      icon={<Lock className="h-6 w-6 text-appPrimary" />}
                      title={t('howItWorks.privateKey.title')}
                      description={t('howItWorks.privateKey.description')}
                      delay={0.1}
                    />
                  </div>
                </div>

                {/* Message Signing Section */}
                <div className="flex-1 min-w-[300px]">
                  <h2 className="text-2xl font-bold mb-6 text-appOnPrimary flex items-center justify-center lg:justify-start">
                    <FileSignature className="h-6 w-6 text-appPrimary mr-2" />
                    {t('howItWorks.signing.title')}
                  </h2>
                  
                  <p className="text-appOnBackground mb-6 text-sm text-center lg:text-left">
                    {t('howItWorks.signing.description')}
                  </p>

                  <div className="flex flex-col gap-6">
                    <FeatureCard
                      icon={<Shield className="h-6 w-6 text-appPrimary" />}
                      title="Authenticity"
                      description={t('howItWorks.authenticity')}
                      delay={0}
                    />
                    <FeatureCard
                      icon={<Lock className="h-6 w-6 text-appSecondary" />}
                      title="Integrity"
                      description={t('howItWorks.integrity')}
                      delay={0.1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Sharing */}
          <section className="flex-shrink-0 py-12 bg-appSurface/30">
            <div className="container mx-auto">
              <div className="max-w-6xl mx-auto">
                {/* Key Sharing */}
                <div className="mb-12">
                  <div className="flex items-center justify-center mb-8">
                    <QrCode className="h-8 w-8 text-appPrimary mr-3" />
                    <h2 className="text-2xl font-bold text-appOnPrimary">
                      {t('howItWorks.sharing.title')}
                    </h2>
                  </div>
                  <div className="flex justify-center">
                    <div className="max-w-2xl">
                      <FeatureCard
                        icon={<QrCode className="h-8 w-8 text-appPrimary" />}
                        title={t('howItWorks.sharing.title')}
                        description={t('howItWorks.sharing.description')}
                        delay={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="flex-shrink-0 py-8 px-4 border-t border-appSurfaceHighest">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <img src="/lovable-uploads/531ed3bb-9999-4fdf-940c-e6f1ba71c700.png" alt="Aenigma Logo" className="h-6 w-6" />
              <span className="text-lg font-semibold text-appOnPrimary">Aenigma</span>
            </div>
            <p className="text-appOnBackground mb-3 text-sm">
              {t('footer.tagline')}
            </p>
            <div className="flex justify-center space-x-6 text-sm text-appOnBackground">
              <a href="/#privacy" className="hover:text-appOnPrimary transition-colors">{t('footer.privacyPolicy')}</a>
              <a href="https://github.com/m3sserschmitt/aenigma-android" target="_blank" rel="noopener noreferrer" className="hover:text-appOnPrimary transition-colors">{t('footer.sourceCode')}</a>
            </div>
            <p className="text-appSecondary text-xs mt-3">
              {t('footer.copyright')}
            </p>
            
            <p className="text-appSecondary text-xs mt-2">
              Made with ❤️ in Romania
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HowItWorks;
