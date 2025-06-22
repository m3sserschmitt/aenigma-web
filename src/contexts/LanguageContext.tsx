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
    'nav.howItWorks': 'How it Works',
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
    
    // How It Works Page
    'howItWorks.title': 'Secure Messaging, Built on Strong Cryptography',
    'howItWorks.subtitle': 'Our app uses end-to-end encryption to make sure your messages stay private, authentic, and secure — from the moment you send them to the moment they arrive.',
    'howItWorks.protection.title': 'How We Protect Your Messages',
    'howItWorks.protection.description': 'Every message is protected using a combination of strong encryption and digital signatures. Here\'s how it works:',
    'howItWorks.hybrid.title': 'Hybrid Encryption: The Best of Both Worlds',
    'howItWorks.hybrid.description': 'We combine two types of encryption:',
    'howItWorks.aes.title': 'AES-256-GCM',
    'howItWorks.aes.description': 'a fast, secure encryption algorithm that locks each message using a unique, randomly generated key. It also provides built-in authentication, so you know the message hasn\'t been tampered with.',
    'howItWorks.rsa.title': 'RSA 4096',
    'howItWorks.rsa.description': 'an extremely strong public-key system used to securely wrap (or "seal") the AES key in an envelope. With 4096-bit keys, this encryption is strong enough for military-grade security.',
    'howItWorks.keys.title': 'Public and Private Keys: What They Do',
    'howItWorks.publicKey.title': 'Public Key (shared)',
    'howItWorks.publicKey.description': 'This is like your secure mailing address. You can share it freely (through a QR code or secure link) so others can send you encrypted messages.',
    'howItWorks.privateKey.title': 'Private Key (kept secret)',
    'howItWorks.privateKey.description': 'This is your personal decryption key. It stays safely on your device and never leaves it. It\'s used to open messages and prove your identity.',
    'howItWorks.keysNote': 'Only your private key can open the messages sealed for you — not even we can read them.',
    'howItWorks.signing.title': 'Every Message is Signed',
    'howItWorks.signing.description': 'To make sure messages are truly from you, each one is digitally signed using your private key. That means:',
    'howItWorks.authenticity': 'Authenticity: The recipient can verify that the message was really sent by you.',
    'howItWorks.integrity': 'Integrity: The message hasn\'t been changed or forged.',
    'howItWorks.sharing.title': 'Easy & Secure Key Sharing',
    'howItWorks.sharing.description': 'To start chatting securely, just scan a QR code or share a connection link. That\'s how your public key gets exchanged. After that, all messages between you and your contact are end-to-end encrypted automatically.',
    'howItWorks.privacy.title': 'Your Privacy, Your Control',
    'howItWorks.privacy.point1': 'Your private key is stored securely on your device, protected by the Android system.',
    'howItWorks.privacy.point2': 'No cloud storage, no server-side access, no backdoors.',
    'howItWorks.privacy.point3': 'Even if someone intercepts your messages, they can\'t read or modify them.',
    
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
    'nav.howItWorks': 'Cum Funcționează',
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
    
    // How It Works Page
    'howItWorks.title': 'Mesagerie Sigură, Construită pe Criptografie Puternică',
    'howItWorks.subtitle': 'Aplicația noastră folosește criptarea de la un capăt la altul pentru a se asigura că mesajele tale rămân private, autentice și sigure — din momentul în care le trimiți până în momentul în care ajung.',
    'howItWorks.protection.title': 'Cum Îți Protejăm Mesajele',
    'howItWorks.protection.description': 'Fiecare mesaj este protejat folosind o combinație de criptare puternică și semnături digitale. Iată cum funcționează:',
    'howItWorks.hybrid.title': 'Criptarea Hibridă: Cel Mai Bun din Ambele Lumi',
    'howItWorks.hybrid.description': 'Combinăm două tipuri de criptare:',
    'howItWorks.aes.title': 'AES-256-GCM',
    'howItWorks.aes.description': 'un algoritm de criptare rapid și sigur care protejează fiecare mesaj folosind o cheie unică, generată aleatoriu. De asemenea, oferă autentificare încorporată, astfel încât să știi că mesajul nu a fost modificat.',
    'howItWorks.rsa.title': 'RSA 4096',
    'howItWorks.rsa.description': 'un sistem cu cheie publică extrem de puternic folosit pentru a împacheta în siguranță (sau a "sigila") cheia AES într-un plic. Cu chei de 4096 de biți, această criptare este suficient de puternică pentru securitatea de grad militar.',
    'howItWorks.keys.title': 'Cheile Publice și Private: Ce Fac?',
    'howItWorks.publicKey.title': 'Cheia Publică (partajată)',
    'howItWorks.publicKey.description': 'Aceasta este ca adresa ta sigură de corespondență. O poți partaja liber (prin cod QR sau link sigur) astfel încât alții să îți poată trimite mesaje criptate.',
    'howItWorks.privateKey.title': 'Cheia Privată (păstrată secretă)',
    'howItWorks.privateKey.description': 'Aceasta este cheia ta personală de decriptare. Rămâne în siguranță pe dispozitivul tău și nu îl părăsește niciodată. Este folosită pentru a deschide mesajele și a-ți dovedi identitatea.',
    'howItWorks.keysNote': 'Doar cheia ta privată poate deschide mesajele sigilate pentru tine — nici măcar noi nu le putem citi.',
    'howItWorks.signing.title': 'Fiecare Mesaj este Semnat',
    'howItWorks.signing.description': 'Pentru a ne asigura că mesajele sunt cu adevărat de la tine, fiecare este semnat digital folosind cheia ta privată. Asta înseamnă:',
    'howItWorks.authenticity': 'Autenticitate: Destinatarul poate verifica că mesajul a fost chiar trimis de tine.',
    'howItWorks.integrity': 'Integritate: Mesajul nu a fost schimbat sau falsificat.',
    'howItWorks.sharing.title': 'Partajarea Ușoară și Sigură a Cheilor',
    'howItWorks.sharing.description': 'Pentru a începe să conversezi în siguranță, doar scanează un cod QR sau partajează un link de conexiune. Așa se face schimbul de chei publice. După aceea, toate mesajele dintre tine și contactul tău sunt criptate de la un capăt la altul automat.',
    'howItWorks.privacy.title': 'Intimitatea Ta, Sub Controlul Tău',
    'howItWorks.privacy.point1': 'Cheia ta privată este stocată în siguranță pe dispozitivul tău, protejată de sistemul Android.',
    'howItWorks.privacy.point2': 'Fără stocare în cloud, fără acces pe server, fără uși din spate.',
    'howItWorks.privacy.point3': 'Chiar dacă cineva interceptează mesajele tale, nu le poate citi sau modifica.',
    
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
    'footer.privacyText': 'Aenigma nu colectează, nu stochează și nu procesează nicio informație personală despre utilizatorii săi. Comunicațiile tale sunt criptate de la un capăt la altul și rutate prin rețeaua TOR pentru anonimat complet. Nu putem și nu vom accesa mesajele tale, contactele sau alte date personale.',
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
