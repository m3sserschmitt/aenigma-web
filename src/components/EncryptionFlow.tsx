
import { Mail, Lock, FileSignature, Send, Key, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EncryptionFlow = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      icon: <Mail className="h-8 w-8 text-appPrimary" />,
      title: t('encryptionFlow.writeMessage.title'),
      description: t('encryptionFlow.writeMessage.description'),
      visual: "📝",
      bgColor: "from-blue-100 to-blue-200",
      borderColor: "border-blue-300"
    },
    {
      id: 2,
      icon: <Lock className="h-8 w-8 text-appSecondary" />,
      title: t('encryptionFlow.putInEnvelope.title'),
      description: t('encryptionFlow.putInEnvelope.description'),
      visual: "📧",
      bgColor: "from-green-100 to-green-200",
      borderColor: "border-green-300"
    },
    {
      id: 3,
      icon: <Key className="h-8 w-8 text-appPrimary" />,
      title: t('encryptionFlow.sealEnvelope.title'),
      description: t('encryptionFlow.sealEnvelope.description'),
      visual: "🔐",
      bgColor: "from-purple-100 to-purple-200",
      borderColor: "border-purple-300"
    },
    {
      id: 4,
      icon: <FileSignature className="h-8 w-8 text-appSecondary" />,
      title: t('encryptionFlow.signEnvelope.title'),
      description: t('encryptionFlow.signEnvelope.description'),
      visual: "✍️",
      bgColor: "from-orange-100 to-orange-200",
      borderColor: "border-orange-300"
    },
    {
      id: 5,
      icon: <Send className="h-8 w-8 text-appPrimary" />,
      title: t('encryptionFlow.sendSecurely.title'),
      description: t('encryptionFlow.sendSecurely.description'),
      visual: "🚀",
      bgColor: "from-red-100 to-red-200",
      borderColor: "border-red-300"
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-appPrimary mr-3" />
            <h2 className="text-3xl font-bold text-appOnPrimary">
              {t('encryptionFlow.title')}
            </h2>
          </div>
          <p className="text-appOnBackground max-w-2xl mx-auto">
            {t('encryptionFlow.subtitle')}
          </p>
        </div>

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-appPrimary via-appSecondary to-appPrimary transform -translate-y-1/2 z-0"></div>
            
            {/* Steps */}
            <div className="relative z-10 flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center max-w-xs">
                  {/* Step Circle */}
                  <div className={`relative bg-gradient-to-br ${step.bgColor} ${step.borderColor} border-2 rounded-full p-6 mb-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                    <div className="absolute -top-2 -right-2 bg-appPrimary text-appOnPrimary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.id}
                    </div>
                    <div className="text-4xl mb-2">{step.visual}</div>
                    {step.icon}
                  </div>
                  
                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="font-semibold text-appOnPrimary mb-2 text-lg">
                      {step.title}
                    </h3>
                    <p className="text-appOnBackground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 right-0 transform translate-x-1/2 text-appPrimary text-2xl animate-pulse">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className={`bg-gradient-to-br ${step.bgColor} ${step.borderColor} border-2 rounded-xl p-6 shadow-lg`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-appPrimary text-appOnPrimary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-2">
                      {step.id}
                    </div>
                    <div className="text-3xl">{step.visual}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {step.icon}
                      <h3 className="font-semibold text-appOnPrimary ml-2 text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-appOnBackground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="text-appPrimary text-2xl animate-pulse">↓</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Security Note */}
        <div className="mt-12 bg-gradient-to-r from-appPrimary/10 to-appSecondary/10 border border-appPrimary/30 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <Lock className="h-6 w-6 text-appPrimary mr-2" />
            <span className="font-semibold text-appOnPrimary">
              {t('encryptionFlow.securityNote.title')}
            </span>
          </div>
          <p className="text-appOnBackground text-sm">
            {t('encryptionFlow.securityNote.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EncryptionFlow;
