/** Mockup de chat WhatsApp — centrado debajo de las tarjetas de métricas */
export function MetricsChat() {
  return (
    <div className="w-full max-w-md mx-auto">
      <style>{`
        @keyframes metricsMsgIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        className="bg-[#0a192f]/90 border border-blue-500/30 rounded-2xl p-5 sm:p-6 md:p-7 shadow-2xl shadow-indigo-500/10
                   w-full transition-all duration-300 ease-out hover:border-blue-400/40 hover:shadow-indigo-500/20"
      >
        {/* Header estilo ventana */}
        <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shrink-0" />
          <span className="flex-1 text-center text-xs text-slate-400 font-medium tracking-wide">
            SATORI · WhatsApp
          </span>
        </div>

        {/* Mensajes */}
        <div className="space-y-3 md:space-y-4">
          <div className="flex justify-end" style={{ animation: 'metricsMsgIn 0.6s ease-out forwards' }}>
            <div className="bg-slate-800/90 border border-white/5 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[88%]">
              <p className="text-[10px] uppercase tracking-wider text-cyan-400/80 mb-1">Usuario</p>
              <p className="text-sm text-slate-200">¿Tienen citas disponibles?</p>
            </div>
          </div>

          <div
            className="flex justify-start opacity-0"
            style={{ animation: 'metricsMsgIn 0.6s ease-out 0.5s forwards' }}
          >
            <div className="bg-indigo-950/80 border border-indigo-500/20 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[88%]">
              <p className="text-[10px] uppercase tracking-wider text-cyan-400/80 mb-1">IA · SATORI</p>
              <p className="text-sm text-slate-100 flex items-center gap-1.5">
                Sí, agendado para mañana 3PM
                <span className="inline-flex items-center justify-center size-4 rounded bg-emerald-500 text-white text-[10px] shrink-0">
                  ✓
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Barra de entrada */}
        <div className="mt-5 md:mt-6 pt-4 border-t border-white/5 flex items-center gap-2.5">
          <span className="flex-1 h-9 rounded-full bg-slate-800/60 border border-white/5" />
          <span className="w-9 h-9 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 shrink-0 shadow-md shadow-cyan-500/20" />
        </div>
      </div>
    </div>
  )
}
