export type MediaKind = 'image' | 'video' | 'iframe';

export type PortfolioItem = {
  title: string;
  caption: string;
  finish: string;
  alt: string;
  mediaKind: MediaKind;
  mediaSrc: string;
  mediaPoster?: string;
  mediaWebpBase?: string;
  mediaAspectClassName?: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  imageSrc: string;
  alt: string;
};

export type PackageItem = {
  name: string;
  priceLabel: string;
  price: string;
  description: string;
  features: string[];
  badge: string;
  featured?: boolean;
};

export const en = {
  brand: {
    name: 'SK Makeover',
    domain: 'skmakeover',
    artist: 'Vidya Malak',
  },
  nav: {
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    packages: 'Packages',
    certifications: 'Certifications',
    contact: 'Contact',
    bookYourDate: 'Book Your Date',
    viewPortfolio: 'View Portfolio',
  },
  hero: {
    eyebrow: 'Luxury Bridal Makeup Studio',
    title: 'Bridal beauty, composed with couture precision.',
    description:
      'SK Makeover crafts soft-focus, camera-ready bridal looks that feel elevated in person and timeless in every frame.',
    supportingLine: 'Minimalist. Elegant. Highly scannable. Built for your once-in-a-lifetime date.',
  },
  about: {
    title: 'A premium bridal experience shaped by Vidya Malak.',
    description:
      'Vidya Malak brings an editorial eye, calm precision, and a luxury-first approach to every bridal appointment. The result is refined makeup that enhances natural features, photographs beautifully, and stays immaculate through every ceremony.',
    pillars: [
      'Soft sculpting and balanced skin work',
      'Camera-aware detail for day-to-night events',
      'White-glove bridal preparation and finish',
    ],
    quote:
      'Your bridal look should feel effortless, luminous, and unmistakably yours.',
  },
  contact: {
    // Replace these placeholders with the studio's live booking details.
    phoneDisplay: '+91 7975692667',
    phoneHref: 'tel:+917975692667',
    email: 'bookings@skmakeover.in',
    emailHref: 'mailto:bookings@skmakeover.in',
    instagram: '@skmakeover.in',
    instagramHref: 'https://instagram.com/skmakeover.in',
    youtube: '@skmakeover',
    youtubeHref: 'https://youtube.com/@skmakeover.in',
  },
  reel: {
    // Demo reel source. Replace with a public MP4, YouTube watch URL, or YouTube Shorts URL.
    src: '/videos/demo.mp4',
    // src: 'https://www.youtube.com/watch?v=VIDEO_ID',
    poster: '/images/mukta.jpg',
    title: 'Couture Bridal Reel',
    description: 'A short bridal reel with movement, detail, and a camera-ready finish.',
  },
  portfolio: [
    {
      title: 'Marathi Stage Look',
      caption: 'A traditional Marathi-inspired school stage look — classic kajal, vibrant colours, and a performance-ready finish full of cultural grace.',
      alt: 'School girl traditional Marathi stage performance makeup look',
      mediaKind: 'iframe',
      mediaSrc: 'https://www.instagram.com/p/DTgCDPnkupe/?img_index=1',
      mediaAspectClassName: 'aspect-[4/5]',
      finish: 'Traditional',
    },
    {
      title: 'Stage Glam',
      caption: 'A vibrant, camera-ready stage look for school performance — expressive eyes, radiant skin, and a polished finish built for the spotlight.',
      alt: 'School girl stage performance makeup with expressive eyes and a vibrant finish',
      mediaKind: 'iframe',
      mediaSrc: 'https://www.instagram.com/p/DJ0kLJsSstM/?img_index=1',
      mediaAspectClassName: 'aspect-[4/5]',
      finish: 'Stage',
    },
    {
      title: 'Pearl Ceremony',
      caption: 'Bridal transformation with a refined warm finish and luxury skin work.',
      alt: 'Instagram bridal transformation with a pearl-toned luminous finish',
      mediaKind: 'iframe',
      mediaSrc: 'https://www.instagram.com/p/DXGA7_UD6q0/?img_index=1',
      mediaAspectClassName: 'aspect-[4/5]',
      finish: 'Editorial',
    },
    {
      title: 'Champagne Evening',
      caption: 'Elegant event-ready glam with soft definition and a clean editorial edge.',
      alt: 'Instagram bridal glam with champagne undertones and evening polish',
      mediaKind: 'iframe',
      mediaSrc: 'https://www.instagram.com/p/DSrCSGxD51e/?img_index=1',
      mediaAspectClassName: 'aspect-[4/5]',
      finish: 'Social',
    },
  ] satisfies PortfolioItem[],
  packages: [
    {
      name: 'Signature Bridal Makeover',
      priceLabel: 'Starting at',
      price: 'Rs. 45,000',
      description:
        'A complete bridal transformation designed for the main wedding ceremony, with a balanced luxury finish and long-wear confidence.',
      features: [
        'Custom base and complexion mapping',
        'Eyes, lashes, drape, and final touch-up',
        'On-location bridal setup',
      ],
      badge: 'Most requested',
      featured: true,
    },
    {
      name: 'Luxury Engagement Glam',
      priceLabel: 'Starting at',
      price: 'Rs. 22,000',
      description:
        'An elevated engagement look with a softer editorial finish for close-ups, stage lights, and celebration photography.',
      features: [
        'Soft glam or polished glam direction',
        'Long-wear skin and eye refinement',
        'Perfect for engagement, roka, or party looks',
      ],
      badge: 'Elegant preview',
    },
    {
      name: 'Pre-Bridal Grooming',
      priceLabel: 'Starting at',
      price: 'Rs. 14,000',
      description:
        'A prep-led service focused on skin readiness, texture refinement, and makeup longevity before the wedding week.',
      features: [
        'Skin prep planning and glow mapping',
        'Tone balancing and corrective refinement',
        'Ideal for the final lead-up to the wedding',
      ],
      badge: 'Preparation',
    },
  ] satisfies PackageItem[],
  certifications: {
    title: 'Professional Certifications',
    description: 'Recognized expertise in advanced makeup and skin treatments.',
    items: [
      {
        title: '{LIVE} No Makeup Makeup Look',
        issuer: 'PK Institute',
        imageSrc: '/images/certificate-1.jpeg',
        alt: 'Certificate for No Makeup Makeup Look',
      },
      {
        title: '[LEVEL-1] Basic to Pro: Transform Your Makeup Skills',
        issuer: 'PK Institute',
        imageSrc: '/images/certificate-2.jpeg',
        alt: 'Certificate for Basic to Pro Makeup Skills',
      },
      {
        title: '[LEVEL-3] Become a Skin Specialist: 4-Day Training!',
        issuer: 'PK Institute',
        imageSrc: '/images/certificate-3.jpeg',
        alt: 'Certificate for Skin Specialist Training',
      },
      {
        title: '{LIVE} How to Choose Your Foundation Shade',
        issuer: 'PK Institute',
        imageSrc: '/images/certificate-5.jpeg',
        alt: 'Certificate for Choosing Foundation Shade',
      },
      {
        title: 'Advanced Professional Training',
        issuer: 'PK Institute',
        imageSrc: '/images/certificate-6.jpeg',
        alt: 'Advanced Professional Training Certificate',
      },
      {
        title: 'Masterclass Certification',
        issuer: 'PK Institute',
        imageSrc: '/images/certificate-7.jpeg',
        alt: 'Masterclass Certification',
      },
      {
        title: 'Specialized Bridal Workshop',
        issuer: 'PK Institute',
        imageSrc: '/images/certificate-8.jpeg',
        alt: 'Specialized Bridal Workshop Certificate',
      },
    ] satisfies CertificationItem[],
  },
} as const;

