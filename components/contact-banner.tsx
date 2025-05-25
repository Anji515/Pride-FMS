"use client"

import { motion } from "framer-motion"

export default function ContactBanner() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-950 dark:to-blue-800 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/contact-pattern.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="h-1 bg-white mx-auto mb-6"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
        >
          Get in touch with our team to discuss how we can help with your facility management needs
        </motion.p>
      </div>
    </section>
  )
}
