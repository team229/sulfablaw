const expertiseItems = [
  { text: 'Asylum and removal defense', href: '/immigration-lawyer-san-francisco/' },
  { text: 'Family-based immigration', href: '/immigration-lawyer-san-francisco/' },
  { text: 'Investor and business visas', href: '/immigration-lawyer-san-francisco/' },
  { text: 'Trademark and brand protection', href: '/intellectual-property-lawyer-san-francisco/' },
  { text: 'Copyright and IP licensing', href: '/intellectual-property-lawyer-san-francisco/' },
  { text: 'Car accident claims', href: '/car-accidents-lawyer-san-francisco/' },
  { text: 'Truck accident claims', href: '/truck-accidents-lawyer-san-francisco/' },
  { text: 'Motorcycle accident claims', href: '/motorcycle-accidents-lawyer-san-francisco/' },
  { text: 'Pedestrian injuries', href: '/pedestrian-injuries-lawyer-san-francisco/' },
  { text: 'Slip and fall injuries', href: '/slip-and-fall-lawyer-san-francisco/' },
  { text: 'Wrongful death claims', href: '/wrongful-death-lawyer-san-francisco/' },
  { text: 'Federal court litigation', href: '/immigration-lawyer-san-francisco/' },
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
            <a
              key={index}
              href={item.href}
              className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-gold/30 hover:shadow-md hover:shadow-gold/5 transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-gold flex items-center justify-center shrink-0 text-sm font-bold group-hover:bg-gold group-hover:text-white transition-colors">
                &bull;
              </div>
              <span className="text-slate-700 text-[1.05rem] font-medium leading-snug group-hover:text-gold transition-colors">
                {item.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
