/**
 * Single source of truth for the firm's marketing content.
 * Keeping copy here means an attorney or marketing lead can update the site
 * without touching layout code.
 */

export const firm = {
  name: 'Sulfab Law Office P.C.',
  shortName: 'Sulfab Law Office',
  tagline: 'Immigration & Federal Litigation · Trial Advocates',
  phoneDisplay: '(415) 360-5266',
  phoneHref: 'tel:+14153605266',
  email: 'sulfab@sulfablaw.com',
  emailHref: 'mailto:sulfab@sulfablaw.com',
  address: {
    street: '300 Montgomery Street, Suite 850',
    city: 'San Francisco',
    state: 'CA',
    zip: '94104',
    area: 'Financial District',
  },
  hours: 'Monday – Friday: 9:00 AM – 5:00 PM',
  hoursNote: 'Call the office for urgent matters',
  barNumber: 'CA Bar #313318',
  foundedBy: 'Maisoun Sulfab, Esq.',
  admissions: [
    'State Bar of California',
    'U.S. District Court, Northern District of California',
    'U.S. District Court, Eastern District of California',
    'U.S. District Court, Southern District of California',
    'U.S. District Court, Central District of California',
    'United States Patent and Trademark Office (USPTO)',
  ],
} as const;

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const practiceLinks: NavLink[] = [
  {
    label: 'Deportation Defense',
    href: '/immigration-law-service/deportation-defense-lawyer',
  },
  { label: 'Asylum', href: '/immigration-law-service/asylum-lawyer' },
  {
    label: 'Immigration Detention',
    href: '/immigration-law-service/immigration-detention-lawyer',
  },
  {
    label: 'Bond Hearings',
    href: '/immigration-law-service/immigration-bond-hearings',
  },
  {
    label: 'Habeas Corpus',
    href: '/immigration-law-service/hebeas-corpus-lawyer',
  },
  {
    label: 'Federal Litigation',
    href: '/immigration-law-service/federal-immigration-litigation',
  },
  {
    label: 'Immigration Appeals',
    href: '/immigration-law-service/immigration-appeals-lawyer',
  },
  {
    label: 'Green Cards & Waivers',
    href: '/immigration-law-service/green-card-application-and-waiver',
  },
  {
    label: 'Citizenship & Naturalization',
    href: '/immigration-law-service/citizenship-and-naturalization',
  },
];

export const locationLinks: NavLink[] = [
  { label: 'Daly City', href: '/service-areas/immigration-lawyer-daly-city' },
  { label: 'Alameda', href: '/service-areas/immigration-lawyer-alameda' },
  {
    label: 'South San Francisco',
    href: '/service-areas/immigration-lawyer-south-san-francisco',
  },
  {
    label: 'South Berkeley',
    href: '/service-areas/immigration-lawyer-south-berkeley',
  },
  { label: 'San Bruno', href: '/service-areas/immigration-lawyer-san-bruno' },
  { label: 'San Mateo', href: '/service-areas/immigration-lawyer-san-mateo' },
  { label: 'Richmond', href: '/service-areas/immigration-lawyer-richmond' },
];

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  { label: 'Our Team', href: '/our-team' },
  {
    label: 'Practice Areas',
    href: '/immigration-law-services',
    children: practiceLinks,
  },
  {
    label: 'Service Areas',
    href: '/service-areas',
    children: locationLinks,
  },
  { label: 'Contact', href: '/contact-us' },
];

export const profileLinks = [
  {
    label: 'Yelp',
    href: 'https://www.yelp.com/biz/sulfab-law-office-san-francisco',
  },
  {
    label: 'Avvo',
    href: 'https://www.avvo.com/attorneys/94104-ca-maisoun-sulfab-4987592.html',
  },
  {
    label: 'BBB',
    href: 'https://www.bbb.org/us/ca/san-francisco/profile/lawyers/sulfab-law-office-1116-982714',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/attorneysulfab_/',
  },
  {
    label: 'MapQuest',
    href: 'https://www.mapquest.com/us/california/sulfab-law-office-421153443',
  },
] as const;

export const trustPoints = [
  'California Bar admitted',
  'Four federal district courts',
  'USPTO admitted',
  'Documented federal habeas results',
];

