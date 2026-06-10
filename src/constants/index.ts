import type {
  NavLink,
  Metric,
  PainPoint,
  Benefit,
  Step,
  IntegrationChip,
  PricingPlan,
  Testimonial,
  FooterColumn,
} from '@/types'

// ─── Navigation ────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Soluciones', href: '#beneficios' },
  { label: 'Cómo funciona', href: '#proceso' },
  { label: 'Planes', href: '#planes' },
  { label: 'Contacto', href: '#footer' },
]

// ─── WhatsApp CTA ──────────────────────────────────────────────────────────
export const WHATSAPP_URL = 'https://wa.me/573245246651?text=Hola%20SATORI,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20automatizaci%C3%B3n%20con%20IA.'
export const DEMO_CALENDAR_URL = '#' // Replace with Calendly or Cal.com link

// ─── Metrics ───────────────────────────────────────────────────────────────
export const METRICS: Metric[] = [
  { id: 'm1', value: 300, suffix: '%', prefix: '+', label: 'Más productividad' },
  { id: 'm2', value: 120, suffix: '+', label: 'Negocios automatizados' },
  { id: 'm3', value: 2.4, suffix: 'M', label: 'Mensajes respondidos', decimal: true },
  { id: 'm4', value: 38, suffix: '%', label: 'Incremento ventas promedio' },
]

// ─── Pain Points ───────────────────────────────────────────────────────────
export const PAIN_POINTS: PainPoint[] = [
  {
    emoji: '😴',
    title: 'Clientes que no esperan',
    description: 'Tu cliente pregunta a las 11pm. No respondes. Mañana ya compró en otro lado.',
  },
  {
    emoji: '📱',
    title: 'Saturación de mensajes',
    description: 'WhatsApp, Instagram, email... imposible responder todo a tiempo y bien.',
  },
  {
    emoji: '🔁',
    title: 'Sin seguimiento real',
    description: 'Leads que quedan en el aire. Clientes que nunca vuelven. Ventas que se escapan.',
  },
  {
    emoji: '⏰',
    title: 'Procesos manuales',
    description: 'Tu equipo gasta horas en tareas repetitivas que una IA puede hacer en segundos.',
  },
]

// ─── Benefits ──────────────────────────────────────────────────────────────
export const BENEFITS: Benefit[] = [
  {
    emoji: '🤖',
    title: 'Atención 24/7 sin esfuerzo',
    description: 'Tu IA responde instantáneamente a cualquier hora. Ningún cliente sin respuesta, nunca más.',
  },
  {
    emoji: '📈',
    title: 'Más ventas, mismo equipo',
    description: 'La IA califica leads, hace seguimiento y convierte oportunidades que antes se perdían.',
  },
  {
    emoji: '⚙️',
    title: 'Operación sin fricciones',
    description: 'Agenda automática, respuestas predefinidas, flujos inteligentes. Menos trabajo manual.',
  },
  {
    emoji: '💰',
    title: 'Reducción de costos',
    description: 'Un agente IA hace el trabajo de 3 personas, sin salario ni días libres ni errores humanos.',
  },
  {
    emoji: '🎯',
    title: 'Mejor experiencia del cliente',
    description: 'Respuestas personalizadas, rápidas y correctas. Tu cliente siente que lo conocen.',
  },
  {
    emoji: '📊',
    title: 'Datos en tiempo real',
    description: 'Dashboard con métricas de conversación, ventas y conversión. Toma decisiones con datos.',
  },
]

// ─── How It Works ──────────────────────────────────────────────────────────
export const STEPS: Step[] = [
  {
    number: '1',
    title: 'Conectamos tu negocio',
    description:
      'Integramos SATORI con tus canales actuales: WhatsApp, Instagram, email, web. Sin cambiar nada de lo que ya usas.',
    badge: 'De 1 a 2 días hábiles',
  },
  {
    number: '2',
    title: 'Entrenamos la IA con tu información',
    description:
      'Cargamos tu menú, servicios, precios, preguntas frecuentes. La IA aprende tu negocio y habla como tú.',
    badge: 'Instantáneamente',
  },
  {
    number: '3',
    title: 'Tu negocio trabaja solo',
    description:
      'La IA atiende, vende, agenda y hace seguimiento. Tú supervisas desde el dashboard y escalas sin límites.',
    badge: 'De 1 a 2 días',
  },
]

