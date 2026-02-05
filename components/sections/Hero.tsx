'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { ArrowRight, Play, Shield, Download, Users } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { stiffness: 100, damping: 30 }
  const backgroundX = useSpring(mouseX, springConfig)
  const backgroundY = useSpring(mouseY, springConfig)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set((clientX - innerWidth / 2) / 50)
      mouseY.set((clientY - innerHeight / 2) / 50)
    }
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"
        style={{ y, opacity }}
      />
      
      <motion.div 
        className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[100px]"
        style={{ x: backgroundX, y: backgroundY }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Trusted by 500+ Indian Professionals
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight"
        >
          Stop Losing Clients to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
            "Kindly Revert"
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-600 max-w-3xl mx-auto mb-10"
        >
          10 research-backed communication protocols preventing{' '}
          <span className="font-semibold">₹20,000-50,000</span> monthly losses.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="https://rzp.io/l/decoder  "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
          >
            Get The Decoder — ₹199
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          
          <a
            href="#protocols"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-full hover:border-slate-300 transition-colors"
          >
            <Play className="w-5 h-5 mr-2" />
            View Protocols
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 text-slate-600"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">Instant Download</span>
          </div>
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">PDF + Notion</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">500+ Users</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}