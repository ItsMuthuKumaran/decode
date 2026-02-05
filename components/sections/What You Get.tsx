'use client'

import { motion } from 'framer-motion'
import { FileText, Video, MessageSquare, Zap, Shield, Clock } from 'lucide-react'

const deliverables = [
  {
    icon: FileText,
    title: '10 battle-tested email frameworks',
    description: 'Exact templates for proposals, follow-ups, scope creep, and conflict resolution. Copy, paste, customize.',
  },
  {
    icon: Video,
    title: 'Video breakdowns',
    description: 'Why each framework works. When to use it. How to adapt it for your specific situation.',
  },
  {
    icon: MessageSquare,
    title: 'Slack community access',
    description: 'Get feedback on your actual client messages. Peer review from other Indian professionals.',
  },
  {
    icon: Zap,
    title: 'Notion workspace',
    description: 'Organized, searchable, always updated. Access on any device.',
  },
  {
    icon: Shield,
    title: 'Cultural translation guide',
    description: 'What "urgent" means in different countries. How to read between the lines of client feedback.',
  },
  {
    icon: Clock,
    title: 'Lifetime updates',
    description: 'New frameworks added based on community requests. Pay once, get everything forever.',
  },
]

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            What's actually inside
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            No fluff. No generic advice. Just frameworks that work.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}