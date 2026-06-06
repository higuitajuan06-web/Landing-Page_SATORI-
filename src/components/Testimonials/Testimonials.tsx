import { useCallback, useEffect, useState } from 'react'
import { TESTIMONIALS } from '@/constants'
import type { Testimonial } from '@/types'

const TRUST_LOGOS = [
  { id: 'google', label: 'Google / Gmail' },
  { id: 'microsoft', label: 'Microsoft' },
  { id: 'stripe', label: 'Stripe' },
  { id: 'whatsapp', label: 'WhatsApp API' },
] as const

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className={i < count ? 'text-amber-400' : 'text-slate-600'}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function TrustLogoMark({ id }: { id: (typeof TRUST_LOGOS)[number]['id'] }) {
  const base = 'h-7 w-auto opacity-50 transition-opacity duration-300 ease-out group-hover:opacity-100'

  if (id === 'google') {
    return (
      <svg className={base} viewBox="0 0 120 28" fill="none" aria-hidden="true">
        <text x="0" y="20" fill="currentColor" className="fill-white text-[15px] font-semibold">
          Google
        </text>
        <text x="62" y="20" fill="currentColor" className="fill-white/60 text-[13px]">
          Gmail
        </text>
      </svg>
    )
  }

  if (id === 'microsoft') {
    return (
      <svg className={base} viewBox="0 0 120 28" aria-hidden="true">
        <rect x="0" y="6" width="10" height="10" fill="#F25022" className="opacity-80" />
        <rect x="11" y="6" width="10" height="10" fill="#7FBA00" className="opacity-80" />
        <rect x="0" y="17" width="10" height="10" fill="#00A4EF" className="opacity-80" />
        <rect x="11" y="17" width="10" height="10" fill="#FFB900" className="opacity-80" />
        <text x="28" y="20" fill="white" className="text-[14px] font-semibold opacity-70">
          Microsoft
        </text>
      </svg>
    )
  }

  if (id === 'stripe') {
    return (
      <svg className={base} viewBox="0 0 80 28" aria-hidden="true">
        <text x="0" y="20" fill="white" className="text-[17px] font-bold tracking-tight opacity-70">
          stripe
        </text>
      </svg>
    )
  }

  return (
    <svg className={base} viewBox="0 0 140 28" aria-hidden="true">
      <circle cx="12" cy="14" r="11" fill="#25D366" className="opacity-60" />
      <path
        d="M12 7.5c-3.2 0-5.8 2.6-5.8 5.8 0 1 .3 2 .7 2.8L6 19l3.5-.9c.8.4 1.7.7 2.6.7 3.2 0 5.8-2.6 5.8-5.8S15.2 7.5 12 7.5z"
        fill="white"
        className="opacity-90"
      />
      <text x="30" y="19" fill="white" className="text-[13px] font-medium opacity-70">
        WhatsApp API
      </text>
    </svg>
  )
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article
      className="group relative mx-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-slate-900/50 p-6 md:p-8
                 backdrop-blur-md shadow-xl shadow-indigo-500/5
                 transition-all duration-300 ease-out
                 hover:border-indigo-500/30 hover:shadow-indigo-500/15 hover:-translate-y-0.5"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative">
        <StarRating count={t.stars} />

        <p className="mt-4 text-base md:text-lg text-slate-200 leading-relaxed italic">
          {t.quote}
        </p>

        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ring-2 ring-indigo-500/30"
            style={{ background: t.avatarBg, color: t.avatarColor }}
          >
            {t.authorInitials}
          </div>
          <div className="min-w-0 text-left">
            <p className="font-medium text-sm text-white">{t.authorName}</p>
            <p className="text-xs text-slate-400 truncate">{t.authorRole}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export function Testimonials() {
  const total = TESTIMONIALS.length
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % total) + total) % total)
    },
    [total],
  )

  const prev = useCallback(() => goTo(active - 1), [active, goTo])
  const next = useCallback(() => goTo(active + 1), [active, goTo])

  useEffect(() => {
    if (isPaused) return
    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % total)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [isPaused, total])

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-slate-950 py-14 md:py-20 lg:py-24">
      <style>{`
        @keyframes trustMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div
        className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-indigo-400">
            Resultados reales
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Trust logos — above carousel */}
        <div className="mb-10 md:mb-12">
          <p className="mb-5 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Integrado con las herramientas que ya usas
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div
              className="flex w-max items-center gap-12 md:gap-16 pr-12"
              style={{ animation: 'trustMarquee 28s linear infinite' }}
            >
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((logo, i) => (
                <div
                  key={`${logo.id}-${i}`}
                  className="group flex shrink-0 items-center justify-center px-2"
                  title={logo.label}
                >
                  <TrustLogoMark id={logo.id} />
                  <span className="sr-only">{logo.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out will-change-transform"
              style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.authorName} className="w-full shrink-0 px-1 sm:px-4">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-300 backdrop-blur-md shadow-lg transition-all duration-300 ease-out hover:border-indigo-500/40 hover:bg-indigo-950/80 hover:text-white hover:shadow-indigo-500/20 active:scale-95 md:-left-2 lg:-left-5"
            aria-label="Testimonio anterior"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-300 backdrop-blur-md shadow-lg transition-all duration-300 ease-out hover:border-indigo-500/40 hover:bg-indigo-950/80 hover:text-white hover:shadow-indigo-500/20 active:scale-95 md:-right-2 lg:-right-5"
            aria-label="Testimonio siguiente"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.authorName}
                type="button"
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ease-out ${
                  i === active
                    ? 'h-2.5 w-8 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md shadow-purple-500/40'
                    : 'h-2.5 w-2.5 bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Ir al testimonio de ${t.authorName}`}
                aria-current={i === active ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
