import { useState, useEffect } from 'react'
import {
  Search,
  Bell,
  User,
  MessageSquare,
  Calendar,
  Settings,
  Database,
  Bot,
  BarChart3,
  Users,
  Mail,
  TrendingUp,
  TrendingDown,
  Zap,
  MessageCircle,
  Globe,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  RefreshCw,
  Check,
  Crown
} from 'lucide-react'
import { FaFacebook, FaInstagram, FaSlack } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'

const kpiData = [
  { label: 'Conversaciones', value: '1,256', change: '+18.5%', trend: 'up', icon: MessageSquare, color: 'blue', gradient: 'from-blue-500/10 to-cyan-500/5' },
  { label: 'Contactos Nuevos', value: '342', change: '+12.3%', trend: 'up', icon: Users, color: 'purple', gradient: 'from-purple-500/10 to-pink-500/5' },
  { label: 'Citas Agendadas', value: '128', change: '+27.6%', trend: 'up', icon: Calendar, color: 'orange', gradient: 'from-orange-500/10 to-yellow-500/5' },
  { label: 'Ventas Cerradas', value: '56', change: '+35.4%', trend: 'up', icon: DollarSign, color: 'green', gradient: 'from-green-500/10 to-emerald-500/5' },
  { label: 'Ingresos Generados', value: '$24,560', change: '+22.8%', trend: 'up', icon: TrendingUp, color: 'amber', gradient: 'from-emerald-500/10 to-teal-500/5' }
]

const channelsData = [
  { name: 'Facebook Ads', value: 342, trend: 'up', icon: FaFacebook },
  { name: 'Instagram', value: 298, trend: 'down', icon: FaInstagram },
  { name: 'WhatsApp', value: 1023, trend: 'up', icon: MessageCircle },
  { name: 'Formulario Web', value: 186, trend: 'up', icon: Globe },
  { name: 'Google Ads', value: 236, trend: 'down', icon: Search },
  { name: 'Base de Datos', value: 154, trend: 'up', icon: Database }
]

const conversationsData = [
  { name: 'María González', message: 'Hola, me interesa el servicio...', time: 'Ahora', platform: 'WhatsApp' },
  { name: 'Carlos López', message: '¿Cuáles son los precios?', time: '2m', platform: 'Instagram' },
  { name: 'Ana Martínez', message: 'Quiero agendar una cita', time: '5m', platform: 'Facebook' },
  { name: 'Pedro Ramírez', message: 'Necesito más información', time: '8m', platform: 'WhatsApp' },
  { name: 'Lucía Fernández', message: '¿Tienen disponibilidad?', time: '10m', platform: 'Instagram' }
]

const actionsData = [
  { name: 'Emails Automáticos', value: 256, status: 'Enviado', icon: Mail, badgeColor: 'green' },
  { name: 'Respuestas WhatsApp', value: 1023, status: 'Enviado', icon: MessageCircle, badgeColor: 'green' },
  { name: 'Agendas de Citas', value: 128, status: 'Agendado', icon: Calendar, badgeColor: 'orange' },
  { name: 'Actualización CRM / BD', value: 342, status: 'Sincronizado', icon: RefreshCw, badgeColor: 'blue' },
  { name: 'Notificaciones al Equipo', value: 56, status: 'Enviado (Slack)', icon: FaSlack, badgeColor: 'green' },
  { name: 'Notificaciones Email/WhatsApp', value: 78, status: 'Enviado', icon: Bell, badgeColor: 'green' }
]

const agentsData = [
  { name: 'Agente Ventas', efficiency: 94 },
  { name: 'Agente Soporte', efficiency: 91 },
  { name: 'Agente Reservas', efficiency: 89 },
  { name: 'Agente Recuperación', efficiency: 93 },
  { name: 'Agente Voz', efficiency: 92 }
]

const funnelData = [
  { stage: 'Nuevos Leads', value: 1256 },
  { stage: 'Contactados', value: 842 },
  { stage: 'Calificados', value: 356 },
  { stage: 'Propuesta', value: 128 },
  { stage: 'Cerrados', value: 56 }
]

const activityData = [
  { action: 'Nuevo contacto desde WhatsApp', user: 'María González', time: 'Ahora' },
  { action: 'Cita agendada automáticamente', user: 'Carlos López', time: '2m' },
  { action: 'Lead calificado por IA', user: 'Ana Martínez', time: '5m' },
  { action: 'Propuesta enviada', user: 'Pedro Ramírez', time: '8m' },
  { action: 'Venta cerrada', user: 'Lucía Fernández', time: '10m' }
]

