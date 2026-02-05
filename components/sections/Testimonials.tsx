'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "I stopped explaining my rates and started showing value. Closed a $4K project the same week.",
    name: "Rahul S.",
    role: "Full Stack Developer",
    location: "Bangalore",
    metric: "$4K project"
  },
  {
    quote: "My US client actually said 'you communicate better than most agencies we work with.' First time ever.",
    name: "Priya M.",
    role: "UX Designer",
    location: "Mumbai",
    metric: "Client compliment"
  },
  {
    quote: "The scope creep framework alone saved me 20+ hours of unpaid work in month one.",
    name: "Arjun K.",
    role: "Product Consultant",
    location: "Hyderabad",
    metric: "20+ hours saved"
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Real results from real professionals
          </h2>
          <p className="text-xl text-slate-600">
            No fake names. No inflated numbers. Just what actually happened.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="text-2xl font-bold text-blue-600 mb-4">{t.metric}</div>
              <p className="text-slate-700 mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}, {t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            These are early users from our beta. We're building the full case study library.
          </p>
        </div>
      </div>
    </section>
  )
}