export const mr = {
  brand: {
    name: 'SK Makeover',
    domain: 'skmakeover',
    artist: 'विद्या मालक',
  },
  nav: {
    home: 'मुख्य पान',
    about: 'आमच्याबद्दल',
    portfolio: 'पोर्टफोलिओ',
    packages: 'पॅकेजेस',
    certifications: 'प्रमाणपत्रे',
    contact: 'संपर्क',
    bookYourDate: 'बुकिंग करा',
    viewPortfolio: 'पोर्टफोलिओ पहा',
  },
  hero: {
    eyebrow: 'लक्झरी ब्राइडल मेकअप स्टुडिओ',
    title: 'ब्राइडल ब्युटी, अत्यंत बारकाईने तयार केलेली.',
    description:
      'एस के मेकओव्हर असे सॉफ्ट-फोकस, कॅमेरा-रेडी ब्राइडल लूक्स तयार करते जे प्रत्यक्षात अत्यंत सुंदर आणि प्रत्येक फोटोमध्ये कायमस्वरूपी उत्तम दिसतात.',
    supportingLine: 'मिनिमलिस्ट. मोहक. खास तुमच्या आयुष्यातील सर्वात महत्त्वाच्या दिवसासाठी बनवलेले.',
  },
  about: {
    title: 'विद्या मालक यांनी तयार केलेला एक प्रीमियम ब्राइडल अनुभव.',
    description:
      'विद्या मालक प्रत्येक ब्राइडल अपॉइंटमेंटमध्ये एक अचूक नजर, शांतता आणि लक्झरी दृष्टिकोन आणतात. याचा परिणाम म्हणजे एक परिष्कृत मेकअप जो तुमची नैसर्गिक सुंदरता वाढवतो, फोटोंमध्ये सुंदर दिसतो आणि प्रत्येक समारंभात अगदी तसाच टिकून राहतो.',
    pillars: [
      'सॉफ्ट स्कल्पटिंग आणि उत्तम स्किन वर्क',
      'दिवस आणि रात्रीच्या कार्यक्रमांसाठी कॅमेरा-फ्रेंडली तपशील',
      'प्रीमियम ब्राइडल तयारी आणि फिनिश',
    ],
    quote:
      'तुमचा ब्राइडल लूक सहज, चमकदार आणि तुमची स्वतःची ओळख जपणारा असला पाहिजे.',
  },
  contact: en.contact,
  reel: en.reel,
  portfolio: en.portfolio.map((item) => ({
    ...item,
  })),
  packages: en.packages.map(pkg => ({
    ...pkg,
    priceLabel: 'पासून सुरू',
  })),
  certifications: {
    title: 'व्यावसायिक प्रमाणपत्रे',
    description: 'प्रगत मेकअप आणि त्वचा उपचारांमध्ये मान्यताप्राप्त कौशल्य.',
    items: en.certifications.items,
  },
};

