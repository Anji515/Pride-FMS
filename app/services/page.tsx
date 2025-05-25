import PageTransition from "@/components/page-transition"
import ServicesBanner from "@/components/services-banner"
import ServicesDetail from "@/components/services-detail"
import ServicesCTA from "@/components/services-cta"

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="overflow-hidden">
        <ServicesBanner />
        <ServicesDetail />
        <ServicesCTA />
      </main>
    </PageTransition>
  )
}
