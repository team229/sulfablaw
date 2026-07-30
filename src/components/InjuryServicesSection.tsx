const services = [
  {
    title: 'Car Accidents',
    href: '/car-accidents-lawyer-san-francisco/',
    description:
      'From minor collisions to catastrophic crashes, we fight for full compensation covering medical bills, lost wages, vehicle damage, and pain and suffering. San Francisco\'s congested streets demand experienced legal advocacy — we deliver it.',
  },
  {
    title: 'Truck Accidents',
    href: '/truck-accidents-lawyer-san-francisco/',
    description:
      'Trucking collisions involve complex federal regulations, corporate insurers, and severe damages. We investigate every angle — driver logs, maintenance records, and cargo compliance — to hold all liable parties accountable.',
  },
  {
    title: 'Motorcycle Accidents',
    href: '/motorcycle-accidents-lawyer-san-francisco/',
    description:
      'Riders face unique risks and biases on the road. We build cases that counter prejudice, working with accident reconstruction experts to prove liability and secure the compensation you deserve.',
  },
  {
    title: 'Pedestrian Injuries',
    href: '/pedestrian-injuries-lawyer-san-francisco/',
    description:
      'Pedestrians struck by vehicles suffer life-altering injuries. Whether on a crosswalk, sidewalk, or parking lot, we pursue claims against negligent drivers, municipalities, and property owners.',
  },
  {
    title: 'Wrongful Death',
    href: '/wrongful-death-lawyer-san-francisco/',
    description:
      'Losing a loved one due to negligence is devastating. We handle wrongful death claims with compassion and tenacity, seeking justice and financial security for surviving family members.',
  },
]

export default function InjuryServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">
            Injury Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark italic font-serif">
            Personal Injury Representation
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group block p-7 rounded-2xl bg-white border border-slate-100 hover:border-gold/30 hover:shadow-md hover:shadow-gold/5 transition-all duration-200"
            >
              <h3 className="font-bold text-dark text-lg mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
              <span className="inline-block mt-4 text-gold text-xs font-bold uppercase tracking-[0.15em] group-hover:translate-x-1 transition-transform">
                Learn more &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
