'use client'

import { useEffect, useState } from 'react'
import { brands } from '@/lib/brands'

const sections = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Approach', href: '#approach' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function StripeMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex h-4 gap-[3px] ${className}`} aria-hidden="true">
      <span className="w-[5px] rounded-full bg-brand-glp" />
      <span className="w-[5px] rounded-full bg-brand-trt" />
      <span className="w-[5px] rounded-full bg-brand-peptide" />
    </span>
  )
}

export function SiteNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10 md:py-7">
          <a
            href="#top"
            className="group flex items-center gap-3 text-ink mix-blend-difference"
            aria-label="Starting.Health home"
          >
            <StripeMark className="transition-transform duration-300 group-hover:scale-y-110" />
            <span className="font-display text-lg font-extrabold tracking-tight text-white md:text-xl">
              STARTING<span className="opacity-50">.</span>HEALTH
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex flex-col items-end gap-[6px] p-1 mix-blend-difference"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="block h-[2px] w-8 bg-white" />
            <span className="block h-[2px] w-8 bg-white" />
            <span className="block h-[2px] w-6 bg-white" />
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[60] bg-background transition-[opacity,visibility] duration-500 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="mx-auto flex h-full max-w-[1600px] flex-col px-5 py-5 md:px-10 md:py-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StripeMark />
              <span className="font-display text-lg font-extrabold tracking-tight text-ink md:text-xl">
                STARTING<span className="opacity-40">.</span>HEALTH
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1 text-ink"
              aria-label="Close menu"
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                <path d="M6 6l18 18M24 6L6 24" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center">
            <ul className="flex flex-col items-center gap-2 md:gap-3">
              {sections.map((s, i) => (
                <li key={s.href} className="overflow-hidden">
                  <a
                    href={s.href}
                    onClick={() => setOpen(false)}
                    style={{ animationDelay: open ? `${0.08 * i + 0.15}s` : '0s' }}
                    className={`block font-display text-5xl font-extrabold tracking-tight text-ink transition-colors duration-200 hover:text-muted-foreground md:text-7xl ${
                      open ? 'animate-rise-in' : ''
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-ink/10 pt-6">
            <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              The portfolio
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 md:flex-row md:gap-6">
              {brands.map((b) =>
                b.comingSoon ? (
                  <div
                    key={b.id}
                    className="flex items-center justify-between gap-6 rounded-xl border border-ink/10 px-5 py-4 md:flex-1"
                  >
                    <span className="font-display text-lg font-bold text-ink">{b.wordmark}</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                      Coming soon
                    </span>
                  </div>
                ) : (
                  <a
                    key={b.id}
                    href={b.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-6 rounded-xl border border-ink/10 px-5 py-4 transition-colors hover:border-ink/30 md:flex-1"
                  >
                    <span className="font-display text-lg font-bold text-ink">{b.wordmark}</span>
                    <span className={`font-mono text-xs ${b.accent}`}>{b.domain}</span>
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
