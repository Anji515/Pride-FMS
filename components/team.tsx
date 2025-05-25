"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "John Smith",
    position: "CEO & Founder",
    image: "/team-1.jpg",
    bio: "John founded Pride Facility in 1998 and has over 30 years of experience in the facility management industry.",
  },
  {
    name: "Sarah Johnson",
    position: "Operations Director",
    image: "/team-2.jpg",
    bio: "Sarah oversees all operational aspects of our services, ensuring consistent quality and client satisfaction.",
  },
  {
    name: "Michael Brown",
    position: "Technical Director",
    image: "/team-3.jpg",
    bio: "Michael leads our technical team, bringing innovative solutions to complex facility management challenges.",
  },
  {
    name: "Emily Davis",
    position: "Client Relations Manager",
    image: "/team-4.jpg",
    bio: "Emily ensures our clients receive personalized attention and that their needs are met promptly and effectively.",
  },
]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Leadership Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Meet the experienced professionals who lead our company and drive our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href="#"
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href="#"
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Twitter className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href="#"
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Mail className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
