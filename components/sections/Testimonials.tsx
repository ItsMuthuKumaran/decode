'use client'

import { motion } from 'framer-motion'
import { Quote, TrendingUp } from 'lucide-react'

const testimonials = [
  { quote: "Saved my $2K contract with a single email tweak.", author: "Rahul S.", role: "Backend Dev", location: "Bangalore", metric: "$2K saved" },
  { quote: "Response rate went from 20% to 80% in two weeks.", author: "Priya M.", role: "UX Designer", location: "Hyderabad", metric: "4x improvement" },
  { quote: "₹40K saved in the first month.", author: "Arjun K.", role: "Consultant", location: "Pune", metric: "₹40K saved" },
]

export default function Testimonials() {
  return (
    <section className="py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Trusted by 500+ <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Professionals</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-6"
            >
              <Quote className="w-10 h-10 text-orange-500/20 mb-4" />
              <p className="text-lg mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center font-bold">
                  {t.author[0]}
                </div>
                <div>
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-sm text-slate-400">{t.role}, {t.location}</div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-700 flex items-center gap-1 text-green-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                {t.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}