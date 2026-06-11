import type { ReactNode } from 'react'

/** Posición de un icono de integración en el hub (porcentajes del contenedor) */
interface HubNode {
  id: string
  x: number
  y: number
  side: 'left' | 'right'
  label: string
  icon: ReactNode
}

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1877F2" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F58529" />
        <stop offset="50%" stopColor="#DD2A7B" />
        <stop offset="100%" stopColor="#8134AF" />
      </linearGradient>
    </defs>
    <path
      fill="url(#ig-grad)"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
    />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#25D366" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
)

const FormIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#60A5FA" strokeWidth="2" aria-hidden="true">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="13" y2="17" />
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#60A5FA" strokeWidth="2" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
)

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" fill="#4285F4" opacity="0.2" stroke="#4285F4" strokeWidth="1.5" />
    <text x="12" y="16" textAnchor="middle" fill="#4285F4" fontSize="8" fontWeight="bold">31</text>
  </svg>
)

const SheetsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#0F9D58" opacity="0.2" stroke="#0F9D58" strokeWidth="1.5" />
    <line x1="8" y1="3" x2="8" y2="21" stroke="#0F9D58" strokeWidth="1" />
    <line x1="3" y1="9" x2="21" y2="9" stroke="#0F9D58" strokeWidth="1" />
    <line x1="3" y1="15" x2="21" y2="15" stroke="#0F9D58" strokeWidth="1" />
  </svg>
)

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313z" />
    <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312z" />
    <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 012.521-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.523 2.521h-2.521V8.834zM17.688 8.834a2.528 2.528 0 01-2.521 2.521 2.528 2.528 0 01-2.521-2.521V2.522A2.528 2.528 0 0115.167 0a2.528 2.528 0 012.521 2.522v6.312z" />
    <path fill="#ECB22E" d="M15.167 18.956a2.528 2.528 0 012.521 2.523A2.528 2.528 0 0115.167 24a2.528 2.528 0 01-2.521-2.522v-2.521h2.521zM15.167 17.688a2.528 2.528 0 01-2.521-2.521 2.528 2.528 0 012.521-2.521h6.313A2.528 2.528 0 0124 15.167a2.528 2.528 0 01-2.523 2.521h-6.313z" />
  </svg>
)

const HUB_NODES: HubNode[] = [
  { id: 'facebook', x: 14, y: 16, side: 'left', label: 'Facebook', icon: <FacebookIcon /> },
  { id: 'instagram', x: 11, y: 38, side: 'left', label: 'Instagram', icon: <InstagramIcon /> },
  { id: 'whatsapp', x: 14, y: 60, side: 'left', label: 'WhatsApp', icon: <WhatsAppIcon /> },
  { id: 'typeform', x: 11, y: 82, side: 'left', label: 'Formularios', icon: <FormIcon /> },
  { id: 'email', x: 86, y: 16, side: 'right', label: 'Email', icon: <EmailIcon /> },
  { id: 'calendar', x: 89, y: 38, side: 'right', label: 'Calendar', icon: <CalendarIcon /> },
  { id: 'sheets', x: 86, y: 60, side: 'right', label: 'Sheets', icon: <SheetsIcon /> },
  { id: 'slack', x: 89, y: 82, side: 'right', label: 'Slack', icon: <SlackIcon /> },
]

/** Genera trazado tipo circuito desde el centro hacia cada nodo */
function circuitPath(cx: number, cy: number, tx: number, ty: number, side: 'left' | 'right'): string {
  const midX = side === 'left' ? cx - 55 : cx + 55
  return `M ${cx} ${cy} L ${midX} ${cy} L ${midX} ${ty} L ${tx} ${ty}`
}

export function HeroConnectionHub() {
  const cx = 200
  const cy = 200

  return (
    <div
      className="relative w-full max-w-md sm:max-w-lg mx-auto lg:mx-0 lg:ml-auto lg:max-w-none
                 aspect-square min-h-[280px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[420px]
                 flex items-center justify-center"
      aria-label="Ecosistema de automatización SATORI"
    >
      <style>{`
        @keyframes hubGlowPulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.06); }
        }
        @keyframes hubFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes hubNodeIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.85); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>

      {/* Contenedor de órbita - gira con nodos y líneas */}
      <div className="absolute inset-0 w-full h-full animate-orbit-rotate">
        {/* Circuitos SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hub-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
            </linearGradient>
            <filter id="hub-line-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Línea vertical central que atraviesa el nodo S */}
          <line
            x1={cx}
            y1={48}
            x2={cx}
            y2={352}
            stroke="url(#hub-line-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#hub-line-glow)"
            opacity="0.45"
          />

          {HUB_NODES.map((node) => {
            const tx = (node.x / 100) * 400
            const ty = (node.y / 100) * 400
            return (
              <g key={node.id}>
                <path
                  d={circuitPath(cx, cy, tx, ty, node.side)}
                  fill="none"
                  stroke="url(#hub-line-grad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#hub-line-glow)"
                  opacity="0.75"
                />
                <circle cx={tx} cy={ty} r="3" fill="#a855f7" opacity="0.9" />
              </g>
            )
          })}
        </svg>

        {/* Iconos flotantes de aplicaciones */}
        {HUB_NODES.map((node, i) => (
          <div
            key={node.id}
            className="absolute z-10 group/icon"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
              animation: `hubNodeIn 0.6s ease-out ${0.1 + i * 0.08}s both`,
            }}
            title={node.label}
          >
            <div
              className="size-11 sm:size-12 md:size-[52px] rounded-xl bg-[#0d1117]/90 border border-white/10
                         flex items-center justify-center shadow-lg shadow-black/30
                         transition-all duration-300 ease-out
                         group-hover/icon:border-indigo-500/40 group-hover/icon:shadow-indigo-500/20 group-hover/icon:-translate-y-0.5
                         animate-counter-rotate"
            >
              {node.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Glow central neón */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: '55%',
          height: '55%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.45) 0%, rgba(99,102,241,0.2) 40%, transparent 70%)',
          animation: 'hubGlowPulse 4s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      {/* Nodo central — logo SATORI (centrado absoluto, animación en capa interna) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div
          className="relative flex items-center justify-center size-24 sm:size-28 md:size-32"
          style={{ animation: 'hubFloat 5s ease-in-out infinite' }}
        >
          <div
            className="absolute inset-0 m-auto size-full rounded-full blur-2xl scale-125"
            style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.6), rgba(99,102,241,0.3), transparent)' }}
            aria-hidden="true"
          />
          <div
            className="relative size-full aspect-square rounded-full flex items-center justify-center border border-indigo-500/40 shadow-2xl shadow-purple-600/40 drop-shadow-[0_0_24px_rgba(124,58,237,0.55)]"
            style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)' }}
          >
            <span className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-none bg-gradient-to-br from-indigo-300 via-purple-300 to-blue-400 bg-clip-text text-transparent select-none">
              S
            </span>
            {/* Terminales de circuito — alineados a la línea vertical central */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" aria-hidden="true" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.9)]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  )
}
