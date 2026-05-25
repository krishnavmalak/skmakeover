import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://skmakeover.pages.dev'),
  title: {
    default: 'SK Makeover | Luxury Bridal Makeup Studio by Vidya Malak',
    template: '%s | SK Makeover',
  },
  description:
    'SK Makeover is a luxury bridal makeup studio by celebrity artist Vidya Malak, created for premium bridal clients who want a minimalist, editorial finish.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SK Makeover | Luxury Bridal Makeup Studio',
    description:
      'Minimal, elegant bridal artistry by Vidya Malak for high-end weddings, engagements, and pre-bridal prep.',
    url: 'https://skmakeover.pages.dev',
    siteName: 'SK Makeover',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 800,
        height: 800,
        alt: 'SK Makeover Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SK Makeover | Luxury Bridal Makeup Studio',
    description:
      'Minimal, elegant bridal artistry by Vidya Malak for premium bridal clients.',
    images: ['/images/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f8f3ea',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} scroll-smooth`}>
      <body className="bg-ivory font-body text-charcoal antialiased">{children}</body>
    </html>
  );
}
