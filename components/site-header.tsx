import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button-link';
import { MobileMenu } from '@/components/mobile-menu';
import { getI18n, SupportedLanguage } from '@/lib/i18n/index';

export function SiteHeader({ locale = 'en' }: { locale?: SupportedLanguage }) {
  const i18n = getI18n(locale);
  const navItems = [
    { label: i18n.t('nav.home'), href: '#home' },
    { label: i18n.t('nav.about'), href: '#about' },
    { label: i18n.t('nav.certifications'), href: '#certifications' },
    { label: i18n.t('nav.portfolio'), href: '#portfolio' },
    // { label: i18n.t('nav.packages'), href: '#packages' },
    { label: i18n.t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[rgba(248,243,234,0.84)] backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between gap-4 py-4">
          <a href="#home" className="group min-w-0">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-champagne/30 shadow-soft transition-transform duration-300 group-hover:-translate-y-0.5">
                <Image
                  src="/images/logo.jpeg"
                  alt={`${i18n.t('brand.name')} Logo`}
                  fill
                  sizes="45px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-xl text-charcoal md:text-2xl">{i18n.t('brand.name')}</p>
                <p className="text-[0.68rem] uppercase tracking-[0.26em] text-champagne">{i18n.t('brand.artist')}</p>
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
              {i18n.t('brand.domain')}
            </span>

            <div className="flex items-center gap-1 rounded-full border border-line bg-white/50 p-1">
              <a
                href="/"
                className={['px-2.5 py-1 text-[0.7rem] rounded-full transition-colors', locale === 'en' ? 'bg-white text-charcoal shadow-sm' : 'text-charcoal/60 hover:text-charcoal'].join(' ')}
              >
                EN
              </a>
              <a
                href="/mr"
                className={['px-2.5 py-1 text-[0.7rem] rounded-full transition-colors', locale === 'mr' ? 'bg-white text-charcoal shadow-sm' : 'text-charcoal/60 hover:text-charcoal'].join(' ')}
              >
                MR
              </a>
              <a
                href="/kn"
                className={['px-2.5 py-1 text-[0.7rem] rounded-full transition-colors', locale === 'kn' ? 'bg-white text-charcoal shadow-sm' : 'text-charcoal/60 hover:text-charcoal'].join(' ')}
              >
                KN
              </a>
            </div>

            <ButtonLink href="#contact" variant="accent" className="hidden px-4 py-2.5 text-sm lg:inline-flex">
              {i18n.t('nav.bookYourDate')}
            </ButtonLink>
            <MobileMenu locale={locale} />
          </div>
        </div>
      </Container>
    </header>
  );
}
