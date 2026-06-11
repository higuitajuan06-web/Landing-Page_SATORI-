import { motion } from 'framer-motion'
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
  CheckCircle,
  Send,
  Zap,
  MessageCircle,
  Globe,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

const kpiData = [
  { label: 'Conversaciones', value: '1,256', change: '+18.5%', trend: 'up' },
  { label: 'Contactos Nuevos', value: '342', change: '+12.3%', trend: 'up' },
  { label: 'Citas Agendadas', value: '128', change: '+27.6%', trend: 'up' },
  { label: 'Ventas Cerradas', value: '56', change: '+35.4%', trend: 'up' },
  { label: 'Ingresos Generados', value: '$24,560', change: '+22.8%', trend: 'up' }
]

const channelsData = [
  { name: 'Facebook Ads', value: 342, trend: 'up', icon: MessageCircle },
  { name: 'Instagram', value: 298, trend: 'down', icon: MessageCircle },
  { name: 'WhatsApp', value: 1023, trend: 'up', icon: MessageCircle },
  { name: 'Formulario Web', value: 186, trend: 'up', icon: Globe },
  { name: 'Google Ads', value: 236, trend: 'down', icon: TrendingUp },
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
  { name: 'Emails Automáticos', value: 256, status: 'Enviado', icon: Mail },
  { name: 'Respuestas WhatsApp', value: 1023, status: 'Enviado', icon: MessageCircle },
  { name: 'Agendas de Citas', value: 128, status: 'Agendado', icon: Calendar },
  { name: 'Actualización CRM/BD', value: 342, status: 'Sincronizado', icon: Database },
  { name: 'Notificaciones al Equipo', value: 56, status: 'Enviado (Slack)', icon: Send },
  { name: 'Notificaciones Email/WhatsApp', value: 78, status: 'Enviado', icon: Bell }
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
  const fullLiveText = 'Soporte en tiempo real activo...'

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullLiveText.length) {
        setLiveText(fullLiveText.slice(0, index + 1))
        index++
      } else {
        index = 0
        setLiveText('')
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="w-full h-full bg-[#05010a] rounded-2xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Activity className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="text-white font-bold text-sm md:text-base hidden sm:block">SATURN</span>
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
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Search className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
            <Bell className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
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
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
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
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 hover:border-purple-500/30 transition-all"
              >
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
              </motion.div>
            ))}
          </div>

          {/* Middle Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Input Channels */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="text-white text-sm font-semibold mb-4">Canales de Entrada</h3>
              <div className="space-y-3">
                {channelsData.map((channel, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-white/10 rounded-lg">
                        <channel.icon className="w-3 h-3 text-gray-400" />
                      </div>
                      <span className="text-gray-300 text-xs">{channel.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs font-medium">{channel.value}</span>
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
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="text-white text-sm font-semibold mb-4">Conversaciones en Tiempo Real</h3>
              <div className="space-y-3">
                {conversationsData.map((conv, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 hover:bg-white/5 rounded-lg transition-colors">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <User className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-white text-xs font-medium">{conv.name}</p>
                        <span className="text-gray-500 text-xs">{conv.time}</span>
                      </div>
                      <p className="text-gray-400 text-xs truncate">{conv.message}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 text-purple-400 text-xs hover:text-purple-300 transition-colors">
                Ver todas las conversaciones →
              </button>
            </div>

            {/* Automatic Actions */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="text-white text-sm font-semibold mb-4">Salidas y Acciones Automáticas</h3>
              <div className="space-y-3">
                {actionsData.map((action, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-white/10 rounded-lg">
                        <action.icon className="w-3 h-3 text-gray-400" />
                      </div>
                      <span className="text-gray-300 text-xs">{action.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs font-medium">{action.value}</span>
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Sales Funnel */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="text-white text-sm font-semibold mb-4">Embudo de Ventas</h3>
              <div className="space-y-2">
                {funnelData.map((stage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-gray-400 text-xs w-28">{stage.stage}</span>
                    <div className="flex-1 h-6 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(stage.value / 1256) * 100}%` }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                    <span className="text-white text-xs font-medium w-12 text-right">{stage.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Activity */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
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
          </div>
        </div>

        {/* Right Panel - AI Performance */}
        <div className="hidden xl:flex flex-col w-64 border-l border-white/10 bg-white/5 p-4 space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="text-white text-sm font-semibold mb-4">Rendimiento de Agentes IA</h3>
            <div className="flex flex-col items-center mb-4">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: '251.2' }}
                    animate={{ strokeDashoffset: 251.2 * (1 - 0.92) }}
                    transition={{ duration: 1, delay: 0.5 }}
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
              <p className="text-gray-400 text-xs mt-2">Efectividad</p>
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
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-medium">EN VIVO</span>
            </div>
            <p className="text-white text-sm font-medium mb-2">Soporte en Tiempo Real</p>
            <p className="text-gray-400 text-xs">{liveText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
