"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO, ABC Corporation",
    image: "/placeholder.svg?height=100&width=100",
    initials: "JS",
    quote:
      "Pride Facility has transformed how we manage our properties. Their attention to detail and proactive approach has saved us time and money. Highly recommended!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Operations Director, XYZ Industries",
    image: "/placeholder.svg?height=100&width=100",
    initials: "SJ",
    quote:
      "We've been working with Pride Facility for over 5 years now, and they consistently exceed our expectations. Their team is professional, responsive, and truly cares about our needs.",
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Property Manager, Horizon Properties",
    image: "/placeholder.svg?height=100&width=100",
    initials: "MB",
    quote:
      "The level of service provided by Pride Facility is unmatched. They've helped us streamline our operations and improve tenant satisfaction. A true partner in every sense.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        nextTestimonial()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, current])

  return (
    <section id="testimonials" ref={containerRef} className="py-20 bg-blue-50 dark:bg-blue-950/30">
      <motion.div style={{ y }} className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <Card className="bg-white dark:bg-gray-800 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <Avatar className="h-24 w-24 border-4 border-blue-100 dark:border-blue-700">
                          <AvatarImage
                            src={testimonials[current].image || "/placeholder.svg"}
                            alt={testimonials[current].name}
                          />
                          <AvatarFallback className="text-2xl bg-blue-600 text-white">
                            {testimonials[current].initials}
                          </AvatarFallback>
                        </Avatar>
                        <motion.div
                          initial={{ scale: 1 }}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                          className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2"
                        >
                          <Quote className="h-4 w-4 text-white" />
                        </motion.div>
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl italic mb-6">
                        "{testimonials[current].quote}"
                      </p>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">{testimonials[current].name}</h4>
                      <p className="text-blue-600 dark:text-blue-400">{testimonials[current].position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-blue-600 text-white hover:bg-blue-700 border-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 p-0 rounded-full ${
                  current === index ? "bg-blue-600 dark:bg-blue-400" : "bg-gray-300 dark:bg-gray-600 hover:bg-blue-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-blue-600 text-white hover:bg-blue-700 border-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
