import { brands } from '@/lib/brands'

export function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-2xl text-balance font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
          Focused brands, one operating engine.
        </h2>
      </div>

      <ul className="mt-14 border-t border-ink/10">
        {brands.map((b, i) => {
          const Wrapper = b.comingSoon ? 'div' : 'a'
          return (
          <li key={b.id}>
            <Wrapper
              {...(b.comingSoon
                ? {}
                : { href: b.url, target: '_blank', rel: 'noreferrer' })}
              className={`group relative grid grid-cols-1 items-center gap-4 border-b border-ink/10 py-8 md:grid-cols-[auto_1fr_auto] md:gap-10 md:py-10 ${
                b.comingSoon ? 'cursor-default' : ''
              }`}
            >
              <div className="flex items-center gap-5">
                <span className="font-mono text-sm text-muted-foreground">
                  0{i + 1}
                </span>
                <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg md:h-20 md:w-32">
                  <video
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={b.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-4xl">
                  {b.wordmark}
                </h3>
                <p className="mt-1 max-w-xl text-pretty text-sm text-muted-foreground leading-relaxed md:text-base">
                  {b.blurb}
                </p>
              </div>

              <div className="flex items-center justify-between gap-6 md:flex-col md:items-end md:justify-center">
                <span className={`font-mono text-xs ${b.accent}`}>{b.domain}</span>
                {b.comingSoon ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: b.accentHex }}
                    />
                    Coming soon
                  </span>
                ) : (
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full text-background transition-transform duration-300 group-hover:translate-x-1"
                    style={{ backgroundColor: b.accentHex }}
                  >
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="#fff"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </div>
            </Wrapper>
          </li>
          )
        })}
      </ul>
    </section>
  )
}