// ─── Integrations ──────────────────────────────────────────────────────────
export const INTEGRATIONS_LEFT: IntegrationChip[] = [
  { emoji: '📘', label: 'Facebook Ads', sub: 'Captura leads automáticos', bgColor: 'rgba(24,119,242,0.15)' },
  { emoji: '📸', label: 'Instagram', sub: 'DMs y comentarios', bgColor: 'rgba(225,48,108,0.15)' },
  { emoji: '💬', label: 'WhatsApp Business', sub: 'Mensajes entrantes 24/7', bgColor: 'rgba(37,211,102,0.15)' },
  { emoji: '📋', label: 'Formularios Web', sub: 'Landing pages y webs', bgColor: 'rgba(66,133,244,0.15)' },
  { emoji: '📊', label: 'Google Sheets', sub: 'Bases de datos propias', bgColor: 'rgba(52,211,153,0.15)' },
]

export const INTEGRATIONS_RIGHT: IntegrationChip[] = [
  { emoji: '📧', label: 'Email automático', sub: 'Confirmaciones y seguimiento', bgColor: 'rgba(234,88,12,0.15)' },
  { emoji: '💬', label: 'Respuestas WhatsApp', sub: 'Instantáneas e inteligentes', bgColor: 'rgba(37,211,102,0.15)' },
  { emoji: '📅', label: 'Agendar citas', sub: 'Google Calendar integrado', bgColor: 'rgba(66,133,244,0.15)' },
  { emoji: '📊', label: 'Actualizar CRM', sub: 'Sheets y bases de datos', bgColor: 'rgba(52,211,153,0.15)' },
  { emoji: '🔔', label: 'Notificar equipo', sub: 'Slack, email o WhatsApp', bgColor: 'rgba(100,73,200,0.15)' },
]

// ─── Pricing ───────────────────────────────────────────────────────────────
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basico',
    name: 'Plan Básico',
    tagline: 'Para negocios que inician y quieren dejar de perder clientes por no responder a tiempo.',
    implementationUSD: '~$370 USD',
    implementationCOP: '$1.500.000 COP',
    maintenanceUSD: '~$62 USD',
    maintenanceCOP: '$250.000 COP',
    deliveryDays: 5,
    features: [
      'Chatbot para WhatsApp Business',
      'Respuestas automáticas 24/7',
      'Menú interactivo personalizado',
      'Hasta 5 flujos de conversación',
      'Conexión a tu WhatsApp Business',
      'Configuración inicial completa',
    ],
    notIncluded: [
      'Inteligencia Artificial',
      'Aprendizaje automático',
      'Agenda automática',
      'Integraciones avanzadas',
    ],
    result: 'Atención automática 24/7 incluso cuando tu negocio está cerrado.',
    ctaLabel: 'Quiero este plan',
  },
  {
    id: 'pro',
    name: 'Plan Pro',
    tagline: 'Para negocios con muchos mensajes diarios que desean automatizar atención y agendamiento.',
    implementationUSD: '~$740 USD',
    implementationCOP: '$3.000.000 COP',
    maintenanceUSD: '~$111 USD',
    maintenanceCOP: '$450.000 COP',
    deliveryDays: 7,
    features: [
      'IA con RAG (lee tus documentos y catálogos)',
      'Agenda citas en Google Calendar automáticamente',
      'Detección de intención del cliente',
      'Memoria de conversaciones (recuerda al cliente)',
      'Nombre personalizado para el asistente',
      '1 mes de ajustes incluidos',
      'Soporte técnico prioritario',
    ],
    notIncluded: [
      'Nuevas funcionalidades extra',
      'Integraciones no contempladas',
    ],
    result: 'Deja de responder manualmente cientos de mensajes repetitivos. La IA atiende por ti.',
    ctaLabel: 'Quiero este plan',
    featured: true,
  },
  {
    id: 'elite',
    name: 'Plan Elite',
    tagline: 'Para clínicas, cadenas de restaurantes, concesionarios y empresas que escalan.',
    implementationUSD: '~$1.730 USD',
    implementationCOP: '$7.000.000 COP',
    maintenanceUSD: '~$198 USD',
    maintenanceCOP: '$800.000 COP',
    deliveryDays: 10,
    features: [
      'Asistente de voz con IA (audios)',
      'Dashboard empresarial en tiempo real',
      'Integración con CRM completo',
      'Integración con bases de datos y sistemas internos',
      'Múltiples agentes IA especializados',
      'Entrenamiento con 50 conversaciones reales',
      'Soporte prioritario + optimización continua',
    ],
    result: 'Un equipo de asistentes virtuales 24/7 atendiendo, agendando y optimizando procesos.',
    ctaLabel: 'Hablar con ventas',
  },
]

