"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Award, Clock, Users } from "lucide-react"
import Image from "next/image"

export default function AboutDetail() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const stats = [
    { icon: <Clock className="h-8 w-8" />, value: "25+", label: "Years of Experience" },
    { icon: <Users className="h-8 w-8" />, value: "500+", label: "Happy Clients" },
    { icon: <Award className="h-8 w-8" />, value: "50+", label: "Industry Awards" },
    { icon: <CheckCircle className="h-8 w-8" />, value: "1000+", label: "Projects Completed" },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              Founded in 1998, Pride Facility began as a small cleaning service in New York City. Over the years, we've
              grown into a comprehensive facility management company serving clients across the United States.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              Our journey has been marked by a commitment to excellence, innovation, and customer satisfaction. We've
              expanded our services to meet the evolving needs of our clients, always staying true to our core values of
              integrity, reliability, and professionalism.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Today, Pride Facility is recognized as a leader in the facility management industry, known for our
              tailored solutions and exceptional service quality. We continue to grow and evolve, but our mission
              remains the same: to help our clients maintain and enhance their facilities while reducing operational
              costs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                <Image src="/about-story.jpg" alt="Our Story" width={600} height={400} className="w-full h-auto" />
              </div>
              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{ x: 10, y: 10 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="absolute -bottom-4 -right-4 w-64 h-64 bg-blue-200 dark:bg-blue-800/30 rounded-lg"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center shadow-lg"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-blue-600 dark:text-blue-400 mx-auto mb-4"
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Mission & Values</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              Our mission is to provide exceptional facility management services that enhance the value, efficiency, and
              sustainability of our clients' properties while creating a safe and comfortable environment for their
              occupants.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Our Core Values:</h3>
            <ul className="space-y-4">
              {["Integrity", "Excellence", "Innovation", "Sustainability", "Customer Focus"].map((value, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 mr-3" />
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-white">{value}:</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore.
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                <Image src="/about-mission.jpg" alt="Our Mission" width={600} height={400} className="w-full h-auto" />
              </div>
              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{ x: 10, y: 10 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="absolute -bottom-4 -right-4 w-64 h-64 bg-blue-200 dark:bg-blue-800/30 rounded-lg"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
