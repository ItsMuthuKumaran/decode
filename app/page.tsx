import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Features from '@/components/sections/Features'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}