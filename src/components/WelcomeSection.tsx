export default function WelcomeSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50/50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Image - Left */}
          <div className="relative order-1">
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 bg-white">
              <img
                src="/assets/images/sulfab_law_office.jpg"
                alt="The Sulfab Law Office - San Francisco"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={715}
                height={1000}
              />
            </div>
            {/* Decorative accent */}
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-gold/20 -z-10" aria-hidden="true" />
          </div>

          {/* Content - Right */}
          <div className="order-2 text-left lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-dark mb-4 italic font-serif leading-tight">
              Welcome to The Sulfab Law Office
            </h2>
            <p className="text-gold text-xs font-black uppercase tracking-[0.3em] mb-8">
              Honest Advice & Personalized Attention
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We believe all clients should receive honest advice and personalized attention.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Legal matters can involve important decisions about your family, business, future or financial security. We take the time to understand your situation and explain what you can expect.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              As an immigration law firm, we handle a variety of immigration cases such as family immigration, asylum, removal proceedings, investment visas and federal litigation.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We are also here to help businesses and individuals protect their intellectual property rights. If you have been injured or hurt because of someone else's negligence, we can help you.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              Our objective is to make the legal process easy for you to understand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
