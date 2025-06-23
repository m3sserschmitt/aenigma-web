
import { Shield, Lock, Key, FileSignature, QrCode, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-appBackground text-appOnBackground">
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

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
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

      {/* Hybrid Encryption & Protection */}
      <section className="py-12 px-4 bg-appSurface/30">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-appPrimary mr-3" />
              <h2 className="text-2xl font-bold text-appOnPrimary">
                {t('howItWorks.hybrid.title')}
              </h2>
            </div>
            <p className="text-appOnBackground mb-6 max-w-2xl mx-auto">
              {t('howItWorks.protection.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="bg-appSurface/50 border-appSurfaceHighest">
              <CardHeader className="pb-3">
                <CardTitle className="text-appOnPrimary flex items-center text-lg">
                  <Shield className="h-5 w-5 text-appPrimary mr-2" />
                  {t('howItWorks.aes.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-appOnBackground text-sm">
                  {t('howItWorks.aes.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-appSurface/50 border-appSurfaceHighest">
              <CardHeader className="pb-3">
                <CardTitle className="text-appOnPrimary flex items-center text-lg">
                  <Key className="h-5 w-5 text-appPrimary mr-2" />
                  {t('howItWorks.rsa.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-appOnBackground text-sm">
                  {t('howItWorks.rsa.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Keys & Signing */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Keys Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-appOnPrimary flex items-center">
                <Key className="h-6 w-6 text-appPrimary mr-2" />
                {t('howItWorks.keys.title')}
              </h2>
              
              <div className="space-y-4 mb-4">
                <Card className="bg-appSurface/50 border-appSurfaceHighest">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-appOnPrimary text-lg">
                      {t('howItWorks.publicKey.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-appOnBackground text-sm">
                      {t('howItWorks.publicKey.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-appSurface/50 border-appSurfaceHighest">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-appOnPrimary text-lg">
                      {t('howItWorks.privateKey.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-appOnBackground text-sm">
                      {t('howItWorks.privateKey.description')}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-appPrimary/10 p-4 rounded-lg border border-appPrimary/30">
                <p className="text-appOnPrimary text-sm font-medium">
                  {t('howItWorks.keysNote')}
                </p>
              </div>
            </div>

            {/* Message Signing Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-appOnPrimary flex items-center">
                <FileSignature className="h-6 w-6 text-appPrimary mr-2" />
                {t('howItWorks.signing.title')}
              </h2>
              
              <p className="text-appOnBackground mb-6 text-sm">
                {t('howItWorks.signing.description')}
              </p>

              <div className="space-y-4 mb-6">
                <Card className="bg-appSurface/50 border-appSurfaceHighest">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-appOnPrimary flex items-center text-lg">
                      <Shield className="h-5 w-5 text-appPrimary mr-2" />
                      Authenticity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-appOnBackground text-sm">
                      {t('howItWorks.authenticity')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-appSurface/50 border-appSurfaceHighest">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-appOnPrimary flex items-center text-lg">
                      <Lock className="h-5 w-5 text-appSecondary mr-2" />
                      Integrity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-appOnBackground text-sm">
                      {t('howItWorks.integrity')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Sharing & Privacy */}
      <section className="py-12 px-4 bg-appSurface/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Key Sharing */}
            <div>
              <div className="flex items-center mb-6">
                <QrCode className="h-8 w-8 text-appPrimary mr-3" />
                <h2 className="text-2xl font-bold text-appOnPrimary">
                  {t('howItWorks.sharing.title')}
                </h2>
              </div>
              <Card className="bg-appSurface/50 border-appSurfaceHighest">
                <CardContent className="p-6">
                  <p className="text-appOnBackground text-sm">
                    {t('howItWorks.sharing.description')}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Privacy Control */}
            <div>
              <div className="flex items-center mb-6">
                <Smartphone className="h-8 w-8 text-appPrimary mr-3" />
                <h2 className="text-2xl font-bold text-appOnPrimary">
                  {t('howItWorks.privacy.title')}
                </h2>
              </div>

              <div className="space-y-4">
                <Card className="bg-appSurface/50 border-appSurfaceHighest">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-appOnPrimary flex items-center text-lg">
                      <Shield className="h-5 w-5 text-appPrimary mr-2" />
                      Device Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-appOnBackground text-sm">
                      {t('howItWorks.privacy.point1')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-appSurface/50 border-appSurfaceHighest">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-appOnPrimary flex items-center text-lg">
                      <Lock className="h-5 w-5 text-appSecondary mr-2" />
                      Zero Access
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-appOnBackground text-sm">
                      {t('howItWorks.privacy.point2')}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-appSurface/50 border-appSurfaceHighest">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-appOnPrimary flex items-center text-lg">
                      <FileSignature className="h-5 w-5 text-appPrimary mr-2" />
                      End-to-End Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-appOnBackground text-sm">
                      {t('howItWorks.privacy.point3')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-appSurfaceHighest">
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
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;
