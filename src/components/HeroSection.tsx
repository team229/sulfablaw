export default function HeroSection() {
  return (
    <section className="relative bg-dark pt-28 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-slate-900/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="w-16 h-1 bg-gold rounded-full mb-8" />

        <h1 className="text-gold text-[16px] font-black uppercase tracking-[0.4em] mb-6">
          SAN FRANCISCO IMMIGRATION, IP & PERSONAL INJURY LAW FIRM
        </h1>

        <h2 className="text-white text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 max-w-[900px]">
          Efficient. Effective.{' '}
          <span className="text-gold italic font-serif font-light">
            Better Solutions.
          </span>
        </h2>

        <p className="text-slate-400 text-xl md:text-2xl max-w-2xl leading-relaxed mb-10">
          Known for honest counsel and high-level advocacy. We guide you through
          immigration, intellectual property, and injury claims with clarity and
          precision.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-gold text-white font-bold text-xs uppercase tracking-[0.3em] px-7 py-3.5 rounded-lg border-none hover:bg-amber-700 transition-colors"
          >
            Begin Case Intake
          </a>
          <a
            href="/meet-our-team"
            className="inline-flex items-center justify-center bg-transparent text-white font-bold text-xs uppercase tracking-[0.3em] px-7 py-3.5 rounded-lg border border-white/25 hover:border-white/60 hover:bg-white/5 transition-colors"
          >
            Meet Our Team
          </a>
        </div>
      </div>
    </section>
  )
}
