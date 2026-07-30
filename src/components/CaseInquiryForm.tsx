import { useState } from 'react'

export default function CaseInquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [captchaError, setCaptchaError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const captcha = (form.elements.namedItem('captcha') as HTMLInputElement)?.value
    if (captcha !== '10') {
      setCaptchaError('Incorrect answer. Please try again.')
      return
    }
    setCaptchaError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-16 md:py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <div className="bg-dark rounded-2xl p-8 lg:p-12 text-center">
            <p className="text-gold text-xs font-black uppercase tracking-[0.3em] mb-4">Case Intake</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 italic font-serif">Thank You</h2>
            <p className="text-slate-400 max-w-lg mx-auto">Your inquiry has been submitted. We will contact you shortly.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <div className="bg-dark rounded-2xl p-8 lg:p-12">
          <p className="text-gold text-xs font-black uppercase tracking-[0.3em] mb-4 text-center">Case Intake</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center italic font-serif">
            Share Your Case Details
          </h2>
          <p className="text-slate-400 text-center max-w-lg mx-auto mb-10">
            Share the basics and we&rsquo;ll follow up to discuss next steps.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="YOUR NAME"
                className="w-full bg-slate-800/50 border-b border-slate-700 py-4 text-white focus:border-gold outline-none text-xs tracking-widest uppercase px-4"
              />
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-slate-800/50 border-b border-slate-700 py-4 text-white focus:border-gold outline-none text-xs tracking-widest uppercase px-4"
              />
              <input
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                placeholder="PHONE NUMBER"
                className="w-full bg-slate-800/50 border-b border-slate-700 py-4 text-white focus:border-gold outline-none text-xs tracking-widest uppercase px-4 md:col-span-2"
              />
            </div>

            <select
              name="caseType"
              required
              defaultValue=""
              className="w-full bg-slate-800/50 border-b border-slate-700 py-4 text-slate-500 focus:border-gold outline-none text-xs tracking-widest uppercase px-4 appearance-none cursor-pointer"
            >
              <option value="" disabled>Select case type</option>
              <option value="Asylum Application">Asylum Application</option>
              <option value="Green Card / Residency">Green Card / Residency</option>
              <option value="Investor & Business Visa">Investor & Business Visa</option>
            </select>

            <textarea
              name="detail"
              required
              rows={5}
              placeholder="DETAIL"
              className="w-full bg-slate-800/50 border-b border-slate-700 py-4 text-white focus:border-gold outline-none text-xs tracking-widest uppercase px-4 resize-none"
            />

            <div>
              <label className="block text-slate-400 text-xs tracking-widest uppercase mb-2">
                What is 3 + 7?
              </label>
              <input
                type="text"
                name="captcha"
                required
                autoComplete="off"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Your answer"
                className="w-full bg-slate-800/50 border-b border-slate-700 py-4 text-white focus:border-gold outline-none text-xs tracking-widest px-4"
              />
              {captchaError && (
                <p className="text-red-400 text-xs mt-2">{captchaError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-6 bg-gold text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-amber-600 transition-all"
            >
              Submit Case Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
