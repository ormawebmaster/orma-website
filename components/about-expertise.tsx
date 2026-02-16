import Image from "next/image"

export function AboutExpertise() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Une expertise suisse reconnue</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Forte de plus de 40 ans d'expertise, <strong>ORMA Suisse SA</strong> s'est imposée comme référence
                incontournable dans les domaines de la métrologie technique, des expertises et de la gestion de projets
                de construction en Suisse romande.
              </p>
              <p>
                Notre succès repose sur une approche fondée sur la <strong>neutralité et l'indépendance</strong>,
                garantissant à nos clients des prestations objectives et fiables. Nos équipes de spécialistes qualifiés
                interviennent avec professionnalisme, rigueur et pragmatisme, adaptant leurs méthodes aux spécificités
                de chaque projet.
              </p>
              <p>
                <strong>Mandataire</strong>
              </p>
              <p>
                Nous disposons de tous les moyens humains et techniques nécessaires pour accompagner efficacement
                maîtres d'ouvrage, architectes, ingénieurs et entreprises générales dans la réussite de leurs projets
                immobiliers et d'infrastructures, du début à la fin.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl md:order-2">
            <Image
              src="/modern-interior-architecture-wooden-stairs.jpg"
              alt="Modern Interior Architecture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
