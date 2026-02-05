'use client'

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import { useRef, useCallback } from 'react'
import { ArrowRight, Play, Globe, TrendingUp, Users } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (prefersReducedMotion) return
    const { clientX, clientY, innerWidth, innerHeight } = window
    mouseX.set((clientX - innerWidth / 2) / 50)
    mouseY.set((clientY - innerHeight / 2) / 50)
  }, [mouseX, mouseY, prefersReducedMotion])
  
  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      <motion.div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" style={{ y, opacity }} />
      
      <motion.div 
        className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px]"
        style={{ x: prefersReducedMotion ? 0 : mouseX, y: prefersReducedMotion ? 0 : mouseY }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            <Globe className="w-4 h-4" />
            For Indian professionals working with global clients
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]"
        >
          Your expertise deserves{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            better clients
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed"
        >
          The communication patterns that help Indian freelancers and agencies win premium international contracts—and charge what they're worth.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-lg text-slate-500 max-w-2xl mx-auto mb-10"
        >
          No grammar lessons. No shame. Just frameworks that close deals.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="https://rzp.io/l/decoder"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all hover:scale-105"
          >
            Get the frameworks — ₹199
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#what-you-get"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-full hover:border-slate-300 transition-all"
          >
            <Play className="w-5 h-5 mr-2" />
            See what's inside
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center"
        >
          {[
            { icon: TrendingUp, label: 'Higher conversion rates', value: '2-3x' },
            { icon: Users, label: 'Professional network', value: '500+' },
            { icon: Globe, label: 'Countries served', value: '12+' },
          ].map((stat, i) => (
            <div key={i} className="p-4">
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}