// Override specific portfolio and package texts
mr.portfolio[0].title = 'मराठी स्टेज लूक';
mr.portfolio[0].caption = 'पारंपारिक मराठी प्रेरित स्टेज लूक — क्लासिक काजळ, चमकदार रंग, आणि सांस्कृतिक सौंदर्याने परिपूर्ण असा परफॉर्मन्स-रेडी फिनिश.';
mr.portfolio[1].title = 'स्टेज ग्लॅम';
mr.portfolio[1].caption = 'शालेय सादरीकरणासाठी एक आकर्षक, कॅमेरा-रेडी स्टेज लूक — बोलके डोळे, चमकदार त्वचा आणि स्पॉटलाइटसाठी तयार केलेला लूक.';
mr.portfolio[2].title = 'पर्ल सेरेमनी';
mr.portfolio[2].caption = 'रिफाईंड वॉर्म फिनिश आणि लक्झरी स्किन वर्कसह ब्राइडल ट्रान्सफॉर्मेशन.';
mr.portfolio[3].title = 'शॅम्पेन इव्हिनिंग';
mr.portfolio[3].caption = 'सॉफ्ट डेफिनिशन आणि क्लीन एडिटोरियल एजसह आकर्षक इव्हेंट-रेडी ग्लॅम.';

mr.packages[0].name = 'सिग्नेचर ब्राइडल मेकओव्हर';
mr.packages[0].description = 'मुख्य विवाह समारंभासाठी डिझाइन केलेले संपूर्ण ब्राइडल ट्रान्सफॉर्मेशन, ज्यामध्ये संतुलित लक्झरी फिनिश आणि दीर्घकाळ टिकणारा आत्मविश्वास आहे.';
mr.packages[0].features = [
  'कस्टम बेस आणि कॉम्प्लेक्शन मॅपिंग',
  'डोळे, पापण्या, ड्रेप आणि फायनल टच-अप',
  'ऑन-लोकेशन ब्राइडल सेटअप',
];
mr.packages[0].badge = 'सर्वाधिक पसंती';

mr.packages[1].name = 'लक्झरी एंगेजमेंट ग्लॅम';
mr.packages[1].description = 'क्लोज-अप, स्टेज लाइट्स आणि सेलिब्रेशन फोटोग्राफीसाठी सॉफ्ट एडिटोरियल फिनिशसह एक आकर्षक एंगेजमेंट लूक.';
mr.packages[1].features = [
  'सॉफ्ट ग्लॅम किंवा पॉलिश ग्लॅम',
  'दीर्घकाळ टिकणारी त्वचा आणि डोळ्यांचे मेकअप',
  'एंगेजमेंट, रोका किंवा पार्टी लूकसाठी योग्य',
];
mr.packages[1].badge = 'मोहक पूर्वदृश्य';

