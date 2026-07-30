const areas = [
  {
    title: 'Immigration',
    href: '/immigration-lawyer-san-francisco/',
    description:
      'Strategic representation in asylum, removal defense, federal litigation, family petitions, and investor visas. We handle complex cases nationwide, including federal court matters.',
  },
  {
    title: 'Intellectual Property',
    href: '/intellectual-property-lawyer-san-francisco/',
    description:
      'Protecting your ideas, brand, and business through trademarks, licensing, and IP strategy. We help you secure and enforce what you build.',
  },
  {
    title: 'Personal Injury',
    href: '/personal-injury-lawyer-san-francisco/',
    description:
      'Relentless advocacy for those injured by negligence. We pursue full compensation for medical expenses, lost income, and long term harm.',
  },
]

export default function PracticeAreasSection() {
  return (
    <section className="py-16 md:py-20 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-gold text-xs font-black uppercase tracking-[0.3em] mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 italic font-serif">
              Practice Areas
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mb-6" />
            <p className="text-slate-600">
              Focused legal representation across immigration, intellectual property, and personal injury.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {areas.map((area) => (
              <a
                key={area.href}
                href={area.href}
                className="block p-6 rounded-2xl bg-white border border-slate-100 hover:border-gold/30 transition-all"
              >
                <h3 className="font-bold text-dark mb-2 text-lg">
                  {area.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
