'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  { 
    q: "Is this only for developers?", 
    a: "No, any Indian professional with global clients: designers, writers, consultants, support teams. The protocols work across all industries.",
    category: "General"
  },
  { 
    q: "Will this work for UK clients?", 
    a: "Yes, all native English markets. Minor variations noted where relevant. The principles are universal.",
    category: "Compatibility"
  },
  { 
    q: "How quickly will I see results?", 
    a: "Most see improved response rates within the first week. Full transformation typically takes 2-3 weeks of consistent application.",
    category: "Results"
  },
  { 
    q: "What if it doesn't work for me?", 
    a: "30-day money-back guarantee. Email 'refund' for instant processing. No questions asked.",
    category: "Guarantee"
  },
  { 
    q: "Do I get updates?", 
    a: "Yes, lifetime free updates as communication trends evolve. You'll always have the latest protocols.",
    category: "Updates"
  },
]

function FAQItem({ item, index }: { item: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div 
        className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen ? 'border-orange-200 shadow-lg shadow-orange-100' : 'border-slate-200 hover:border-slate-300'
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-2xl"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-4">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${
              isOpen ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'
            }`}>
              {item.category}
            </span>
            <span className="font-semibold text-slate-900 text-lg">{item.q}</span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-orange-500' : 'text-slate-400'}`} />
          </motion.div>
        </button>
        
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-6 pb-6 pt-0">
                <div className="h-px bg-slate-100 mb-4" />
                <p className="text-slate-600 leading-relaxed pl-[calc(2.5rem+16px+4px)]">
                  {item.a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className="py-32 bg-white relative" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 mb-6"
          >
            <HelpCircle className="w-8 h-8 text-orange-600" />
          </motion.div>
          
          <motion.h2 
            id="faq-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Questions? <span className="text-gradient">Answered.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Everything you need to know about The Decoder.
          </motion.p>
        </div>
        
        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 rounded-3xl bg-slate-50 border border-slate-100"
        >
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <a 
            href="mailto:support@decoder.pro" 
            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
          >
            Contact our team
            <ChevronDown className="w-4 h-4 -rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}