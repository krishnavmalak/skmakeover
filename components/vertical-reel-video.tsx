import { MediaStage } from '@/components/media-stage';
import { isInstagramUrl, isYouTubeUrl, resolveEmbeddedMediaUrl } from '@/lib/media-url';
import { resolveInstagramPreview } from '@/lib/instagram-preview';

type VerticalReelVideoProps = {
  src: string;
  poster?: string;
  title?: string;
  description?: string;
};

export async function VerticalReelVideo({
  src,
  poster,
  title = 'Promotional reel',
  description = '30-second vertical bridal reel, optimized for external streaming from Cloudflare R2 or a similar CDN.',
}: VerticalReelVideoProps) {
  const instagramPreview = isInstagramUrl(src) ? await resolveInstagramPreview(src) : null;
  const media = instagramPreview?.src ?? resolveEmbeddedMediaUrl(src);
  const mediaKind = instagramPreview ? instagramPreview.kind : media === src ? 'video' : 'iframe';
  const mediaPoster = instagramPreview?.poster ?? poster;

  return (
    <figure className="space-y-4">
      <MediaStage
        kind={mediaKind}
        src={media}
        poster={mediaPoster}
        title={title}
        aspectClassName="aspect-[9/16]"
        frameClassName="rounded-[2rem] border border-line bg-charcoal shadow-md"
        mediaClassName="bg-charcoal"
        showIframeChromeMask={isInstagramUrl(src)}
      />
      <figcaption className="sr-only">{title}. {description}.</figcaption>
    </figure>
  );
}
