
import { Shield, MessageSquare, Users, Lock, Download, Github, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: "End-to-End Encryption",
      description: "Military-grade encryption using OpenSSL's EVP API ensures your messages remain private and secure from any third-party interference."
    },
    {
      icon: <Lock className="h-8 w-8 text-green-400" />,
      title: "TOR Network Integration",
      description: "Route your communications through The Onion Router (TOR) network for maximum anonymity and protection against traffic analysis."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Encrypted Group Chats",
      description: "Create secure group conversations with advanced cryptographic protocols that ensure every participant's privacy is protected."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-cyan-400" />,
      title: "Zero Knowledge Architecture",
      description: "Our servers never have access to your messages, contacts, or metadata. True privacy by design."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-orange-400" />,
      title: "Native Android Performance",
      description: "Optimized for Android devices with efficient battery usage and seamless integration with your device's security features."
    },
    {
      icon: <Github className="h-8 w-8 text-gray-400" />,
      title: "Open Source Transparency",
      description: "Fully open source codebase that can be audited by security researchers and the privacy community."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">SecureChat</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#security" className="hover:text-blue-400 transition-colors">Security</a>
            <a href="#download" className="hover:text-blue-400 transition-colors">Download</a>
          </div>
          <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
      <section id="security" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Uncompromising Security
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">OpenSSL EVP Encryption</h3>
                    <p className="text-gray-300">
                      Utilizing OpenSSL's high-level envelope cryptographic functions for authenticated encryption with associated data (AEAD).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <Lock className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">TOR Network Privacy</h3>
                    <p className="text-gray-300">
                      All communications are routed through the TOR network, ensuring your IP address and location remain completely anonymous.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Forward Secrecy</h3>
                    <p className="text-gray-300">
                      Advanced key rotation ensures that even if a key is compromised, past and future messages remain secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                    <span className="text-sm text-gray-300">Encryption Status</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">Active</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                    <span className="text-sm text-gray-300">TOR Connection</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">Connected</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                    <span className="text-sm text-gray-300">Key Exchange</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-blue-400 text-sm font-medium">Perfect Forward Secrecy</span>
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
      <footer className="py-12 px-4 border-t border-gray-700">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-semibold">SecureChat</span>
          </div>
          <p className="text-gray-400 mb-4">
            Privacy-first messaging for the security-conscious
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Source Code</a>
            <a href="#" className="hover:text-white transition-colors">Security Audit</a>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            © 2024 SecureChat. Open source and auditable.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
