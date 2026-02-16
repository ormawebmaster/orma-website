import { Hero3 } from "@/components/hero3"
import { Expertise } from "@/components/expertise"
import { SavoirFaire } from "@/components/savoir-faire"
import { MethodologyDiagram } from "@/components/methodology-diagram"
// import { MethodologyDiagramV2 } from "@/components/methodology-diagram-v2"
import { References } from "@/components/references"
import { Partners } from "@/components/partners"
import { News } from "@/components/news"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero3 />
      <Expertise />
      <SavoirFaire />
      <MethodologyDiagram />
      {/* <MethodologyDiagramV2 /> */}
      <References />
      <Partners />
      <News />
      <Testimonials />
      <CTASection />
      <FAQ />
      <Footer />
    </main>
  )
}
