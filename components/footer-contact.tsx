import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button-link';
import { site } from '@/lib/site-data';

const contactLinks = [
  {
    label: 'Phone',
    value: site.contact.phoneDisplay,
    href: site.contact.phoneHref,
    external: false,
  },
  // {
  //   label: 'Email',
  //   value: site.contact.email,
  //   href: site.contact.emailHref,
  //   external: false,
  // },
  {
    label: 'Instagram',
    value: site.contact.instagram,
    href: site.contact.instagramHref,
    external: true,
  },
  {
    label: 'YouTube',
    value: site.contact.youtube,
    href: site.contact.youtubeHref,
    external: true,
  },
];

export function FooterContact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-28 border-t border-line py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-champagne">Book Your Date</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-charcoal md:text-5xl">
              Reserve your bridal date with SK Makeover.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-charcoal/70">
              For weddings, engagements, and pre-bridal bookings, SK Makeover keeps the contact path simple: one
              clear phone line, a premium booking email, and the official domain at every touchpoint.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.contact.phoneHref} variant="accent" className="px-7 py-3.5 text-base">
                Call {site.contact.phoneDisplay}
              </ButtonLink>
              {/* <ButtonLink href={site.contact.emailHref} variant="secondary" className="px-7 py-3.5 text-base">
                Email Bookings
              </ButtonLink> */}
            </div>
          </div>

          <div className="rounded-[2rem] border border-line bg-white/80 p-6 shadow-soft">
            <div className="grid gap-5 sm:grid-cols-2">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer noopener' : undefined}
                  className="rounded-[1.35rem] border border-line bg-ivory-soft p-5 hover:-translate-y-0.5 hover:border-champagne/25 hover:bg-white"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-champagne">{item.label}</p>
                  <p className="mt-3 break-words text-sm leading-7 text-charcoal">{item.value}</p>
                </a>
              ))}
            </div>

            {/* <div className="mt-5 rounded-[1.35rem] border border-champagne/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,243,234,0.95))] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-champagne">Official domain</p>
              <p className="mt-3 font-display text-2xl text-charcoal">{site.brand.domain}</p>
              <p className="mt-2 text-sm leading-7 text-charcoal/65">
                Always book and communicate through the official domain to ensure a verified, direct connection with the studio.
              </p>
            </div> */}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-sm text-charcoal/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} {site.brand.name}. Bridal artistry by {site.brand.artist}.</p>
          <p>Appointments by request only.</p>
        </div>
      </Container>
    </footer>
  );
}
