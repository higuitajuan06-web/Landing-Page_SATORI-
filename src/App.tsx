import { Navbar }           from '@/components/Navbar'
import { Hero }             from '@/components/Hero'
import { Metrics }          from '@/components/Metrics'
import { Problem }          from '@/components/Problem'
import { Benefits }         from '@/components/Benefits'
import { HowItWorks }       from '@/components/HowItWorks'
import { Integrations }     from '@/components/Integrations'
import { FeatureShowcase }  from '@/components/FeatureShowcase'
import { Pricing }          from '@/components/Pricing'
import { Testimonials }     from '@/components/Testimonials'
import { CTA }              from '@/components/CTA'
import { Footer }           from '@/components/Footer'
import { WhatsAppButton }   from '@/components/WhatsAppButton'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Problem />
        <Benefits />
        <HowItWorks />
        <Integrations />
        <FeatureShowcase />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
