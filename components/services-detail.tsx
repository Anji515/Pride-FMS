"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Paintbrush, Wrench, ShieldCheck, Leaf, Lightbulb, Truck, Users } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: "property",
    icon: <Building2 className="h-12 w-12" />,
    title: "Property Management",
    description:
      "Our property management services include tenant relations, lease administration, rent collection, and property inspections. We ensure your property is well-maintained and profitable.",
    image: "/service-property.jpg",
  },
  {
    id: "cleaning",
    icon: <Paintbrush className="h-12 w-12" />,
    title: "Cleaning Services",
    description:
      "We provide comprehensive cleaning solutions including daily janitorial services, deep cleaning, carpet cleaning, window washing, and specialized cleaning for different facility types.",
    image: "/service-cleaning.jpg",
  },
  {
    id: "maintenance",
    icon: <Wrench className="h-12 w-12" />,
    title: "Maintenance & Repairs",
    description:
      "Our maintenance team handles preventive maintenance, emergency repairs, HVAC servicing, plumbing, electrical work, and general facility upkeep to ensure everything runs smoothly.",
    image: "/service-maintenance.jpg",
  },
  {
    id: "security",
    icon: <ShieldCheck className="h-12 w-12" />,
    title: "Security Services",
    description:
      "We offer comprehensive security solutions including guard services, surveillance systems, access control, security audits, and emergency response planning.",
    image: "/service-security.jpg",
  },
  {
    id: "landscaping",
    icon: <Leaf className="h-12 w-12" />,
    title: "Landscaping",
    description:
      "Our landscaping services include lawn care, garden maintenance, tree trimming, seasonal planting, irrigation system management, and snow removal during winter months.",
    image: "/service-landscaping.jpg",
  },
  {
    id: "energy",
    icon: <Lightbulb className="h-12 w-12" />,
    title: "Energy Management",
    description:
      "We help optimize your facility's energy usage through energy audits, implementing energy-efficient systems, monitoring consumption, and recommending sustainable practices.",
    image: "/service-energy.jpg",
  },
  {
    id: "logistics",
    icon: <Truck className="h-12 w-12" />,
    title: "Logistics & Supply Chain",
    description:
      "Our logistics services include inventory management, supply chain optimization, vendor coordination, and procurement assistance to ensure efficient operations.",
    image: "/service-logistics.jpg",
  },
  {
    id: "staffing",
    icon: <Users className="h-12 w-12" />,
    title: "Staffing Solutions",
    description:
      "We provide temporary, permanent, and specialized staffing solutions for various facility roles, ensuring you have qualified personnel when and where you need them.",
    image: "/service-staffing.jpg",
  },
]

export default function ServicesDetail() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0

            return (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="lg:w-1/2"
                  >
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="lg:w-1/2"
                  >
                    <div className="flex items-center mb-4">
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-blue-600 dark:text-blue-400 mr-4"
                      >
                        {service.icon}
                      </motion.div>
                      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{service.title}</h2>
                    </div>
                    <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {[...Array(4)].map((_, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                          className="flex items-center text-gray-700 dark:text-gray-300"
                        >
                          <div className="h-2 w-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                          <span>Service feature {i + 1}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