mr.packages[2].name = 'प्री-ब्राइडल ग्रूमिंग';
mr.packages[2].description = 'लग्नाच्या आठवड्यापूर्वी त्वचेची तयारी, टेक्सचर रिफाइनमेंट आणि मेकअप दीर्घकाळ टिकण्यावर लक्ष केंद्रित करणारी पूर्व-तयारी सेवा.';
mr.packages[2].features = [
  'स्किन प्रेप प्लॅनिंग आणि ग्लो मॅपिंग',
  'टोन बॅलन्सिंग आणि करेक्टिव्ह रिफाइनमेंट',
  'लग्नाच्या अंतिम तयारीसाठी आदर्श',
];
mr.packages[2].badge = 'पूर्वतयारी';

export const kn = {
  brand: {
    name: 'SK Makeover',
    domain: 'skmakeover',
    artist: 'ವಿದ್ಯಾ ಮಾಲಕ್',
  },
  nav: {
    home: 'ಮುಖಪುಟ',
    about: 'ನಮ್ಮ ಬಗ್ಗೆ',
    portfolio: 'ಪೋರ್ಟ್ಫೋಲಿಯೋ',
    packages: 'ಪ್ಯಾಕೇಜ್‌ಗಳು',
    certifications: 'ಪ್ರಮಾಣಪತ್ರಗಳು',
    contact: 'ಸಂಪರ್ಕಿಸಿ',
    bookYourDate: 'ಬುಕಿಂಗ್ ಮಾಡಿ',
    viewPortfolio: 'ಪೋರ್ಟ್ಫೋಲಿಯೋ ವೀಕ್ಷಿಸಿ',
  },
  hero: {
    eyebrow: 'ಐಷಾರಾಮಿ ಬ್ರೈಡಲ್ ಮೇಕಪ್ ಸ್ಟುಡಿಯೋ',
    title: 'ಬ್ರೈಡಲ್ ಸೌಂದರ್ಯ, ಅತ್ಯಂತ ಎಚ್ಚರಿಕೆಯಿಂದ ತಯಾರಿಸಲಾಗಿದೆ.',
    description:
      'ಎಸ್ ಕೆ ಮೇಕ್ಓವರ್ ಸಾಫ್ಟ್-ಫೋಕಸ್, ಕ್ಯಾಮೆರಾ-ರೆಡಿ ಬ್ರೈಡಲ್ ಲುಕ್‌ಗಳನ್ನು ರಚಿಸುತ್ತದೆ, ಅದು ವಾಸ್ತವದಲ್ಲಿ ಮತ್ತು ಪ್ರತಿಯೊಂದು ಫೋಟೋದಲ್ಲಿ ಶಾಶ್ವತವಾಗಿ ಅತ್ಯುತ್ತಮವಾಗಿ ಕಾಣುತ್ತದೆ.',
    supportingLine: 'ಮಿನಿಮಲಿಸ್ಟ್. ಸೊಗಸಾದ. ನಿಮ್ಮ ಜೀವನದ ಅತ್ಯಂತ ಪ್ರಮುಖ ದಿನಕ್ಕಾಗಿ ವಿಶೇಷವಾಗಿ ರಚಿಸಲಾಗಿದೆ.',
  },
  about: {
    title: 'ವಿದ್ಯಾ ಮಾಲಕ್ ಅವರಿಂದ ರಚಿಸಲ್ಪಟ್ಟ ಪ್ರೀಮಿಯಂ ಬ್ರೈಡಲ್ ಅನುಭವ.',
    description:
      'ವಿದ್ಯಾ ಮಾಲಕ್ ಪ್ರತಿ ಬ್ರೈಡಲ್ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗೆ ನಿಖರವಾದ ಕಣ್ಣು, ಶಾಂತತೆ ಮತ್ತು ಐಷಾರಾಮಿ ವಿಧಾನವನ್ನು ತರುತ್ತಾರೆ. ಇದರ ಪರಿಣಾಮವಾಗಿ ನಿಮ್ಮ ನೈಸರ್ಗಿಕ ಸೌಂದರ್ಯವನ್ನು ಹೆಚ್ಚಿಸುವ, ಫೋಟೋಗಳಲ್ಲಿ ಸುಂದರವಾಗಿ ಕಾಣುವ ಮತ್ತು ಪ್ರತಿ ಸಮಾರಂಭದಲ್ಲೂ ಹಾಗೆಯೇ ಉಳಿಯುವ ಪರಿಷ್ಕೃತ ಮೇಕಪ್ ಸಿಗುತ್ತದೆ.',
    pillars: [
      'ಸಾಫ್ಟ್ ಸ್ಕಲ್ಪ್ಟಿಂಗ್ ಮತ್ತು ಉತ್ತಮ ಸ್ಕಿನ್ ವರ್ಕ್',
      'ಹಗಲು-ರಾತ್ರಿ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಕ್ಯಾಮೆರಾ-ಸ್ನೇಹಿ ವಿವರಗಳು',
      'ಪ್ರೀಮಿಯಂ ಬ್ರೈಡಲ್ ತಯಾರಿ ಮತ್ತು ಫಿನಿಶ್',
    ],
    quote:
      'ನಿಮ್ಮ ಬ್ರೈಡಲ್ ಲುಕ್ ಸಹಜ, ಹೊಳೆಯುವ ಮತ್ತು ನಿಮ್ಮ ಸ್ವಂತ ಗುರುತನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುವಂತಿರಬೇಕು.',
  },
  contact: en.contact,
  reel: en.reel,
  portfolio: en.portfolio.map((item) => ({
    ...item,
  })),
  packages: en.packages.map(pkg => ({
    ...pkg,
    priceLabel: 'ಇಂದ ಪ್ರಾರಂಭ',
  })),
  certifications: {
    title: 'ವೃತ್ತಿಪರ ಪ್ರಮಾಣಪತ್ರಗಳು',
    description: 'ಸುಧಾರಿತ ಮೇಕಪ್ ಮತ್ತು ತ್ವಚೆ ಚಿಕಿತ್ಸೆಗಳಲ್ಲಿ ಮಾನ್ಯತೆ ಪಡೆದ ಪರಿಣತಿ.',
    items: en.certifications.items,
  },
};

