'use client'

import { motion } from 'framer-motion'
import { RefreshCw, Shield, Clock, CheckCircle2, Globe, Award } from 'lucide-react'

const protocols = [
  { num: '01', title: 'The "Revert" Fix', bad: 'Kindly revert', good: 'Reply by Friday', icon: RefreshCw, color: 'from-red-500 to-orange-500' },
  { num: '02', title: 'The "Try" Eliminator', bad: 'I will try', good: 'Blocked by X, need Y', icon: Shield, color: 'from-blue-500 to-cyan-500' },
  { num: '03', title: 'The "Prepone" Swap', bad: 'Can we prepone?', good: 'Move to earlier date', icon: Clock, color: 'from-purple-500 to-pink-500' },
  { num: '04', title: 'The "Needful" Specifics', bad: 'Do the needful', good: 'Please approve by Friday', icon: CheckCircle2, color: 'from-green-500 to-emerald-500' },
  { num: '05', title: 'The "Out of Station" Fix', bad: 'Out of station', good: 'Traveling, back on [date]', icon: Globe, color: 'from-yellow-500 to-orange-500' },
  { num: '06', title: 'The "Same to Same" Fix', bad: 'Same to same', good: 'Exactly the same as', icon: Award, color: 'from-indigo-500 to-purple-500' },
]

export default function Features() {
  return (
    <section id="protocols" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            10 Protocols, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Zero Confusion</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Each protocol includes what to avoid, what to say instead, and why it works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {protocols.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-5xl font-bold text-slate-100">{p.num}</span>
                <div className={`p-2 rounded-xl bg-gradient-to-br ${p.color} text-white`}>
                  <p.icon className="w-5 h-5" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {p.title}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-red-500 font-medium line-through">{p.bad}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-600 font-medium">{p.good}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}