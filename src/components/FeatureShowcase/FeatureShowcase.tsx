import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Mic, 
  LayoutDashboard, 
  Users, 
  Database, 
  Bot, 
  BrainCircuit, 
  Headset, 
  TrendingUp,
  Crown
} from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Asistente de Voz',
    description: 'Interactúa naturalmente con tu IA mediante comandos de voz avanzados.'
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Empresarial',
    description: 'Visualiza métricas clave y KPIs en tiempo real con analytics integrados.'
  },
  {
    icon: Users,
    title: 'Integración CRM Completa',
    description: 'Sincronización automática con Salesforce, HubSpot y más plataformas.'
  },
  {
    icon: Database,
    title: 'Integración de BD y Sistemas',
    description: 'Conecta con bases de datos y sistemas internos sin fricción.'
  },
  {
    icon: Bot,
    title: 'Múltiples Agentes IA',
    description: 'Despliega agentes especializados para diferentes tareas y departamentos.'
  },
  {
    icon: BrainCircuit,
    title: 'Entrenamiento con Datos Reales',
    description: 'La IA aprende de tu información histórica para resultados precisos.'
  },
  {
    icon: Headset,
    title: 'Soporte Prioritario',
    description: 'Asistencia técnica dedicada 24/7 con tiempos de respuesta garantizados.'
  },
  {
    icon: TrendingUp,
    title: 'Optimización Continua',
    description: 'Mejora automática de procesos basada en análisis de rendimiento.'
  }
]

export function FeatureShowcase() {
  const [typedText, setTypedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const fullText = 'y soporte en tiempo real'

  useEffect(() => {
    let index = 0
    const typingSpeed = 30

    const typeNextChar = () => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
        setTimeout(typeNextChar, typingSpeed)
      } else {
        setIsTyping(false)
      }
    }

    typeNextChar()
  }, [])

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with radial gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at top, #1a0f2e, #05010a)'
        }}
      />
      
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6 md:mb-8"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs md:text-sm font-medium backdrop-blur-sm">
            RESULTADOS Y SEGUIMIENTO
          </span>
        </motion.div>

        {/* Top Section - Flex Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Left - Title */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white mb-2">
              Resultados y seguimiento
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {typedText}
              <motion.span
                animate={{ opacity: isTyping ? [1, 0, 1] : 1 }}
                transition={{ duration: 0.8, repeat: isTyping ? Infinity : 0 }}
                className="inline-block w-0.5 h-8 md:h-12 bg-purple-400 ml-1 align-middle"
              />
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-400 text-base md:text-lg mt-4"
            >
              Todo en un solo dashboard.
            </motion.p>
          </motion.div>

          {/* Right - Plan Élite Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="flex-shrink-0 w-full lg:w-auto"
          >
            <div className="relative bg-white/5 border border-purple-500/20 rounded-2xl p-5 backdrop-blur-xl shadow-2xl">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-purple-500/10 rounded-2xl blur-xl -z-10" />
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">Plan ÉLITE</h3>
              </div>
              <p className="text-gray-400 text-xs md:text-sm">
                Acceso completo a todas las funcionalidades premium con soporte dedicado 24/7.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 mb-16 md:mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 backdrop-blur-xl hover:border-purple-400/40 transition-all duration-300 ease-out cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-white font-medium text-sm md:text-base mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Dashboard Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative mt-16 md:mt-20 flex justify-center"
        >
          {/* Glow behind dashboard */}
          <div className="absolute inset-0 bg-purple-500/20 rounded-3xl blur-[60px] md:blur-[80px] -z-10 opacity-60" />
          
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-xl shadow-2xl overflow-hidden w-full max-w-5xl">
            <div className="relative">
              <img 
                src="/images/dashboard.png" 
                alt="Dashboard Preview" 
                className="w-full max-w-full rounded-xl shadow-2xl"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
