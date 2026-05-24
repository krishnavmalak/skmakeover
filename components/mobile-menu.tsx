'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Close on resize to lg
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    function handleChange(e: MediaQueryListEvent) {
      if (e.matches) setOpen(false);
    }
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Hamburger button */}
      <button
        id="mobile-menu-toggle"
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((prev) => !prev)}
        className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/70 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-champagne/25 hover:bg-white lg:hidden"
      >
        <span className="flex flex-col items-center justify-center gap-[5px]">
          <span
            className={[
              'block h-px w-5 rounded-full bg-charcoal transition-all duration-300 origin-center',
              open ? 'translate-y-[6px] rotate-45' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block h-px rounded-full bg-charcoal transition-all duration-300',
              open ? 'w-0 opacity-0' : 'w-4 opacity-100',
            ].join(' ')}
          />
          <span
            className={[
              'block h-px w-5 rounded-full bg-charcoal transition-all duration-300 origin-center',
              open ? '-translate-y-[6px] -rotate-45' : '',
            ].join(' ')}
          />
        </span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-charcoal/20 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Drawer */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={[
          'fixed inset-x-4 top-20 z-40 rounded-[2rem] border border-line bg-[rgba(248,243,234,0.97)] p-6 shadow-[0_32px_80px_rgba(31,27,23,0.16)] backdrop-blur-xl transition-all duration-300 lg:hidden',
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none',
        ].join(' ')}
      >
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-[1.25rem] px-4 py-3.5 text-sm font-medium text-charcoal/70 transition-all duration-200 hover:bg-white/80 hover:text-charcoal"
              >
                {item.label}
                <span className="text-champagne opacity-50">›</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-4 border-t border-line pt-4">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-champagne px-5 py-3.5 text-sm font-medium text-charcoal shadow-[0_18px_40px_rgba(199,165,106,0.24)] transition-all duration-300 hover:bg-[#b99352]"
          >
            Book Your Date
          </a>
        </div>
      </nav>
    </>
  );
}
