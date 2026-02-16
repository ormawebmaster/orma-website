const methodologySteps = [
  {
    title: "Votre inspiration",
    description: "Vous nous décrivez votre rêve pour repousser les limites de l'espace.",
  },
  {
    title: "Notre solution",
    description: "Nous dessinons les premiers contours de votre nouvel environnement.",
  },
  {
    title: "Notre concrétisation",
    description: "Nous construisons, transformons, installons l'espace de vos rêves.",
  },
  {
    title: "Votre expérimentation",
    description:
      "Vous testez les éléments de votre projet et nous ajustons ensemble les détails qui créent une atmosphère à votre image.",
  },
  {
    title: "Votre satisfaction",
    description: "Votre satisfaction est notre récompense.",
  },
]

export function Methodology() {
  return (
    <section id="methode" className="py-20 px-6 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Notre Méthode de fonctionnement</h2>

            <div className="space-y-8">
              {methodologySteps.map((step) => (
                <div key={step.title}>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed pl-5">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div>
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/B-belux_oto_450_010-scaled.webp"
                alt="Modern Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
