import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import WhatYouGet from '@/components/sections/WhatYouGet'
import Testimonials from '@/components/sections/Testimonials'
import RiskReversal from '@/components/sections/RiskReversal'
import FAQ from '@/components/sections/FAQ'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhatYouGet />
      <Testimonials />
      <RiskReversal />
      <FAQ />
    </main>
  )
}