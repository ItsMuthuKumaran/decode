'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    stat: '73%',
    label: 'of Indian freelancers',
    description: 'Charge 40-60% less than their US/EU counterparts for identical work',
  },
  {
    stat: '6+ months',
    label: 'Average time',
    description: 'To build trust with international clients without clear communication frameworks',
  },
  {
    stat: '₹2.4L/year',
    label: 'Average loss',
    description: 'Due to scope creep, payment delays, and project cancellations from poor client management',
  },
]

export default function Problem() {
  return (
    <section className="py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              The real problem isn't your English
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 mb-6 leading-relaxed"
            >
              It's that international clients make snap judgments based on communication patterns they don't even realize they're judging.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed"
            >
              Not because you're less skilled. But because unclear communication signals risk. And risk costs money.
            </motion.p>
          </div>

          <div className="grid gap-6">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{problem.stat}</div>
                <div className="text-lg font-semibold mb-1">{problem.label}</div>
                <div className="text-slate-400">{problem.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}