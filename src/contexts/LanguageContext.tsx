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
    'nav.howItWorks': 'How it works',
    'nav.download': 'Download',
    'nav.getApp': 'Get app',
    
    // Hero Section
    'hero.title1': 'Take a stand against',
    'hero.title2': 'big tech surveillance',
    'hero.subtitle': 'Democracy is also built by the means of information technology - from letters and newspapers to modern telecommunications. Liberty will flourish only when people are free to exchange ideas.',
    'hero.downloadButton': 'Download for Android',
    'hero.githubButton': 'View source code',
    'hero.mockup.torConnected': 'TOR connected',
    'hero.mockup.messageEncrypted': 'Message encrypted and sent via TOR',
    'hero.mockup.endToEndEncrypted': 'End-to-end encrypted',
    'hero.mockup.messagesPrivate': 'Your messages are completely private',
    'hero.mockup.deliveredSecurely': '✓ Delivered securely',
    
    // Features
    'features.title': 'Advanced security features',
    'features.subtitle': 'Built with cutting-edge cryptographic protocols and privacy-first architecture',
    'features.e2e.title': 'End-to-end encryption',
    'features.e2e.description': 'Industry-standard encryption using OpenSSL\'s EVP API ensures your messages remain private and secure from any third-party interference.',
    'features.tor.title': 'TOR network integration',
    'features.tor.description': 'Route your communications through The Onion Router (TOR) network for maximum anonymity and protection against traffic analysis.',
    'features.groups.title': 'Encrypted group chats',
    'features.groups.description': 'Create secure group conversations with advanced cryptographic protocols that ensure every participant\'s privacy is protected.',
    'features.zeroKnowledge.title': 'Zero knowledge architecture',
    'features.zeroKnowledge.description': 'No one can read your messages even if they want to. True privacy by design.',
    'features.android.title': 'Native Android performance',
    'features.android.description': 'Optimized for Android devices with efficient battery usage and seamless integration with your device\'s security features.',
    'features.openSource.title': 'Open source transparency',
    'features.openSource.description': 'Fully open source codebase that can be audited by security researchers and the privacy community.',
    
    // Security Section
    'security.title': 'Uncompromising security',
    'security.openssl.title': 'OpenSSL EVP encryption',
    'security.openssl.description': 'Utilizing OpenSSL\'s high-level envelope cryptographic functions for authenticated encryption.',
    'security.publicKey.title': 'Public key cryptography',
    'security.publicKey.description': 'Built on pure public key encryption - no session keys or preshared secrets required. Each message is encrypted directly using the recipient\'s public key, eliminating the need for key distribution or server-side key management.',
    'security.torNetwork.title': 'TOR network privacy',
    'security.torNetwork.description': 'All communications are routed through the TOR network, ensuring your IP address and location remain completely anonymous.',
    
    // How It Works Page
    'howItWorks.title': 'Secure messaging, built on strong cryptography',
    'howItWorks.subtitle': 'Our app uses end-to-end encryption to make sure your messages stay private, authentic, and secure — from the moment you send them to the moment they arrive.',
    'howItWorks.protection.title': 'How we protect your messages',
    'howItWorks.protection.description': 'Every message is protected using a combination of strong encryption and digital signatures. Here\'s how it works:',
    'howItWorks.hybrid.title': 'Hybrid encryption: the best of both worlds',
    'howItWorks.hybrid.description': 'We combine two types of encryption:',
    'howItWorks.aes.title': 'AES-256-GCM',
    'howItWorks.aes.description': 'a fast, secure encryption algorithm that locks each message using a unique, randomly generated key. It also provides built-in authentication, so you know the message hasn\'t been tampered with.',
    'howItWorks.rsa.title': 'RSA 4096',
    'howItWorks.rsa.description': 'an extremely strong public-key system used to securely wrap (or "seal") the AES key in an envelope. With 4096-bit keys, this encryption is strong enough for military-grade security.',
    'howItWorks.keys.title': 'Public and private keys: what they do',
    'howItWorks.publicKey.title': 'Public key (shared)',
    'howItWorks.publicKey.description': 'This is like your secure mailing address. You can share it freely (through a QR code or secure link) so others can send you encrypted messages.',
    'howItWorks.privateKey.title': 'Private key (kept secret)',
    'howItWorks.privateKey.description': 'This is your personal decryption key. It stays safely on your device and never leaves it. It\'s used to open messages and prove your identity.',
    'howItWorks.keysNote': 'Only your private key can open the messages sealed for you — not even we can read them.',
    'howItWorks.signing.title': 'Every message is signed',
    'howItWorks.signing.description': 'To make sure messages are truly from you, each one is digitally signed using your private key. That means:',
    'howItWorks.authenticity': 'Authenticity: The recipient can verify that the message was really sent by you.',
    'howItWorks.integrity': 'Integrity: The message hasn\'t been changed or forged.',
    'howItWorks.sharing.title': 'Easy & secure key sharing',
    'howItWorks.sharing.description': 'To start chatting securely, just scan a QR code or share a connection link. That\'s how your public key gets exchanged. After that, all messages between you and your contact are end-to-end encrypted automatically.',
    'howItWorks.privacy.title': 'Your privacy, your control',
    'howItWorks.privacy.point1': 'Your private key is stored securely on your device, protected by the Android system.',
    'howItWorks.privacy.point2': 'No cloud storage, no server-side access, no backdoors.',
    'howItWorks.privacy.point3': 'Even if someone intercepts your messages, they can\'t read or modify them.',
    
    // Call to Action
    'cta.title': 'Ready to secure your communications?',
    'cta.subtitle': 'Join thousands of users who trust Aenigma for their private messaging needs',
    'cta.downloadButton': 'Download now',
    'cta.githubButton': 'Explore code',
    'cta.openssl': 'Backed by OpenSSL',
    'cta.openSource': 'Open source',
    'cta.dataCollection': 'Data collection',
    
    // Footer
    'footer.tagline': 'Privacy-first messaging for the security-conscious',
    'footer.privacyPolicy': 'Privacy policy',
    'footer.sourceCode': 'Source code',
    'footer.privacyTitle': 'Privacy policy',
    'footer.privacyText': 'Aenigma does not collect, store, or process any personal information about its users. Your communications are end-to-end encrypted and routed through the TOR network for complete anonymity. We cannot and will not access your messages, contacts, or any other personal data.',
    'footer.copyright': '© 2025 Aenigma. Open source and auditable.',

    // Encryption Flow
    'encryptionFlow.title': 'How encryption works: the envelope method',
    'encryptionFlow.subtitle': 'Think of our encryption like sending a secure letter. Here\'s how your message gets protected step by step.',
    'encryptionFlow.writeMessage.title': 'Write your message',
    'encryptionFlow.writeMessage.description': 'You type your message just like writing a letter. This is your plain text that needs protection.',
    'encryptionFlow.putInEnvelope.title': 'Put it in an envelope',
    'encryptionFlow.putInEnvelope.description': 'Your message gets encrypted with AES-256-GCM using a random key - like putting your letter in a secure envelope.',
    'encryptionFlow.sealEnvelope.title': 'Seal the envelope',
    'encryptionFlow.sealEnvelope.description': 'The random key is encrypted with RSA-4096 using the recipient\'s public key - like sealing the envelope so only they can open it.',
    'encryptionFlow.signEnvelope.title': 'Sign the envelope',
    'encryptionFlow.signEnvelope.description': 'Your private key creates a digital signature - like signing the envelope to prove it\'s really from you.',
    'encryptionFlow.sendSecurely.title': 'Send securely',
    'encryptionFlow.sendSecurely.description': 'The signed, sealed envelope travels through TOR network - like using a secure courier service.',
    'encryptionFlow.securityNote.title': 'Military-grade security',
    'encryptionFlow.securityNote.description': 'This envelope method combines the speed of AES with the security of RSA, creating unbreakable protection for your messages.',
  },
  ro: {
    // Navigation
    'nav.features': 'Funcționalități',
    'nav.security': 'Securitate',
    'nav.howItWorks': 'Cum funcționează',
    'nav.download': 'Descărcare',
    'nav.getApp': 'Descarcă aplicația',
    
    // Hero Section
    'hero.title1': 'Luptă împotriva',
    'hero.title2': 'hegemoniei big tech',
    'hero.subtitle': 'Democrația se construiește și prin mijloacele tehnologiei informației - de la scrisori și ziare la telecomunicațiile moderne. Libertatea va înflori doar când oamenii sunt liberi să facă schimb de idei.',
    'hero.downloadButton': 'Descarcă pentru Android',
    'hero.githubButton': 'Vezi codul sursă',
    'hero.mockup.torConnected': 'Conectat la TOR',
    'hero.mockup.messageEncrypted': 'Mesaj criptat și trimis prin TOR',
    'hero.mockup.endToEndEncrypted': 'Criptare de la un capăt la altul',
    'hero.mockup.messagesPrivate': 'Mesajele tale sunt complet private',
    'hero.mockup.deliveredSecurely': '✓ Livrat în siguranță',
    
    // Features
    'features.title': 'Funcționalități avansate de securitate',
    'features.subtitle': 'Construit cu protocoale criptografice de ultimă generație și arhitectură orientată către protejarea intimității utilizatorilor',
    'features.e2e.title': 'Criptare de la un capăt la altul',
    'features.e2e.description': 'Criptarea standard din industrie folosind API-ul EVP al OpenSSL asigură că mesajele tale rămân private și sigure de orice interferență din partea terților.',
    'features.tor.title': 'Integrarea rețelei TOR',
    'features.tor.description': 'Rutează comunicațiile prin rețeaua The Onion Router (TOR) pentru anonimat maxim și protecție împotriva analizei traficului.',
    'features.groups.title': 'Chat-uri de grup criptate',
    'features.groups.description': 'Creează conversații de grup sigure cu protocoale criptografice avansate care asigură protecția intimității fiecărui participant.',
    'features.zeroKnowledge.title': 'Arhitectura zero knowledge',
    'features.zeroKnowledge.description': 'Nimeni nu poate citi mesajele tale chiar dacă ar vrea. Intimitate adevărată prin design.',
    'features.android.title': 'Performanță nativă Android',
    'features.android.description': 'Optimizat pentru dispozitivele Android cu utilizarea eficientă a bateriei și integrarea perfectă cu funcțiile de securitate ale dispozitivului.',
    'features.openSource.title': 'Transparența sursă deschisă',
    'features.openSource.description': 'Cod sursă deschis ce poate fi auditat în egală măsură de experți în securitate și comunitate.',
    
    // Security Section
    'security.title': 'Securitate fără compromisuri',
    'security.openssl.title': 'Criptarea OpenSSL EVP',
    'security.openssl.description': 'Utilizând funcțiile criptografice de înalt nivel ale OpenSSL pentru criptarea autentificată.',
    'security.publicKey.title': 'Criptografia cu cheie publică',
    'security.publicKey.description': 'Utilizând criptarea cu chei publice - nu sunt necesare chei de sesiune sau secrete pre-partajate. Fiecare mesaj este criptat direct folosind cheia publică a destinatarului, eliminând nevoia de distribuție a cheilor sau gestionarea cheilor pe server.',
    'security.torNetwork.title': 'Intimitatea rețelei TOR',
    'security.torNetwork.description': 'Toate comunicațiile sunt rutate prin rețeaua TOR, asigurând că adresa ta IP și locația rămân complet anonime.',
    
    // How It Works Page
    'howItWorks.title': 'Mesagerie sigură, construită pe criptografie puternică',
    'howItWorks.subtitle': 'Aplicația noastră folosește criptarea de la un capăt la altul pentru a se asigura că mesajele tale rămân private, autentice și sigure — din momentul în care le trimiți până în momentul în care ajung.',
    'howItWorks.protection.title': 'Cum îți protejăm mesajele',
    'howItWorks.protection.description': 'Fiecare mesaj este protejat folosind o combinație de criptare puternică și semnături digitale. Iată cum funcționează:',
    'howItWorks.hybrid.title': 'Criptarea hibridă: cel e mai bun din ambele lumi',
    'howItWorks.hybrid.description': 'Combinăm două tipuri de criptare:',
    'howItWorks.aes.title': 'AES-256-GCM',
    'howItWorks.aes.description': 'un algoritm de criptare rapid și sigur care protejează fiecare mesaj folosind o cheie unică, generată aleatoriu. De asemenea, oferă autentificare încorporată, astfel încât să știi că mesajul nu a fost modificat.',
    'howItWorks.rsa.title': 'RSA 4096',
    'howItWorks.rsa.description': 'un sistem cu cheie publică extrem de puternic folosit pentru a împacheta în siguranță (sau a "sigila") cheia AES într-un plic. Cu chei de 4096 de biți, această criptare este suficient de puternică pentru securitatea de grad militar.',
    'howItWorks.keys.title': 'Cheile publice și private: ce fac?',
    'howItWorks.publicKey.title': 'Cheia publică (partajată)',
    'howItWorks.publicKey.description': 'Aceasta este ca adresa ta sigură de corespondență. O poți partaja liber (prin cod QR sau link sigur) astfel încât alții să îți poată trimite mesaje criptate.',
    'howItWorks.privateKey.title': 'Cheia privată (păstrată secretă)',
    'howItWorks.privateKey.description': 'Aceasta este cheia ta personală de decriptare. Rămâne în siguranță pe dispozitivul tău și nu îl părăsește niciodată. Este folosită pentru a deschide mesajele și a-ți dovedi identitatea.',
    'howItWorks.keysNote': 'Doar cheia ta privată poate deschide mesajele sigilate pentru tine — nici măcar noi nu le putem citi.',
    'howItWorks.signing.title': 'Fiecare mesaj este semnat',
    'howItWorks.signing.description': 'Pentru a ne asigura că mesajele sunt cu adevărat de la tine, fiecare este semnat digital folosind cheia ta privată. Asta înseamnă:',
    'howItWorks.authenticity': 'Autenticitate: Destinatarul poate verifica că mesajul a fost chiar trimis de tine.',
    'howItWorks.integrity': 'Integritate: Mesajul nu a fost schimbat sau falsificat.',
    'howItWorks.sharing.title': 'Partajarea ușoară și sigură a cheilor',
    'howItWorks.sharing.description': 'Pentru a începe să conversezi în siguranță, doar scanează un cod QR sau partajează un link de conexiune. Așa se face schimbul de chei publice. După aceea, toate mesajele dintre tine și contactul tău sunt criptate de la un capăt la altul automat.',
    'howItWorks.privacy.title': 'Intimitatea ta, sub controlul tău',
    'howItWorks.privacy.point1': 'Cheia ta privată este stocată în siguranță pe dispozitivul tău, protejată de sistemul Android.',
    'howItWorks.privacy.point2': 'Fără stocare în cloud, fără acces pe server, fără uși din spate.',
    'howItWorks.privacy.point3': 'Chiar dacă cineva interceptează mesajele tale, nu le poate citi sau modifica.',
    
    // Call to Action
    'cta.title': 'Gata să-ți securizezi comunicațiile?',
    'cta.subtitle': 'Alătură-te miilor de utilizatori care au încredere în Aenigma pentru nevoile lor de mesagerie privată',
    'cta.downloadButton': 'Descarcă acum',
    'cta.githubButton': 'Explorează codul',
    'cta.openssl': 'Bazat pe OpenSSL',
    'cta.openSource': 'Sursă deschisă',
    'cta.dataCollection': 'Date colectate',
    
    // Footer
    'footer.tagline': 'Mesagerie orientată către protejarea intimității utilizatorilor',
    'footer.privacyPolicy': 'Politica de confidențialitate',
    'footer.sourceCode': 'Codul sursă',
    'footer.privacyTitle': 'Politica de confidențialitate',
    'footer.privacyText': 'Aenigma nu colectează, nu stochează și nu procesează nicio informație personală despre utilizatorii săi. Comunicațiile tale sunt criptate de la un capăt la altul și rutate prin rețeaua TOR pentru anonimat complet. Nu putem și nu vom accesa mesajele tale, contactele sau alte date personale.',
    'footer.copyright': '© 2025 Aenigma. Sursă deschisă și auditabil.',

    // Encryption Flow
    'encryptionFlow.title': 'Cum funcționează criptarea: metoda plicului',
    'encryptionFlow.subtitle': 'Gândește-te la criptarea noastră ca la trimiterea unei scrisori sigure. Iată cum mesajul tău este protejat pas cu pas.',
    'encryptionFlow.writeMessage.title': 'Scrie mesajul',
    'encryptionFlow.writeMessage.description': 'Tastezi mesajul exact ca atunci când scrii o scrisoare. Acesta este textul tău simplu care are nevoie de protecție.',
    'encryptionFlow.putInEnvelope.title': 'Pune-l în plic',
    'encryptionFlow.putInEnvelope.description': 'Mesajul tău este criptat cu AES-256-GCM folosind o cheie aleatorie - ca și cum ai pune scrisoarea într-un plic sigur.',
    'encryptionFlow.sealEnvelope.title': 'Sigilează plicul',
    'encryptionFlow.sealEnvelope.description': 'Cheia aleatorie este criptată cu RSA-4096 folosind cheia publică a destinatarului - ca și cum ai sigila plicul astfel încât doar el să îl poată deschide.',
    'encryptionFlow.signEnvelope.title': 'Semnează plicul',
    'encryptionFlow.signEnvelope.description': 'Cheia ta privată creează o semnătură digitală - ca și cum ai semna plicul pentru a dovedi că este cu adevărat de la tine.',
    'encryptionFlow.sendSecurely.title': 'Trimite în siguranță',
    'encryptionFlow.sendSecurely.description': 'Plicul semnat și sigilat călătorește prin rețeaua TOR - ca și cum ai folosi un serviciu de curierat sigur.',
    'encryptionFlow.securityNote.title': 'Securitate de grad militar',
    'encryptionFlow.securityNote.description': 'Această metodă a plicului combină viteza AES cu securitatea RSA, creând o protecție de nefranșit pentru mesajele tale.',
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
