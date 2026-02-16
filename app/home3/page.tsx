import { Hero } from "@/components/hero"
import { Expertise } from "@/components/expertise"
import { SavoirFaire } from "@/components/savoir-faire"
import { Methodology } from "@/components/methodology"
import { MethodologyDiagram } from "@/components/methodology-diagram"
import { References } from "@/components/references"
import { Partners } from "@/components/partners"
import { News } from "@/components/news"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home3() {
    return (
        <main className="min-h-screen">
            <Hero />
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
