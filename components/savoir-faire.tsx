import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const skills = [
  "Relevés architecturaux précis",
  "Plans d'exécution détaillés",
  "Modélisation 3D et BIM",
  "Conseil personnalisé",
]

export function SavoirFaire() {
  return (
    <section id="savoir-faire" className="py-20 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/Black-FrameCentenaireBlack-scaled.webp"
                alt="Interior Architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre savoir-faire</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Depuis plusieurs décennies, ORMA transforme les idées en réalisations concrètes.
              Nous réunissons design, ingénierie, ergonomie et fabrication au sein d’un même écosystème pour créer des solutions d’aménagement sur mesure, durables et performantes.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              De la conception à la fabrication, chaque projet bénéficie d’un pilotage rigoureux, d’un haut niveau d’exigence et d’une attention particulière portée aux détails, au confort d’usage, aux délais et à la qualité des finitions.


            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Points forts :
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">Plus de 75 ans d’expérience
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg"> Solutions 100 % sur mesure
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">Ergonomie pensée pour l’utilisateur
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">Accompagnement de A à Z
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">Équipe pluridisciplinaire intégrée
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">Qualité, fiabilité et durabilité
                </span>
              </li>
            </ul>

            <Link href="/a-propos">
              <Button size="lg" className="bg-[#CC2A3F] hover:bg-[#b02536] text-white rounded-full px-8 py-6 text-base">
                Découvrez notre atelier
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
