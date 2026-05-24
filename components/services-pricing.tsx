import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { ButtonLink } from '@/components/ui/button-link';
import { site } from '@/lib/site-data';

export function ServicesPricing() {
  return (
    <section id="packages" className="scroll-mt-28 py-20">
      <Container>
        <SectionHeading
          eyebrow="Services and Pricing"
          title="Scannable packages for brides who want clarity without losing the luxury feel."
          description="Indicative pricing is shown here for structure. Final quotes can be refined by date, venue, guest count, and add-ons."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {site.packages.map((pkg) => (
            <article
              key={pkg.name}
              className={[
                'flex h-full flex-col rounded-[1.85rem] border p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1',
                pkg.featured
                  ? 'border-charcoal/10 bg-charcoal text-ivory shadow-[0_28px_80px_rgba(31,27,23,0.18)]'
                  : 'border-line bg-white/80 text-charcoal',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={pkg.featured ? 'text-xs uppercase tracking-[0.28em] text-champagneSoft' : 'text-xs uppercase tracking-[0.28em] text-champagne'}>
                    {pkg.badge}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight">{pkg.name}</h3>
                </div>

                <span
                  className={[
                    'shrink-0 rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em]',
                    pkg.featured ? 'border-white/15 bg-white/10 text-ivory/75' : 'border-champagne/25 bg-champagne/10 text-champagne',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {pkg.badge}
                </span>
              </div>

              <div className="mt-6">
                <p className={pkg.featured ? 'text-sm uppercase tracking-[0.22em] text-ivory/55' : 'text-sm uppercase tracking-[0.22em] text-charcoal/45'}>
                  {pkg.priceLabel}
                </p>
                <p className="mt-2 font-display text-5xl tracking-tight">{pkg.price}</p>
              </div>

              <p className={pkg.featured ? 'mt-5 text-sm leading-7 text-ivory/78' : 'mt-5 text-sm leading-7 text-charcoal/70'}>
                {pkg.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {pkg.features.map((feature) => (
                  <li key={feature} className={pkg.featured ? 'flex gap-3 text-ivory/80' : 'flex gap-3 text-charcoal/75'}>
                    <span className={pkg.featured ? 'mt-1 h-2 w-2 rounded-full bg-champagneSoft' : 'mt-1 h-2 w-2 rounded-full bg-champagne'} />
                    <span className="leading-7">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <ButtonLink
                  href="#contact"
                  variant={pkg.featured ? 'accent' : 'secondary'}
                  className="w-full py-3.5 text-base"
                >
                  Enquire for Availability
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
