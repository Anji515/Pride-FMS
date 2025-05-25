import PageTransition from "@/components/page-transition"
import ContactBanner from "@/components/contact-banner"
import ContactForm from "@/components/contact-form"
import ContactMap from "@/components/contact-map"

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="overflow-hidden">
        <ContactBanner />
        <ContactForm />
        <ContactMap />
      </main>
    </PageTransition>
  )
}
