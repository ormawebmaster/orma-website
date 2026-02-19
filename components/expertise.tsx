import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const expertiseAreas = [
  {
    title: "Manufacture & Fabrication",
    description: "Donner vie à vos projets grâce à une fabrication suisse précise et maîtrisée. Des solutions sur mesure, pensées pour la performance et la durabilité.",
    image: "/a1.jpg",
    href: "/manufacture-et-fabrication",
  },
  {
    title: "Mobilier & Agencement",
    description: "Créer des espaces fonctionnels où design et ergonomie se rencontrent. Chaque détail est conçu pour valoriser votre environnement de travail.",
    image: "/b1.jpeg",
    href: "/mobilier-d-agencement",
  },
  {
    title: "Prestation de Service",
    description: "Un accompagnement global, de la conception à la réalisation finale. Expertise, conseil et suivi pour des projets menés en toute sérénité.",
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
          Depuis plus de 75 ans, ORMA conçoit et réalise des environnements fonctionnels, esthétiques et durables, pensés pour répondre aux exigences des professionnels comme des particuliers.
          <br /><br />
          De l’étude initiale à la fabrication en atelier, nous maîtrisons chaque étape du projet afin de garantir des solutions sur mesure, performantes et parfaitement adaptées à leur usage.
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
