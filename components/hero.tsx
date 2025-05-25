"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-950 dark:to-blue-800 text-white overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                y: [null, Math.random() * -500 - 100],
                x: [null, Math.random() * 200 - 100],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                width: Math.random() * 10 + 5 + "px",
                height: Math.random() * 10 + 5 + "px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 z-10 text-center md:text-left md:flex md:items-center md:justify-between pt-20"
      >
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Professional Facility Management Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 max-w-xl"
          >
            Comprehensive solutions for all your facility management needs. We ensure your property operates at peak
            efficiency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-4 flex flex-wrap gap-4"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="bg-white text-blue-800 hover:bg-blue-50 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600"
              >
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden md:block md:w-1/2"
        >
          <div className="relative h-[400px] w-[400px] mx-auto">
            <div className="absolute inset-0 bg-blue-400 dark:bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="relative z-10 h-full w-full flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="text-6xl font-bold">PF</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
