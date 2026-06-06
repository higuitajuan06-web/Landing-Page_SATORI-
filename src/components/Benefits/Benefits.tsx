import { BENEFITS } from '@/constants'

export function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/40 to-white" aria-hidden="true" />
      
      {/* Decorative blur elements */}
      <div className="pointer-events-none absolute -top-40 left-1/3 h-80 w-80 rounded-full bg-orange-300/8 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-blue-300/8 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-purple-300/8 blur-3xl" aria-hidden="true" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header - Perfectly Centered */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <p className="text-xs sm:text-sm font-bold text-orange-600 tracking-widest uppercase mb-3 sm:mb-4 animate-fade-in letter-spacing-wide">
             Ventajas Inmediatas
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tight mb-4 sm:mb-6 leading-tight animate-fade-in animation-delay-100">
            Lo que ganas desde el primer día
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto px-2 animate-fade-in animation-delay-200">
            Resultados concretos y herramientas listas para potenciar tu negocio desde el momento cero.
          </p>
        </div>

        {/* Cards Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          {/* Card 1 - Orange Theme */}
          <div
            className="h-full animate-float-card animation-delay-0"
            style={{ '--float-delay': '0s' } as React.CSSProperties}
          >
            <BenefitCard 
              benefit={BENEFITS[0]} 
              colorTheme="orange"
              index={0}
            />
          </div>

          {/* Card 2 - Purple Theme */}
          <div
            className="h-full animate-float-card animation-delay-100"
            style={{ '--float-delay': '0.3s' } as React.CSSProperties}
          >
            <BenefitCard 
              benefit={BENEFITS[1]} 
              colorTheme="purple"
              index={1}
            />
          </div>

          {/* Card 3 - Blue Theme */}
          <div
            className="h-full animate-float-card animation-delay-200"
            style={{ '--float-delay': '0.6s' } as React.CSSProperties}
          >
            <BenefitCard 
              benefit={BENEFITS[2]} 
              colorTheme="blue"
              index={2}
            />
          </div>

          {/* Card 4 - Gradient Mix Theme */}
          <div
            className="h-full animate-float-card animation-delay-300"
            style={{ '--float-delay': '0.9s' } as React.CSSProperties}
          >
            <BenefitCard 
              benefit={BENEFITS[3]} 
              colorTheme="gradient"
              index={3}
            />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float-card {
          0%, 100% {
            transform: translateY(0) translateZ(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-12px) translateZ(0);
          }
        }

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

        .animate-float-card {
          animation: float-card 4.5s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in-slide-up 0.9s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-0 {
          animation-delay: 0s;
        }

        .animation-delay-100 {
          animation-delay: 0.15s;
        }

        .animation-delay-200 {
          animation-delay: 0.3s;
        }

        .animation-delay-300 {
          animation-delay: 0.45s;
        }

        .letter-spacing-wide {
          letter-spacing: 0.15em;
        }
      `}</style>
    </section>
  )
}

interface BenefitCardProps {
  benefit: typeof BENEFITS[0]
  colorTheme?: 'orange' | 'purple' | 'blue' | 'gradient'
  index?: number
}

function BenefitCard({ benefit, colorTheme = 'orange' }: BenefitCardProps) {
  // Color configurations with unique identity per card
  const colorConfigs = {
    orange: {
      bgGradient: 'from-orange-500/5 via-orange-400/3 to-transparent',
      borderColor: 'border-orange-400/15 hover:border-orange-500/30',
      shadowColor: 'hover:shadow-orange-500/10',
      iconBg: 'from-orange-100/20 to-orange-50/10',
      accentColor: 'text-orange-600 hover:text-orange-700',
      overlayColor: 'via-orange-100/10',
    },
    purple: {
      bgGradient: 'from-purple-500/5 via-purple-400/3 to-transparent',
      borderColor: 'border-purple-400/15 hover:border-purple-500/30',
      shadowColor: 'hover:shadow-purple-500/10',
      iconBg: 'from-purple-100/20 to-purple-50/10',
      accentColor: 'text-purple-600 hover:text-purple-700',
      overlayColor: 'via-purple-100/10',
    },
    blue: {
      bgGradient: 'from-blue-500/5 via-blue-400/3 to-transparent',
      borderColor: 'border-blue-400/15 hover:border-blue-500/30',
      shadowColor: 'hover:shadow-blue-500/10',
      iconBg: 'from-blue-100/20 to-blue-50/10',
      accentColor: 'text-blue-600 hover:text-blue-700',
      overlayColor: 'via-blue-100/10',
    },
    gradient: {
      bgGradient: 'from-orange-400/4 via-purple-400/4 to-blue-400/4',
      borderColor: 'border-gradient-to-r from-orange-400/15 via-purple-400/15 to-blue-400/15 hover:from-orange-500/25 hover:via-purple-500/25 hover:to-blue-500/25',
      shadowColor: 'hover:shadow-purple-500/10',
      iconBg: 'from-gradient-to-br via-gradient from-orange-100/15 via-purple-100/15 to-blue-100/15',
      accentColor: 'text-purple-600 hover:text-purple-700',
      overlayColor: 'via-purple-100/10',
    },
  }

  const config = colorConfigs[colorTheme]

  return (
    <div
      className={`
        relative group h-full rounded-2xl border backdrop-blur-lg 
        transition-all duration-500 ease-out overflow-hidden
        hover:shadow-2xl hover:-translate-y-2 cursor-default
        bg-gradient-to-br ${config.bgGradient}
        ${config.borderColor}
        ${config.shadowColor}
        min-h-[260px] sm:min-h-[280px] md:min-h-[300px]
        p-5 sm:p-6 md:p-7 lg:p-8
      `}
    >
      {/* Premium Gradient Overlay - Contained */}
      <div
        className={`
          pointer-events-none absolute inset-0 rounded-2xl 
          bg-gradient-to-br from-white/40 ${config.overlayColor} to-transparent 
          opacity-0 group-hover:opacity-50 transition-opacity duration-500
        `}
        aria-hidden="true"
      />

      {/* Content Container - Perfectly Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-3">
        {/* Icon Container with Premium Glassmorphism */}
        <div
          className={`
            flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center 
            rounded-2xl backdrop-blur-md border border-white/20
            bg-gradient-to-br ${config.iconBg}
            group-hover:scale-110 transition-transform duration-500 ease-out
            shadow-lg shadow-black/5
          `}
        >
          <span className="text-3xl sm:text-4xl drop-shadow-sm">{benefit.emoji}</span>
        </div>

        {/* Card Title - High Contrast, Bold */}
        <h3 className="font-display font-bold text-base sm:text-lg md:text-xl text-slate-900 leading-snug line-clamp-2">
          {benefit.title}
        </h3>

        {/* Card Description - Clear, Legible */}
        <p className="text-xs sm:text-sm md:text-[15px] text-slate-700 leading-relaxed flex-1 line-clamp-3">
          {benefit.description}
        </p>

        {/* Accent Badge */}
        <div className={`
          mt-2 pt-3 border-t border-white/30 group-hover:border-white/50 
          transition-all duration-300 w-full
        `}>
          <span className={`
            inline-block text-xs font-semibold uppercase tracking-wider 
            opacity-60 group-hover:opacity-100 transition-opacity duration-300
            ${config.accentColor}
          `}>
            ✓ Automatizado
          </span>
        </div>
      </div>
    </div>
  )
}
