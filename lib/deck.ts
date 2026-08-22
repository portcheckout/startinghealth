/**
 * Investor pitch deck content for Starting.Health.
 * Unlisted — reachable only via the "@" glyph in the site footer.
 */

export type Stat = { value: string; label: string }

export type Slide =
  | {
      kind: 'cover'
      id: string
      eyebrow: string
      title: string
      body: string
      stats: Stat[]
      source: string
    }
  | {
      kind: 'stats'
      id: string
      chapter: string
      eyebrow: string
      title: string
      stats: Stat[]
      body: string
      source: string
    }
  | {
      kind: 'founder'
      id: string
      chapter: string
      eyebrow: string
      title: string
      name: string
      role: string
      paragraphs: string[]
      note: string
      source: string
    }
  | {
      kind: 'versus'
      id: string
      chapter: string
      eyebrow: string
      title: string
      leftLabel: string
      left: string[]
      rightLabel: string
      right: string
      source: string
    }
  | {
      kind: 'list'
      id: string
      chapter: string
      eyebrow: string
      title: string
      label: string
      items: string[]
      kicker: string
      source: string
    }
  | {
      kind: 'brand'
      id: string
      chapter: string
      eyebrow: string
      title: string
      pullquote: string
      features: string[]
      prices: { amount: string; term: string }[]
      designLabel: string
      design: string[]
      source: string
    }
  | {
      kind: 'steps'
      id: string
      chapter: string
      eyebrow: string
      title: string
      steps: { n: string; title: string; body: string }[]
      kickerLabel: string
      kicker: string[]
      source: string
    }
  | {
      kind: 'ladder'
      id: string
      chapter: string
      eyebrow: string
      title: string
      rungs: { n: string; title: string; detail: string; tag: string }[]
      principle: string
      source: string
    }
  | {
      kind: 'financial'
      id: string
      chapter: string
      eyebrow: string
      title: string
      bars: { label: string; revenue: number; profit: number }[]
      stats: Stat[]
      note: string
      source: string
    }
  | {
      kind: 'assumptions'
      id: string
      chapter: string
      eyebrow: string
      title: string
      groups: { label: string; rows: { k: string; v: string }[] }[]
      focus: string
      source: string
    }
  | {
      kind: 'roadmap'
      id: string
      chapter: string
      eyebrow: string
      title: string
      items: { name: string; category: string; status: string; accent: string }[]
      source: string
    }
  | {
      kind: 'funds'
      id: string
      chapter: string
      eyebrow: string
      title: string
      askValue: string
      askNote: string
      useLabel: string
      uses: string[]
      milestone: string
      source: string
    }