export interface PracticeArea {
  icon: string;
  title: string;
  body: string;
  cta: string;
  href: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    icon: 'shield',
    title: 'Deportation and Removal Defense Attorney',
    body: 'If you have a Notice to Appear, your case is in immigration court and the stakes are high. As a removal defense attorney, we look for every available defense, from asylum and withholding to cancellation of removal and procedural challenges. Early review often changes which options are still open.',
    cta: 'Removal Defense Details',
    href: '/immigration-law-service/deportation-defense-lawyer',
  },
  {
    icon: 'globe',
    title: 'Asylum Lawyer',
    body: 'Asylum claims turn on credible evidence and a clear, consistent account. We help clients organize their story, gather country-condition documentation and prepare for the interview or hearing. Deadlines apply, so it helps to speak with an asylum attorney soon after arrival.',
    cta: 'Asylum Details',
    href: '/immigration-law-service/asylum-lawyer',
  },
  {
    icon: 'unlock',
    title: 'Immigration Detention and Bond Hearing Attorney',
    body: 'When a loved one is detained, the first questions are always the same: where are they, and how do we get them out? We handle bond hearing requests and challenge unlawful immigration detention when the government has no valid basis to keep someone held.',
    cta: 'Bond Hearing Details',
    href: '/immigration-law-service/immigration-detention-lawyer',
  },
  {
    icon: 'gavel',
    title: 'Immigration Habeas Corpus Attorney',
    body: 'A habeas corpus petition asks a federal judge to review whether a person’s detention is lawful. We file these petitions, along with emergency motions for a temporary restraining order when time is short. Due process rights are at the center of this work.',
    cta: 'Habeas Corpus Details',
    href: '/immigration-law-service/hebeas-corpus-lawyer',
  },
  {
    icon: 'users',
    title: 'Family-Based Immigration Attorney',
    body: 'Spousal, parent and child petitions look simple until a missing document or an old issue delays them. We prepare green card and family petitions carefully, so a USCIS lawyer is not needed later to repair avoidable errors.',
    cta: 'Family Immigration Details',
    href: '/immigration-law-service/green-card-application-and-waiver',
  },
  {
    icon: 'landmark',
    title: 'Federal Immigration Litigation and Appeals',
    body: 'When an agency decision is unlawful or unreasonably delayed, federal court may be the answer. We also handle immigration appeals and federal court immigration litigation, including cases where USCIS action has stalled.',
    cta: 'Federal Litigation Details',
    href: '/immigration-law-service/federal-immigration-litigation',
  },
];

export interface CaseResult {
  name: string;
  court: string;
  filed: string;
  lead: string;
  detail: string;
}

export const caseResults: CaseResult[] = [
  {
    name: 'Correa-Correa v. Albarran',
    court: 'E.D. Cal.',
    filed: 'Feb 13, 2026',
    lead: 'Preliminary injunction granted Feb 20, 2026.',
    detail:
      'Immediate release ordered, with limits on re-detention absent notice and a pre-deprivation hearing.',
  },
  {
    name: 'Nganda-Mekumba v. Albarran',
    court: 'E.D. Cal.',
    filed: 'Feb 20, 2026',
    lead: 'Habeas petition granted Jun 4, 2026.',
    detail:
      'No re-detention without constitutional protections. Case closed.',
  },
  {
    name: 'Charaf v. Rios',
    court: 'C.D. Cal.',
    filed: 'Apr 20, 2026',
    lead: 'Petition granted May 5, 2026.',
    detail: 'Immediate release ordered, subject to existing parole conditions.',
  },
  {
    name: 'Bertis Bermudez v. Albarran',
    court: 'E.D. Cal.',
    filed: 'Feb 9, 2026',
    lead: 'Emergency relief granted.',
    detail:
      'Release under prior conditions, with notice and a pre-detention hearing required before further detention.',
  },
  {
    name: 'Lopez-Aldama v. Rios',
    court: 'C.D. Cal.',
    filed: 'Aug 28, 2026',
    lead: 'Partial relief.',
    detail:
      'Individualized bond hearing within seven days, or release on tailored conditions. Other requested relief denied.',
  },
];

export interface LocationArea {
  city: string;
  body: string;
  href: string;
}

