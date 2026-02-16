"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { ManufactureHero } from "@/components/manufacture-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Méthode de Fonctionnement",
    description: "Une méthodologie maîtrisée, de l’analyse à la livraison, pour garantir qualité, précision et respect des délais. ",
    link: "/methode-de-fonctionnement",
    image: "/a.webp",
  },
  {
    title: "Domaines de compétence",
    description: "Un éventail complet de compétences allant de la conception à la fabrication, au service de solutions innovantes et sur mesure. ",
    link: "/domaines-de-competence",
    image: "/b.webp",
  },
  {
    title: "Solutions Sur Mesure",
    description: "Des solutions entièrement personnalisées, pensées pour répondre précisément à vos usages, contraintes et objectifs. ",
    link: "/solutions-sur-mesure",
    image: "/cc.webp",
  },
];

export default function ManufacturePage() {
  return (
    <main className="min-h-screen bg-white">
      <ManufactureHero />

      {/* Cards Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre expertise en fabrication
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Nous concevons et fabriquons du mobilier et des agencements sur mesure, alliant précision, qualité et durabilité.

              Chaque pièce est pensée pour répondre parfaitement à vos usages et contraintes.

            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow p-0 gap-0 flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <Link href={service.link}>
                    <Button className="bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#333333] border border-[#E5E7EB] rounded-full px-6">
                      En savoir plus
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
