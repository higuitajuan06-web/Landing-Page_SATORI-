import { useEffect, useRef, useState } from 'react'
import type { ComponentType, CSSProperties } from 'react'
import { STEPS } from '@/constants'

// SVG Icon Components - Clean & Professional
const IconMessage = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const IconDocument = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="13" x2="12" y2="17" />
    <line x1="9" y1="15" x2="15" y2="15" />
  </svg>
)

const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
)

export function HowItWorks() {
  const stepsRef = useRef<HTMLDivElement>(null)
  const [stepsVisible, setStepsVisible] = useState(false)

  useEffect(() => {
    const node = stepsRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStepsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="proceso" className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white" aria-hidden="true" />
      
      {/* Decorative blur elements - Subtle & Pastel */}
      <div className="pointer-events-none absolute -top-40 right-1/3 h-80 w-80 rounded-full bg-purple-200/8 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-orange-200/8 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/2 -right-20 h-72 w-72 rounded-full bg-blue-200/8 blur-3xl" aria-hidden="true" />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header - Centered & Premium */}
        <div className="mb-16 md:mb-24 text-center">
          {/* Tag */}
          <p className="text-xs sm:text-sm font-bold text-purple-600 tracking-widest uppercase mb-3 sm:mb-4 animate-fade-in letter-spacing-wide">
            El Proceso
          </p>

          {/* Main Title - Two Lines with Gradient */}
          <div className="mb-4 sm:mb-6 animate-fade-in animation-delay-100">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-2 text-slate-900">
              Empezar es más fácil
            </h2>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tight leading-tight">
              de lo que crees
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto px-2 animate-fade-in animation-delay-200">
            Tres pasos sencillos. Menos de una semana. Resultados desde el primer día.
          </p>
        </div>

        {/* Timeline Steps - Responsive Grid */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Línea conectora — más visible en desktop */}
          <div
            className="hidden md:block absolute left-[8%] right-[8%] h-[2px] rounded-full
                       bg-gradient-to-r from-orange-400/70 via-purple-500/60 to-blue-400/70
                       border border-purple-500/40 shadow-[0_0_12px_rgba(124,58,237,0.25)]"
            style={{ top: '60px' }}
            aria-hidden="true"
          />

          {/* Step Cards — revelado secuencial al hacer scroll */}
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className={stepsVisible ? 'process-step-reveal' : 'process-step-hidden'}
              style={{ animationDelay: `${index * 0.18}s` } as CSSProperties}
            >
              <ProcessStep
                step={step}
                stepNumber={parseInt(step.number)}
                colorTheme={['orange', 'purple', 'blue'][index] as 'orange' | 'purple' | 'blue'}
                icon={[IconMessage, IconDocument, IconRocket][index]}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-slide-up {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-subtle {
          0%, 100% {
            transform: translateY(0) translateZ(0);
          }
          50% {
            transform: translateY(-8px) translateZ(0);
          }
        }

        .process-step-hidden {
          opacity: 0;
          transform: translateY(28px);
        }

        .process-step-reveal {
          animation: fade-in-slide-up 0.75s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in-slide-up 0.9s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .letter-spacing-wide {
          letter-spacing: 0.15em;
        }
      `}</style>
    </section>
  )
}

interface ProcessStepProps {
  step: typeof STEPS[0]
  stepNumber: number
  colorTheme?: 'orange' | 'purple' | 'blue'
  icon?: ComponentType
}

function ProcessStep({ step, stepNumber, colorTheme = 'orange', icon: IconComponent }: ProcessStepProps) {
  // Softer, pastel color configurations
  const colorConfigs = {
    orange: {
      circleBg: 'bg-gradient-to-br from-orange-300/60 to-orange-200/40',
      circleBorder: 'border-orange-300/40',
      circleIconColor: 'text-orange-700',
      cardBg: 'from-orange-100/15 via-orange-50/10 to-transparent',
      cardBorder: 'border-orange-200/30 hover:border-orange-300/50',
      cardShadow: 'hover:shadow-orange-500/5',
      badgeBg: 'bg-orange-100/50 border-orange-200/60',
      badgeText: 'text-orange-700',
      accentGradient: 'from-orange-300/50 to-transparent',
    },
    purple: {
      circleBg: 'bg-gradient-to-br from-purple-300/60 to-purple-200/40',
      circleBorder: 'border-purple-300/40',
      circleIconColor: 'text-purple-700',
      cardBg: 'from-purple-100/15 via-purple-50/10 to-transparent',
      cardBorder: 'border-purple-200/30 hover:border-purple-300/50',
      cardShadow: 'hover:shadow-purple-500/5',
      badgeBg: 'bg-purple-100/50 border-purple-200/60',
      badgeText: 'text-purple-700',
      accentGradient: 'from-purple-300/50 to-transparent',
    },
    blue: {
      circleBg: 'bg-gradient-to-br from-blue-300/60 to-blue-200/40',
      circleBorder: 'border-blue-300/40',
      circleIconColor: 'text-blue-700',
      cardBg: 'from-blue-100/15 via-blue-50/10 to-transparent',
      cardBorder: 'border-blue-200/30 hover:border-blue-300/50',
      cardShadow: 'hover:shadow-blue-500/5',
      badgeBg: 'bg-blue-100/50 border-blue-200/60',
      badgeText: 'text-blue-700',
      accentGradient: 'from-blue-300/50 to-transparent',
    },
  }

  const config = colorConfigs[colorTheme]

  return (
    <div className="group h-full overflow-hidden">
      {/* Contenedor circular perfecto: width === height, sin deformación */}
      <div
        className={`
          relative mx-auto mb-6 flex-none
          flex items-center justify-center
          size-20 sm:size-24 aspect-square rounded-full
          ${config.circleBg}
          border-2 ${config.circleBorder}
          backdrop-blur-md
          shadow-lg shadow-black/5
          group-hover:scale-110 transition-transform duration-500 ease-out
          ${config.circleIconColor}
          overflow-hidden
        `}
      >
        {IconComponent ? <IconComponent /> : <span className="text-2xl">•</span>}

        {/* Subtle glow on hover - Contained within circle */}
        <div
          className={`
            absolute inset-0 rounded-full opacity-0
            group-hover:opacity-60 transition-opacity duration-500
            bg-gradient-to-r ${config.accentGradient}
            blur-md pointer-events-none
          `}
          aria-hidden="true"
        />
      </div>

      {/* Step Card - Premium Glassmorphism - Fully Contained */}
      <div
        className={`
          relative h-full rounded-2xl border backdrop-blur-lg
          transition-all duration-500 ease-out overflow-hidden
          hover:shadow-2xl hover:-translate-y-2
          bg-gradient-to-br ${config.cardBg}
          ${config.cardBorder}
          ${config.cardShadow}
          p-5 sm:p-6 md:p-7 lg:p-8
          min-h-[280px] md:min-h-[300px]
          cursor-default
        `}
      >
        {/* Premium Gradient Overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-white/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Step Number Badge */}
          <div className={`
            inline-flex items-center justify-center
            h-8 w-8 rounded-lg mb-4
            ${config.badgeBg}
            border ${config.circleBorder}
            backdrop-blur-sm
          `}>
            <span className={`font-display font-bold text-sm ${config.badgeText}`}>
              {stepNumber}
            </span>
          </div>

          {/* Step Title */}
          <h3 className="font-display font-bold text-xl md:text-2xl text-slate-900 mb-3 leading-snug">
            {step.title}
          </h3>

          {/* Step Description */}
          <p className="text-sm md:text-base text-slate-700 leading-relaxed flex-1 mb-4">
            {step.description}
          </p>

          {/* Tiempo de ejecución — visible en todos los breakpoints */}
          <div
            className={`
              inline-flex items-center gap-1.5
              text-xs md:text-sm font-semibold tracking-wide
              ${config.badgeBg}
              border ${config.circleBorder}
              rounded-full px-3.5 py-2 w-fit mt-auto
              ${config.badgeText}
              backdrop-blur-sm
            `}
          >
            <span className="text-[10px] md:text-xs opacity-70" aria-hidden="true">⏱</span>
            {step.badge}
          </div>

          {/* Accent line bottom */}
          <div
            className={`
              absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl
              bg-gradient-to-r ${config.accentGradient}
              opacity-0 group-hover:opacity-70
              transition-opacity duration-500
            `}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
