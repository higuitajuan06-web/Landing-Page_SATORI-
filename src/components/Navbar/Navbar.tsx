import { useState } from 'react'
import { NAV_LINKS, DEMO_CALENDAR_URL } from '@/constants'

const navCtaClass =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium text-white ' +
  'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 ' +
  'shadow-lg hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-px ' +
  'active:scale-95 transition-all duration-300 ease-out no-underline border-0'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 px-6 md:px-10 lg:px-16 pt-4 pb-3">
      <style>{`
        @keyframes satoriDot {
          0%, 70%, 100% { opacity: 0.3; transform: scale(1); }
          35% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>

      <div className="w-full max-w-[85vw] lg:max-w-[1400px] mx-auto bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg transition-shadow duration-300 ease-out hover:shadow-xl hover:shadow-black/20">
        <div className="relative flex flex-row items-center justify-between h-14 sm:h-[60px] px-6 md:px-8 lg:px-10">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 no-underline shrink-0 z-10 group/logo">
            <svg
              width="36"
              height="36"
              viewBox="0 0 500 500"
              className="transition-transform duration-300 ease-out group-hover/logo:scale-[1.03] drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="satori-neon-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D946EF" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <filter id="satori-neon-glow">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Upper "S" curve with terminal */}
              <path
                d="M 250 80 Q 180 80 140 120 Q 100 160 120 210 Q 140 260 200 280 L 280 290 M 220 290 L 160 300 Q 140 300 130 320 L 130 350"
                fill="none"
                stroke="url(#satori-neon-grad)"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#satori-neon-glow)"
              />

              {/* Lower "S" curve with terminal */}
              <path
                d="M 250 420 Q 320 420 360 380 Q 400 340 380 290 Q 360 240 300 220 L 220 210 M 280 210 L 340 200 Q 360 200 370 180 L 370 150"
                fill="none"
                stroke="url(#satori-neon-grad)"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#satori-neon-glow)"
              />

              {/* Upper terminal node - concentric circles */}
              <circle cx="130" cy="350" r="14" fill="url(#satori-neon-grad)" opacity="0.9" />
              <circle cx="130" cy="350" r="8" fill="none" stroke="url(#satori-neon-grad)" strokeWidth="2" opacity="0.7" />

              {/* Lower terminal node - concentric circles */}
              <circle cx="370" cy="150" r="14" fill="url(#satori-neon-grad)" opacity="0.9" />
              <circle cx="370" cy="150" r="8" fill="none" stroke="url(#satori-neon-grad)" strokeWidth="2" opacity="0.7" />
            </svg>
            <span className="font-display font-black text-xl text-white tracking-tight group-hover/logo:tracking-wider transition-all duration-300 ease-out">
              SATORI
              <span className="inline-flex ml-0.5 text-indigo-400" aria-hidden="true">
                <span style={{ animation: 'satoriDot 1.4s ease-in-out infinite' }}>.</span>
                <span style={{ animation: 'satoriDot 1.4s ease-in-out 0.2s infinite' }}>.</span>
                <span style={{ animation: 'satoriDot 1.4s ease-in-out 0.4s infinite' }}>.</span>
              </span>
            </span>
          </a>

          {/* Desktop links — centered */}
          <ul className="hidden md:flex flex-row items-center gap-5 lg:gap-7 list-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 no-underline transition-all duration-300 ease-out hover:text-white hover:opacity-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-2 shrink-0 z-10">
            <a href={DEMO_CALENDAR_URL} className={`hidden md:inline-flex ${navCtaClass}`}>
              Agendar demo →
            </a>

            <button
              className="md:hidden flex flex-col gap-1.5 p-1.5 cursor-pointer bg-transparent border-0 rounded-lg transition-colors duration-300 ease-out hover:bg-white/5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Abrir menú"
            >
              <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ease-out ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ease-out ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ease-out ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 px-6 md:px-8 py-5 flex flex-col gap-3.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 no-underline py-1.5 transition-all duration-300 ease-out hover:text-white hover:pl-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={DEMO_CALENDAR_URL} className={`${navCtaClass} w-full mt-1`}>
              Agendar demo →
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
