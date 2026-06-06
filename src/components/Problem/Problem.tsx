import { Clock, Users, RefreshCw, Activity, Zap } from 'lucide-react'
import { PAIN_POINTS } from '@/constants'

const PAIN_ICONS = [
  { Icon: Clock, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  { Icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { Icon: Activity, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
  { Icon: RefreshCw, color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
]

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
              {(() => {
                const iconConfig = PAIN_ICONS[i]
                const Icon = iconConfig?.Icon ?? Clock
                return (
                  <span className={`shrink-0 mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 ease-out group-hover:scale-110 ${iconConfig?.bg ?? 'bg-purple-500/10'} ${iconConfig?.border ?? 'border-purple-500/20'}`} aria-hidden="true">
                    <Icon className={`h-5 w-5 ${iconConfig?.color ?? 'text-purple-400'}`} strokeWidth={2} />
                  </span>
                )
              })()}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h3 className="font-medium text-sm md:text-base text-white">{point.title}</h3>
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
          <span className="shrink-0 w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center transition-transform duration-300 ease-out group-hover/banner:scale-105" aria-hidden="true">
            <Zap className="h-6 w-6 text-yellow-300" strokeWidth={2.5} />
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
