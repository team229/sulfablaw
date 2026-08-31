const areas = [
  {
    title: 'Immigration Law for Individuals and Families',
    href: '/immigration-lawyer-san-francisco/',
    description:
      'Family immigration, asylum, removal proceedings, investment visas and federal litigation.',
  },
  {
    title: 'Trademarks and Intellectual Property Law',
    href: '/intellectual-property-lawyer-san-francisco/',
    description:
      'Protecting valuable intellectual property and business assets. As an intellectual property law firm in San Francisco, we help clients understand their options for trademarks, copyrights and licensing.',
  },
  {
    title: 'Vehicle, Pedestrian, Motorcycle Accidents and Personal Injury',
    href: '/personal-injury-lawyer-san-francisco/',
    description:
      'Car accidents, truck accidents, motorcycle accidents, pedestrian accidents and personal injury claims — helping you pursue compensation for medical expenses, lost income and more.',
  },
]

const secondaryAreas = [
  { title: 'Slip-and-Fall Cases', href: '/slip-and-fall-lawyer-san-francisco/' },
  { title: 'Wrongful Death Cases', href: '/wrongful-death-lawyer-san-francisco/' },
  { title: 'Federal Litigation and Complex Legal Disputes', href: '/immigration-lawyer-san-francisco/' },
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
              Legal Services That Put You First
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mb-6" />
            <p className="text-slate-600">
              Every client has a different story. For that reason, our legal solutions are customized according to your needs rather than applying a one-size-fits-all approach.
            </p>
            <p className="text-slate-600 mt-4 text-sm leading-relaxed">
              We believe good communication builds trust. Our team answers your questions and keeps you informed throughout your case.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {secondaryAreas.map((area) => (
                <a
                  key={area.href}
                  href={area.href}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-gold/30 hover:bg-white transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                  <span className="text-slate-700 text-sm font-medium">{area.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
