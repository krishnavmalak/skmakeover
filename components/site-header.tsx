import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button-link';
import { MobileMenu } from '@/components/mobile-menu';
import { site } from '@/lib/site-data';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  // { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[rgba(248,243,234,0.84)] backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between gap-4 py-4">
          <a href="#home" className="group min-w-0">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-champagne/30 bg-white/75 font-display text-lg text-champagne shadow-soft transition-transform duration-300 group-hover:-translate-y-0.5">
                S
              </span>
              <div className="min-w-0">
                <p className="truncate font-display text-xl text-charcoal md:text-2xl">{site.brand.name}</p>
                <p className="text-[0.68rem] uppercase tracking-[0.26em] text-champagne">Vidya Malak</p>
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-charcoal/70 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-charcoal">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden text-[0.68rem] uppercase tracking-[0.24em] text-charcoal/45 xl:inline">
              {site.brand.domain}
            </span>
            <ButtonLink href="#contact" variant="accent" className="hidden px-4 py-2.5 text-sm lg:inline-flex">
              Book Your Date
            </ButtonLink>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
