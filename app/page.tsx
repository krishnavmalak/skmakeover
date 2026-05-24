import { AboutArtist } from '@/components/about-artist';
import { FooterContact } from '@/components/footer-contact';
import { HeroSection } from '@/components/hero-section';
import { PortfolioGallery } from '@/components/portfolio-gallery';
import { ServicesPricing } from '@/components/services-pricing';
import { SiteHeader } from '@/components/site-header';

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-champagne/10 blur-3xl"
        />
        <HeroSection />
        <AboutArtist />
        <PortfolioGallery />
        {/* <ServicesPricing /> */}
        <FooterContact />
      </main>
    </>
  );
}
