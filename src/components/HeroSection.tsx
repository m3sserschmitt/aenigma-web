
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";
import Logo from "@/components/Logo";
import SectionTitle from "@/components/SectionTitle";
import { APP_CONSTANTS } from "@/constants/app";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "@tsparticles/slim";
import googlePlayBadge from "@/assets/google-play-badge.png";
import AppIcon from "@/components/AppIcon";

const HeroSection = () => {
  const { t } = useLanguage();

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // Particles loaded callback
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-appPrimary/10 via-appSecondary/5 to-transparent"></div>
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-appPrimary/10 rounded-full blur-3xl animate-lightning-flash"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-appSecondary/10 rounded-full blur-3xl animate-lightning-flash" style={{ animationDelay: '2s' }}></div>
      
      {/* React Particles - Mist Effects */}
      <Particles
        id="mistParticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 pointer-events-none"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: ["#757575", "#616161", "#BDBDBD"],
            },
            links: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 300,
              },
              value: 100,
            },
            opacity: {
              value: { min: 0.2, max: 0.6 },
              animation: {
                enable: true,
                speed: 1.5,
                sync: false,
                startValue: "min",
                destroy: "none",
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 60, max: 150 },
              animation: {
                enable: true,
                speed: 0.8,
                sync: false,
                startValue: "min",
                destroy: "none",
              },
            },
            life: {
              duration: {
                sync: false,
                value: 0
              },
              count: 0
            }
          },
          detectRetina: true,
        }}
      />
      
      {/* Lightning Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-0.5 h-32 bg-gradient-to-b from-transparent via-appPrimary/20 to-transparent animate-lightning-bolt"></div>
        <div className="absolute top-1/2 right-1/4 w-0.5 h-24 bg-gradient-to-b from-transparent via-appSecondary/15 to-transparent animate-lightning-bolt" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-0.5 h-28 bg-gradient-to-b from-transparent via-appPrimary/10 to-transparent animate-lightning-bolt" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Diagonal lightning streaks */}
        <div className="absolute top-1/3 right-1/3 w-16 h-0.5 bg-gradient-to-r from-transparent via-appPrimary/15 to-transparent animate-lightning-bolt transform rotate-45" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-0.5 bg-gradient-to-r from-transparent via-appSecondary/10 to-transparent animate-lightning-bolt transform -rotate-45" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="flex justify-center mb-8 animate-fade-in">
          <AppIcon size="xl" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          <span className="text-appOnPrimary">
            {t('hero.title1')}
          </span>
          <br />
          <span className="text-appPrimary">
            {t('hero.title2')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-appOnBackground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <button 
            className="h-14 flex items-center"
            onClick={() => window.open(APP_CONSTANTS.PLAY_STORE_URL, '_blank')}
          >
            <img src={googlePlayBadge} alt={t('hero.playStoreButton')} className="h-14" />
          </button>
          
          <Button 
            size="lg" 
            className="bg-appPrimary hover:bg-appPrimary/80 text-appOnPrimary text-lg px-8 h-14"
            onClick={() => window.open(APP_CONSTANTS.APK_DOWNLOAD_URL, '_blank')}
          >
            <Download className="h-5 w-5 mr-2" />
            {t('hero.downloadButton')}
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-appSurfaceHighest text-appOnSurface hover:bg-appSurface text-lg px-8 h-14"
            onClick={() => window.open(APP_CONSTANTS.GITHUB_REPO_URL, '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            {t('hero.githubButton')}
          </Button>
        </div>
        
        {/* App Preview Mockup */}
        <div className="relative mx-auto max-w-md animate-fade-in">
          <div className="bg-gradient-to-b from-appSurface to-appPrimaryContainer rounded-3xl p-6 border border-appSurfaceHighest shadow-2xl">
            <div className="bg-appBackground rounded-2xl p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-gradient-to-r from-appPrimary to-appSecondary rounded-full flex items-center justify-center">
                  <AppIcon size="md" />
                </div>
                <div>
                  <div className="text-sm font-medium text-appOnPrimary">Aenigma</div>
                  <div className="text-xs text-appPrimary flex items-center">
                    <div className="w-2 h-2 bg-appPrimary rounded-full mr-1"></div>
                    {t('hero.mockup.torConnected')}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-appPrimary/20 border border-appPrimary/30 rounded-lg p-3 ml-8">
                  <div className="text-sm text-appOnPrimary">{t('hero.mockup.messageEncrypted')}</div>
                  <div className="text-xs text-appPrimary mt-1 flex items-center">
                    <div className="w-3 h-3 bg-appPrimary rounded mr-1"></div>
                    {t('hero.mockup.endToEndEncrypted')}
                  </div>
                </div>
                
                <div className="bg-appSurfaceHighest/50 border border-appSurfaceHighest rounded-lg p-3 mr-8">
                  <div className="text-sm text-appOnSurface">{t('hero.mockup.messagesPrivate')}</div>
                  <div className="text-xs text-appOnSurface mt-1">{t('hero.mockup.deliveredSecurely')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
