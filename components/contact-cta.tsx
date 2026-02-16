import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ContactCTA() {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/home_banner_4.jpg"
          alt="Modern Building at Dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-balance">
          Vous avez un projet ou une idée en tête?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour discuter de votre projet
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 text-lg px-10 py-6 rounded-full shadow-md font-medium">
            Prendre contact
          </Button>
        </Link>
      </div>
    </section>
  )
}

export { ContactCTA as ContactCta }
