import { Shield, MessageSquare, Users, Lock, Smartphone, Github } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import CallToAction from "@/components/CallToAction";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";
import SecurityFeature from "@/components/SecurityFeature";

const Index = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

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

  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6 text-appPrimary" />,
      title: t('security.openssl.title'),
      description: t('security.openssl.description')
    },
    {
      icon: <Lock className="h-6 w-6 text-appPrimary" />,
      title: t('security.publicKey.title'),
      description: t('security.publicKey.description')
    },
    {
      icon: <Lock className="h-6 w-6 text-appPrimary" />,
      title: t('security.torNetwork.title'),
      description: t('security.torNetwork.description')
    }
  ];

  return (
    <PageLayout currentPage="index">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title={t('features.title')}
            subtitle={t('features.subtitle')}
            className="mb-16"
          />
          
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
              <SectionTitle
                title={t('security.title')}
                centered={false}
                className="mb-6"
              />
              <div className="space-y-6">
                {securityFeatures.map((feature, index) => (
                  <SecurityFeature
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4">
        <CallToAction />
      </section>
    </PageLayout>
  );
};

export default Index;
