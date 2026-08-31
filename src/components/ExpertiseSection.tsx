const expertiseItems = [
  { text: 'Clear communication', href: '/#contact' },
  { text: 'Personal attention', href: '/#contact' },
  { text: 'Careful case review', href: '/#contact' },
  { text: 'Practical legal guidance', href: '/#contact' },
  { text: 'Focused representation', href: '/#contact' },
]

export default function ExpertiseSection() {
  return (
    <section className="bg-slate-50/50 py-24 px-6 w-full border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-3">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark italic font-serif">
            Why Clients Choose The Sulfab Law Office
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4">
            Every case is different. We do not believe in giving every client the same approach. We first learn about your situation, concerns, and goals.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-slate-700 font-medium mb-4 text-center">You can expect:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {expertiseItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-gold/30 hover:shadow-md hover:shadow-gold/5 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-gold flex items-center justify-center shrink-0 text-sm font-bold group-hover:bg-gold group-hover:text-white transition-colors">
                  ✓
                </div>
                <span className="text-slate-700 text-[1.05rem] font-medium leading-snug group-hover:text-gold transition-colors">
                  {item.text}
                </span>
              </a>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed text-center mt-8">
            We believe clients should understand what is happening with their case. Our team works to keep the process clear and organized from the first consultation through the next steps.
          </p>
        </div>
      </div>
    </section>
  )
}
