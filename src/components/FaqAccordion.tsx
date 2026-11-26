import { useState } from 'react';
import type { Faq } from '../data/site';

interface Props {
  items: Faq[];
  /** Index of the item open on load; -1 for none. */
  defaultOpen?: number;
}

export default function FaqAccordion({ items, defaultOpen = 0 }: Props) {
  const [open, setOpen] = useState<Set<number>>(
    new Set(defaultOpen >= 0 ? [defaultOpen] : [])
  );

  function toggle(index: number) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open.has(index);
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={item.question}
            className={`border transition-colors duration-300 ${
              isOpen
                ? 'border-stone-300 bg-white shadow-[0_8px_30px_-18px_rgba(30,41,59,0.35)]'
                : 'border-stone-200 bg-white/80 hover:border-stone-300'
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-5 px-5 py-4.5 text-left sm:px-6"
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] font-medium text-brand-800/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-[15px] leading-snug font-semibold text-slate-900 sm:text-base">
                    {item.question}
                  </span>
                </span>
                <span
                  className={`flex size-7 shrink-0 items-center justify-center border transition-all duration-300 ${
                    isOpen
                      ? 'rotate-180 border-brand-800 bg-brand-800 text-white'
                      : 'border-stone-300 text-brand-800'
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-stone-100 px-5 pt-3.5 pb-5 text-[13px] leading-relaxed text-slate-600 sm:px-6 sm:pl-[4.1rem]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
