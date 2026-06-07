import { INTEGRATIONS_LEFT, INTEGRATIONS_RIGHT } from '@/constants'
import type { IntegrationChip } from '@/types'
import { IntegrationChipIcon, ResultsIcon } from './IntegrationIcons'
import { NeonCircuitOverlay } from './NeonCircuitOverlay'

function Chip({ chip, side }: { chip: IntegrationChip; side: 'left' | 'right' }) {
  return (
    <div
      className={`int-chip max-w-full relative z-10 ${side === 'left' ? 'hover:-translate-x-0.5' : 'hover:translate-x-0.5'}`}
    >
      {side === 'right' && (
        <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-blue-500/80 z-20" aria-hidden="true" />
      )}
      <div
        className="w-[34px] h-[34px] rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: chip.bgColor }}
      >
        <IntegrationChipIcon label={chip.label} />
      </div>
      <div className="flex-1 min-w-0">
        <span className="block text-[12px] font-medium text-white leading-snug">{chip.label}</span>
        <span className="block text-[11px] text-white/40">{chip.sub}</span>
      </div>
      {side === 'left' && (
        <span className="absolute -right-[5px] top-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-fuchsia-500/80 z-20" aria-hidden="true" />
      )}
    </div>
  )
}

/** Nodo conector central S */
function HubConnector({ variant }: { variant: 'mobile' | 'desktop' }) {
  const isMobile = variant === 'mobile'

  return (
    <div
      className={
        isMobile
          ? 'flex flex-col items-center justify-center py-2 relative z-10'
          : 'flex flex-col items-center justify-center h-full w-[60px] xl:w-[72px] flex-shrink-0 self-stretch relative z-10'
      }
    >
      <div
        className={`w-px ${isMobile ? 'h-8' : 'flex-1 min-h-[40px]'}`}
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,0.5))' }}
      />
      <div
        className="size-[52px] lg:size-[64px] xl:size-[72px] rounded-full flex items-center justify-center my-2 lg:my-3 animate-glow flex-shrink-0 aspect-square"
        style={{ background: 'linear-gradient(135deg, #3B0764, #6D28D9, #A855F7)' }}
      >
        <span className="font-display font-extrabold text-[18px] lg:text-[22px] xl:text-[26px] text-purple-100">S</span>
      </div>
      <div
        className={`w-px ${isMobile ? 'h-8' : 'flex-1 min-h-[40px]'}`}
        style={{ background: 'linear-gradient(to bottom, rgba(124,58,237,0.5), transparent)' }}
      />
    </div>
  )
}

export function Integrations() {
  return (
    <section
      className="py-12 px-4 sm:px-6 lg:py-20 relative overflow-hidden w-full max-w-full"
      style={{ background: '#0A0415' }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)' }}
      />

      <div className="w-full max-w-full lg:max-w-[700px] mx-auto relative z-10 overflow-hidden px-2 sm:px-0">
        <p className="section-tag !text-brand-400 text-center">Integraciones</p>
        <h2 className="section-title !text-white text-center text-2xl sm:text-3xl md:text-4xl">
          Menos tareas.<br />Más resultados.
        </h2>
        <p className="section-subtitle !text-white/50 mb-8 sm:mb-12 text-center text-xs sm:text-base">
          SATORI recibe información de todos tus canales y la convierte en acciones automáticas al instante.
        </p>

        {/* Móvil y tablet: apilamiento vertical */}
        <div className="flex flex-col gap-4 w-full max-w-full overflow-hidden lg:hidden">
          <div className="flex flex-col gap-3 w-full max-w-full overflow-hidden">
            <p className="text-[9px] sm:text-[10px] font-semibold text-white/30 tracking-widest uppercase mb-1 text-center">
              Entradas
            </p>
            {INTEGRATIONS_LEFT.map((chip) => (
              <Chip key={chip.label} chip={chip} side="left" />
            ))}
          </div>

          <HubConnector variant="mobile" />

          <div className="flex flex-col gap-3 w-full max-w-full overflow-hidden">
            <p className="text-[9px] sm:text-[10px] font-semibold text-white/30 tracking-widest uppercase mb-1 text-center">
              Salidas automáticas
            </p>
            {INTEGRATIONS_RIGHT.map((chip) => (
              <Chip key={chip.label} chip={chip} side="right" />
            ))}
          </div>
        </div>

        {/* Laptop y TV: layout horizontal + circuitos neón */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-4 lg:items-stretch w-full max-w-full overflow-hidden relative min-h-[400px] py-4">
          <NeonCircuitOverlay
            leftCount={INTEGRATIONS_LEFT.length}
            rightCount={INTEGRATIONS_RIGHT.length}
          />

          <div className="flex flex-col gap-4 min-w-0 relative z-10 py-2">
            <p className="text-[10px] font-semibold text-white/30 tracking-widest uppercase mb-1 text-right">
              Entradas
            </p>
            {INTEGRATIONS_LEFT.map((chip) => (
              <Chip key={chip.label} chip={chip} side="left" />
            ))}
          </div>

          <HubConnector variant="desktop" />

          <div className="flex flex-col gap-4 min-w-0 relative z-10 py-2">
            <p className="text-[10px] font-semibold text-white/30 tracking-widest uppercase mb-1 text-left">
              Salidas automáticas
            </p>
            {INTEGRATIONS_RIGHT.map((chip) => (
              <Chip key={chip.label} chip={chip} side="right" />
            ))}
          </div>
        </div>

        <div
          className="mt-5 sm:mt-7 rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-3.5 border text-center sm:text-left w-full max-w-full overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.12))',
            borderColor: 'rgba(124,58,237,0.4)',
          }}
        >
          <span className="flex-shrink-0 flex items-center justify-center">
            <ResultsIcon />
          </span>
          <div className="min-w-0">
            <h4 className="font-display text-[13px] sm:text-[14px] font-bold text-brand-400 mb-0.5">RESULTADOS</h4>
            <p className="text-[11px] sm:text-[13px] text-white/50">
              Seguimiento y reportes en tiempo real — todo en un solo dashboard
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
