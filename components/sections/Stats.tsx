'use client'

import { motion } from 'framer-motion'
import { Users, TrendingUp, MessageCircle, Star } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Professionals Trained', icon: Users },
  { value: '₹50K', label: 'Avg Monthly Savings', icon: TrendingUp },
  { value: '98%', label: 'Response Rate Boost', icon: MessageCircle },
  { value: '4.9', label: 'Average Rating', icon: Star },
]

export default function Stats() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm mb-4">
                <stat.icon className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}