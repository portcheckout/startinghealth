import type { Slide } from '@/lib/deck'

/* Accent cycles through the three portfolio brand colors, darkened so they
   hold contrast against the light paper background. */
const ACCENTS = ['#0d7a52', '#3350cf', '#9a5c14']
export function accentFor(i: number) {
  return ACCENTS[i % ACCENTS.length]
}

function Eyebrow({ text, accent }: { text: string; accent: string }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/65">
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
      {text}
    </p>
  )
}

function Source({ text }: { text: string }) {
  return (
    <p className="mt-10 font-mono text-[10px] leading-relaxed text-ink/45 md:absolute md:bottom-0 md:left-0 md:right-0 md:mt-0">
      Sources: {text}
    </p>
  )
}

/** Shared spread shell: full-viewport, snap target, ghosted chapter numeral. */
function Shell({
  chapter,
  children,
}: {
  chapter?: string
  children: React.ReactNode
}) {
  return (
    <section className="relative flex min-h-[100svh] w-full snap-start flex-col overflow-hidden px-6 pb-10 pt-24 md:h-[100svh] md:px-16 md:pt-28">
      {chapter ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 bottom-[-4rem] select-none font-display text-[22rem] font-extrabold leading-none text-ink/[0.025] md:-right-10 md:text-[34rem]"
        >
          {chapter}
        </span>
      ) : null}
      <div className="relative flex h-full w-full flex-col md:justify-center md:pb-10">{children}</div>
    </section>
  )
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-6 max-w-4xl text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
      {children}
    </h2>
  )
}

