import Image from "next/image"

const historyEvents = [
  {
    year: "1948",
    title: "Création d'ORMA",
    description:
      "Fondée par M. Édouard Feuz à Hauterive (NE), ORMA débute avec la vente et la maintenance de machines de bureau (Triumph, Hermès, Olivetti…).",
  },
  {
    year: "1979",
    title: "Transmission et développement",
    description:
      "Reprise par Jean-Bernard Leuenberger, ORMA devient représentant exclusif de Canon à Neuchâtel et se spécialise progressivement dans l'aménagement professionnel.",
  },
  {
    year: "1990",
    title: "Nouveaux locaux et repositionnement",
    description:
      "Installation à Neuchâtel, av. des Portes-Rouges 36, avec un positionnement sur l'aménagement global des bureaux.",
  },
  {
    year: "2000",
    title: "Reprise par Benjamin Leuenberger",
    description:
      "Partenariat avec le groupe Interoffice AG à Cham, renforçant la présence nationale.",
  },
  {
    year: "2008",
    title: "Expansion et collaborations européennes",
    description:
      "Nouveaux partenariats et représentation exclusive en Suisse romande ; extension vers Vaud et Genève.",
  },
  {
    year: "2020",
    title: "Création ORMA France",
    description:
      "Expansion internationale avec l'ouverture d'une filiale en France.",
  },
]

export function AboutHistory() {
  return (
    <section className="py-20 md:py-32 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Historique de l'entreprise</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* History Timeline */}
          <div className="max-w-xl mx-auto space-y-8">
            {historyEvents.map((event, index) => (
              <div key={index} className="flex gap-4 items-start group">
                {/* Icon - ORMA style oval image */}
                <div className="flex-shrink-0 w-8 transition-transform group-hover:scale-110 mt-1">
                  <img src="/timeline-icon.png" alt="" className="w-full h-auto" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-xl font-bold text-red-600">{event.year}</span>
                    <h3 className="text-lg font-semibold text-primary">{event.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Images historiques ORMA */}
          <div className="space-y-6">
            {/* Photo des fondateurs */}
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src="/orma-founders.png"
                alt="Fondateurs ORMA - Photo historique"
                className="w-full h-auto"
              />
            </div>

            {/* Image historique ORMA */}
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src="/orma journal.png"
                alt="Archive ORMA Journal"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
