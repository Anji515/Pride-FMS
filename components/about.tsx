"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const benefits = [
    "25+ years of industry experience",
    "Certified and professional team",
    "Customized solutions for every client",
    "24/7 emergency support",
    "Eco-friendly practices",
    "Competitive pricing",
  ]

  return (
    <section id="about" ref={containerRef} className="py-20 bg-white dark:bg-gray-950">
      <motion.div style={{ y }} className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{ x: -10, y: -10 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="absolute -top-4 -left-4 w-64 h-64 bg-blue-100 dark:bg-blue-900/30 rounded-lg"
              ></motion.div>
              <div className="relative z-10 rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/about-image.jpg"
                  alt="About Pride Facility"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{ x: 10, y: 10 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="absolute -bottom-4 -right-4 w-64 h-64 bg-blue-200 dark:bg-blue-800/30 rounded-lg"
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Pride Facility</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              Pride Facility has been providing exceptional facility management services for over 25 years. We take
              pride in delivering customized solutions that meet the unique needs of each client.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Our team of certified professionals is committed to maintaining the highest standards of quality and
              efficiency in every project we undertake. We believe in building long-term relationships with our clients
              based on trust, reliability, and outstanding service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
