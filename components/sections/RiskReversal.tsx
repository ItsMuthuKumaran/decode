'use client'

import { motion } from 'framer-motion'
import { Shield, RefreshCcw, MessageCircle } from 'lucide-react'

export default function RiskReversal() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
        >
          Not sure if this is for you?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 mb-12"
        >
          Here's how we remove the risk:
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: RefreshCcw,
              title: '30-day refund',
              description: "Email 'refund' within 30 days. No questions. No forms. Money back in 48 hours.",
            },
            {
              icon: MessageCircle,
              title: 'Real support',
              description: 'Actual human responds within 24 hours. Usually me (the founder).',
            },
            {
              icon: Shield,
              title: 'Lifetime access',
              description: 'Buy once, get every future update. No subscriptions, no upsells.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-slate-900 text-white"
        >
          <p className="text-lg mb-6">
            At ₹199, you're paying for one coffee. If even one framework helps you close one better client, you've made 100x your money.
          </p>
          <a
            href="https://rzp.io/l/decoder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
          >
            Get instant access — ₹199
          </a>
        </motion.div>
      </div>
    </section>
  )
}