export const PRICING_NOTE =
  'Todos los proyectos requieren un anticipo del 50% para iniciar. El saldo restante se cancela antes de la entrega final. Los costos de licencias, APIs, WhatsApp Business, hosting y dominios no están incluidos. La cancelación del mantenimiento requiere mínimo 30 días de anticipación.'

// ─── Testimonials ──────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    stars: 5,
    quote: '"Antes perdíamos fácil 20 clientes a la semana por no responder rápido. Con SATORI la IA responde en segundos y ya no perdemos ninguno."',
    authorInitials: 'CM',
    authorName: 'Carlos Martínez',
    authorRole: 'Restaurante La Brasa · Medellín',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
  },
  {
    stars: 5,
    quote: '"Mis citas médicas se llenan solas. La IA agenda, recuerda y hasta hace seguimiento post-consulta. Increíble el tiempo que ahorra."',
    authorInitials: 'DL',
    authorName: 'Dra. Laura Ospina',
    authorRole: 'Clínica Sonrisa Vital · Bogotá',
    avatarBg: '#D1FAE5',
    avatarColor: '#065F46',
  },
  {
    stars: 5,
    quote: '"Vendemos 35% más desde que implementamos el sistema. El seguimiento automático convierte leads que antes simplemente se perdían."',
    authorInitials: 'AR',
    authorName: 'Andrés Restrepo',
    authorRole: 'Inmobiliaria Raíces · Cali',
    avatarBg: '#FEF3C7',
    avatarColor: '#92400E',
  },
  {
    stars: 5,
    quote: '"El equipo de SATORI lo configuró todo en 4 días. Hoy la IA responde el 80% de los mensajes y mi equipo solo atiende los casos especiales."',
    authorInitials: 'MV',
    authorName: 'María Vargas',
    authorRole: 'Spa Essence · Barranquilla',
    avatarBg: '#FDE8FF',
    avatarColor: '#7C3AED',
  },
]

// ─── Footer ────────────────────────────────────────────────────────────────
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Empresa',
    links: [
      { label: 'Nosotros', href: '#' },
      { label: 'Casos de éxito', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    heading: 'Soluciones',
    links: [
      { label: 'Restaurantes', href: '#' },
      { label: 'Clínicas', href: '#' },
      { label: 'PyMES', href: '#' },
      { label: 'Inmobiliarias', href: '#' },
    ],
  },
  {
    heading: 'Contacto',
    links: [
      { label: 'WhatsApp', href: WHATSAPP_URL },
      { label: 'hola@satori.ai', href: 'mailto:hola@satori.ai' },
      { label: 'Agendar llamada', href: DEMO_CALENDAR_URL },
    ],
  },
]
