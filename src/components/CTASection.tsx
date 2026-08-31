export default function CTASection() {
  return (
    <section className="py-24 px-6 w-full bg-white">
      <div className="max-w-7xl mx-auto bg-dark rounded-3xl p-8 lg:p-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center relative z-10">
          <div>
            <h2 className="text-white text-3xl md:text-5xl italic font-serif font-bold leading-tight mb-4">
              Schedule a Consultation For Your Legal Case
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              If you need legal guidance in immigration, intellectual property or personal injury, the Sulfab Law Office can help. As a trusted personal injury law firm in San Francisco, we provide optimal legal advice based on your case. Contact us today at (415) 360-5266.
            </p>
          </div>

          <div className="flex md:justify-end">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2.5 bg-gold text-white font-bold text-xs uppercase tracking-[0.3em] px-8 py-4 rounded-lg border-none cursor-pointer no-underline hover:bg-amber-700 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
