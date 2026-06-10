import { useState, useEffect } from 'react'
import { DEMO_CALENDAR_URL, WHATSAPP_URL } from '@/constants'
import { HeroConnectionHub } from './HeroConnectionHub'

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
)

const heroPrimaryCta =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] font-medium text-white no-underline border-0 ' +
  'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 ' +
  'shadow-lg hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 ease-out'

const heroSecondaryCta =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] font-medium no-underline ' +
  'bg-white/5 text-green-400 border border-green-500/30 hover:border-green-500 hover:bg-green-500/10 ' +
  'active:scale-95 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-0.5 transition-all duration-300 ease-out'

export function Hero() {
  const [typewriterText, setTypewriterText] = useState('')
  const fullText = 'Nosotros lo resolvemos.'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-indigo-600/10 blur-3xl rounded-full" />
        <div className="absolute top-1/2 -right-16 w-80 h-80 bg-purple-600/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/10 blur-3xl rounded-full" />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-10 md:pt-14 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 items-center">

          {/* Columna izquierda — textos y CTAs */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/5 text-indigo-300 border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium mb-6 md:mb-8 mx-auto lg:mx-0 w-fit max-w-full transition-colors duration-300 ease-out hover:border-white/15 hover:bg-white/[0.07]">
              <span
                className="w-1.5 h-1.5 rounded-full bg-indigo-400 block shrink-0"
                style={{ animation: 'pulseDot 2s ease-in-out infinite' }}
              />
              Automatización con IA · Resultados en 7 días
            </div>

            <h1 className="font-display font-black text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.07] tracking-tight mb-5 md:mb-6 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              Tu negocio{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                pierde clientes
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                mientras duermes.
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {typewriterText}
              </span>
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent animate-blink-caret border-r-2 border-indigo-400 ml-1" />
            </h1>

            <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8 md:mb-10 max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
              Implementamos IA que responde, vende y da seguimiento 24/7 por WhatsApp, email y más — sin que levantes un dedo.
            </p>

            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center lg:justify-start gap-3 md:gap-4 w-full max-w-md md:max-w-none mx-auto lg:mx-0">
              <a href={DEMO_CALENDAR_URL} className={`${heroPrimaryCta} w-full md:w-auto`}>
                <CalendarIcon />
                Agendar demo gratis
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${heroSecondaryCta} w-full md:w-auto`}
              >
                <WhatsAppIcon />
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          {/* Columna derecha — Hub de conexiones SATORI */}
          <div className="w-full min-w-0 max-w-full overflow-hidden">
            <HeroConnectionHub />
          </div>
        </div>
      </div>
    </section>
  )
}
