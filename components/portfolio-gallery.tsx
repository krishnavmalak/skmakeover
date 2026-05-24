import { Container } from '@/components/ui/container';
import { MediaStage } from '@/components/media-stage';
import { SectionHeading } from '@/components/ui/section-heading';
import { resolveInstagramPreview } from '@/lib/instagram-preview';
import { isInstagramUrl } from '@/lib/media-url';
import { site, type PortfolioItem } from '@/lib/site-data';

const imageSizes = '(min-width: 1280px) 31vw, (min-width: 768px) 46vw, 100vw';

type ResolvedPortfolioItem = PortfolioItem & {
  showIframeChromeMask?: boolean;
};

export async function PortfolioGallery() {
  const portfolio = site.portfolio as PortfolioItem[];
  const resolvedPortfolio = (await Promise.all(
    portfolio.map(async (item) => {
      if (item.mediaKind === 'iframe' && isInstagramUrl(item.mediaSrc)) {
        const preview = await resolveInstagramPreview(item.mediaSrc);

        if (preview) {
          return {
            ...item,
            mediaKind: preview.kind,
            mediaSrc: preview.src,
            mediaPoster: preview.poster ?? item.mediaPoster,
            showIframeChromeMask: preview.kind === 'iframe',
          };
        }
      }

      return item;
    }),
  )) as ResolvedPortfolioItem[];

  return (
    <section id="portfolio" className="scroll-mt-28 py-20">
      <Container>
        <SectionHeading
          eyebrow="Portfolio Gallery"
          title="A clean grid for bridal transformations that need to feel expensive at a glance."
          description="Use the +/- controls to inspect detail. The gallery keeps the focus on the media itself with no outbound click-throughs or external labels."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {resolvedPortfolio.map((item) => {
            const aspectClassName = item.mediaAspectClassName ?? 'aspect-[4/5]';

            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[1.75rem] border border-line bg-white/80 shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <MediaStage
                  kind={item.mediaKind}
                  src={item.mediaSrc}
                  alt={item.alt}
                  poster={item.mediaPoster}
                  title={item.title}
                  aspectClassName={aspectClassName}
                  frameClassName="rounded-none border-0 bg-transparent shadow-none"
                  imageSizes={imageSizes}
                  webpBase={item.mediaWebpBase}
                  showIframeChromeMask={item.showIframeChromeMask}
                >
                  <div className="bg-gradient-to-t from-charcoal/45 via-charcoal/10 to-transparent p-5">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                      {item.finish}
                    </span>
                  </div>
                </MediaStage>

                <div className="p-5">
                  <h3 className="font-display text-2xl text-charcoal">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/70">{item.caption}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
