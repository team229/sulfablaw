export default function LocationSection() {
  return (
    <section className="py-24 px-6 w-full bg-slate-50/50">
      <div className="max-w-[896px] mx-auto">
        <p className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4 text-center">
          LOCATION
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-10 italic font-serif text-center leading-tight">
          Visit Our Office
        </h2>

        <div className="aspect-[16/5] rounded-2xl overflow-hidden shadow-md mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019218980424!2d-122.40148468468185!3d37.79292377975527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085805c6c7a29f9%3A0x6a0b6f5a5f5e5b0d!2s369%20Pine%20St%20%23600%2C%20San%20Francisco%2C%20CA%2094104!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus"
            className="w-full h-full border-0 block"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sulfab Law Office - San Francisco"
          />
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <p className="text-slate-600 text-base leading-relaxed text-center">
            369 Pine St, Suite 600, San Francisco, CA 94104
          </p>
          <a
            href="https://maps.google.com/maps?daddr=369+Pine+St+Suite+600+San+Francisco+CA+94104"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold font-semibold text-[0.95rem] no-underline hover:text-amber-700 transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Get directions
          </a>
        </div>
      </div>
    </section>
  )
}
