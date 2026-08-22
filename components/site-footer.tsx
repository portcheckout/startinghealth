import Link from 'next/link'
import { brands } from '@/lib/brands'

export function SiteFooter() {
  return (
    <footer id="contact" className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div id="about">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex h-5 gap-[3px]" aria-hidden="true">
              <span className="w-[6px] rounded-full bg-brand-glp" />
              <span className="w-[6px] rounded-full bg-brand-trt" />
              <span className="w-[6px] rounded-full bg-brand-peptide" />
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight text-ink">
              STARTING<span className="opacity-40">.</span>HEALTH
            </span>
          </div>
          <p className="max-w-md text-pretty text-muted-foreground leading-relaxed">
            A holding company building the next generation of direct-to-patient
            health brands. Clinician-led, technology-driven, patient-obsessed.
          </p>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Portfolio
          </p>
          <ul className="space-y-3">
            {brands.map((b) => (
              <li key={b.id}>
                {b.comingSoon ? (
                  <span className="inline-flex items-center gap-2 font-display font-semibold text-muted-foreground">
                    {b.domain}
                    <span className="rounded-full border border-ink/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em]">
                      {b.launch ?? 'Soon'}
                    </span>
                  </span>
                ) : (
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display font-semibold text-ink transition-colors hover:text-muted-foreground"
                  >
                    {b.domain}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Get in touch
          </p>
          {/* The "@" is the unlisted entry point to the investor deck. */}
          <span className="inline-flex items-baseline font-display font-semibold text-ink">
            <a
              href="mailto:hello@starting.health"
              className="transition-colors hover:text-muted-foreground"
            >
              hello
            </a>
            <Link
              href="/deck"
              aria-label="Investor deck"
              className="transition-colors hover:text-brand-glp"
            >
              @
            </Link>
            <a
              href="mailto:hello@starting.health"
              className="transition-colors hover:text-muted-foreground"
            >
              starting.health
            </a>
          </span>
          <p className="mt-3 text-sm text-muted-foreground">
            For partnership & investment inquiries.
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-ink/10 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Starting.Health. All rights reserved.</p>
      </div>
    </footer>
  )
}