export const slides: Slide[] = [
  {
    kind: 'cover',
    id: 'cover',
    eyebrow: 'Investment opportunity',
    title: 'A holding company for modern direct-to-patient health brands.',
    body: 'Starting.Health builds brands that combine clinical rigor, at-home diagnostics, telehealth, pharmacy fulfillment, and recurring treatment programs — beginning with StartingGLP.',
    stats: [
      { value: '$56.2M', label: '24-month model revenue' },
      { value: '$15.1M', label: '24-month contribution profit' },
    ],
    source: 'Starting.Health site; StartingGLP site; management model outputs.',
  },
  {
    kind: 'stats',
    id: 'why-now',
    chapter: '01',
    eyebrow: 'Market setup',
    title: 'Why now: a decade-long metabolic health tailwind.',
    stats: [
      { value: '40.3%', label: 'U.S. adult obesity prevalence, 2021–2023' },
      { value: '25M', label: 'J.P. Morgan estimate of Americans on GLP-1s by 2030' },
      { value: '$190B', label: 'Morgan Stanley global GLP-1 market forecast by 2035' },
      { value: '$95B', label: 'Goldman Sachs global anti-obesity market forecast by 2030' },
    ],
    body: 'The GLP era is opening a larger direct-to-patient category: medication access is increasingly commoditized, but trusted clinical onboarding, diagnostics, monitoring, retention, and expansion into adjacent protocols remain under-built.',
    source:
      'CDC NCHS Data Brief 508; J.P. Morgan obesity drugs insight; Morgan Stanley GLP-1 forecast; Goldman Sachs anti-obesity market forecast.',
  },
  {
    kind: 'founder',
    id: 'people',
    chapter: '02',
    eyebrow: 'People first',
    title: 'Proven founders. Consumer-first healthcare. Built to scale.',
    name: 'Bryan Lenett',
    role: 'Founder',
    paragraphs: [
      'Bryan Lenett is a three-time exited entrepreneur with experience building and scaling technology-driven businesses across healthcare, digital commerce, and online marketplaces. He founded PharmacyBenefits, one of the first real-time pharmacy benefits platforms in healthcare, serving major clients including CVS and UnitedHealthcare. He later co-founded TreatMD, a telemedicine company acquired by GlobalMed, and Boatzon, a digital marine marketplace sold to MarineMax (NYSE: HZO).',
      'Across his ventures, Bryan has focused on identifying fragmented industries and building consumer-first technology platforms that simplify complex transactions and services. At Starting.Health he is applying that experience to build a scalable consumer healthcare platform spanning GLP-1 treatment, peptides, TRT, diagnostics, and longitudinal health monitoring.',
    ],
    note: 'Additional leadership to be announced.',
    source: 'StartingGLP site messaging; management analysis.',
  },
  {
    kind: 'versus',
    id: 'the-gap',
    chapter: '03',
    eyebrow: 'Customer problem',
    title: 'The gap: medication-first telehealth is easy to copy.',
    leftLabel: 'Medication-first websites',
    left: [
      'Short questionnaire becomes the primary front door',
      'Price competition around the same medication category',
      'Limited pre-treatment data for future comparison',
      'Weak reason to stay after initial prescription',
    ],
    rightLabel: 'Starting.Health thesis',
    right:
      'Build brands where the customer journey begins with clinical signal: labs, history, physician review, and ongoing monitoring — not just access to medication.',
    source: 'StartingGLP site messaging; management analysis.',
  },
  {
    kind: 'list',
    id: 'holding-model',
    chapter: '04',
    eyebrow: 'Holding company model',
    title: 'One operating engine, multiple brands.',
    label: 'Shared infrastructure',
    items: [
      'At-home diagnostics and lab logistics',
      'Telehealth physician network and protocols',
      'Pharmacy fulfillment coordination',
      'Payments, subscriptions, refunds, and lifecycle messaging',
      'Compliance, content, customer support, analytics',
    ],
    kicker:
      'Each new brand plugs into the same engine, creating operating leverage as the portfolio expands.',
    source: 'Starting.Health site: clinical-first, shared infrastructure, built-to-endure approach.',
  },
  {
    kind: 'brand',
    id: 'beachhead',
    chapter: '05',
    eyebrow: 'Brand 01',
    title: 'StartingGLP is the beachhead.',
    pullquote: 'Most GLP-1 brands start with a quiz. We start with your blood.',
    features: [
      'Free GLP baseline lab test included with treatment plan',
      'Physician consultation and medication if medically appropriate',
      'Full refund if not medically eligible for treatment',
      'Follow-up health monitoring at 3, 6, and 12 months',
    ],
    prices: [
      { amount: '$189/mo', term: 'entry plan' },
      { amount: '$499', term: '3-month plan' },
      { amount: '$899', term: '6-month plan' },
    ],
    designLabel: 'Commercial design',
    design: [
      'Core treatment plans drive recurring and prepaid revenue',
      'Free labs differentiate the brand and increase trust',
      'Health monitoring upsell raises AOV and retention',
      'Bundles create ARPU expansion without a new acquisition funnel',
    ],
    source: 'StartingGLP site product/pricing; management revenue model.',
  },
  {
    kind: 'steps',
    id: 'lifecycle',
    chapter: '06',
    eyebrow: 'Lifecycle',
    title: 'The customer journey turns a transaction into a relationship.',
    steps: [
      { n: '01', title: 'Choose plan', body: 'M2M, 3-month, or 6-month treatment plan' },
      { n: '02', title: 'Lab-first onboarding', body: 'At-home GLP lab and health questionnaire' },
      { n: '03', title: 'Physician review', body: 'Labs, medications, health history, goals' },
      { n: '04', title: 'Treatment', body: 'Prescription and fulfillment if medically appropriate' },
      { n: '05', title: 'Monitoring', body: '3-, 6-, and 12-month follow-up labs' },
      { n: '06', title: 'Expansion', body: 'Nutrition, bundles, peptide and TRT roadmaps' },
    ],
    kickerLabel: 'Why it compounds',
    kicker: [
      'Prepaid plans improve cash flow',
      'Monitoring creates repeat touchpoints',
      'More data improves personalization',
      'Brand trust expands into adjacent protocols',
    ],
    source: 'Management go-to-market model.',
  },
  {
    kind: 'ladder',
    id: 'revenue',
    chapter: '07',
    eyebrow: 'Revenue ladder',
    title: 'Multiple revenue paths from the same acquired patient.',
    rungs: [
      {
        n: '1',
        title: 'Core GLP treatment',
        detail: '$189/mo, $499/3 mo, $899/6 mo',
        tag: 'Primary engine',
      },
      {
        n: '2',
        title: 'Health monitoring',
        detail: '$149 / $280 / $450 add-on',
        tag: 'AOV + retention',
      },
      {
        n: '3',
        title: 'Bundles',
        detail: 'GLP + NAD+, sermorelin protocols',
        tag: 'ARPU expansion',
      },
      {
        n: '4',
        title: 'Nutrition / coaching',
        detail: 'Future $29–$49/mo add-on',
        tag: 'Retention + outcomes',
      },
      {
        n: '5',
        title: 'Adjacent brands',
        detail: 'Starting Peptide, Starting TRT',
        tag: 'Same infrastructure',
      },
    ],
    principle:
      'Use treatment to acquire the customer, diagnostics to differentiate, monitoring to retain, and shared infrastructure to launch the next brand.',
    source: 'StartingGLP site pricing and product bundling; management planned upsells.',
  },
  {
    kind: 'financial',
    id: 'model',
    chapter: '08',
    eyebrow: '24-month projection',
    title: 'Operating leverage appears in year two.',
    bars: [
      { label: 'Year 1', revenue: 14.8, profit: 3.1 },
      { label: 'Year 2', revenue: 41.4, profit: 12.0 },
      { label: '24M total', revenue: 56.2, profit: 15.1 },
    ],
    stats: [
      { value: '$56.2M', label: '24-month revenue' },
      { value: '$15.1M', label: '24-month contribution profit' },
      { value: '21.9K', label: 'Month 24 active treatment members' },
      { value: '26.9%', label: '24-month contribution margin' },
    ],
    note: 'Model uses current assumptions in the latest 24-month workbook and excludes corporate overhead, taxes, and financing costs.',
    source:
      'StartingGLP 24-month model v2 corrected free-labs workbook; unaudited management projection.',
  },
  {
    kind: 'assumptions',
    id: 'assumptions',
    chapter: '09',
    eyebrow: 'Model quality',
    title: 'Key assumptions are visible and adjustable.',
    groups: [
      {
        label: 'Demand and retention',
        rows: [
          { k: 'Marketing CPA', v: '$200 / lab customer' },
          { k: 'Lab-to-treatment conversion', v: '65%' },
          { k: 'Plan mix', v: '50% M2M / 25% 3M / 25% 6M' },
          { k: 'M2M churn', v: '7% monthly' },
          { k: '3M / 6M renewal', v: '80% / 65%' },
        ],
      },
      {
        label: 'Cost and platform actuals',
        rows: [
          { k: 'Initial lab cost', v: '$70' },
          { k: 'Initial physician consult', v: '$25' },
          { k: 'Medication COGS', v: '$50 / active month' },
          { k: 'Beluga fees', v: '$15 lab + $15 pharmacy ship' },
          { k: 'Platform / payment', v: '1% Care Portals + 2.5% Stripe' },
        ],
      },
    ],
    focus:
      'Diligence focus: verify sustainable CAC, medical eligibility conversion, medication cost, prepaid renewal, and month-3 / month-6 retention by cohort.',
    source: 'Management model assumptions.',
  },
  {
    kind: 'roadmap',
    id: 'roadmap',
    chapter: '10',
    eyebrow: 'Portfolio expansion',
    title: 'Starting Peptide and Starting TRT plug into the same rails.',
    items: [
      {
        name: 'StartingGLP',
        category: 'Metabolic health',
        status: 'Live / first brand',
        accent: '#0d7a52',
      },
      {
        name: 'Starting Peptide',
        category: 'Recovery, performance, longevity',
        status: 'Next roadmap brand',
        accent: '#3350cf',
      },
      {
        name: 'Starting TRT',
        category: 'Energy, strength, focus',
        status: 'Next roadmap brand',
        accent: '#9a5c14',
      },
    ],
    source: 'Starting.Health site portfolio and roadmap; management execution plan.',
  },
  {
    kind: 'funds',
    id: 'use-of-funds',
    chapter: '11',
    eyebrow: 'Use of funds',
    title: 'Fund the operating engine, not a single campaign.',
    askValue: '$750K',
    askNote:
      'For 10% equity. Flexible structure to fit the investor: equity, SAFE / convertible note, or strategic growth capital.',
    useLabel: 'Primary use of proceeds',
    uses: [
      'Patient acquisition for StartingGLP — 80% of proceeds',
      'Clinical, lab, pharmacy, compliance, and customer support operations — 20% of proceeds',
    ],
    milestone:
      'Milestone objective: prove CAC, treatment conversion, retention, and monitoring attach rate before scaling the brand portfolio.',
    source: 'Management planned capital use.',
  },
]
