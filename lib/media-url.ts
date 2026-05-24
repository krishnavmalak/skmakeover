export function isYouTubeUrl(url: string) {
  return /(^https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(url);
}

export function isInstagramUrl(url: string) {
  return /(^https?:\/\/)?(www\.)?instagram\.com\//i.test(url);
}

export function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    let videoId = '';

    if (parsed.hostname.includes('youtu.be')) {
      videoId = parsed.pathname.replace('/', '');
    } else if (parsed.pathname.startsWith('/shorts/')) {
      videoId = parsed.pathname.split('/')[2] || '';
    } else if (parsed.pathname.startsWith('/embed/')) {
      videoId = parsed.pathname.split('/')[2] || '';
    } else {
      videoId = parsed.searchParams.get('v') || '';
    }

    if (!videoId) {
      return url;
    }

    return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
  } catch {
    return url;
  }
}

export function getInstagramEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    parsed.search = '';
    parsed.hash = '';
    parsed.pathname = parsed.pathname.replace(/\/?$/, '/embed/');
    return parsed.toString();
  } catch {
    return url;
  }
}

export function resolveEmbeddedMediaUrl(url: string) {
  if (isYouTubeUrl(url)) {
    return getYouTubeEmbedUrl(url);
  }

  if (isInstagramUrl(url)) {
    return getInstagramEmbedUrl(url);
  }

  return url;
}
