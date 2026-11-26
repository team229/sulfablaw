import { useEffect, useRef, useState } from 'react';
import poster from '../assets/images/maisoun-sulfab.webp';
import { firm } from '../data/site';

export default function VideoCard() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
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
    <>
      <div className="mt-5 border border-stone-300 bg-white shadow-card">
        <div className="flex items-center justify-between border-b border-stone-200 px-4 py-2.5">
          <span className="font-display text-[10px] font-bold tracking-[0.14em] text-slate-900 uppercase">
            Welcome from Maisoun
          </span>
          <span className="font-mono text-[9px] tracking-wide text-stone-500 uppercase">
            90 sec
          </span>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block w-full overflow-hidden bg-stone-900 text-left"
          aria-label="Play the welcome message and read the transcript"
        >
          <img
            src={poster.src}
            alt="Attorney consulting with a family in the firm's office"
            width={688}
            height={384}
            loading="lazy"
            className="h-40 w-full object-cover object-center opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-95"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/95 text-brand-800 shadow-lg transition duration-300 group-hover:scale-105 group-hover:bg-brand-800 group-hover:text-white">
              <svg viewBox="0 0 24 24" className="ml-0.5 size-5" fill="currentColor" aria-hidden="true">
                <path d="M8 5.4v13.2L19 12z" />
              </svg>
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 p-3">
            <span className="font-serif text-sm font-medium text-white">
              Who we help, what happens on the first call
            </span>
          </span>
        </button>

        <details className="group px-4 py-2.5">
          <summary className="flex cursor-pointer list-none items-center justify-between text-[10px] font-semibold tracking-[0.1em] text-brand-800 uppercase">
            Accessible transcript
            <svg viewBox="0 0 24 24" className="size-3 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <p className="mt-2 border border-stone-200 bg-stone-50 p-2.5 text-[11px] leading-relaxed text-slate-600">
            Welcome to Sulfab Law Office. We know that when you are searching for an immigration
            attorney, your future or your family member’s freedom is at stake. When you call us,
            you speak directly with legal professionals ready to review your files, explain your
            rights, and take immediate action.
          </p>
        </details>
      </div>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-brand-950/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-dialog-title"
            className="relative w-full max-w-lg border-t-4 border-brand-800 bg-white p-6 shadow-float sm:p-8"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 flex size-9 items-center justify-center border border-stone-300 text-slate-600 transition hover:border-brand-800 hover:text-brand-800"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>

            <span className="eyebrow">Welcome video</span>
            <h3 id="video-dialog-title" className="mt-1 text-2xl font-semibold">
              A message from Attorney Sulfab
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-600">
              The full 90-second welcome video is being produced. In the meantime, here is the
              message we share with every new client:
            </p>
            <blockquote className="mt-4 border-l-2 border-brand-800 bg-brand-50/60 py-3 pr-3 pl-4 text-[13px] leading-relaxed text-slate-700 italic">
              “We know that when you are searching for an immigration attorney, your future or
              your family member’s freedom is at stake. When you call us, you speak directly with
              legal professionals ready to review your files, explain your rights, and take
              immediate action.”
            </blockquote>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={firm.phoneHref} className="btn-primary flex-1">
                Call {firm.phoneDisplay}
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="btn-secondary flex-1"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
