import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const expertiseAreas = [
  {
    title: "Manufacture & Fabrication",
    description: "Donner vie à vos idées grâce à une fabrication sur mesure, précise et maîtrisée. ",
    image: "/a.webp",
    href: "/manufacture-et-fabrication",
  },
  {
    title: "Mobilier & Agencement",
    description: "Transformer chaque espace en un lieu fonctionnel, esthétique et inspirant. ",
    image: "/b.webp",
    href: "/mobilier-d-agencement",
  },
  {
    title: "Prestation de Service",
    description: "Vous accompagner de l’idée initiale jusqu’à la réalisation finale, en toute sérénité.",
    image: "/cc.webp",
    href: "/prestation-de-service",
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-4">Nos domaines d'expertise</h2>
        <p className="text-left text-muted-foreground mb-16 max-w-3xl">
          Nous concevons et réalisons des espaces fonctionnels, esthétiques et durables, adaptés à chaque besoin.

          De la conception à la fabrication, nous maîtrisons chaque étape pour garantir des projets performants et sur mesure.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {expertiseAreas.map((area) => (
            <Card key={area.title} className="overflow-hidden group hover:shadow-lg transition-shadow p-0 gap-0 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={area.image || "/placeholder.svg"}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed flex-1">{area.description}</p>
                <Link href={area.href}>
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
  )
}
