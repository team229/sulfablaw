import { firm } from '../data/site';

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-brand-800 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_rgba(30,41,59,0.35)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={firm.phoneHref}
          className="flex items-center justify-center gap-2 border border-stone-300 px-3 py-3 text-[10.5px] font-bold tracking-[0.1em] text-brand-800 uppercase transition hover:border-brand-800"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call the Office
        </a>
        <a
          href="/contact-us"
          className="flex items-center justify-center gap-2 border border-brand-950 bg-brand-800 px-3 py-3 text-[10.5px] font-bold tracking-[0.1em] text-white uppercase transition hover:bg-brand-900"
        >
          Free Consultation
        </a>
      </div>
    </div>
  );
}
