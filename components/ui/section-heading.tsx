import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={['max-w-3xl', alignment, className].filter(Boolean).join(' ')}>
      <p className="text-xs uppercase tracking-[0.28em] text-champagne">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-charcoal/70 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
