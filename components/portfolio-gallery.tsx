import { Container } from '@/components/ui/container';
import { MediaStage } from '@/components/media-stage';
import { SectionHeading } from '@/components/ui/section-heading';
import { resolveInstagramPreview } from '@/lib/instagram-preview';
import { isInstagramUrl } from '@/lib/media-url';
import type { PortfolioItem } from '@/lib/i18n/translations';
import { getI18n } from '@/lib/i18n/index';

const imageSizes = '(min-width: 1280px) 31vw, (min-width: 768px) 46vw, 100vw';

type ResolvedPortfolioItem = PortfolioItem & {
  showIframeChromeMask?: boolean;
};

export async function PortfolioGallery({ locale = 'en' }: { locale?: 'en' | 'mr' | 'kn' }) {
  const i18n = getI18n(locale);
  const portfolio = i18n.translations[locale].portfolio as PortfolioItem[];
  
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
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {resolvedPortfolio.map((item) => {
            const aspectClassName = item.mediaAspectClassName ?? 'aspect-[4/5]';

            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[4px] border border-line bg-white/80 shadow-md transition-transform duration-300 hover:-translate-y-1"
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
                  <div className="flex w-full flex-col justify-end bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent px-5 pb-5 pt-20">
                    <div>
                      <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-white backdrop-blur-sm shadow-sm">
                        {item.finish}
                      </span>
                    </div>
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
