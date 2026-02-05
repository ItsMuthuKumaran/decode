'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Zap, Lock } from 'lucide-react'

const features = [
  '10 Complete Protocols (PDF)',
  '50+ Copy-Paste Templates',
  'Decision Tree Flowcharts',
  'Lifetime Free Updates',
  '30-Day Money-Back Guarantee',
  'Private Community Access',
]

export default function Pricing() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            One Investment, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Lifetime Value</span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-500 text-white text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                Best Value
              </div>
              
              <h3 className="text-3xl font-bold mb-2">The Decoder Complete</h3>
              <p className="text-slate-400 mb-8">Everything you need to communicate with confidence.</p>
              
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-2xl text-slate-500 line-through">₹499</span>
                <span className="text-6xl font-bold">₹199</span>
              </div>
              
              <a
                href="https://rzp.io/l/decoder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-colors"
              >
                Buy Now — Instant Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              
              <p className="mt-4 text-sm text-slate-500 flex items-center gap-1">
                <Lock className="w-4 h-4" />
                Secure payment • 30-day guarantee
              </p>
            </div>
            
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}