import { PAIN_POINTS } from '@/constants'

type HintType = 'delay' | 'notification' | 'warning' | 'clock'

const PAIN_HINTS: HintType[] = ['delay', 'notification', 'warning', 'clock']

function PainHint({ type }: { type: HintType }) {
  const base =
    'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-transform duration-300 ease-out group-hover:scale-105'

  if (type === 'notification') {
    return (
      <span className={`${base} bg-amber-500/10 border-amber-500/20 text-amber-400`} aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      </span>
    )
  }

  if (type === 'warning') {
    return (
      <span className={`${base} bg-red-500/10 border-red-500/20 text-red-400`} aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </span>
    )
  }

  if (type === 'clock') {
    return (
      <span className={`${base} bg-orange-500/10 border-orange-500/20 text-orange-400`} aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </span>
    )
  }

  return (
    <span className={`${base} bg-indigo-500/10 border-indigo-500/20 text-indigo-400`} aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 8 14" />
      </svg>
    </span>
  )
}

export function Problem() {
  return (
    <section className="relative bg-slate-950 border-t border-white/5 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs font-medium text-indigo-400 tracking-widest uppercase mb-3 md:mb-4">
            El problema
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight text-white tracking-tight mb-4 md:mb-5">
            ¿Te suena familiar?
          </h2>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Miles de negocios pierden ventas cada día por los mismos errores operativos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6 mb-10 md:mb-12">
          {PAIN_POINTS.map((point, i) => (
            <div
              key={point.title}
              className="group relative bg-slate-900/60 border border-white/10 rounded-xl p-5 md:p-6 flex items-start gap-3.5 md:gap-4
                         transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:border-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <span className="text-[22px] shrink-0 mt-0.5 transition-transform duration-300 ease-out group-hover:scale-110">
                {point.emoji}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h3 className="font-medium text-sm md:text-base text-white">{point.title}</h3>
                  <PainHint type={PAIN_HINTS[i] ?? 'warning'} />
                </div>
                <p className="text-[13px] text-slate-400 leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="group/banner rounded-2xl p-6 md:p-7 flex items-center gap-4 md:gap-5 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-0.5"
          style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}
        >
          <span className="text-[36px] shrink-0 transition-transform duration-300 ease-out group-hover/banner:scale-105">
            ⚡
          </span>
          <div>
            <h3 className="font-display font-bold text-xl text-white mb-1.5">
              SATORI resuelve todo esto con IA
            </h3>
            <p className="text-[14px] text-white/80 leading-relaxed">
              Automatizamos tu atención, ventas y seguimiento para que tu negocio funcione solo — 24 horas, 7 días a la semana.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
