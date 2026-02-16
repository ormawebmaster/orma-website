import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"

export function AboutHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Navigation */}
      <NavbarGreenTopBar />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">À propos</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Découvrez l'expertise et l'histoire d'ORMA, votre partenaire de confiance pour tous vos besoins en
            métrologie et services techniques spécialisés en Suisse.
          </p>
        </div>
      </div>
    </section>
  )
}
