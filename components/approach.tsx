const pillars = [
  {
    title: 'Clinical first',
    body: 'Every brand is built on licensed physicians, laboratory testing, real diagnostics, and evidence-based protocols — not shortcuts.',
  },
  {
    title: 'Shared infrastructure',
    body: 'One platform for pharmacy, compliance, telehealth, and logistics that each brand plugs into on day one.',
  },
  {
    title: 'Built to endure',
    body: 'We back categories of care with decade-long tailwinds and operate them like enduring businesses.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="border-y border-ink/10 bg-ink text-background">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-background/60">
          The approach
        </p>
        <p className="max-w-4xl text-balance font-display text-2xl font-semibold leading-snug tracking-tight md:text-4xl">
          Starting.Health builds and scales direct-to-patient health companies. We
          bring the capital, the clinical rigor, and the operating muscle so each
          brand can move fast without cutting corners.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-background/15 bg-background/15 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="bg-ink p-8 md:p-10">
              <div className="mb-6 flex gap-[3px]">
                <span className="h-4 w-[5px] rounded-full bg-brand-glp" />
                <span className="h-4 w-[5px] rounded-full bg-brand-trt" />
                <span className="h-4 w-[5px] rounded-full bg-brand-peptide" />
              </div>
              <h3 className="font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-pretty text-background/70 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
