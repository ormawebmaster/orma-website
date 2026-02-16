import { Hero4 } from "@/components/hero4"
import { Expertise } from "@/components/expertise"
import { SavoirFaire } from "@/components/savoir-faire"
import { MethodologyDiagram } from "@/components/methodology-diagram"
import { References } from "@/components/references"
import { Partners } from "@/components/partners"
import { News } from "@/components/news"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home4() {
    return (
        <main className="min-h-screen">
            <Hero4 />
            <Expertise />
            <SavoirFaire />
            <MethodologyDiagram />
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