export const locations: LocationArea[] = [
  {
    city: 'San Francisco',
    href: '/service-areas',
    body: 'Clients from the Mission, SoMa, the Richmond and Sunset districts and Chinatown, among other neighborhoods.',
  },
  {
    city: 'Daly City',
    href: '/service-areas/immigration-lawyer-daly-city',
    body: 'Families in Serramonte, Westlake and the surrounding blocks, including many with family-based petitions.',
  },
  {
    city: 'South San Francisco and San Bruno',
    href: '/service-areas/immigration-lawyer-south-san-francisco',
    body: 'Workers and families near downtown South San Francisco and the Crestmoor and downtown San Bruno areas.',
  },
  {
    city: 'San Mateo',
    href: '/service-areas/immigration-lawyer-san-mateo',
    body: 'Residents of downtown San Mateo and Hayward Park who need help with USCIS filings or hearings.',
  },
  {
    city: 'Oakland and Alameda',
    href: '/service-areas/immigration-lawyer-alameda',
    body: 'Fruitvale, Chinatown and Park Street communities, including families facing detention or re-detention.',
  },
  {
    city: 'Berkeley and Richmond',
    href: '/service-areas/immigration-lawyer-south-berkeley',
    body: 'Students, workers and families in South Berkeley, Point Richmond and the Iron Triangle.',
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'When should I hire an immigration attorney?',
    answer:
      'Hire one as soon as you receive a Notice to Appear, a denial, a request for evidence or news that someone you love has been detained. Early advice often keeps more options open.',
  },
  {
    question: 'What is a habeas corpus petition in an immigration case?',
    answer:
      'It is a federal court filing that asks a judge to decide whether a person’s immigration detention is lawful. It can lead to release or to a hearing the person was denied.',
  },
  {
    question: 'Can someone in immigration detention get a bond hearing?',
    answer:
      'Sometimes. It depends on the person’s history and the legal basis for detention. When a hearing is wrongly denied, a federal court may order one, as happened in one of our recent cases.',
  },
  {
    question: 'How long does a family-based green card take?',
    answer:
      'Spouses, parents and unmarried minor children of U.S. citizens usually move faster than other categories, which can face long visa backlogs. We review your category and give you a realistic timeline.',
  },
  {
    question: 'Is there a deadline to apply for asylum?',
    answer:
      'Asylum generally must be requested within one year of arriving in the United States, with limited exceptions. If you are close to that date or past it, speak with an asylum lawyer promptly.',
  },
  {
    question: 'Do you take cases outside San Francisco?',
    answer:
      'Yes. We represent clients across San Francisco, Daly City, South San Francisco, San Bruno, San Mateo, Oakland, Alameda, Berkeley and Richmond.',
  },
  {
    question: 'Which court will hear my case?',
    answer:
      'That depends on where you live and whether you are detained. Immigration court, USCIS and federal court each have their own rules, and we explain which applies to you.',
  },
  {
    question: 'What if my family member is detained far from the Bay Area?',
    answer:
      'Call us anyway. A federal habeas petition is filed in the district where a person is held, and Maisoun is admitted in the Northern, Eastern, Central and Southern Districts of California.',
  },
  {
    question: 'Can I meet with an attorney if I cannot travel to the office?',
    answer:
      'Yes. Consultations are available by phone and video. This helps clients in the East Bay, on the Peninsula and those with detained family members.',
  },
  {
    question: 'Do you speak with clients from every Bay Area community?',
    answer:
      'We work with families from many neighborhoods and backgrounds. Spanish-language support is available. Ask about other languages and interpreter options when you call.',
  },
];

export const processSteps = [
  {
    title: 'Free consultation',
    body: 'Call or submit the form. We ask about your status, your history and any papers you have received.',
  },
  {
    title: 'Case review',
    body: 'We review your documents and identify the strongest legal path, whether that is immigration court, USCIS or federal court.',
  },
  {
    title: 'Strategy and fees',
    body: 'We explain the plan, timeline and cost before you decide to hire us.',
  },
  {
    title: 'Filing and preparation',
    body: 'We prepare the petition, application or motion, and get you ready for any interview or hearing.',
  },
  {
    title: 'Follow-through',
    body: 'We track deadlines, respond to the government and keep you updated until the case is resolved.',
  },
];

export const differentiators = [
  {
    icon: 'scale',
    title: 'A Federal Court Focus',
    body: 'Many immigration firms stay inside immigration court. We also litigate in federal court, which gives detained clients another route when the usual process is too slow or the detention itself looks unlawful.',
  },
  {
    icon: 'flask',
    title: 'A Scientific, Detail-Driven Approach',
    body: 'Maisoun’s background in biotechnology and pharmaceuticals shows up in how cases are prepared: organized timelines, source documents for every claim and no guesswork about what the record says.',
  },
  {
    icon: 'badge-check',
    title: 'Straight Answers',
    body: 'You will hear what your options are, what each could cost in time and risk, and where the case is weak. Nobody can promise an outcome in immigration law, and we will not pretend otherwise.',
  },
  {
    icon: 'headset',
    title: 'Responsive Communication',
    body: 'Detention and hearing deadlines do not wait. We return calls, explain each step in plain language and tell you what to expect next.',
  },
];

export const caseTypes = [
  'Asylum',
  'Removal Defense',
  'Detention or Bond',
  'Family Petition',
  'Green Card / Waiver',
  'Citizenship / Naturalization',
  'Federal Litigation / Mandamus',
  'Other Legal Service',
];

export const statuteList = [
  {
    term: 'Asylum (INA § 208)',
    body: 'Protection for individuals with a well-founded fear of persecution based on protected grounds.',
  },
  {
    term: 'Withholding of Removal (INA § 241(b)(3))',
    body: 'Mandatory protection when life or freedom is threatened in the country of origin.',
  },
  {
    term: 'Convention Against Torture (CAT)',
    body: 'Relief under federal regulations prohibiting removal to countries where torture is likely by or with the acquiescence of government officials.',
  },
  {
    term: 'Cancellation of Removal (INA § 240A)',
    body: 'Available to lawful permanent residents and non-permanent residents meeting statutory continuous presence and hardship thresholds.',
  },
  {
    term: 'Adjustment of Status (INA § 245)',
    body: 'Converting temporary presence or uninspected entry (with waiver or statutory eligibility) into lawful permanent residence.',
  },
  {
    term: 'Habeas Corpus (28 U.S.C. § 2241)',
    body: 'Article III federal court challenge to unconstitutional detention practices.',
  },
];
