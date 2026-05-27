'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type MediaKind = 'image' | 'video' | 'iframe';

type MediaStageProps = {
  kind: MediaKind;
  src: string;
  alt?: string;
  poster?: string;
  title?: string;
  aspectClassName?: string;
  frameClassName?: string;
  mediaClassName?: string;
  imageSizes?: string;
  webpBase?: string;
  showZoomControls?: boolean;
  showReplayControl?: boolean;
  showIframeChromeMask?: boolean;
  zoomOnClick?: boolean;
  children?: ReactNode;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 1.28;
const ZOOM_STEP = 0.08;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function MediaStage({
  kind,
  src,
  alt = '',
  poster,
  title,
  aspectClassName = 'aspect-[4/5]',
  frameClassName = '',
  mediaClassName = '',
  imageSizes,
  webpBase,
  showZoomControls = true,
  showReplayControl = true,
  showIframeChromeMask = false,
  zoomOnClick = false,
  children,
}: MediaStageProps) {
  const [zoom, setZoom] = useState(1);
  const [replayToken, setReplayToken] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setZoom(1);
    setReplayToken(0);
  }, [src, kind]);

  const zoomPercent = Math.round(zoom * 100);
  const canZoom = showZoomControls;
  const canReplay = showReplayControl;

  function handleZoomIn() {
    setZoom((current) => clamp(Number((current + ZOOM_STEP).toFixed(2)), MIN_ZOOM, MAX_ZOOM));
  }

  function handleZoomOut() {
    setZoom((current) => clamp(Number((current - ZOOM_STEP).toFixed(2)), MIN_ZOOM, MAX_ZOOM));
  }

  function handleReset() {
    setZoom(1);

    if (kind === 'video' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      void videoRef.current.play().catch(() => { });
      return;
    }

    if (kind === 'iframe') {
      setReplayToken((current) => current + 1);
    }
  }

  function handleToggleZoom() {
    if (!zoomOnClick) return;
    setZoom((current) => (current > MIN_ZOOM ? MIN_ZOOM : MAX_ZOOM));
  }

  const zoomStyle = {
    transform: `scale(${zoom})`,
    transformOrigin: 'center center',
  } as const;

  return (
    <div className={['relative overflow-hidden', aspectClassName, frameClassName].filter(Boolean).join(' ')}>
      <div className="absolute inset-0">
        <div 
          className={['relative h-full w-full transition-transform duration-300 ease-out', zoomOnClick ? 'cursor-zoom-in' : '', zoom > MIN_ZOOM && zoomOnClick ? '!cursor-zoom-out' : '', mediaClassName].filter(Boolean).join(' ')} 
          style={zoomStyle}
          onClick={zoomOnClick ? handleToggleZoom : undefined}
        >
          {kind === 'image' && webpBase ? (
            <picture className="block h-full w-full">
              <source
                type="image/webp"
                srcSet={[640, 960, 1280].map((width) => `${webpBase}-${width}.webp ${width}w`).join(', ')}
                sizes={imageSizes}
              />
              <img src={src} alt={alt} loading="lazy" decoding="async" referrerPolicy="no-referrer" className="block h-full w-full object-cover" />
            </picture>
          ) : kind === 'image' ? (
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              sizes={imageSizes}
              className="block h-full w-full object-cover"
            />
          ) : kind === 'video' ? (
            <video
              ref={videoRef}
              className="block h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={poster}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <>
              {poster ? (
                <img
                  src={poster}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 block h-full w-full object-cover"
                />
              ) : null}
              <iframe
                key={`${src}-${replayToken}`}
                className="relative z-[1] block h-full w-full border-0"
                src={src}
                title={title || alt || 'Embedded media'}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        {kind === 'iframe' && showIframeChromeMask ? (
          <>
            <div className="absolute inset-x-0 top-0 z-[5] h-16 bg-gradient-to-b from-white/95 via-white/85 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-[5] h-36 bg-gradient-to-t from-white/95 via-white/90 to-transparent" />
          </>
        ) : null}

        <div className="pointer-events-auto absolute right-3 top-3 z-20 flex items-center gap-2">
          {canZoom ? (
            <>
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoom <= MIN_ZOOM}
                className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-charcoal/65 text-sm text-white shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Zoom out"
              >
                -
              </button>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoom >= MAX_ZOOM}
                className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-charcoal/65 text-sm text-white shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Zoom in"
              >
                +
              </button>
            </>
          ) : null}

          {canReplay ? (
            <button
              type="button"
              onClick={handleReset}
              className="rounded-full border border-white/20 bg-white/75 px-3 py-2 text-[0.62rem] uppercase tracking-[0.2em] text-charcoal shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white"
              aria-label={kind === 'image' ? 'Reset zoom' : 'Replay media'}
            >
              {kind === 'image' ? 'Reset' : 'Replay'}
            </button>
          ) : null}
        </div>

        {canZoom ? (
          <div className="pointer-events-none absolute left-3 top-3 z-20">
            <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              {zoomPercent}%
            </span>
          </div>
        ) : null}

        {children ? <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">{children}</div> : null}
      </div>
    </div>
  );
}
