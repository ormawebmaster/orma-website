import Image from "next/image"

export function AboutPresentation() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/orma-building.jpg" alt="ORMA Building" fill className="object-cover" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Présentation</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Depuis 1948, <strong>ORMA</strong> accompagne les entreprises dans la conception et l'aménagement d'espaces de travail durables et performants. Grâce à son expertise en architecture d'intérieur, fabrication sur mesure et solutions ergonomiques, l'entreprise crée des environnements fonctionnels, esthétiques et adaptés aux besoins actuels.
              </p>
              <p>
                Forte de plus de <strong>75 ans d'expérience</strong>, ORMA s'appuie sur un savoir-faire reconnu et une approche basée sur l'écoute, le conseil et l'innovation, afin de transformer chaque projet en un espace professionnel cohérent, inspirant et en adéquation avec l'identité du client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