// Override specific portfolio and package texts
kn.portfolio[0].title = 'ಮರಾಠಿ ಸ್ಟೇಜ್ ಲುಕ್';
kn.portfolio[0].caption = 'ಸಾಂಪ್ರದಾಯಿಕ ಮರಾಠಿ ಪ್ರೇರಿತ ಶಾಲಾ ಸ್ಟೇಜ್ ಲುಕ್ — ಕ್ಲಾಸಿಕ್ ಕಾಡಿಗೆ, ರೋಮಾಂಚಕ ಬಣ್ಣಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಸೌಂದರ್ಯದಿಂದ ಕೂಡಿದ ಪರ್ಫಾರ್ಮೆನ್ಸ್-ರೆಡಿ ಫಿನಿಶ್.';
kn.portfolio[1].title = 'ಸ್ಟೇಜ್ ಗ್ಲಾಮ್';
kn.portfolio[1].caption = 'ಶಾಲಾ ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಕ್ಯಾಮೆರಾ-ರೆಡಿ ಸ್ಟೇಜ್ ಲುಕ್ — ಅಭಿವ್ಯಕ್ತಿಶೀಲ ಕಣ್ಣುಗಳು, ಕಾಂತಿಯುತ ತ್ವಚೆ ಮತ್ತು ಸ್ಪಾಟ್‌ಲೈಟ್‌ಗಾಗಿ ಸಿದ್ಧಪಡಿಸಿದ ಲುಕ್.';
kn.portfolio[2].title = 'ಪರ್ಲ್ ಸೆರಮನಿ';
kn.portfolio[2].caption = 'ರಿಫೈನ್ಡ್ ವಾರ್ಮ್ ಫಿನಿಶ್ ಮತ್ತು ಐಷಾರಾಮಿ ಸ್ಕಿನ್ ವರ್ಕ್‌ನೊಂದಿಗೆ ಬ್ರೈಡಲ್ ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮೇಶನ್.';
kn.portfolio[3].title = 'ಶಾಂಪೇನ್ ಇವಿನಿಂಗ್';
kn.portfolio[3].caption = 'ಸಾಫ್ಟ್ ಡೆಫಿನಿಷನ್ ಮತ್ತು ಕ್ಲೀನ್ ಎಡಿಟೋರಿಯಲ್ ಎಡ್ಜ್‌ನೊಂದಿಗೆ ಸೊಗಸಾದ ಈವೆಂಟ್-ರೆಡಿ ಗ್ಲಾಮ್.';

