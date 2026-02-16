"use client"

const partners = ["Haute horlogerie", "Médical", "Finance", "Dentaire", "Haute joaillerie", "Scolaire", "Industrie", "Administration"]

export function Partners() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#F3F4F6] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-left mb-12">
          Fiers de collaborer avec les meilleurs dans leur domaine
        </h3>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F3F4F6] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F3F4F6] to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {/* First set */}
            <div className="flex items-center gap-20 md:gap-28 lg:gap-36 shrink-0 pr-20 md:pr-28 lg:pr-36">
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="text-xl md:text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {partner}
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-20 md:gap-28 lg:gap-36 shrink-0 pr-20 md:pr-28 lg:pr-36">
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="text-xl md:text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
