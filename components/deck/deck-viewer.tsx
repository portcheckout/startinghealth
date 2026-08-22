'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { slides } from '@/lib/deck'
import { DeckSlide, accentFor } from './slide-layouts'

export function DeckViewer() {
  const scroller = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const total = slides.length

  /* Track which spread is in view. */
  useEffect(() => {
    const root = scroller.current
    if (!root) return
    const sections = Array.from(root.querySelectorAll('[data-slide]'))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const i = Number((entry.target as HTMLElement).dataset.slide)
            setActive(i)
          }
        }
      },
      { root, threshold: 0.55 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const goTo = useCallback((i: number) => {
    const root = scroller.current
    if (!root) return
    const clamped = Math.max(0, Math.min(slides.length - 1, i))
    const target = root.querySelector<HTMLElement>(`[data-slide="${clamped}"]`)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  /* Keyboard navigation — arrows, space, page keys, home/end. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const keys = [
        'ArrowDown',
        'ArrowRight',
        'ArrowUp',
        'ArrowLeft',
        'PageDown',
        'PageUp',
        ' ',
        'Home',
        'End',
      ]
      if (!keys.includes(e.key)) return
      e.preventDefault()
      if (e.key === 'Home') return goTo(0)
      if (e.key === 'End') return goTo(slides.length - 1)
      const forward = ['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)
      goTo(active + (forward ? 1 : -1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, goTo])

  const accent = accentFor(active)

  return (
    <div className="relative bg-background">
      {/* Top bar */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-center justify-between bg-background/85 px-6 py-6 backdrop-blur-sm md:bg-transparent md:px-16 md:backdrop-blur-none">
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-3 transition-opacity hover:opacity-60"
        >
          <span className="inline-flex h-4 gap-[3px]" aria-hidden="true">
            <span className="w-[5px] rounded-full bg-brand-glp" />
            <span className="w-[5px] rounded-full bg-brand-trt" />
            <span className="w-[5px] rounded-full bg-brand-peptide" />
          </span>
          <span className="font-display text-sm font-extrabold tracking-tight text-ink">
            STARTING<span className="opacity-40">.</span>HEALTH
          </span>
        </Link>

        <div className="pointer-events-auto flex items-center gap-6">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-ink/55 md:inline">
            Confidential — investor deck
          </span>
          <span className="font-mono text-[11px] tabular-nums text-ink/75">
            <span style={{ color: accent }}>{String(active + 1).padStart(2, '0')}</span>
            <span className="text-ink/45"> / {String(total).padStart(2, '0')}</span>
          </span>
        </div>
      </header>

      {/* Progress rail */}
      <nav
        aria-label="Deck navigation"
        className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-2.5 md:flex"
      >
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            className="group flex h-4 items-center"
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: i === active ? '0.4rem' : '0.3rem',
                height: i === active ? '1.35rem' : '0.3rem',
                backgroundColor: i === active ? accent : 'rgba(23,26,33,0.22)',
              }}
            />
          </button>
        ))}
      </nav>

      {/* Scroll-snap spreads */}
      <div
        ref={scroller}
        className="h-[100svh] overflow-y-scroll overscroll-contain scroll-smooth md:snap-y md:snap-mandatory"
      >
        {slides.map((slide, i) => (
          <div key={slide.id} data-slide={i}>
            <DeckSlide slide={slide} index={i} />
          </div>
        ))}
      </div>

      {/* Scroll hint on first spread */}
      <div
        className="pointer-events-none fixed bottom-7 left-1/2 z-30 hidden -translate-x-1/2 transition-opacity duration-500 md:block"
        style={{ opacity: active === 0 ? 1 : 0 }}
      >
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/55">
          Scroll
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M6 2v8M3 7l3 3 3-3"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}
