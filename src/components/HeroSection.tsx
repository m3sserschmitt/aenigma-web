
import { Button } from "@/components/ui/button";
import { Shield, Download, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent"></div>
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8 animate-fade-in">
          <Shield className="h-4 w-4 text-blue-400" />
          <span className="text-sm text-blue-400 font-medium">End-to-End Encrypted Messaging</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Secure Communication
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Redefined
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          Experience military-grade encryption with OpenSSL EVP, complete anonymity through TOR network integration, 
          and secure group messaging in one powerful Android application.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 h-auto">
            <Download className="h-5 w-5 mr-2" />
            Download for Android
          </Button>
          
          <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-4 h-auto">
            <Github className="h-5 w-5 mr-2" />
            View Source Code
          </Button>
        </div>
        
        {/* App Preview Mockup */}
        <div className="relative mx-auto max-w-md animate-fade-in">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 border border-gray-700 shadow-2xl">
            <div className="bg-black rounded-2xl p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">SecureChat</div>
                  <div className="text-xs text-green-400 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                    TOR Connected
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 ml-8">
                  <div className="text-sm text-blue-100">Message encrypted and sent via TOR</div>
                  <div className="text-xs text-blue-300 mt-1 flex items-center">
                    <Shield className="h-3 w-3 mr-1" />
                    End-to-end encrypted
                  </div>
                </div>
                
                <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-3 mr-8">
                  <div className="text-sm text-gray-100">Your messages are completely private</div>
                  <div className="text-xs text-gray-400 mt-1">✓ Delivered securely</div>
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
