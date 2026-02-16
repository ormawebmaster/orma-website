import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"

export function PrestationHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/b.jpg"
          alt="Prestation Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Navigation */}
      <NavbarGreenTopBar />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Prestation de service</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Un accompagnement complet pour la réussite de vos projets.
          </p>
        </div>
      </div>
    </section>
  )
}
