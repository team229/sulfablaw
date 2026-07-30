const expertiseItems = [
  { text: 'Asylum and removal defense' },
  { text: 'Family-based immigration' },
  { text: 'Investor and business visas' },
  { text: 'Trademark and brand protection' },
  { text: 'Copyright and IP licensing' },
  { text: 'Car and truck accident claims' },
  { text: 'Slip and fall injuries' },
  { text: 'Wrongful death claims' },
  { text: 'Federal court litigation' },
]

export default function ExpertiseSection() {
  return (
    <section className="bg-slate-50/50 py-24 px-6 w-full border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-3">
            OUR EXPERTISE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark italic font-serif">
            Comprehensive Legal Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-gold/30 hover:shadow-md hover:shadow-gold/5 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-gold flex items-center justify-center shrink-0 text-sm font-bold">
                &bull;
              </div>
              <span className="text-slate-700 text-[1.05rem] font-medium leading-snug">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