export function DeckSlide({ slide, index }: { slide: Slide; index: number }) {
  const accent = accentFor(index)

  switch (slide.kind) {
    /* ---------------- COVER ---------------- */
    case 'cover':
      return (
        <Shell>
          <div className="flex flex-1 flex-col justify-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/58">
              {slide.eyebrow}
            </p>

            <h1 className="mt-8 max-w-5xl text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-ink md:text-6xl lg:text-7xl">
              {slide.title}
            </h1>
            <p className="mt-7 max-w-2xl text-pretty leading-relaxed text-ink/70 md:text-lg">
              {slide.body}
            </p>

            <div className="mt-12 flex flex-wrap items-start gap-x-16 gap-y-8">
              {slide.stats.map((s) => (
                <div key={s.label}>
                  <p
                    className="font-display text-4xl font-extrabold leading-none tracking-tight md:text-5xl"
                    style={{ color: accent }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-3 max-w-[15rem] font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-ink/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
          <Source text={slide.source} />
        </Shell>
      )

    /* ---------------- STATS (market) ---------------- */
    case 'stats':
      return (
        <Shell chapter={slide.chapter}>
          <Eyebrow text={slide.eyebrow} accent={accent} />
          <Title>{slide.title}</Title>
          <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-10 lg:grid-cols-4">
            {slide.stats.map((s) => (
              <div key={s.label} className="border-t border-ink/18 pt-5">
                <p
                  className="font-display text-3xl font-extrabold tracking-tight md:text-[2.75rem]"
                  style={{ color: accent }}
                >
                  {s.value}
                </p>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-ink/65">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-pretty leading-relaxed text-ink/70">{slide.body}</p>
          <Source text={slide.source} />
        </Shell>
      )

    /* ---------------- FOUNDER ---------------- */
    case 'founder':
      return (
        <Shell chapter={slide.chapter}>
          <Eyebrow text={slide.eyebrow} accent={accent} />
          <Title>{slide.title}</Title>
          <div className="mt-10 grid flex-1 grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                {slide.name}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em]" style={{ color: accent }}>
                {slide.role}
              </p>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/52">
                {slide.note}
              </p>
            </div>
            <div className="space-y-5 border-l border-ink/18 pl-0 lg:pl-10">
              {slide.paragraphs.map((p, i) => (
                <p key={i} className="text-pretty text-sm leading-relaxed text-ink/70 md:text-base">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <Source text={slide.source} />
        </Shell>
      )

    /* ---------------- VERSUS ---------------- */
    case 'versus':
      return (
        <Shell chapter={slide.chapter}>
          <Eyebrow text={slide.eyebrow} accent={accent} />
          <Title>{slide.title}</Title>
          <div className="mt-12 grid flex-1 grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/58">
                {slide.leftLabel}
              </p>
              <ul className="mt-6 space-y-4">
                {slide.left.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-t border-ink/14 pt-4 text-sm leading-relaxed text-ink/60"
                  >
                    <span className="mt-2 h-px w-4 shrink-0 bg-ink/40" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{ backgroundColor: `${accent}14`, border: `1px solid ${accent}40` }}
            >
              <p
                className="font-mono text-[11px] uppercase tracking-[0.25em]"
                style={{ color: accent }}
              >
                {slide.rightLabel}
              </p>
              <p className="mt-6 text-balance font-display text-xl font-bold leading-snug text-ink md:text-2xl">
                {slide.right}
              </p>
            </div>
          </div>
          <Source text={slide.source} />
        </Shell>
      )

    /* ---------------- LIST (holding model) ---------------- */
    case 'list':
      return (
        <Shell chapter={slide.chapter}>
          <Eyebrow text={slide.eyebrow} accent={accent} />
          <Title>{slide.title}</Title>
          <div className="mt-12 grid flex-1 grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/58">
                {slide.label}
              </p>
              <ul className="mt-6">
                {slide.items.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-5 border-t border-ink/14 py-4 text-ink/75"
                  >
                    <span
                      className="font-mono text-[11px] tabular-nums"
                      style={{ color: accent }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-pretty text-sm leading-relaxed md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-balance font-display text-lg font-bold leading-snug text-ink/80 md:text-2xl">
              {slide.kicker}
            </p>
          </div>
          <Source text={slide.source} />
        </Shell>
      )

    /* ---------------- BRAND ---------------- */
    case 'brand':
      return (
        <Shell chapter={slide.chapter}>
          <Eyebrow text={slide.eyebrow} accent={accent} />
          <Title>{slide.title}</Title>
          <div className="mt-8 grid flex-1 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p
                className="text-balance font-display text-2xl font-extrabold leading-tight md:text-3xl"
                style={{ color: accent }}
              >
                {slide.pullquote}
              </p>
              <ul className="mt-8 space-y-3">
                {slide.features.map((f) => (
                  <li key={f} className="flex gap-4 text-sm leading-relaxed text-ink/70">
                    <span
                      className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: accent }}
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
                {slide.prices.map((p) => (
                  <div key={p.term}>
                    <p className="font-display text-2xl font-extrabold tracking-tight text-ink">
                      {p.amount}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/58">
                      {p.term}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-ink/18 pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/58">
                {slide.designLabel}
              </p>
              <ul className="mt-6 space-y-5">
                {slide.design.map((d) => (
                  <li
                    key={d}
                    className="text-pretty text-sm leading-relaxed text-ink/70 md:text-base"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Source text={slide.source} />
        </Shell>
      )

    /* ---------------- STEPS (lifecycle) ---------------- */
    case 'steps':
      return (
        <Shell chapter={slide.chapter}>
          <Eyebrow text={slide.eyebrow} accent={accent} />
          <Title>{slide.title}</Title>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 md:grid-cols-3 lg:grid-cols-6">
            {slide.steps.map((s) => (
              <div key={s.n} className="border-t-2 pt-4" style={{ borderColor: `${accent}55` }}>
                <p className="font-mono text-[11px] tabular-nums" style={{ color: accent }}>
                  {s.n}
                </p>
                <p className="mt-3 font-display text-sm font-bold leading-tight text-ink md:text-base">
                  {s.title}
                </p>
                <p className="mt-2 text-pretty text-xs leading-relaxed text-ink/60">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/58">
              {slide.kickerLabel}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-10 gap-y-3">
              {slide.kicker.map((k) => (
                <p key={k} className="text-sm leading-relaxed text-ink/70">
                  {k}
                </p>
              ))}
            </div>
          </div>
          <Source text={slide.source} />
        </Shell>
      )

    /* ---------------- LADDER ---------------- */
    case 'ladder':
      return (
        <Shell chapter={slide.chapter}>
          <Eyebrow text={slide.eyebrow} accent={accent} />
          <Title>{slide.title}</Title>
          <ul className="mt-10 flex-1">
            {slide.rungs.map((r) => (
              <li
                key={r.n}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-1 border-t border-ink/14 py-4 md:grid-cols-[auto_1.1fr_1fr_auto]"
              >
                <span
                  className="font-display text-xl font-extrabold tabular-nums"
                  style={{ color: accent }}
                >
                  {r.n}
                </span>
                <span className="font-display text-base font-bold text-ink md:text-lg">
                  {r.title}
                </span>
                <span className="col-start-2 text-sm text-ink/65 md:col-start-3">{r.detail}</span>
                <span className="col-start-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/52 md:col-start-4 md:text-right">
                  {r.tag}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-balance font-display text-lg font-bold leading-snug text-ink/80 md:text-xl">
            {slide.principle}
          </p>
          <Source text={slide.source} />
        </Shell>
      )

    /* ---------------- FINANCIAL ---------------- */
    case 'financial': {
      const max = Math.max(...slide.bars.map((b) => b.revenue))
      return (
        <Shell chapter={slide.chapter}>
          <Eyebrow text={slide.eyebrow} accent={accent} />
          <Title>{slide.title}</Title>
          <div className="mt-10 grid flex-1 grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/65">
                  <span className="h-2 w-4 rounded-sm" style={{ backgroundColor: accent }} />
                  Revenue
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/65">
                  <span className="h-2 w-4 rounded-sm bg-ink/40" />
                  Contribution profit
                </span>
              </div>
              <div className="mt-7 space-y-7">
                {slide.bars.map((b) => (
                  <div key={b.label}>
                    <div className="flex items-baseline justify-between">
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70">
                        {b.label}
                      </p>
                      <p className="font-mono text-[11px] tabular-nums text-ink/58">
${b.revenue.toFixed(1)}M / ${b.profit.toFixed(1)}M
                      </p>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div
                        className="h-4 rounded-sm"
                        style={{
                          width: `${(b.revenue / max) * 100}%`,
                          backgroundColor: accent,
                        }}
                      />
                      <div
                        className="h-4 rounded-sm bg-ink/40"
                        style={{ width: `${(b.profit / max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-7">
                {slide.stats.map((s) => (
                  <div key={s.label} className="border-t border-ink/18 pt-4">
                    <p className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-2 text-pretty text-xs leading-relaxed text-ink/60">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-pretty text-xs leading-relaxed text-ink/52">{slide.note}</p>
            </div>
          </div>
          <Source text={slide.source} />
        </Shell>
      )
    }

    /* ---------------- ASSUMPTIONS ---------------- */
    case 'assumptions':
      return (
        <Shell chapter={slide.chapter}>
          <Eyebrow text={slide.eyebrow} accent={accent} />
          <Title>{slide.title}</Title>
          <div className="mt-10 grid flex-1 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {slide.groups.map((g) => (
              <div key={g.label}>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/58">
                  {g.label}
                </p>
                <dl className="mt-5">
                  {g.rows.map((r) => (
                    <div
                      key={r.k}
                      className="flex items-baseline justify-between gap-6 border-t border-ink/14 py-3.5"
                    >
                      <dt className="text-sm text-ink/68">{r.k}</dt>
                      <dd
                        className="text-right font-display text-sm font-bold md:text-base"
                        style={{ color: accent }}
                      >
                        {r.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-pretty text-sm leading-relaxed text-ink/70">
            {slide.focus}
          </p>
          <Source text={slide.source} />
        </Shell>
      )

    /* ---------------- ROADMAP ---------------- */
    case 'roadmap':
      return (
        <Shell chapter={slide.chapter}>
          <Eyebrow text={slide.eyebrow} accent={accent} />
          <Title>{slide.title}</Title>
          <div className="mt-12 grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
            {slide.items.map((it) => (
              <div
                key={it.name}
                className="flex flex-col justify-between rounded-2xl p-7"
                style={{
                  backgroundColor: `${it.accent}12`,
                  border: `1px solid ${it.accent}38`,
                }}
              >
                <div>
                  <span
                    className="inline-flex h-1.5 w-10 rounded-full"
                    style={{ backgroundColor: it.accent }}
                    aria-hidden="true"
                  />
                  <p className="mt-6 text-balance font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
                    {it.domain}
                  </p>
                  <p className="mt-3 text-sm text-ink/65">{it.category}</p>
                </div>
                <p
                  className="mt-10 font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: it.accent }}
                >
                  {it.status}
                </p>
              </div>
            ))}
          </div>
          <Source text={slide.source} />
        </Shell>
      )

    /* ---------------- USE OF FUNDS ---------------- */
    case 'funds':
      return (
        <Shell chapter={slide.chapter}>
          <Eyebrow text={slide.eyebrow} accent={accent} />
          <Title>{slide.title}</Title>
          <div className="mt-12 grid flex-1 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/58">
                Capital sought
              </p>
              <p
                className="mt-5 font-display text-6xl font-extrabold tracking-tight md:text-7xl"
                style={{ color: accent }}
              >
                {slide.askValue}
              </p>
              <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-ink/68">
                {slide.askNote}
              </p>
            </div>
            <div className="border-t border-ink/18 pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/58">
                {slide.useLabel}
              </p>
              <div className="mt-6 border-l-2 pl-5" style={{ borderColor: accent }}>
                <p className="text-pretty font-display text-base font-extrabold leading-snug tracking-tight text-ink md:text-lg">
                  {slide.readiness.headline}
                </p>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-ink/68">
                  {slide.readiness.detail}
                </p>
              </div>
              <ul className="mt-7 space-y-5">
                {slide.uses.map((u) => (
                  <li
                    key={u}
                    className="text-pretty text-sm leading-relaxed text-ink/72 md:text-base"
                  >
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 max-w-4xl text-balance font-display text-lg font-bold leading-snug text-ink/80 md:text-xl">
            {slide.milestone}
          </p>
          <Source text={slide.source} />
        </Shell>
      )
  }
}
