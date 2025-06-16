
import { Shield, MessageSquare, Users, Lock, Download, Github, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-appPrimary" />,
      title: "End-to-End Encryption",
      description: "Military-grade encryption using OpenSSL's EVP API ensures your messages remain private and secure from any third-party interference."
    },
    {
      icon: <Lock className="h-8 w-8 text-appPrimary" />,
      title: "TOR Network Integration",
      description: "Route your communications through The Onion Router (TOR) network for maximum anonymity and protection against traffic analysis."
    },
    {
      icon: <Users className="h-8 w-8 text-appSecondary" />,
      title: "Encrypted Group Chats",
      description: "Create secure group conversations with advanced cryptographic protocols that ensure every participant's privacy is protected."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-appSecondary" />,
      title: "Zero Knowledge Architecture",
      description: "Our servers never have access to your messages, contacts, or metadata. True privacy by design."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-appPrimary" />,
      title: "Native Android Performance",
      description: "Optimized for Android devices with efficient battery usage and seamless integration with your device's security features."
    },
    {
      icon: <Github className="h-8 w-8 text-appOnBackground" />,
      title: "Open Source Transparency",
      description: "Fully open source codebase that can be audited by security researchers and the privacy community."
    }
  ];

  return (
    <div className="min-h-screen bg-appBackground text-appOnBackground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-appSurface/80 backdrop-blur-sm border-b border-appSurfaceHighest z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/531ed3bb-9999-4fdf-940c-e6f1ba71c700.png" alt="Aenigma Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-appOnPrimary">Aenigma</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-appPrimary transition-colors text-appOnSurface">Features</a>
            <a href="#security" className="hover:text-appPrimary transition-colors text-appOnSurface">Security</a>
            <a href="#download" className="hover:text-appPrimary transition-colors text-appOnSurface">Download</a>
          </div>
          <Button variant="outline" className="border-appPrimary text-appPrimary hover:bg-appPrimary hover:text-appOnPrimary">
            <Download className="h-4 w-4 mr-2" />
            Get App
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-appOnPrimary">
              Advanced Security Features
            </h2>
            <p className="text-xl text-appOnBackground max-w-3xl mx-auto">
              Built with cutting-edge cryptographic protocols and privacy-first architecture
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
                Uncompromising Security
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-appPrimary/20 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-appPrimary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-appOnPrimary">OpenSSL EVP Encryption</h3>
                    <p className="text-appOnBackground">
                      Utilizing OpenSSL's high-level envelope cryptographic functions for authenticated encryption with associated data (AEAD).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-appPrimary/20 p-2 rounded-lg">
                    <Lock className="h-6 w-6 text-appPrimary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-appOnPrimary">TOR Network Privacy</h3>
                    <p className="text-appOnBackground">
                      All communications are routed through the TOR network, ensuring your IP address and location remain completely anonymous.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-appSurfaceHighest/50 rounded-2xl p-8 border border-appSurfaceHighest">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-appSurface/50 rounded-lg border border-appSurfaceHighest">
                    <span className="text-sm text-appOnSurface">Encryption Status</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-appPrimary rounded-full animate-pulse"></div>
                      <span className="text-appPrimary text-sm font-medium">Active</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-appSurface/50 rounded-lg border border-appSurfaceHighest">
                    <span className="text-sm text-appOnSurface">TOR Connection</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-appPrimary rounded-full animate-pulse"></div>
                      <span className="text-appPrimary text-sm font-medium">Connected</span>
                    </div>
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
      <footer className="py-12 px-4 border-t border-appSurfaceHighest">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/lovable-uploads/531ed3bb-9999-4fdf-940c-e6f1ba71c700.png" alt="Aenigma Logo" className="h-6 w-6" />
            <span className="text-lg font-semibold text-appOnPrimary">Aenigma</span>
          </div>
          <p className="text-appOnBackground mb-4">
            Privacy-first messaging for the security-conscious
          </p>
          <div className="flex justify-center space-x-6 text-sm text-appOnBackground">
            <a href="#" className="hover:text-appOnPrimary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-appOnPrimary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-appOnPrimary transition-colors">Source Code</a>
            <a href="#" className="hover:text-appOnPrimary transition-colors">Security Audit</a>
          </div>
          <p className="text-appSecondary text-sm mt-4">
            © 2024 Aenigma. Open source and auditable.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
