
import { Shield, MessageSquare, Users, Lock, Download, Github, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import CallToAction from "@/components/CallToAction";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";

const Index = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-appPrimary" />,
      title: t('features.e2e.title'),
      description: t('features.e2e.description')
    },
    {
      icon: <Lock className="h-8 w-8 text-appPrimary" />,
      title: t('features.tor.title'),
      description: t('features.tor.description')
    },
    {
      icon: <Users className="h-8 w-8 text-appSecondary" />,
      title: t('features.groups.title'),
      description: t('features.groups.description')
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-appSecondary" />,
      title: t('features.zeroKnowledge.title'),
      description: t('features.zeroKnowledge.description')
    },
    {
      icon: <Smartphone className="h-8 w-8 text-appPrimary" />,
      title: t('features.android.title'),
      description: t('features.android.description')
    },
    {
      icon: <Github className="h-8 w-8 text-appOnBackground" />,
      title: t('features.openSource.title'),
      description: t('features.openSource.description')
    }
  ];

  return (
    <div className="min-h-screen bg-appBackground text-appOnBackground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-appSurface/80 backdrop-blur-sm border-b border-appSurfaceHighest z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/531ed3bb-9999-4fdf-940c-e6f1ba71c700.png" alt="Aenigma Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-appOnPrimary">Aenigma</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-appPrimary transition-colors text-appOnSurface">{t('nav.features')}</a>
            <a href="#security" className="hover:text-appPrimary transition-colors text-appOnSurface">{t('nav.security')}</a>
            <a href="/how-it-works" className="hover:text-appPrimary transition-colors text-appOnSurface">{t('nav.howItWorks')}</a>
            <a href="#download" className="hover:text-appPrimary transition-colors text-appOnSurface">{t('nav.download')}</a>
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
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-appOnPrimary">
              {t('features.title')}
            </h2>
            <p className="text-xl text-appOnBackground max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Security Deep Dive */}
      <section id="security" className="py-20 px-4 bg-appSurface/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-appOnPrimary">
                {t('security.title')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-appPrimary/20 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-appPrimary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-appOnPrimary">{t('security.openssl.title')}</h3>
                    <p className="text-appOnBackground">
                      {t('security.openssl.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-appPrimary/20 p-2 rounded-lg">
                    <Lock className="h-6 w-6 text-appPrimary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-appOnPrimary">{t('security.publicKey.title')}</h3>
                    <p className="text-appOnBackground">
                      {t('security.publicKey.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-appPrimary/20 p-2 rounded-lg">
                    <Lock className="h-6 w-6 text-appPrimary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-appOnPrimary">{t('security.torNetwork.title')}</h3>
                    <p className="text-appOnBackground">
                      {t('security.torNetwork.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
