export type Brand = {
  id: string
  name: string
  wordmark: string
  domain: string
  url: string
  category: string
  headline: string
  blurb: string
  video: string
  /** tailwind text color token */
  accent: string
  /** hex used for glows / marquee tint */
  accentHex: string
  /** brand not yet launched */
  comingSoon?: boolean
}

export const brands: Brand[] = [
  {
    id: 'glp',
    name: 'StartingGLP',
    wordmark: 'Starting GLP',
    domain: 'StartingGLP.com',
    url: 'https://StartingGLP.com',
    category: 'Metabolic health',
    headline: 'Test First, Then Prescribe.',
    blurb:
      'Get a free GLP baseline lab test and a physician consultation included with your treatment plan. If GLP-1 treatment is medically appropriate, your physician can prescribe based on your labs, medications, health history, and goals — not just a five-minute questionnaire.',
    video: '/videos/womanrunning.mp4',
    accent: 'text-brand-glp',
    accentHex: '#1fae7a',
  },
  {
    id: 'peptide',
    name: 'StartingPeptide',
    wordmark: 'Starting Peptide',
    domain: 'StartingPeptide.com',
    url: 'https://StartingPeptide.com',
    category: 'Recovery & longevity',
    headline:
      'Test first, discuss treatment, then prescribe — responsible Peptide treatment.',
    comingSoon: true,
    blurb:
      'Lab first and physician-guided next generation peptide therapies for recovery, performance, and healthy longevity — prescribed responsibly.',
    video: '/videos/woman2.mp4',
    accent: 'text-brand-peptide',
    accentHex: '#4f6ff0',
  },
  {
    id: 'trt',
    name: 'StartingTRT',
    wordmark: 'Starting TRT',
    domain: 'StartingTRT.com',
    url: 'https://StartingTRT.com',
    category: "Men's hormone health",
    headline: 'Doctor-trusted Testosterone Therapy Medications.',
    comingSoon: true,
    blurb:
      'Comprehensive lab testing and clinician-managed TRT protocols built to restore energy, strength, and focus.',
    video: '/videos/menwoman.mp4',
    accent: 'text-brand-trt',
    accentHex: '#d68b2a',
  },
]
