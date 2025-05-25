import { Montserrat } from "next/font/google"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import PageTransition from "@/components/page-transition"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Home() {
  return (
    <PageTransition>
      <main className={`${montserrat.className} overflow-hidden`}>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
    </PageTransition>
  )
}
