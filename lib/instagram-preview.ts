import { cache } from 'react';

import { getInstagramEmbedUrl, isInstagramUrl } from '@/lib/media-url';

export type InstagramPreview = {
  kind: 'image' | 'iframe';
  src: string;
  poster?: string;
};

const FALLBACK_PREVIEW = '/demo/instagram-placeholder.svg';

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function extractMetaContent(html: string, name: string) {
  const pattern = new RegExp(
    `<meta[^>]+(?:property|name)=["']${name}["'][^>]+content=["']([^"']+)["']`,
    'i',
  );
  const match = html.match(pattern);
  return match ? decodeHtmlEntities(match[1]) : null;
}

function extractEscapedJsonContent(html: string, key: string) {
  const pattern = new RegExp(String.raw`\\\"${key}\\\":\\\"(.*?)\\\"`);
  const match = html.match(pattern);

  if (!match?.[1]) {
    return null;
  }

  try {
    return JSON.parse(`"${match[1]}"`) as string;
  } catch {
    return match[1].replace(/\\\//g, '/').replace(/\\u0026/g, '&');
  }
}

export const resolveInstagramPreview = cache(async (url: string): Promise<InstagramPreview | null> => {
  if (!isInstagramUrl(url)) {
    return null;
  }

  try {
    const embedUrl = getInstagramEmbedUrl(url);
    const response = await fetch(embedUrl, {
      headers: {
        'user-agent': 'Mozilla/5.0',
        accept: 'text/html,application/xhtml+xml',
      },
    });

    if (!response.ok) {
      return {
        kind: 'image',
        src: FALLBACK_PREVIEW,
        poster: FALLBACK_PREVIEW,
      };
    }

    const html = await response.text();
    const video = extractEscapedJsonContent(html, 'video_url');
    const image =
      extractEscapedJsonContent(html, 'display_url') ??
      extractMetaContent(html, 'og:image') ??
      extractMetaContent(html, 'twitter:image');

    // Always use the iframe embed for Instagram content.
    // Direct CDN image/video URLs (display_url, video_url) require instagram.com
    // as the Referer header — third-party domains get 403 from Instagram's CDN.
    // The embed endpoint handles all post types (image carousels, reels, videos).
    return {
      kind: 'iframe',
      src: embedUrl,
      poster: image ?? FALLBACK_PREVIEW,
    };
  } catch {
    return {
      kind: 'image',
      src: FALLBACK_PREVIEW,
      poster: FALLBACK_PREVIEW,
    };
  }
});
