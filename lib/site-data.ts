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

export type PackageItem = {
  name: string;
  priceLabel: string;
  price: string;
  description: string;
  features: string[];
  badge: string;
  featured?: boolean;
};

export const site = {
  brand: {
    name: 'SK Makeover',
    domain: 'skmakeover',
    artist: 'Vidya Malak',
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
    youtube: '@skmakeover.in',
    youtubeHref: 'https://youtube.com/@skmakeover.in',
  },
  reel: {
    // Demo reel source. Replace with a public MP4, YouTube watch URL, or YouTube Shorts URL.
    src: 'https://www.instagram.com/p/DX-kx0TvYpt',
    // src: 'https://www.youtube.com/watch?v=VIDEO_ID',
    poster: '/images/mukta.jpg',
  },
  portfolio: [
    // {
    //   title: 'Maharani Pearl',
    //   caption: 'Soft ivory skin, diffused bronze eyes, and a polished bridal contour.',
    //   alt: 'Elegant bridal transformation with pearl-toned tones and luminous finish',
    //   mediaKind: 'image',
    //   mediaSrc: '/demo/portfolio-maharani-pearl.svg',
    //   finish: 'Signature',
    // },
    // {
    //   title: 'Champagne Veil',
    //   caption: 'A refined engagement glow with satin skin and champagne accents.',
    //   alt: 'Luxury engagement glam with warm champagne undertones',
    //   mediaKind: 'image',
    //   mediaSrc: '/demo/portfolio-champagne-veil.svg',
    //   finish: 'Engagement',
    // },
    // {
    //   title: 'Golden Hour Bride',
    //   caption: 'Radiant skin, sculpted eyes, and a warm, editorial lip finish.',
    //   alt: 'Bridal look with golden-hour warmth and editorial styling',
    //   mediaKind: 'image',
    //   mediaSrc: '/demo/portfolio-golden-hour-bride.svg',
    //   finish: 'Ceremony',
    // },
    // {
    //   title: 'Ivory Reverie',
    //   caption: 'Modern bridal softness with crisp liner and airy complexion work.',
    //   alt: 'Contemporary bridal makeup look with ivory and soft gold accents',
    //   mediaKind: 'image',
    //   mediaSrc: '/demo/portfolio-ivory-reverie.svg',
    //   finish: 'Minimal',
    // },
    // {
    //   title: 'Royal Sangeet',
    //   caption: 'Defined eyes, luminous skin, and a deeper color story for the stage.',
    //   alt: 'High-definition bridal glam for a sangeet celebration',
    //   mediaKind: 'image',
    //   mediaSrc: '/demo/portfolio-royal-sangeet.svg',
    //   finish: 'Evening',
    // },
    // {
    //   title: 'Pearl Reception',
    //   caption: 'A refined reception transformation with velvety skin and soft shine.',
    //   alt: 'Elegant bridal reception makeup with polished glow',
    //   mediaKind: 'image',
    //   mediaSrc: '/demo/portfolio-pearl-reception.svg',
    //   finish: 'Reception',
    // },
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
    {
      title: 'Couture Bridal Reel',
      caption: 'A short bridal reel with movement, detail, and a camera-ready finish.',
      alt: 'Instagram bridal reel with movement and a polished couture finish',
      mediaKind: 'iframe',
      mediaSrc: 'https://www.instagram.com/p/DX-kx0TvYpt',
      mediaAspectClassName: 'aspect-[9/16]',
      finish: 'Motion',
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
} as const;
