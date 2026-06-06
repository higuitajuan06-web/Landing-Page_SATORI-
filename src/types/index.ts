// ─── Navigation ────────────────────────────────────────────────────────────
export interface NavLink {
  label: string
  href: string
}

// ─── Metrics ───────────────────────────────────────────────────────────────
export interface Metric {
  id: string
  value: number
  suffix: string
  label: string
  decimal?: boolean
  prefix?: string
}

// ─── Pain Points / Problem ─────────────────────────────────────────────────
export interface PainPoint {
  emoji: string
  title: string
  description: string
}

// ─── Benefits ──────────────────────────────────────────────────────────────
export interface Benefit {
  emoji: string
  title: string
  description: string
}

// ─── How It Works ──────────────────────────────────────────────────────────
export interface Step {
  number: string
  title: string
  description: string
  badge: string
}

// ─── Integrations ──────────────────────────────────────────────────────────
export interface IntegrationChip {
  emoji: string
  label: string
  sub: string
  bgColor: string
}

// ─── Pricing ───────────────────────────────────────────────────────────────
export interface PricingPlan {
  id: string
  name: string
  tagline: string
  implementationUSD: string
  implementationCOP: string
  maintenanceUSD: string
  maintenanceCOP: string
  deliveryDays: number
  features: string[]
  notIncluded?: string[]
  result: string
  ctaLabel: string
  featured?: boolean
}

// ─── Testimonials ──────────────────────────────────────────────────────────
export interface Testimonial {
  stars: number
  quote: string
  authorInitials: string
  authorName: string
  authorRole: string
  avatarBg: string
  avatarColor: string
}

// ─── Common ────────────────────────────────────────────────────────────────
export interface FooterColumn {
  heading: string
  links: { label: string; href: string }[]
}
