import Image from "next/image"

export function AboutValues() {
  return (
    <section className="py-20 md:py-32 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Nos valeurs</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Exigence & qualité durable</strong><br />
                Depuis toujours, ORMA place la précision, la fiabilité et la qualité d'exécution au cœur de ses réalisations. Chaque projet est conçu pour durer, avec une attention particulière portée aux détails, aux matériaux et aux finitions.
              </p>
              <p>
                <strong>Innovation & savoir-faire</strong><br />
                Alliant tradition et technologies actuelles, nous développons des solutions sur mesure qui répondent aux nouvelles façons de travailler. Notre expertise en conception, fabrication et intégration nous permet d'apporter des réponses concrètes, efficaces et évolutives.
              </p>
              <p>
                <strong>Bien-être & ergonomie</strong><br />
                Nous croyons que la performance passe par le confort des utilisateurs. Nos aménagements visent à créer des environnements de travail équilibrés, favorisant le mouvement, la concentration et la collaboration.
              </p>
              <p>
                <strong>Proximité & esprit d'équipe</strong><br />
                Chaque projet est une collaboration. L'écoute, la transparence et la confiance guident nos relations avec nos clients, partenaires et collaborateurs afin de construire des solutions cohérentes et durables.
              </p>
              <p>
                <strong>Responsabilité & engagement</strong><br />
                ORMA s'engage à concevoir des espaces utiles, responsables et adaptés aux enjeux actuels, en valorisant les ressources, l'expertise locale et une approche réfléchie de l'aménagement professionnel.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/orma-warehouse.png" alt="ORMA Warehouse" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
