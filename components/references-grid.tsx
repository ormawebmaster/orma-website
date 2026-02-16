import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const referenceCategories = [
  {
    name: "Agencement de Bureaux",
    projects: [
      {
        image: "/ref-hall-bureaux-4.jpg",
        title: "Aménagement Hall & Bureaux",
        description: "Aménagement du hall d'entrée et des espaces bureaux avec table de conférence sur mesure, traitement acoustique et mobilier ergonomique.",
        slug: "amenagement-hall-bureaux"
      },
      {
        image: "/modern-open-office.png",
        title: "Open Space Collaboratif",
        description: "Conception d'un espace ouvert favorisant la collaboration et la créativité.",
        slug: "amenagement-bureau-corporate"
      },
      {
        image: "/modern-executive-office.jpg",
        title: "Salle de Conférence Premium",
        description: "Création d'un espace de réunion haut de gamme avec équipements intégrés.",
        slug: "mobilier-de-bureau"
      },
    ],
  },
  {
    name: "Industrie",
    projects: [
      {
        image: "/ref-stand-ephj-4.jpg",
        title: "Notre Stand EPHJ",
        description: "Conception et réalisation de notre stand pour le salon EPHJ, vitrine de notre savoir-faire en aménagement et mobilier sur mesure.",
        slug: "stand-ephj"
      },
      {
        image: "/specialized-research-laboratory.jpg",
        title: "Poste de Travail Ergonomique",
        description: "Installation de postes de travail adaptés aux exigences de l'industrie.",
      },
      {
        image: "/building-inspection-and-structural-analysis.jpg",
        title: "Zone de Production",
        description: "Optimisation de l'espace de production pour améliorer l'efficacité opérationnelle.",
      },
    ],
  },
  {
    name: "Établi horloger",
    projects: [
      {
        image: "/B-belux_oto_450_010-scaled.webp",
        title: "Établi Spécialiste",
        description: "Établi sur mesure pour horloger, alliant tradition et technologie.",
      },
      {
        image: "/traditional-workshop-renovation.jpg",
        title: "Laboratoire Horloger",
        description: "Conception et réalisation d'un laboratoire pour la recherche et le développement horloger.",
      },
      {
        image: "/modern-tech-meeting-room.jpg",
        title: "Atelier de Restauration",
        description: "Espace dédié à la restauration de montres anciennes avec éclairage optimisé.",
      },
    ],
  },
];

export function ReferencesGrid() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {referenceCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16 last:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{category.name}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {category.projects.map((project, projIndex) => (
                <Card key={projIndex} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col p-0 gap-0">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-3">{project.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-1">{project.description}</p>
                    {project.slug ? (
                      <Link href={`/references/${project.slug}`}>
                        <Button className="bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#333333] border border-[#E5E7EB] rounded-full px-6 w-fit">
                          Voir le projet <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Button className="bg-[#F3F4F6] text-[#999999] border border-[#E5E7EB] rounded-full px-6 w-fit cursor-not-allowed opacity-70">
                        Bientôt disponible <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
        <div className="text-center mt-16">
          <Link href="/references/all-references">
            <Button size="lg" className="bg-[#CC2A3F] hover:bg-[#b02536] text-white rounded-full px-8 py-6 text-base">
              Voir toutes nos références
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
