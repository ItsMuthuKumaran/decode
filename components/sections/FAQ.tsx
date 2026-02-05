'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: "Is this only for developers?", a: "No, any Indian professional with global clients: designers, writers, consultants, support teams." },
  { q: "Will this work for UK clients?", a: "Yes, all native English markets. Minor variations noted where relevant." },
  { q: "How quickly will I see results?", a: "Most see improved response rates within the first week." },
  { q: "What if it doesn't work for me?", a: "30-day money-back guarantee. Email 'refund' for instant processing." },
  { q: "Do I get updates?", a: "Yes, lifetime free updates as communication trends evolve." },
]

export default function FAQ() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Answered.</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <motion.details 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-900">{item.q}</span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600">
                {item.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}