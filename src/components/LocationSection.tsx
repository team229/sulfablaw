export default function LocationSection() {
  return (
    <section className="w-full bg-slate-50/50">
      <div className="w-full">
        <iframe
          src="https://maps.google.com/maps?q=369%20Pine%20St%2C%20Suite%20600%2C%20San%20Francisco%2C%20CA%2094104&hl=en&z=16&output=embed"
          className="w-full h-[450px] border-0 block"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map: 369 Pine St, Suite 600, San Francisco, CA 94104"
        />
      </div>

    </section>
  )
}
