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
                Depuis 1948, <strong>ORMA</strong> accompagne entreprises et particuliers dans la conception et l’aménagement d’espaces durables, fonctionnels et inspirants.
                Grâce à une expertise reconnue en architecture d’intérieur, fabrication sur mesure et solutions ergonomiques, nous créons des environnements où design, usage et performance s’équilibrent naturellement.
              </p>
              <p>
                Forte de plus de <strong>75 ans d’expérience</strong>, ORMA s’appuie sur une approche fondée sur l’écoute, le conseil et l’innovation pour transformer chaque projet en un espace cohérent, esthétique et adapté aux besoins d’aujourd’hui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
