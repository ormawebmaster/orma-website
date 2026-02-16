import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"

export function MediaHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop"
          alt="Media Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Navigation */}
      <NavbarGreenTopBar />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Media</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Découvrez nos dernières actualités et réalisations.
          </p>
        </div>
      </div>
    </section>
  )
}
