'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { MediaStage } from '@/components/media-stage';
import { SectionHeading } from '@/components/ui/section-heading';
import { getI18n } from '@/lib/i18n/index';

const imageSizes = '(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw';

export function CertificationsSection({ locale = 'en' }: { locale?: 'en' | 'mr' | 'kn' }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const i18n = getI18n(locale);
  const certifications = i18n.translations[locale].certifications;

  return (
    <section id="certifications" className="scroll-mt-28 py-20 bg-champagne/10">
      <Container>
        <SectionHeading
          eyebrow={i18n.translations[locale].nav.certifications}
          title={certifications.title}
          description={certifications.description}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.items.map((item, index) => (
            <article
              key={index}
              className="group cursor-pointer overflow-hidden rounded-[8px] border border-line bg-white/90 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:border-champagne/40"
              onClick={() => setSelectedImage(item.imageSrc)}
            >
              <MediaStage
                kind="image"
                src={item.imageSrc}
                alt={item.alt}
                title={item.title}
                aspectClassName="aspect-[4/3]"
                frameClassName="rounded-none border-0 bg-white/10 shadow-none p-2"
                imageSizes={imageSizes}
                showZoomControls={false}
                showReplayControl={false}
              />

              <div className="p-5 border-t border-line/50">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-champagne font-bold">{item.issuer}</p>
                <h3 className="mt-2 font-display text-[1.1rem] leading-snug text-charcoal">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </Container>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8 md:top-8"
            onClick={() => setSelectedImage(null)}
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
          
          <div 
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Certificate Full View" 
              className="h-full max-h-[85vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
