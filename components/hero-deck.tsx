'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { brands } from '@/lib/brands'

const DURATION = 6500

function Marquee({
  text,
  reverse = false,
  className = '',
}: {
  text: string
  reverse?: boolean
  className?: string
}) {
  const items = Array.from({ length: 8 })
  return (
    <div className={`flex w-full overflow-hidden ${className}`} aria-hidden="true">
      <div className={`flex shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {items.map((_, i) => (
          <span
            key={`a-${i}`}
            className="whitespace-nowrap px-6 font-display text-[13vw] font-extrabold uppercase leading-none tracking-tight md:text-[9vw]"
          >
            {text}
          </span>
        ))}
      </div>
      <div
        className={`flex shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        aria-hidden="true"
      >
        {items.map((_, i) => (
          <span
            key={`b-${i}`}
            className="whitespace-nowrap px-6 font-display text-[13vw] font-extrabold uppercase leading-none tracking-tight md:text-[9vw]"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

export function HeroDeck() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const go = useCallback((next: number) => {
    setIndex((next + brands.length) % brands.length)
  }, [])

  useEffect(() => {
    if (paused) return
    timer.current = setTimeout(() => setIndex((i) => (i + 1) % brands.length), DURATION)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [index, paused])

  // Pause only while the tab is in the background, so the deck keeps
  // rotating whenever the visitor is actually looking at it.
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  const brand = brands[index]

  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink"
      style={{ perspective: '1600px' }}
    >
      {/* Flipping card — remounts on index change to replay the flip */}
      <div key={brand.id} className="animate-flip-in absolute inset-0">
        <video
          className="animate-slow-zoom h-full w-full object-cover"
          src={brand.video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* readability gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/45" />
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            background: `radial-gradient(120% 90% at 80% 10%, ${brand.accentHex}55, transparent 60%)`,
          }}
        />

        {/* Moving text overlays */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-[2vh] text-white/10">
          <Marquee text={`${brand.name} — `} />
          <Marquee text={`${brand.category} — `} reverse />
        </div>
      </div>

      {/* Foreground content (static, above the card) */}
      <div className="pointer-events-none absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-[1600px] px-5 pb-20 md:px-10 md:pb-24">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: brand.accentHex }}
              />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/80">
                {brand.category}
              </span>
            </div>
            <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
              {brand.headline}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-white/85 md:text-base">
              {brand.blurb}
            </p>
            {brand.comingSoon ? (
              <div className="pointer-events-auto mt-8 inline-flex items-center gap-3 text-white">
                <span className="font-display text-lg font-bold">{brand.wordmark}</span>
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-white/90"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: brand.accentHex }}
                  />
                  Coming soon
                </span>
              </div>
            ) : (
              <a
                href={brand.url}
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto mt-8 inline-flex items-center gap-3 text-white transition-opacity hover:opacity-70"
              >
                <span className="font-display text-lg font-bold">{brand.wordmark}</span>
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40"
                  style={{ backgroundColor: `${brand.accentHex}` }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="#0b0f14"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Deck controls */}
      <div
        className="absolute bottom-6 right-5 z-10 flex items-center gap-4 md:right-10 md:bottom-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous brand"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M13 8H3M7 4L3 8l4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          {brands.map((b, i) => (
            <button
              key={b.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${b.name}`}
              aria-current={i === index}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === index ? 28 : 8,
                backgroundColor: i === index ? b.accentHex : 'rgba(255,255,255,0.4)',
              }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next brand"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}
