import { DEMO_CALENDAR_URL, WHATSAPP_URL } from '@/constants'
import { Calendar, MessageCircle } from 'lucide-react'

export function CTA() {
  return (
    <section id="listo-para-automatizar" className="py-12 sm:py-20 px-4 sm:px-6">
      <div
        className="max-w-full sm:max-w-[700px] mx-auto rounded-[20px] px-4 sm:px-10 py-12 sm:py-16 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3B0764, #5B21B6, #7C3AED)' }}
      >
        {/* Decorative orbs - Scaled for mobile */}
        <div className="absolute -top-16 -right-16 w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-brand-400/25 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-purple-300/15 pointer-events-none" />

        <div className="relative z-10">
          <p className="text-[11px] sm:text-[12px] text-white/60 tracking-widest uppercase mb-3 sm:mb-4">
            ¿Listo para automatizar?
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-[34px] text-white leading-[1.1] tracking-tight mb-3 sm:mb-3.5">
            Agenda tu demo gratuita<br />y ve los resultados en vivo
          </h2>
          <p className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8 px-2">
            Sin compromisos. 30 minutos. Te mostramos exactamente cómo funciona para tu negocio.
          </p>

          {/* Buttons - Full width on mobile, stack vertically */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3 flex-wrap">
            <a 
              href={DEMO_CALENDAR_URL} 
              className="btn-solid-white w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4" />
              Agendar demo gratis
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-white w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4" />
              Escribirnos ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
