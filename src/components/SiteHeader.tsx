import { useEffect, useRef, useState } from 'react';
import { firm, navLinks } from '../data/site';
import logo from '../assets/images/logo.jpg';

const topLinks = [
  { label: 'Federal Dockets', href: '/#results' },
  { label: 'Client Portal', href: '/contact-us' },
];

interface Props {
  path?: string;
}

function isActive(path: string, href: string, children?: { href: string }[]) {
  if (path === href) return true;
  if (href === '/') return path === '/';
  if (path.startsWith(href)) return true;
  return Boolean(children?.some((child) => child.href === path));
}

export default function SiteHeader({ path = '/' }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        setOpenMenu(null);
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), summary, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);

      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="sticky top-0 z-50">
      {/* Utility bar — collapses on scroll */}
      <div
        className={`overflow-hidden bg-brand-950 text-[11px] text-stone-200 transition-all duration-500 ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-32 opacity-100'
        }`}
        aria-hidden={scrolled}
        inert={scrolled}
      >
        <div className="shell flex flex-col items-center justify-between gap-2 py-2.5 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 md:justify-start">
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="size-3.5 shrink-0 text-brand-400" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              <span className="text-stone-300">Office Hours:</span>
              <span className="font-semibold text-white">Mon–Fri, 9:00 AM–5:00 PM</span>
              <span className="hidden h-3 w-px bg-brand-800 sm:block" />
              <a
                href={firm.phoneHref}
                className="font-bold tracking-wider text-white underline decoration-brand-600 underline-offset-4 transition hover:text-stone-200"
              >
                {firm.phoneDisplay}
              </a>
            </span>

            <span className="hidden h-3 w-px bg-brand-800 lg:block" />

            <span className="hidden items-center gap-1.5 whitespace-nowrap text-[10.5px] text-stone-300 2xl:flex">
              <svg viewBox="0 0 24 24" className="size-3.5 text-brand-400" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              San Francisco HQ: 300 Montgomery St, Suite 850 · Financial District
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden shrink-0 whitespace-nowrap border border-brand-700 bg-brand-900 px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.08em] text-brand-100 uppercase sm:inline-flex">
              Hablamos Español
            </span>
            {topLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden whitespace-nowrap text-[10px] tracking-[0.12em] text-stone-300 uppercase transition hover:text-white xl:inline"
              >
                {link.label}
              </a>
            ))}
            <a
              href={firm.phoneHref}
              className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap border border-brand-600 bg-brand-700 px-3 py-1.5 text-[10px] font-bold tracking-[0.1em] text-white uppercase shadow-sm transition hover:bg-brand-600 sm:inline-flex"
            >
              <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call the Office
            </a>
          </div>
        </div>
      </div>

      <header
        className={`border-b-2 border-brand-800 bg-white/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_12px_30px_-18px_rgba(30,41,59,0.45)]' : 'shadow-sm'
        }`}
      >
        <div
          className={`shell flex items-center justify-between gap-4 transition-all duration-300 ${
            scrolled ? 'h-16 lg:h-[72px]' : 'h-20 lg:h-24'
          }`}
        >
          <a href="/" className="group flex shrink-0 items-center gap-3" aria-label={`${firm.name} — home`}>
            <span className="flex size-11 shrink-0 items-center justify-center border border-stone-300 bg-white p-1 shadow-sm transition group-hover:border-brand-800 sm:size-12 lg:size-14">
              <img
                src={logo.src}
                alt="Sulfab Law Office emblem"
                width={56}
                height={44}
                className="h-9 w-auto object-contain sm:h-10 lg:h-12"
              />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[12.5px] leading-none font-bold tracking-[0.1em] whitespace-nowrap text-slate-900 uppercase transition group-hover:text-brand-800 sm:text-[17px] sm:tracking-[0.14em] xl:text-[19px]">
                Sulfab Law Office <span className="text-brand-800">P.C.</span>
              </span>
              <span className="mt-1.5 block text-[6.5px] leading-tight font-semibold tracking-[0.1em] whitespace-nowrap text-brand-800 uppercase sm:text-[8.5px] sm:tracking-[0.14em] xl:text-[9.5px] xl:tracking-[0.16em]">
                Immigration &amp; Federal Litigation · Trial Advocates
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-3.5 xl:flex 2xl:gap-5">
            {navLinks.map((link) => {
              const active = isActive(path, link.href, link.children);
              const expanded = openMenu === link.label;

              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenMenu(link.label)}
                  onMouseLeave={() => link.children && setOpenMenu(null)}
                  onFocusCapture={() => link.children && setOpenMenu(link.label)}
                  onBlurCapture={(event) => {
                    if (link.children && !event.currentTarget.contains(event.relatedTarget as Node)) {
                      setOpenMenu(null);
                    }
                  }}
                >
                  <a
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    aria-haspopup={link.children ? 'true' : undefined}
                    aria-expanded={link.children ? expanded : undefined}
                    aria-controls={link.children ? `nav-${link.label.replace(/\s+/g, '-').toLowerCase()}` : undefined}
                    className={`flex items-center gap-1 border-b-2 py-2 text-[10px] font-semibold tracking-[0.1em] whitespace-nowrap uppercase transition xl:text-[10.5px] ${
                      active
                        ? 'border-brand-800 text-brand-800'
                        : 'border-transparent text-slate-700 hover:border-brand-800 hover:text-brand-800'
                    }`}
                  >
                    {link.label}
                    {link.children && (
                      <svg
                        viewBox="0 0 24 24"
                        className={`size-3 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </a>

                  {link.children && (
                    <div
                      id={`nav-${link.label.replace(/\s+/g, '-').toLowerCase()}`}
                      inert={!expanded}
                      aria-hidden={!expanded}
                      className={`absolute top-full left-0 z-50 pt-3 transition duration-200 ${
                        expanded ? 'visible opacity-100' : 'invisible opacity-0'
                      } ${link.label === 'Practice Areas' ? 'w-[31rem]' : 'w-64'}`}
                    >
                      <div
                        className={`grid gap-0.5 border-t-2 border-brand-800 bg-white p-3 shadow-float ${
                          link.label === 'Practice Areas' ? 'grid-cols-2' : 'grid-cols-1'
                        }`}
                      >
                        {link.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenMenu(null)}
                            className="block px-3 py-2 text-[11.5px] font-medium tracking-normal text-slate-700 capitalize transition hover:bg-brand-50 hover:text-brand-800"
                          >
                            {child.label}
                          </a>
                        ))}
                        <a
                          href={link.href}
                          onClick={() => setOpenMenu(null)}
                          className={`block px-3 py-2 text-[10px] font-semibold tracking-[0.1em] text-brand-800 uppercase transition hover:bg-brand-50 ${
                            link.label === 'Practice Areas' ? 'col-span-2 border-t border-stone-100' : 'border-t border-stone-100'
                          }`}
                        >
                          View all {link.label.toLowerCase()}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={firm.phoneHref}
              className="hidden size-10 items-center justify-center border border-stone-300 text-brand-800 transition hover:border-brand-800 hover:bg-brand-50 sm:flex lg:hidden"
              aria-label={`Call ${firm.phoneDisplay}`}
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>

            <a
              href="/contact-us"
              className="hidden shrink-0 items-center gap-2 border border-brand-950 bg-brand-800 px-4 py-3 font-display text-[10px] font-bold tracking-[0.1em] whitespace-nowrap text-white uppercase shadow-sm transition hover:bg-brand-900 md:inline-flex"
            >
              Free Consultation
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex size-10 items-center justify-center border border-stone-300 text-slate-700 transition hover:border-brand-800 hover:text-brand-800 xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] xl:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          className={`absolute inset-0 bg-brand-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-navigation"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
            <div className="flex items-center gap-3">
              <img src={logo.src} alt="" width={40} height={32} className="h-9 w-auto" />
              <span className="font-display text-xs leading-tight font-bold tracking-[0.14em] text-slate-900 uppercase">
                Sulfab Law Office<br />
                <span className="text-brand-800">P.C.</span>
              </span>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              className="flex size-10 items-center justify-center border border-stone-300 text-slate-700 transition hover:border-brand-800 hover:text-brand-800"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-col px-5 py-4" onClick={(event) => {
            if ((event.target as HTMLElement).closest('a')) setOpen(false);
          }}>
            {navLinks.map((link, index) => {
              const active = isActive(path, link.href, link.children);

              if (link.children) {
                return (
                  <details key={link.href} className="group border-b border-stone-100">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-3.5">
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[10px] text-brand-800/70">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className={`font-serif text-lg font-medium ${active ? 'text-brand-800' : 'text-slate-900'}`}>
                          {link.label}
                        </span>
                      </span>
                      <svg viewBox="0 0 24 24" className="size-4 text-brand-800 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </summary>
                    <div className="mb-2 ml-8 flex flex-col border-l border-stone-200 pl-4">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className={`py-2 text-[13px] ${child.href === path ? 'font-semibold text-brand-800' : 'text-slate-600'}`}
                        >
                          {child.label}
                        </a>
                      ))}
                      <a href={link.href} className="py-2 text-[10px] font-semibold tracking-[0.12em] text-brand-800 uppercase">
                        View all
                      </a>
                    </div>
                  </details>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className="flex items-baseline gap-4 border-b border-stone-100 py-3.5 transition hover:text-brand-800"
                >
                  <span className="font-mono text-[10px] text-brand-800/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`font-serif text-lg font-medium ${active ? 'text-brand-800' : 'text-slate-900'}`}>
                    {link.label}
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="mt-auto space-y-4 border-t border-stone-200 bg-stone-50 px-5 py-5">
            <a
              href={firm.phoneHref}
              className="flex items-center gap-3 font-display text-sm font-bold tracking-wider text-brand-800 uppercase"
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {firm.phoneDisplay}
            </a>
            <p className="text-[11px] leading-relaxed text-slate-600">
              {firm.address.street}
              <br />
              {firm.address.city}, {firm.address.state} {firm.address.zip}
            </p>
            <p className="text-[10px] font-semibold tracking-[0.14em] text-brand-800 uppercase">
              {firm.hoursNote}
            </p>
            <a
              href="/contact-us"
              className="flex w-full items-center justify-center border border-brand-950 bg-brand-800 px-5 py-3.5 font-display text-[11px] font-bold tracking-[0.12em] text-white uppercase transition hover:bg-brand-900"
            >
              Request a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
