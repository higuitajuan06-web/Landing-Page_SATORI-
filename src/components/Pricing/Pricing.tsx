import { PRICING_PLANS, PRICING_NOTE } from '@/constants'
import type { PricingPlan } from '@/types'

const WHATSAPP_NUMBER = '573245246651'

/** Limpia ~, guiones y símbolos raros; deja precios positivos y legibles */
function formatPlanPrice(value: string): string {
  let cleaned = value.trim().replace(/^[~\-−–—\s]+/, '')
  cleaned = cleaned.replace(/\$(\d{1,2})\.(\d{3})\b/, (_, a, b) => `$${a},${b}`)
  cleaned = cleaned.replace(/\s{2,}/g, ' ')
  return cleaned
}

const planCtaBase =
  'mt-4 w-full py-2.5 rounded-xl text-[13px] font-medium cursor-pointer border-[1.5px] ' +
  'transition-all duration-300 ease-out active:scale-[0.98] ' +
  'hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]'

function PlanCard({ plan }: { plan: PricingPlan }) {
  const whatsappMessage = `Hola! Quiero más información con los planes: ${plan.name}.`
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="relative h-full">
      {plan.featured && (
        <div
          className="absolute -inset-1 rounded-[1.15rem] bg-gradient-to-r from-indigo-500/40 via-purple-500/50 to-violet-500/40 blur-md opacity-80 -z-10"
          aria-hidden="true"
        />
      )},

      <div
        className={`
          relative flex h-full flex-col rounded-2xl border-[1.5px] p-6 transition-all duration-300 ease-out
          hover:-translate-y-1
          ${plan.featured
            ? 'border-purple-400/50 bg-gradient-to-b from-white via-violet-50/80 to-indigo-50/90 shadow-lg shadow-purple-500/15 hover:shadow-xl hover:shadow-purple-500/25 hover:border-purple-400/70'
            : 'border-indigo-200/70 bg-gradient-to-b from-white to-indigo-50/40 hover:border-indigo-300/80 hover:shadow-lg hover:shadow-indigo-500/10'
          }
        `}
      >
        {plan.featured && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[11px] font-semibold px-3.5 py-0.5 rounded-full whitespace-nowrap shadow-md shadow-purple-500/30">
            ⭐ Más popular
          </div>
        )}

        <h3 className="font-display font-extrabold text-[17px] text-ink mb-1">{plan.name}</h3>
        <p className="text-[11px] text-ink-3 leading-snug mb-4">{plan.tagline}</p>

        <div
          className={`rounded-xl p-3 mb-2 ${
            plan.featured
              ? 'bg-gradient-to-br from-indigo-500/10 to-purple-500/15 border border-purple-400/25'
              : 'bg-indigo-50/80 border border-indigo-200/50'
          }`}
        >
          <p className="text-[10px] font-medium text-indigo-600 tracking-wide uppercase mb-1">
            Implementación única
          </p>
          <p className="font-display font-extrabold text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 leading-tight tabular-nums">
            {formatPlanPrice(plan.implementationUSD)}
          </p>
          <p className="text-[12px] text-ink-3 mt-0.5 tabular-nums">{formatPlanPrice(plan.implementationCOP)}</p>
        </div>

        <div className="flex items-center gap-2 bg-indigo-50/60 border border-indigo-100/80 rounded-lg px-3 py-2 mb-4">
          <span className="text-sm">⚙️</span>
          <p className="text-[11px] text-ink-3 leading-snug">
            Mantenimiento mensual:{' '}
            <strong className="text-ink-2 font-medium tabular-nums">
              {formatPlanPrice(plan.maintenanceUSD)} · {formatPlanPrice(plan.maintenanceCOP)}
            </strong>
          </p>
        </div>

        <p className="text-[10px] font-semibold text-ink-3 tracking-widest uppercase mb-2">
          {plan.id === 'basico' ? 'Incluye' : 'Todo el anterior más:'}
        </p>
        <ul className="flex flex-col gap-1.5 flex-1">
          {plan.features.map((feat) => (
            <li key={feat} className="feature-check">{feat}</li>
          ))}
        </ul>

        {plan.notIncluded && plan.notIncluded.length > 0 && (
          <>
            <hr className="border-t border-indigo-200/60 my-3.5" />
            <p className="text-[10px] font-semibold text-ink-3 tracking-widest uppercase mb-2">
              No incluye
            </p>
            <ul className="flex flex-col gap-1.5">
              {plan.notIncluded.map((item) => (
                <li key={item} className="feature-cross">{item}</li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-3 rounded-lg p-2.5 bg-gradient-to-r from-indigo-500/5 to-purple-500/10 border border-indigo-200/50 text-[11px] text-ink-2 leading-relaxed">
          <strong className="text-indigo-600 font-medium">Resultado: </strong>
          {plan.result}
        </div>

        <div className="badge-pill mt-2.5 w-fit">
          🚀 Entrega en {plan.deliveryDays} días hábiles
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${planCtaBase} ${
            plan.featured
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent hover:from-indigo-500 hover:to-purple-500'
              : 'bg-white/80 text-indigo-700 border-indigo-300/50 hover:bg-indigo-50 hover:border-indigo-400'
          }`}
        >
          {plan.ctaLabel}
        </a>
      </div>
    </div>
  )
}

function CircuitBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 bg-circuit-grid opacity-60"
        style={{ backgroundSize: '36px 36px' }}
      />
      <svg
        className="absolute -right-6 top-0 h-full w-[min(520px,55vw)] opacity-[0.35] md:opacity-45 lg:opacity-50"
        viewBox="0 0 520 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 80 H180 V140 H320 M320 140 V220 H420 M180 140 V260 H80 M80 260 H240 V340"
          stroke="url(#circuitGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M120 40 V120 M260 60 H380 V180 M400 240 H300 V300 H160"
          stroke="url(#circuitGrad2)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="4 8"
        />
        <circle cx="180" cy="140" r="4" fill="rgba(139,92,246,0.55)" />
        <circle cx="320" cy="140" r="3" fill="rgba(59,130,246,0.5)" />
        <circle cx="80" cy="260" r="3" fill="rgba(139,92,246,0.45)" />
        <circle cx="240" cy="340" r="4" fill="rgba(59,130,246,0.55)" />
        <defs>
          <linearGradient id="circuitGrad" x1="40" y1="80" x2="420" y2="340" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(99,102,241,0.5)" />
            <stop offset="0.5" stopColor="rgba(139,92,246,0.65)" />
            <stop offset="1" stopColor="rgba(59,130,246,0.45)" />
          </linearGradient>
          <linearGradient id="circuitGrad2" x1="120" y1="40" x2="400" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(124,58,237,0.35)" />
            <stop offset="1" stopColor="rgba(59,130,246,0.4)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/20 via-transparent to-violet-100/30" />
      <div className="absolute right-0 top-0 h-full w-2/3 bg-gradient-to-l from-purple-200/25 via-indigo-100/10 to-transparent" />
    </div>
  )
}



export function Pricing() {
  return (
    <section id="planes" className="relative overflow-hidden py-14 md:py-20 lg:py-24">
      <div
        className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-violet-50/90 to-purple-50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-purple-400/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="relative mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          <CircuitBackdrop />

          <div className="relative z-20 text-center max-w-3xl mx-auto px-2">
            <p className="text-[10px] sm:text-xs font-medium text-indigo-600 tracking-widest uppercase mb-2 sm:mb-3">
              Planes 2026
            </p>
            <h2 className="font-display font-extrabold text-center text-2xl sm:text-3xl md:text-4xl leading-tight text-ink tracking-tight mb-3 sm:mb-4">
              Elige tu nivel de automatización
            </h2>
            <p className="text-sm sm:text-base text-ink-3 leading-relaxed max-w-2xl mx-auto px-2">
              Implementación única + mantenimiento mensual. Sin contratos largos. Escala cuando quieras.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 mb-5 sm:mb-6 md:mb-8 px-2 sm:px-0">
          {PRICING_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="rounded-xl border border-indigo-200/60 bg-white/60 backdrop-blur-sm p-3 sm:p-4 md:p-5 text-[10px] sm:text-xs text-ink-3 leading-relaxed text-center shadow-sm shadow-indigo-500/5 mx-2 sm:mx-0">
          <strong className="text-ink-2 font-medium">Importante: </strong>
          {PRICING_NOTE}
        </div>
      </div>
    </section>
  )
}
