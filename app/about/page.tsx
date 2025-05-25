import PageTransition from "@/components/page-transition"
import AboutBanner from "@/components/about-banner"
import AboutDetail from "@/components/about-detail"
import Team from "@/components/team"

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="overflow-hidden">
        <AboutBanner />
        <AboutDetail />
        <Team />
      </main>
    </PageTransition>
  )
}
