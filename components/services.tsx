"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Building2, Paintbrush, Wrench, ShieldCheck, Leaf, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Building2 className="h-10 w-10" />,
    title: "Property Management",
    description: "Comprehensive property management services to maintain and enhance your facility's value.",
  },
  {
    icon: <Paintbrush className="h-10 w-10" />,
    title: "Cleaning Services",
    description: "Professional cleaning solutions tailored to your facility's specific requirements.",
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: "Maintenance & Repairs",
    description: "Proactive maintenance and prompt repairs to keep your facility running smoothly.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Security Services",
    description: "Comprehensive security solutions to protect your property, assets, and people.",
  },
  {
    icon: <Leaf className="h-10 w-10" />,
    title: "Landscaping",
    description: "Professional landscaping services to enhance the exterior appearance of your facility.",
  },
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Energy Management",
    description: "Innovative solutions to optimize energy usage and reduce operational costs.",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" ref={containerRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <motion.div style={{ y }} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            We provide comprehensive facility management solutions tailored to meet your specific needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 group hover:shadow-lg dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-blue-600 dark:text-blue-400 mb-2"
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link href="/services">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
