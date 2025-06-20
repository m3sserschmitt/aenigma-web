import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-appPrimary/10 via-appSecondary/5 to-transparent"></div>
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-appPrimary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-appSecondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="flex justify-center mb-8 animate-fade-in">
          <img src="/lovable-uploads/531ed3bb-9999-4fdf-940c-e6f1ba71c700.png" alt="Aenigma Logo" className="h-32 w-32" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          <span className="text-appOnPrimary">
            Take a Stand Against
          </span>
          <br />
          <span className="text-appPrimary">
            Big Tech Surveillance
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-appOnBackground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          Democracy is also built by the means of information technology - from letters and newspapers to modern telecommunications. Liberty will flourish only when people are free to exchange ideas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-appPrimary hover:bg-appPrimary/80 text-appOnPrimary text-lg px-8 py-4 h-auto"
            onClick={() => window.open('https://github.com/m3sserschmitt/aenigma-android/releases/download/v1.0.1/aenigma-v1.0.1.apk', '_blank')}
          >
            <Download className="h-5 w-5 mr-2" />
            Download for Android
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-appSurfaceHighest text-appOnSurface hover:bg-appSurface text-lg px-8 py-4 h-auto"
            onClick={() => window.open('https://github.com/m3sserschmitt/aenigma-android', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View Source Code
          </Button>
        </div>
        
        {/* App Preview Mockup */}
        <div className="relative mx-auto max-w-md animate-fade-in">
          <div className="bg-gradient-to-b from-appSurface to-appPrimaryContainer rounded-3xl p-6 border border-appSurfaceHighest shadow-2xl">
            <div className="bg-appBackground rounded-2xl p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-gradient-to-r from-appPrimary to-appSecondary rounded-full flex items-center justify-center">
                  <img src="/lovable-uploads/531ed3bb-9999-4fdf-940c-e6f1ba71c700.png" alt="Aenigma Logo" className="h-12 w-12" />
                </div>
                <div>
                  <div className="text-sm font-medium text-appOnPrimary">Aenigma</div>
                  <div className="text-xs text-appPrimary flex items-center">
                    <div className="w-2 h-2 bg-appPrimary rounded-full mr-1"></div>
                    TOR Connected
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-appPrimary/20 border border-appPrimary/30 rounded-lg p-3 ml-8">
                  <div className="text-sm text-appOnPrimary">Message encrypted and sent via TOR</div>
                  <div className="text-xs text-appPrimary mt-1 flex items-center">
                    <div className="w-3 h-3 bg-appPrimary rounded mr-1"></div>
                    End-to-end encrypted
                  </div>
                </div>
                
                <div className="bg-appSurfaceHighest/50 border border-appSurfaceHighest rounded-lg p-3 mr-8">
                  <div className="text-sm text-appOnSurface">Your messages are completely private</div>
                  <div className="text-xs text-appOnSurface mt-1">✓ Delivered securely</div>
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
