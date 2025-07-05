
import { Shield, Lock, Key, FileSignature, QrCode } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import FeatureCard from "@/components/FeatureCard";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/SectionTitle";

const HowItWorks = () => {
  const { t } = useLanguage();

  const hybridEncryptionFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-appPrimary" />,
      title: t('howItWorks.aes.title'),
      description: t('howItWorks.aes.description')
    },
    {
      icon: <Key className="h-8 w-8 text-appPrimary" />,
      title: t('howItWorks.rsa.title'),
      description: t('howItWorks.rsa.description')
    }
  ];

  const keyFeatures = [
    {
      icon: <Key className="h-6 w-6 text-appPrimary" />,
      title: t('howItWorks.publicKey.title'),
      description: t('howItWorks.publicKey.description')
    },
    {
      icon: <Lock className="h-6 w-6 text-appPrimary" />,
      title: t('howItWorks.privateKey.title'),
      description: t('howItWorks.privateKey.description')
    }
  ];

  const signingFeatures = [
    {
      icon: <Shield className="h-6 w-6 text-appPrimary" />,
      title: "Authenticity",
      description: t('howItWorks.authenticity')
    },
    {
      icon: <Lock className="h-6 w-6 text-appSecondary" />,
      title: "Integrity",
      description: t('howItWorks.integrity')
    }
  ];

  return (
    <PageLayout currentPage="how-it-works" className="flex flex-col">
      {/* Main Content Container - Flex */}
      <div className="flex-1 flex flex-col pt-24">
        {/* Hero Section */}
        <section className="flex-shrink-0 pb-12 px-4">
          <div className="container mx-auto">
            <SectionTitle
              title={t('howItWorks.title')}
              subtitle={t('howItWorks.subtitle')}
            />
          </div>
        </section>

        {/* Content Sections - Flex Container */}
        <div className="flex-1 flex flex-col gap-12 px-4">
          {/* Hybrid Encryption & Protection */}
          <section className="flex-shrink-0 py-12 bg-appSurface/30">
            <div className="container mx-auto">
              <SectionTitle
                title={t('howItWorks.hybrid.title')}
                className="mb-8"
              />

              <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                {hybridEncryptionFeatures.map((feature, index) => (
                  <div key={index} className="flex-1 min-w-[300px]">
                    <FeatureCard
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      delay={index * 0.1}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Keys & Signing */}
          <section className="flex-shrink-0 py-12">
            <div className="container mx-auto">
              <div className="flex flex-wrap lg:flex-nowrap gap-8 max-w-6xl mx-auto">
                {/* Keys Section */}
                <div className="flex-1 min-w-[300px]">
                  <h2 className="text-2xl font-bold mb-6 text-appOnPrimary text-center lg:text-left">
                    {t('howItWorks.keys.title')}
                  </h2>
                  
                  <div className="flex flex-col gap-6 mb-6">
                    {keyFeatures.map((feature, index) => (
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

                {/* Message Signing Section */}
                <div className="flex-1 min-w-[300px]">
                  <h2 className="text-2xl font-bold mb-6 text-appOnPrimary text-center lg:text-left">
                    {t('howItWorks.signing.title')}
                  </h2>
                  
                  <p className="text-appOnBackground mb-6 text-sm text-center lg:text-left">
                    {t('howItWorks.signing.description')}
                  </p>

                  <div className="flex flex-col gap-6">
                    {signingFeatures.map((feature, index) => (
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
              </div>
            </div>
          </section>

          {/* Key Sharing */}
          <section className="flex-shrink-0 py-12 bg-appSurface/30">
            <div className="container mx-auto">
              <div className="max-w-6xl mx-auto">
                <SectionTitle
                  title={t('howItWorks.sharing.title')}
                  className="mb-8"
                />
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
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default HowItWorks;
