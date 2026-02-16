import { AboutHero } from "@/components/about-hero"
import { AboutPresentation } from "@/components/about-presentation"
import { AboutHistory } from "@/components/about-history"
import { AboutTeam } from "@/components/about-team"
import { AboutValues } from "@/components/about-values"
import { ContactCta } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "À propos - ORMA",
  description: "Découvrez ORMA, expert en métrologie et services techniques en Suisse",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutPresentation />
      <AboutValues />
      <AboutTeam />
      <AboutHistory />
      <ContactCta />
      <Footer />
    </main>
  )
}
