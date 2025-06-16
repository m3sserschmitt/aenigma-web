
import { Button } from "@/components/ui/button";
import { Download, Github, Shield } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="download" className="py-20 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-8">
            <Shield className="h-4 w-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Ready for Production</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Secure Your
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Communications?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of privacy-conscious users who trust SecureChat for their most sensitive conversations. 
            Download now and experience true digital privacy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="h-6 w-6 mr-3" />
              Download for Android
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-blue-400 text-lg px-10 py-6 h-auto transition-all duration-300"
            >
              <Github className="h-6 w-6 mr-3" />
              View on GitHub
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">256-bit</div>
              <div className="text-gray-300">AES Encryption</div>
            </div>
            
            <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300">Open Source</div>
            </div>
            
            <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
              <div className="text-gray-300">Data Collection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
