import { ReferencesHero } from "@/components/references-hero"
import { ReferencesGrid } from "@/components/references-grid"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function ReferencesPage() {
  return (
    <main>
      <ReferencesHero />
      <ReferencesGrid />
      <ContactCTA />
      <Footer />
    </main>
  )
}
