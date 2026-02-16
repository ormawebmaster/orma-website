import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const references = [
  {
    title: "Mobilier de Bureau",
    description: "Équipement en bureaux assis-debout, sièges ergonomiques, salle de conférence et espace lounge avec traitement décoratif mural graphique.",
    image: "/ref-mobilier-bureau-1.jpg",
    href: "/references/mobilier-de-bureau",
  },
  {
    title: "Notre Stand EPHJ",
    description: "Conception et réalisation de notre stand pour le salon EPHJ, vitrine de notre savoir-faire en aménagement et mobilier sur mesure.",
    image: "/ref-stand-ephj-4.jpg",
    href: "/references/stand-ephj",
  },
  {
    title: "Aménagement Hall & Bureaux",
    description: "Aménagement du hall d'entrée et des espaces bureaux avec table de conférence sur mesure, traitement acoustique et mobilier ergonomique.",
    image: "/ref-hall-bureaux-4.jpg",
    href: "/references/amenagement-hall-bureaux",
  },
]

export function References() {
  return (
    <section id="references" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-4">Nos Références</h2>
        <p className="text-left text-muted-foreground mb-16 max-w-3xl">
          Chaque projet est une démonstration concrète de notre savoir-faire.
          Bureaux, laboratoires, espaces commerciaux ou environnements collaboratifs : ORMA accompagne des clients exigeants dans la création d’espaces performants, durables et sur mesure.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {references.map((ref) => (
            <Card key={ref.title} className="overflow-hidden group hover:shadow-lg transition-shadow p-0 gap-0 flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src={ref.image || "/placeholder.svg"}
                  alt={ref.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">{ref.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{ref.description}</p>
                <Link href={ref.href}>
                  <Button size="sm" className="bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#333333] border border-[#E5E7EB] rounded-full px-6">
                    Découvrir le projet
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/references">
            <Button size="lg" className="bg-[#CC2A3F] hover:bg-[#b02536] text-white rounded-full px-8 py-6 text-base">
              Voir tous nos projets
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
