import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button-link';
import { VerticalReelVideo } from '@/components/vertical-reel-video';
import { site } from '@/lib/site-data';

const highlights = ['On-location bridal artistry', 'Camera-ready finish', 'Appointments only'];

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-28 pt-14 md:pt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-champagne">{site.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-2xl font-display text-5xl leading-[0.96] text-charcoal md:text-6xl lg:text-7xl">
              {site.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-charcoal/70 md:text-xl">
              {site.hero.description}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-charcoal/55">{site.hero.supportingLine}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contact" variant="accent" className="px-7 py-3.5 text-base">
                Book Your Date
              </ButtonLink>
              <ButtonLink href="#portfolio" variant="secondary" className="px-7 py-3.5 text-base">
                View Portfolio
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-charcoal/65"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-6 h-24 w-24 rounded-full bg-champagne/10 blur-3xl" aria-hidden="true" />
            <div className="mx-auto w-full max-w-[380px] rounded-[2.25rem] border border-line bg-white/75 p-4 shadow-soft backdrop-blur lg:ml-auto lg:mr-0">
              <VerticalReelVideo src={site.reel.src} poster={site.reel.poster} />
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ['30s', 'Reel length'],
                  ['WebP', 'Gallery-ready'],
                  ['Edge', 'Static export'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[1.25rem] border border-line bg-ivory-soft px-4 py-4">
                    <p className="font-display text-2xl text-charcoal">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-charcoal/55">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
