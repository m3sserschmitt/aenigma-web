import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ro';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.security': 'Security',
    'nav.download': 'Download',
    'nav.getApp': 'Get App',
    
    // Hero Section
    'hero.title1': 'Take a Stand Against',
    'hero.title2': 'Big Tech Surveillance',
    'hero.subtitle': 'Democracy is also built by the means of information technology - from letters and newspapers to modern telecommunications. Liberty will flourish only when people are free to exchange ideas.',
    'hero.downloadButton': 'Download for Android',
    'hero.githubButton': 'View Source Code',
    'hero.mockup.torConnected': 'TOR Connected',
    'hero.mockup.messageEncrypted': 'Message encrypted and sent via TOR',
    'hero.mockup.endToEndEncrypted': 'End-to-end encrypted',
    'hero.mockup.messagesPrivate': 'Your messages are completely private',
    'hero.mockup.deliveredSecurely': '✓ Delivered securely',
    
    // Features
    'features.title': 'Advanced Security Features',
    'features.subtitle': 'Built with cutting-edge cryptographic protocols and privacy-first architecture',
    'features.e2e.title': 'End-to-End Encryption',
    'features.e2e.description': 'Industry-standard encryption using OpenSSL\'s EVP API ensures your messages remain private and secure from any third-party interference.',
    'features.tor.title': 'TOR Network Integration',
    'features.tor.description': 'Route your communications through The Onion Router (TOR) network for maximum anonymity and protection against traffic analysis.',
    'features.groups.title': 'Encrypted Group Chats',
    'features.groups.description': 'Create secure group conversations with advanced cryptographic protocols that ensure every participant\'s privacy is protected.',
    'features.zeroKnowledge.title': 'Zero Knowledge Architecture',
    'features.zeroKnowledge.description': 'No one can read your messages even if they want to. True privacy by design.',
    'features.android.title': 'Native Android Performance',
    'features.android.description': 'Optimized for Android devices with efficient battery usage and seamless integration with your device\'s security features.',
    'features.openSource.title': 'Open Source Transparency',
    'features.openSource.description': 'Fully open source codebase that can be audited by security researchers and the privacy community.',
    
    // Security Section
    'security.title': 'Uncompromising Security',
    'security.openssl.title': 'OpenSSL EVP Encryption',
    'security.openssl.description': 'Utilizing OpenSSL\'s high-level envelope cryptographic functions for authenticated encryption.',
    'security.publicKey.title': 'Public Key Cryptography',
    'security.publicKey.description': 'Built on pure public key encryption - no session keys or preshared secrets required. Each message is encrypted directly using the recipient\'s public key, eliminating the need for key distribution or server-side key management.',
    'security.torNetwork.title': 'TOR Network Privacy',
    'security.torNetwork.description': 'All communications are routed through the TOR network, ensuring your IP address and location remain completely anonymous.',
    
    // Call to Action
    'cta.title': 'Ready to Secure Your Communications?',
    'cta.subtitle': 'Join thousands of users who trust Aenigma for their private messaging needs',
    'cta.downloadButton': 'Download Now',
    'cta.githubButton': 'Explore Code',
    'cta.openssl': 'Backed by OpenSSL',
    'cta.openSource': 'Open Source',
    'cta.dataCollection': 'Data Collection',
    
    // Footer
    'footer.tagline': 'Privacy-first messaging for the security-conscious',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.sourceCode': 'Source Code',
    'footer.privacyTitle': 'Privacy Policy',
    'footer.privacyText': 'Aenigma does not collect, store, or process any personal information about its users. Your communications are end-to-end encrypted and routed through the TOR network for complete anonymity. We cannot and will not access your messages, contacts, or any other personal data.',
    'footer.copyright': '© 2025 Aenigma. Open source and auditable.'
  },
  ro: {
    // Navigation
    'nav.features': 'Funcționalități',
    'nav.security': 'Securitate',
    'nav.download': 'Descărcare',
    'nav.getApp': 'Descarcă App',
    
    // Hero Section
    'hero.title1': 'Luptă Împotriva',
    'hero.title2': 'Hegemoniei Big Tech',
    'hero.subtitle': 'Democrația se construiește și prin mijloacele tehnologiei informației - de la scrisori și ziare la telecomunicațiile moderne. Libertatea va înflori doar când oamenii sunt liberi să facă schimb de idei.',
    'hero.downloadButton': 'Descarcă pentru Android',
    'hero.githubButton': 'Vezi Codul Sursă',
    'hero.mockup.torConnected': 'Conectat la TOR',
    'hero.mockup.messageEncrypted': 'Mesaj criptat și trimis prin TOR',
    'hero.mockup.endToEndEncrypted': 'Criptare de la un capăt la altul',
    'hero.mockup.messagesPrivate': 'Mesajele tale sunt complet private',
    'hero.mockup.deliveredSecurely': '✓ Livrat în siguranță',
    
    // Features
    'features.title': 'Funcționalități Avansate de Securitate',
    'features.subtitle': 'Construit cu protocoale criptografice de ultimă generație și arhitectură orientată către protejarea intimității utilizatorilor',
    'features.e2e.title': 'Criptare de la un Capăt la Altul',
    'features.e2e.description': 'Criptarea standard din industrie folosind API-ul EVP al OpenSSL asigură că mesajele tale rămân private și sigure de orice interferență din partea terților.',
    'features.tor.title': 'Integrarea Rețelei TOR',
    'features.tor.description': 'Rutează comunicațiile prin rețeaua The Onion Router (TOR) pentru anonimat maxim și protecție împotriva analizei traficului.',
    'features.groups.title': 'Chat-uri de Grup Criptate',
    'features.groups.description': 'Creează conversații de grup sigure cu protocoale criptografice avansate care asigură protecția intimității fiecărui participant.',
    'features.zeroKnowledge.title': 'Arhitectura Zero Knowledge',
    'features.zeroKnowledge.description': 'Nimeni nu poate citi mesajele tale chiar dacă ar vrea. Intimitate adevărată prin design.',
    'features.android.title': 'Performanță Nativă Android',
    'features.android.description': 'Optimizat pentru dispozitivele Android cu utilizarea eficientă a bateriei și integrarea perfectă cu funcțiile de securitate ale dispozitivului.',
    'features.openSource.title': 'Transparența Sursă Deschisă',
    'features.openSource.description': 'Cod sursă deschis ce poate fi auditat în egală măsură de experți în securitate și comunitate.',
    
    // Security Section
    'security.title': 'Securitate Fără Compromisuri',
    'security.openssl.title': 'Criptarea OpenSSL EVP',
    'security.openssl.description': 'Utilizând funcțiile criptografice de înalt nivel ale OpenSSL pentru criptarea autentificată.',
    'security.publicKey.title': 'Criptografia cu Cheie Publică',
    'security.publicKey.description': 'Utilizând criptarea cu chei publice - nu sunt necesare chei de sesiune sau secrete pre-partajate. Fiecare mesaj este criptat direct folosind cheia publică a destinatarului, eliminând nevoia de distribuție a cheilor sau gestionarea cheilor pe server.',
    'security.torNetwork.title': 'Intimitatea Rețelei TOR',
    'security.torNetwork.description': 'Toate comunicațiile sunt rutate prin rețeaua TOR, asigurând că adresa ta IP și locația rămân complet anonime.',
    
    // Call to Action
    'cta.title': 'Gata să-ți Securizezi Comunicațiile?',
    'cta.subtitle': 'Alătură-te miilor de utilizatori care au încredere în Aenigma pentru nevoile lor de mesagerie privată',
    'cta.downloadButton': 'Descarcă Acum',
    'cta.githubButton': 'Explorează Codul',
    'cta.openssl': 'Bazat pe OpenSSL',
    'cta.openSource': 'Sursă Deschisă',
    'cta.dataCollection': 'Date Colectate',
    
    // Footer
    'footer.tagline': 'Mesagerie orientată către protejarea intimității utilizatorilor',
    'footer.privacyPolicy': 'Politica de Confidențialitate',
    'footer.sourceCode': 'Codul Sursă',
    'footer.privacyTitle': 'Politica de Confidențialitate',
    'footer.privacyText': 'Aenigma nu colectează, nu stochează și nu procesează nicio informație personală despre utilizatorii săi. Comunicațiile tale sunt criptate end-to-end și rutate prin rețeaua TOR pentru anonimat complet. Nu putem și nu vom accesa mesajele tale, contactele sau alte date personale.',
    'footer.copyright': '© 2025 Aenigma. Sursă deschisă și auditabil.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