const integrationsData = [
  { name: 'WhatsApp', icon: MessageCircle, status: 'Conectado' },
  { name: 'Instagram', icon: FaInstagram, status: 'Conectado' },
  { name: 'Facebook', icon: FaFacebook, status: 'Conectado' },
  { name: 'Gmail', icon: Mail, status: 'Conectado' },
  { name: 'Google Calendar', icon: Calendar, status: 'Conectado' },
  { name: 'Slack', icon: FaSlack, status: 'Conectado' },
  { name: 'CRM', icon: Database, status: 'Conectado' },
  { name: 'MySQL', icon: SiMysql, status: 'Conectado' }
]

const sidebarItems = [
  { name: 'Resumen', icon: BarChart3, active: true },
  { name: 'Conversaciones', icon: MessageSquare },
  { name: 'Contactos', icon: Users },
  { name: 'Calendario', icon: Calendar },
  { name: 'Automatizaciones', icon: Zap },
  { name: 'CRM', icon: Database },
  { name: 'Base de Datos', icon: Database },
  { name: 'Agentes IA', icon: Bot },
  { name: 'Integraciones', icon: Settings },
  { name: 'Reportes', icon: BarChart3 },
  { name: 'Configuración', icon: Settings }
]

export function Dashboard() {
  const [liveText, setLiveText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const statusMessages = [
    'Analizando conversación...',
    'Calificando lead...',
    'Agendando cita...',
    'Enviando respuesta...',
    'Sincronizando datos...',
    'Procesando solicitud...'
  ]
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  useEffect(() => {
    // Cursor blinking animation
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const currentMessage = statusMessages[currentMessageIndex]
    let charIndex = 0

    const typeMessage = () => {
      if (charIndex < currentMessage.length) {
        setLiveText(currentMessage.slice(0, charIndex + 1))
        charIndex++
        setTimeout(typeMessage, 80)
      } else {
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % statusMessages.length)
          setLiveText('')
        }, 2000)
      }
    }

    typeMessage()

    return () => {
      // Cleanup is handled by the timeout logic
    }
  }, [currentMessageIndex])

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden flex flex-col" style={{ background: 'radial-gradient(circle at center, #0a0a1a 0%, #05010a 50%, #020205 100%)' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex items-center gap-2">
            <img src="/images/logoSatori.jpeg" alt="SATORI Logo" className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-white font-bold text-sm md:text-base hidden sm:block">SATORI</span>
          </div>
          <div className="hidden md:block h-6 w-px bg-white/20" />
          <div className="hidden md:block">
            <p className="text-white text-sm font-medium">¡Bienvenido, Juan! 👋</p>
            <p className="text-gray-400 text-xs">Aquí tienes un resumen de la actividad de tu negocio.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300 text-xs">20 May 2024 - 26 May 2024</span>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <Search className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg relative">
            <Bell className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <User className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col w-56 border-r border-white/10 bg-white/5 p-4">
          <div className="space-y-1 flex-1">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                  item.active
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-xs font-medium">{item.name}</span>
              </button>
            ))}
          </div>
          <div className="space-y-3 pt-4 border-t border-white/10">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-green-500/10 text-green-300 border border-green-500/30">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium">Soporte en vivo</span>
            </button>
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white text-xs font-medium">Juan Pérez</p>
                <p className="text-gray-400 text-xs">Administrador</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-4 md:p-6 space-y-4 md:space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {kpiData.map((kpi, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${kpi.gradient} border border-white/10 rounded-xl p-3 md:p-4 hover:border-${kpi.color}-500/30 transition-all relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10">
                      <kpi.icon className={`w-4 h-4 md:w-5 md:h-5 text-${kpi.color}-400`} />
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs mb-1">{kpi.label}</p>
                  <p className="text-white text-lg md:text-2xl font-bold mb-1">{kpi.value}</p>
                  <div className="flex items-center gap-1">
                    {kpi.trend === 'up' ? (
                      <ArrowUpRight className="w-3 h-3 text-green-400" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3 text-red-400" />
                    )}
                    <span className={`${kpi.trend === 'up' ? 'text-green-400' : 'text-red-400'} text-xs font-medium`}>
                      {kpi.change} vs semana anterior
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Input Channels */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-xl p-4 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 hover:opacity-100" />
              <h3 className="text-white text-sm font-semibold mb-4">Canales de Entrada</h3>
              <div className="space-y-3">
                {channelsData.map((channel, index) => (
                  <div key={index} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className="p-1.5 bg-white/10 rounded-lg shrink-0">
                        <channel.icon className="w-3 h-3 text-gray-400" />
                      </div>
                      <span className="text-gray-300 text-xs truncate">{channel.name}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-white text-xs font-medium whitespace-nowrap">{channel.value}</span>
                      {channel.trend === 'up' ? (
                        <TrendingUp className="w-3 h-3 text-green-400" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-time Conversations */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-xl p-4 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 hover:opacity-100" />
              <h3 className="text-white text-sm font-semibold mb-4">Conversaciones en Tiempo Real</h3>
              <div className="space-y-2">
                {conversationsData.map((conv, index) => (
                  <div key={index} className="flex items-start gap-3 p-2.5 hover:bg-white/8 rounded-xl cursor-pointer group">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/5 group-hover:ring-purple-500/30">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="text-white text-sm font-semibold tracking-tight">{conv.name}</p>
                        <span className="text-gray-600 text-[10px] font-medium">{conv.time}</span>
                      </div>
                      <p className="text-gray-500 text-xs truncate leading-relaxed">{conv.message}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 text-purple-400 text-xs hover:text-purple-300">
                Ver todas las conversaciones →
              </button>
            </div>

            {/* Automatic Actions */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-xl p-4 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 hover:opacity-100" />
              <h3 className="text-white text-sm font-semibold mb-4">Salidas y Acciones Automáticas</h3>
              <div className="space-y-3">
                {actionsData.map((action, index) => (
                  <div key={index} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className="p-1.5 bg-white/10 rounded-lg shrink-0">
                        <action.icon className="w-3 h-3 text-gray-400" />
                      </div>
                      <span className="text-gray-300 text-xs truncate">{action.name}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-white text-xs font-medium whitespace-nowrap">{action.value}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium whitespace-nowrap ${
                        action.badgeColor === 'green' ? 'bg-green-500/20 text-green-400' :
                        action.badgeColor === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                        action.badgeColor === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {action.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 gap-4">
            {/* Sales Funnel */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-xl p-4 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 hover:opacity-100" />
              <h3 className="text-white text-sm font-semibold mb-4">Embudo de Ventas</h3>
              <div className="space-y-2">
                {funnelData.map((stage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-gray-400 text-xs w-28 shrink-0">{stage.stage}</span>
                    <div className="flex-1 h-6 bg-white/10 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${(stage.value / 1256) * 100}%` }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                    <span className="text-white text-xs font-medium w-12 text-right shrink-0">{stage.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Activity and Integraciones Activas */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {/* System Activity */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-xl p-4 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-white text-sm font-semibold mb-4">Actividad del Sistema</h3>
                <div className="space-y-3">
                  {activityData.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
                      <div className="flex-1">
                        <p className="text-gray-300 text-xs">{activity.action}</p>
                        <p className="text-gray-500 text-xs">{activity.user} • {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integraciones Activas */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-xl p-4 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 hover:opacity-100" />
                <h3 className="text-white text-sm font-semibold mb-4">Integraciones Activas</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {integrationsData.map((integration, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col items-center justify-center text-center">
                      <div className="p-2 bg-white/10 rounded-lg mb-2">
                        <integration.icon className="w-5 h-5 text-gray-300" />
                      </div>
                      <span className="text-gray-300 text-xs font-medium mb-1">{integration.name}</span>
                      <span className="text-emerald-500 text-[10px] font-medium">{integration.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - AI Performance */}
        <div className="hidden lg:flex flex-col w-64 border-l border-white/10 bg-white/5 p-4 space-y-4 overflow-y-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-xl p-4 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 hover:opacity-100" />
            <h3 className="text-white text-sm font-semibold mb-4">Rendimiento de Agentes IA</h3>
            <div className="flex flex-col items-center mb-4">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="251.2"
                    strokeDashoffset="20.1"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">92%</span>
                </div>
              </div>
              <p className="text-gray-300 text-xs mt-2">Efectividad</p>
            </div>
            <div className="space-y-2">
              {agentsData.map((agent, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300 text-xs">{agent.name}</span>
                  <span className="text-white text-xs font-medium">{agent.efficiency}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Support */}
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-purple-500/30 rounded-xl p-4 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 hover:opacity-100" />
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-green-400 text-xs font-medium">EN VIVO</span>
            </div>
            <p className="text-white text-sm font-medium mb-2">Soporte en Tiempo Real</p>
            <p className="text-gray-400 text-xs font-mono">
              {liveText}
              <span className={`inline-block w-1.5 h-3 bg-green-400 ml-0.5 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            </p>
          </div>

          {/* Plan Actual */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-xl p-4 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 hover:opacity-100" />
            <h3 className="text-white text-sm font-semibold mb-3">Plan Actual</h3>
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 text-lg font-bold">ÉLITE</span>
            </div>
            <div className="space-y-2 mb-4">
              {[
                'Asistente de Voz con IA',
                'Dashboard Empresarial',
                'Integración CRM Completa',
                'Integración de BD y Sistemas',
                'Múltiples Agentes IA',
                'Entrenamiento con 50 versiones reales',
                'Soporte Prioritario',
                'Optimización Continua'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-xs">{feature}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <a
                href="https://wa.me/3245246651"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 border border-green-500/30 rounded-lg text-green-300 text-xs font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3 h-3" />
                Obtener plan
              </a>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 border border-purple-500/30 rounded-lg text-purple-300 text-xs font-medium">
                Gestionar Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
