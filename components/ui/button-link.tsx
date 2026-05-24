import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'accent' | 'ghost';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-charcoal text-ivory shadow-[0_12px_32px_rgba(31,27,23,0.14)] hover:-translate-y-0.5 hover:bg-[#2c251f]',
  secondary:
    'border border-charcoal/10 bg-white/70 text-charcoal hover:-translate-y-0.5 hover:border-charcoal/25 hover:bg-white',
  accent:
    'bg-champagne text-charcoal shadow-[0_18px_40px_rgba(199,165,106,0.24)] hover:-translate-y-0.5 hover:bg-[#b99352]',
  ghost: 'border border-transparent text-charcoal/70 hover:text-charcoal',
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={[
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 focus:ring-offset-2 focus:ring-offset-ivory',
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </a>
  );
}
