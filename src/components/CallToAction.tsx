
import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="download" className="py-20 px-4 bg-gradient-to-r from-appPrimary/10 to-appSecondary/10">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-appOnPrimary">
            Ready to Secure Your
            <span className="text-appPrimary"> Communications?</span>
          </h2>
          
          <p className="text-xl text-appOnBackground mb-12 leading-relaxed">
            Join thousands of privacy-conscious users who trust Aenigma for their most sensitive conversations. 
            Download now and experience true digital privacy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-appPrimary hover:bg-appPrimary/80 text-appOnPrimary text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://github.com/m3sserschmitt/aenigma-android/releases/download/v1.0.1/aenigma-v1.0.1.apk', '_blank')}
            >
              <Download className="h-6 w-6 mr-3" />
              Download for Android
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-appSurfaceHighest text-appOnSurface hover:bg-appSurface hover:border-appPrimary text-lg px-10 py-6 h-auto transition-all duration-300"
              onClick={() => window.open('https://github.com/m3sserschmitt/aenigma-android', '_blank')}
            >
              <Github className="h-6 w-6 mr-3" />
              View on GitHub
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-appSurface/30 rounded-lg border border-appSurfaceHighest">
              <div className="text-3xl font-bold text-appPrimary mb-2">OpenSSL</div>
              <div className="text-appOnSurface">Backed by OpenSSL</div>
            </div>
            
            <div className="p-6 bg-appSurface/30 rounded-lg border border-appSurfaceHighest">
              <div className="text-3xl font-bold text-appPrimary mb-2">100%</div>
              <div className="text-appOnSurface">Open Source</div>
            </div>
            
            <div className="p-6 bg-appSurface/30 rounded-lg border border-appSurfaceHighest">
              <div className="text-3xl font-bold text-appSecondary mb-2">0</div>
              <div className="text-appOnSurface">Data Collection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
