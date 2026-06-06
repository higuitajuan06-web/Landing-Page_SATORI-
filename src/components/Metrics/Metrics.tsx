import { TrendingUp, Clock, CheckCircle2, CircleDollarSign } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { METRICS } from '@/constants'
import { useCounter } from '@/hooks/useCounter'
import type { Metric } from '@/types'
import { MetricsChat } from './MetricsChat'

const glowColors = ['bg-indigo-500/10', 'bg-purple-500/10', 'bg-indigo-500/10', 'bg-purple-500/10'] as const

const METRIC_ICONS: Record<string, LucideIcon> = {
  m1: TrendingUp,
  m2: Clock,
  m3: CheckCircle2,
  m4: CircleDollarSign,
}

const FLOAT_DELAYS = ['0s', '0.4s', '0.8s', '1.2s'] as const

function MetricItem({
  metric,
  glowClass,
  floatDelay,
}: {
  metric: Metric
  glowClass: string
  floatDelay: string
}) {
  const { display, ref } = useCounter({
    target: metric.value,
    suffix: metric.suffix,
    prefix: metric.prefix ?? '',
    decimal: metric.decimal,
    startOnVisible: true,
  })

  const Icon = METRIC_ICONS[metric.id] ?? TrendingUp
  const isConversion = metric.id === 'm4'
  const iconGradient = isConversion ? 'url(#metric-icon-grad-conversion)' : 'url(#metric-icon-grad)'

  return (
    <div
      ref={ref}
      className="group relative w-full bg-slate-900/60 border border-white/10 rounded-xl px-5 py-7 md:py-8
                 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/10
                 animate-metric-float"
      style={{ animationDelay: floatDelay }}
    >
      <div className="flex items-center gap-4">
        <div className="relative flex-shrink-0">
          <span
            className={`absolute inset-0 -z-10 rounded-xl ${glowClass} blur-xl scale-[1.8] opacity-70 group-hover:opacity-100 transition-opacity duration-300 ease-out`}
            aria-hidden="true"
          />
          <div
            className={`w-11 h-11 rounded-xl border flex items-center justify-center ${
              isConversion
                ? 'bg-emerald-500/10 border-emerald-500/25'
                : 'bg-white/[0.04] border-white/10'
            }`}
          >
            <Icon
              className="w-5 h-5 shrink-0 stroke-[1.75]"
              stroke={iconGradient}
              fill="none"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="min-w-0 text-left">
          <div className="relative inline-block mb-1">
            <span
              className={`absolute inset-0 -z-10 rounded-full ${glowClass} blur-xl scale-[2] opacity-70 group-hover:opacity-100 transition-opacity duration-300 ease-out`}
              aria-hidden="true"
            />
            <div className="font-display text-2xl md:text-3xl font-bold leading-none tabular-nums bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {display}
            </div>
          </div>
          <div className="text-sm text-slate-400 leading-snug">{metric.label}</div>
        </div>
      </div>
    </div>
  )
}

export function Metrics() {
  return (
    <section className="relative bg-slate-950 border-t border-white/5 overflow-hidden">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="metric-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
          <linearGradient id="metric-icon-grad-conversion" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>
      </svg>

      <style>{`
        @keyframes metric-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-metric-float {
          animation: metric-float 5s ease-in-out infinite;
        }
        .animate-metric-float:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-purple-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-14 lg:py-16">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-14">
          {/* Fila de métricas — horizontal desde lg (1024px+) */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6">
            {METRICS.map((metric, i) => (
              <MetricItem
                key={metric.id}
                metric={metric}
                glowClass={glowColors[i % glowColors.length]}
                floatDelay={FLOAT_DELAYS[i]}
              />
            ))}
          </div>

          {/* Chat WhatsApp — centrado debajo de las métricas */}
          <div className="w-full flex items-center justify-center">
            <MetricsChat />
          </div>
        </div>
      </div>
    </section>
  )
}
