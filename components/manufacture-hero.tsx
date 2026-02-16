import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"

export function ManufactureHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/a.jpg"
          alt="Manufacture Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent" />
      </div>

      {/* Navigation */}
      <NavbarGreenTopBar />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Manufacture et fabrication</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            L’excellence du sur-mesure, au cœur de notre savoir-faire.
          </p>
        </div>
      </div>
    </section>
  )
}
