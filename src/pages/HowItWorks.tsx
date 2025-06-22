
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
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-appPrimary mr-4" />
            <h1 className="text-5xl font-bold text-appOnPrimary">
              {t('howItWorks.title')}
            </h1>
          </div>
          <p className="text-xl text-appOnBackground max-w-4xl mx-auto leading-relaxed">
            {t('howItWorks.subtitle')}
          </p>
        </div>
      </section>

      {/* How We Protect Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-appOnPrimary">
              {t('howItWorks.protection.title')}
            </h2>
            <p className="text-lg text-appOnBackground max-w-3xl mx-auto">
              {t('howItWorks.protection.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Hybrid Encryption Section */}
      <section className="py-16 px-4 bg-appSurface/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Lock className="h-10 w-10 text-appPrimary mr-3" />
              <h2 className="text-3xl font-bold text-appOnPrimary">
                {t('howItWorks.hybrid.title')}
              </h2>
            </div>
            <p className="text-lg text-appOnBackground mb-8">
              {t('howItWorks.hybrid.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-appSurface/50 border-appSurfaceHighest">
              <CardHeader>
                <CardTitle className="text-appOnPrimary flex items-center">
                  <Shield className="h-6 w-6 text-appPrimary mr-2" />
                  {t('howItWorks.aes.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-appOnBackground">
                  {t('howItWorks.aes.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-appSurface/50 border-appSurfaceHighest">
              <CardHeader>
                <CardTitle className="text-appOnPrimary flex items-center">
                  <Key className="h-6 w-6 text-appPrimary mr-2" />
                  {t('howItWorks.rsa.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-appOnBackground">
                  {t('howItWorks.rsa.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Keys Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-appOnPrimary">
              {t('howItWorks.keys.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <Card className="bg-gradient-to-br from-appPrimary/20 to-appSecondary/20 border-appPrimary/30">
              <CardHeader>
                <CardTitle className="text-appOnPrimary flex items-center">
                  <Key className="h-6 w-6 text-appPrimary mr-2" />
                  {t('howItWorks.publicKey.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-appOnBackground">
                  {t('howItWorks.publicKey.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-appSecondary/20 to-appPrimary/20 border-appSecondary/30">
              <CardHeader>
                <CardTitle className="text-appOnPrimary flex items-center">
                  <Lock className="h-6 w-6 text-appSecondary mr-2" />
                  {t('howItWorks.privateKey.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-appOnBackground">
                  {t('howItWorks.privateKey.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-appPrimary/10 p-6 rounded-lg border border-appPrimary/30 max-w-2xl mx-auto">
              <p className="text-appOnPrimary font-medium">
                {t('howItWorks.keysNote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message Signing Section */}
      <section className="py-16 px-4 bg-appSurface/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <FileSignature className="h-10 w-10 text-appPrimary mr-3" />
              <h2 className="text-3xl font-bold text-appOnPrimary">
                {t('howItWorks.signing.title')}
              </h2>
            </div>
            <p className="text-lg text-appOnBackground mb-8 max-w-3xl mx-auto">
              {t('howItWorks.signing.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-appSurface/50 p-6 rounded-lg border border-appSurfaceHighest">
              <div className="flex items-center mb-3">
                <div className="bg-appPrimary/20 p-2 rounded-lg mr-3">
                  <Shield className="h-5 w-5 text-appPrimary" />
                </div>
                <h3 className="font-semibold text-appOnPrimary">Authenticity</h3>
              </div>
              <p className="text-appOnBackground text-sm">
                {t('howItWorks.authenticity')}
              </p>
            </div>

            <div className="bg-appSurface/50 p-6 rounded-lg border border-appSurfaceHighest">
              <div className="flex items-center mb-3">
                <div className="bg-appSecondary/20 p-2 rounded-lg mr-3">
                  <Lock className="h-5 w-5 text-appSecondary" />
                </div>
                <h3 className="font-semibold text-appOnPrimary">Integrity</h3>
              </div>
              <p className="text-appOnBackground text-sm">
                {t('howItWorks.integrity')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Sharing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <QrCode className="h-10 w-10 text-appPrimary mr-3" />
              <h2 className="text-3xl font-bold text-appOnPrimary">
                {t('howItWorks.sharing.title')}
              </h2>
            </div>
            <p className="text-lg text-appOnBackground max-w-3xl mx-auto">
              {t('howItWorks.sharing.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Control Section */}
      <section className="py-16 px-4 bg-appSurface/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Smartphone className="h-10 w-10 text-appPrimary mr-3" />
              <h2 className="text-3xl font-bold text-appOnPrimary">
                {t('howItWorks.privacy.title')}
              </h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-appSurface/50 p-6 rounded-lg border border-appSurfaceHighest">
              <div className="flex items-start">
                <div className="bg-appPrimary/20 p-2 rounded-lg mr-4 mt-1">
                  <Shield className="h-5 w-5 text-appPrimary" />
                </div>
                <p className="text-appOnBackground">
                  {t('howItWorks.privacy.point1')}
                </p>
              </div>
            </div>

            <div className="bg-appSurface/50 p-6 rounded-lg border border-appSurfaceHighest">
              <div className="flex items-start">
                <div className="bg-appSecondary/20 p-2 rounded-lg mr-4 mt-1">
                  <Lock className="h-5 w-5 text-appSecondary" />
                </div>
                <p className="text-appOnBackground">
                  {t('howItWorks.privacy.point2')}
                </p>
              </div>
            </div>

            <div className="bg-appSurface/50 p-6 rounded-lg border border-appSurfaceHighest">
              <div className="flex items-start">
                <div className="bg-appPrimary/20 p-2 rounded-lg mr-4 mt-1">
                  <FileSignature className="h-5 w-5 text-appPrimary" />
                </div>
                <p className="text-appOnBackground">
                  {t('howItWorks.privacy.point3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-appSurfaceHighest">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/lovable-uploads/531ed3bb-9999-4fdf-940c-e6f1ba71c700.png" alt="Aenigma Logo" className="h-8 w-8" />
            <span className="text-lg font-semibold text-appOnPrimary">Aenigma</span>
          </div>
          <p className="text-appOnBackground mb-4">
            {t('footer.tagline')}
          </p>
          <div className="flex justify-center space-x-6 text-sm text-appOnBackground mb-6">
            <a href="/#privacy" className="hover:text-appOnPrimary transition-colors">{t('footer.privacyPolicy')}</a>
            <a href="https://github.com/m3sserschmitt/aenigma-android" target="_blank" rel="noopener noreferrer" className="hover:text-appOnPrimary transition-colors">{t('footer.sourceCode')}</a>
          </div>
          <p className="text-appSecondary text-sm mt-4">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;
