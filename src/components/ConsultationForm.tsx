import { useEffect, useRef, useState } from 'react';
import { caseTypes, firm } from '../data/site';

type Variant = 'hero' | 'full';

interface Props {
  variant?: Variant;
  idPrefix?: string;
  defaultCaseType?: string;
}

type FieldName = 'name' | 'city' | 'email' | 'phone' | 'caseType' | 'description';

type Errors = Partial<Record<FieldName | 'consent', string>>;

const initialValues: Record<FieldName, string> = {
  name: '',
  city: '',
  email: '',
  phone: '',
  caseType: caseTypes[0],
  description: '',
};

export default function ConsultationForm({
  variant = 'full',
  idPrefix = 'contact',
  defaultCaseType,
}: Props) {
  const startingValues: Record<FieldName, string> = {
    ...initialValues,
    caseType:
      defaultCaseType && caseTypes.includes(defaultCaseType)
        ? defaultCaseType
        : initialValues.caseType,
  };

  const [values, setValues] = useState<Record<FieldName, string>>(startingValues);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [reference, setReference] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const isHero = variant === 'hero';
  const id = (field: string) => `${idPrefix}-${field}`;

  function update(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function validate(): Errors {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = 'Please enter your full name.';
    if (values.city.trim().length < 2) next.city = 'Please enter your city.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (values.phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Please enter a reachable phone number.';
    }
    if (!values.caseType) next.caseType = 'Please select a case type.';
    if (!isHero && values.description.trim().length < 10) {
      next.description = 'Please add a sentence or two about your situation.';
    }
    if (!consent) next.consent = 'Please acknowledge the disclaimer to continue.';
    return next;
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (status === 'sending') return;

    const nextErrors = validate();
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      const target = document.getElementById(id(firstError));
      target?.focus();
      return;
    }

    setStatus('sending');
    // Demo submission. Replace this block with a POST to your intake endpoint
    // (Formspree, a serverless function, or the firm's CRM webhook).
    timer.current = setTimeout(() => {
      setReference(`SLO-${String(Math.floor(1000 + Math.random() * 9000))}`);
      setStatus('success');
    }, 700);
  }

  function reset() {
    if (timer.current) clearTimeout(timer.current);
    setValues(startingValues);
    setConsent(false);
    setErrors({});
    setReference('');
    setStatus('idle');
  }

  const errorText = (field: keyof Errors) =>
    errors[field] ? (
      <p id={id(`${field}-error`)} className="mt-1 text-[10px] font-medium text-brand-700">
        {errors[field]}
      </p>
    ) : null;

  const describedBy = (field: keyof Errors) =>
    errors[field] ? id(`${field}-error`) : undefined;

  if (status === 'success') {
    const firstName = values.name.trim().split(/\s+/)[0];
    return (
      <div role="status" aria-live="polite" className="py-4 text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-brand-800">
          <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3
          ref={successRef}
          tabIndex={-1}
          className="mt-5 text-2xl font-semibold text-slate-900 focus:outline-none"
        >
          Request received
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-[13px] leading-relaxed text-slate-600">
          Thank you{firstName ? `, ${firstName}` : ''}. Your inquiry has been logged and a
          member of the firm will reach out within one business day.
          {isHero && ' If this is a detention emergency, please call now.'}
        </p>

        <div className="mx-auto mt-5 flex max-w-xs items-center justify-between border border-stone-200 bg-stone-50 px-3 py-2 font-mono text-[10px] text-slate-500">
          <span>Reference</span>
          <span className="font-semibold text-brand-800">{reference}</span>
        </div>

        <a href={firm.phoneHref} className="btn-primary mt-6 w-full">
          Call {firm.phoneDisplay}
        </a>
        <button
          type="button"
          onClick={reset}
          className="mt-3 text-[10px] font-semibold tracking-[0.12em] text-slate-500 uppercase underline decoration-stone-300 underline-offset-4 transition hover:text-brand-800"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={isHero ? 'space-y-3' : 'space-y-4'}
      aria-describedby={`${idPrefix}-form-note`}
    >
      {isHero && (
        <div className="border-b border-stone-200 pb-3">
          <div className="flex items-center justify-between gap-2">
            <span className="font-display text-[10px] font-bold tracking-[0.14em] text-brand-800 uppercase">
              Confidential Case Intake
            </span>
            <span className="bg-stone-100 px-2 py-0.5 font-mono text-[9px] tracking-wide text-stone-500 uppercase">
              Direct review
            </span>
          </div>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">Request a Free Consultation</h3>
          <p className="mt-1 text-[11px] leading-snug text-slate-500">
            Speak directly with the attorney. No obligation, fully confidential.
          </p>
        </div>
      )}

      <div>
        <label className="field-label" htmlFor={id('name')}>
          Full Name <span className="text-brand-700">*</span>
        </label>
        <input
          id={id('name')}
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Full legal name"
          className="field-input"
          value={values.name}
          onChange={(event) => update('name', event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={describedBy('name')}
          required
        />
        {errorText('name')}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="field-label" htmlFor={id('phone')}>
            Phone <span className="text-brand-700">*</span>
          </label>
          <input
            id={id('phone')}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(415) 000-0000"
            className="field-input"
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy('phone')}
            required
          />
          {errorText('phone')}
        </div>
        <div>
          <label className="field-label" htmlFor={id('city')}>
            City <span className="text-brand-700">*</span>
          </label>
          <input
            id={id('city')}
            name="city"
            type="text"
            autoComplete="address-level2"
            placeholder={isHero ? 'San Francisco' : 'e.g. San Francisco'}
            className="field-input"
            value={values.city}
            onChange={(event) => update('city', event.target.value)}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={describedBy('city')}
            required
          />
          {errorText('city')}
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor={id('email')}>
          Email <span className="text-brand-700">*</span>
        </label>
        <input
          id={id('email')}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@domain.com"
          className="field-input"
          value={values.email}
          onChange={(event) => update('email', event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describedBy('email')}
          required
        />
        {errorText('email')}
      </div>

      <div>
        <label className="field-label" htmlFor={id('caseType')}>
          Type of Case <span className="text-brand-700">*</span>
        </label>
        <select
          id={id('caseType')}
          name="case_type"
          className="field-input"
          value={values.caseType}
          onChange={(event) => update('caseType', event.target.value)}
          aria-invalid={Boolean(errors.caseType)}
          aria-describedby={describedBy('caseType')}
          required
        >
          {caseTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errorText('caseType')}
      </div>

      <div>
        <label className="field-label" htmlFor={id('description')}>
          Short Description{' '}
          {!isHero && <span className="text-brand-700">*</span>}
        </label>
        <textarea
          id={id('description')}
          name="description"
          rows={isHero ? 2 : 4}
          placeholder={
            isHero
              ? 'Notice received, court dates, facility location…'
              : 'Please describe court notices, detention facility location, case numbers, or upcoming deadlines…'
          }
          className="field-input resize-y"
          value={values.description}
          onChange={(event) => update('description', event.target.value)}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={describedBy('description')}
          required={!isHero}
        />
        {errorText('description')}
      </div>

      <div>
        <div className="flex items-start gap-2">
          <input
            id={id('consent')}
            name="consent"
            type="checkbox"
            checked={consent}
            onChange={(event) => {
              setConsent(event.target.checked);
              setErrors((current) => {
                const next = { ...current };
                delete next.consent;
                return next;
              });
            }}
            className="mt-0.5 size-3.5 shrink-0 accent-brand-800"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={describedBy('consent')}
            required
          />
          <label htmlFor={id('consent')} className="text-[10px] leading-snug text-slate-600">
            I understand that submitting this inquiry does not create an attorney-client
            relationship and that my information is held strictly confidential.
          </label>
        </div>
        {errorText('consent')}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-1 flex w-full items-center justify-center gap-2 border border-brand-950 bg-brand-800 px-6 py-3.5 font-display text-[11px] font-bold tracking-[0.14em] text-white uppercase shadow transition hover:bg-brand-900 disabled:cursor-wait disabled:opacity-80"
      >
        {status === 'sending' ? (
          <>
            <span className="size-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Sending request…
          </>
        ) : (
          <>
            {isHero ? 'Request My Consultation' : 'Schedule a Free Consultation'}
            <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      <p id={`${idPrefix}-form-note`} className="text-[10px] leading-relaxed text-slate-500">
        {isHero ? (
          <span className="flex items-center justify-between gap-3 border-t border-stone-200 pt-2.5 font-mono">
            <span>{firm.barNumber}</span>
            <span className="font-sans font-semibold tracking-[0.08em] text-brand-800 uppercase">
              Fast response
            </span>
          </span>
        ) : (
          'No fee for the initial consultation. Do not include sensitive documents in this form.'
        )}
      </p>
    </form>
  );
}