kn.packages[0].name = 'ಸಿಗ್ನೇಚರ್ ಬ್ರೈಡಲ್ ಮೇಕ್ಓವರ್';
kn.packages[0].description = 'ಮುಖ್ಯ ವಿವಾಹ ಸಮಾರಂಭಕ್ಕಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಂಪೂರ್ಣ ಬ್ರೈಡಲ್ ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮೇಶನ್, ಸಮತೋಲಿತ ಐಷಾರಾಮಿ ಫಿನಿಶ್ ಮತ್ತು ದೀರ್ಘಕಾಲ ಉಳಿಯುವ ವಿಶ್ವಾಸದೊಂದಿಗೆ.';
kn.packages[0].features = [
  'ಕಸ್ಟಮ್ ಬೇಸ್ ಮತ್ತು ಕಾಂಪ್ಲೆಕ್ಷನ್ ಮ್ಯಾಪಿಂಗ್',
  'ಕಣ್ಣುಗಳು, ರೆಪ್ಪೆಗಳು, ಡ್ರೇಪ್ ಮತ್ತು ಫೈನಲ್ ಟಚ್-ಅಪ್',
  'ಆನ್-ಲೋಕೇಶನ್ ಬ್ರೈಡಲ್ ಸೆಟಪ್',
];
kn.packages[0].badge = 'ಹೆಚ್ಚು ಬೇಡಿಕೆಯಿರುವ';

kn.packages[1].name = 'ಲಕ್ಸುರಿ ಎಂಗೇಜ್ಮೆಂಟ್ ಗ್ಲಾಮ್';
kn.packages[1].description = 'ಕ್ಲೋಸ್-ಅಪ್, ಸ್ಟೇಜ್ ಲೈಟ್ಸ್ ಮತ್ತು ಸೆಲೆಬ್ರೇಶನ್ ಛಾಯಾಗ್ರಹಣಕ್ಕಾಗಿ ಸಾಫ್ಟ್ ಎಡಿಟೋರಿಯಲ್ ಫಿನಿಶ್‌ನೊಂದಿಗೆ ಅತ್ಯಾಕರ್ಷಕ ಎಂಗೇಜ್ಮೆಂಟ್ ಲುಕ್.';
kn.packages[1].features = [
  'ಸಾಫ್ಟ್ ಗ್ಲಾಮ್ ಅಥವಾ ಪಾಲಿಶ್ಡ್ ಗ್ಲಾಮ್',
  'ದೀರ್ಘಕಾಲ ಉಳಿಯುವ ತ್ವಚೆ ಮತ್ತು ಕಣ್ಣಿನ ಮೇಕಪ್',
  'ಎಂಗೇಜ್ಮೆಂಟ್, ರೋಕಾ ಅಥವಾ ಪಾರ್ಟಿ ಲುಕ್‌ಗೆ ಸೂಕ್ತ',
];
kn.packages[1].badge = 'ಸೊಗಸಾದ ಮುನ್ನೋಟ';

kn.packages[2].name = 'ಪ್ರೀ-ಬ್ರೈಡಲ್ ಗ್ರೂಮಿಂಗ್';
kn.packages[2].description = 'ಮದುವೆಯ ವಾರದ ಮೊದಲು ತ್ವಚೆಯ ತಯಾರಿ, ಟೆಕ್ಸ್ಚರ್ ರಿಫೈನ್ಮೆಂಟ್ ಮತ್ತು ಮೇಕಪ್ ದೀರ್ಘಕಾಲ ಉಳಿಯುವ ಬಗ್ಗೆ ಗಮನಹರಿಸುವ ಪೂರ್ವ-ತಯಾರಿ ಸೇವೆ.';
kn.packages[2].features = [
  'ಸ್ಕಿನ್ ಪ್ರೆಪ್ ಪ್ಲಾನಿಂಗ್ ಮತ್ತು ಗ್ಲೋ ಮ್ಯಾಪಿಂಗ್',
  'ಟೋನ್ ಬ್ಯಾಲೆನ್ಸಿಂಗ್ ಮತ್ತು ಕರೆಕ್ಟಿವ್ ರಿಫೈನ್ಮೆಂಟ್',
  'ಮದುವೆಯ ಅಂತಿಮ ಸಿದ್ಧತೆಗೆ ಆದರ್ಶ',
];
kn.packages[2].badge = 'ಪೂರ್ವತಯಾರಿ';

export const dictionaries = {
  en,
  mr,
  kn
};

export type SiteDictionary = typeof en;
