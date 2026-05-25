import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { getI18n } from '@/lib/i18n/index';

export function AboutArtist({ locale = 'en' }: { locale?: 'en' | 'mr' | 'kn' }) {
  const i18n = getI18n(locale);
  // i18n-js returns objects when accessed this way, but we can also just get the array from translations.
  const pillars = i18n.translations[locale].about.pillars as string[];

  return (
    <section id="about" className="scroll-mt-28 py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="About the Artist"
              title={i18n.t('about.title')}
              description={i18n.t('about.description')}
            />

            <div className="grid gap-4 sm:grid-cols-3">
              {pillars.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-line bg-white/75 p-5 shadow-soft">
                  <div className="h-1.5 w-14 rounded-full bg-champagne/70" />
                  <p className="mt-4 text-sm leading-7 text-charcoal/70">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-line bg-white/75 p-5 shadow-soft">
            <div className="rounded-[1.7rem] border border-dashed border-champagne/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,243,234,0.95))] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-champagne">Celebrity Makeup Artist</p>
              <h3 className="mt-4 font-display text-4xl text-charcoal md:text-5xl">{i18n.t('brand.artist')}</h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-charcoal/70">{i18n.t('about.quote')}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex h-full flex-col rounded-[1.35rem] bg-charcoal px-5 py-5 text-ivory shadow-[0_18px_50px_rgba(31,27,23,0.16)]">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-champagneSoft">Profile</p>
                  <p className="mt-3 text-xl font-display">Premium bridal precision</p>
                  <p className="mt-3 text-sm leading-7 text-ivory/78">
                    Soft sculpting, elegant balance, and a calm appointment flow designed for high-end bridal clients.
                  </p>
                </div>

                <div className="flex h-full flex-col rounded-[1.35rem] border border-line bg-white/80 px-5 py-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-champagne">Experience</p>
                  <p className="mt-3 text-xl font-display text-charcoal">Editorial polish</p>
                  <p className="mt-3 text-sm leading-7 text-charcoal/70">
                    Refined for ceremonies, receptions, and close-up photography under natural or flash lighting.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[1.35rem] border border-champagne/20 bg-white/65 px-5 py-5">
                <p className="text-xs uppercase tracking-[0.26em] text-champagne">Studio philosophy</p>
                <p className="mt-3 text-lg leading-8 text-charcoal md:text-xl">{i18n.t('hero.supportingLine')}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
