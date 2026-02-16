"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ClipboardList, Truck, PackageOpen, Warehouse, GraduationCap, Search, Home } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Architecture d'intérieur",
    description: "De la prise de mesures à la réalisation sur mesure. Nous transformons vos espaces en environnements fonctionnels, esthétiques et durables.",
    link: "/architecture-interieur",
    image: "/modern-office-interior-with-wooden-desk-and-archit.jpg",
    icon: Home,
  },
  {
    title: "Planification & DAO",
    description: "De l'idée à la conception, nous vous accompagnons avec des plans détaillés et une gestion de projet rigoureuse. Études techniques, cahiers des charges et suivi complet.",
    link: "/planification-dao",
    image: "/architectural-blueprints-and-drawings.jpg",
    icon: ClipboardList,
  },
  {
    title: "Livraison et Installation",
    description: "Une logistique sans faille, partout dans le monde. Installation professionnelle par nos équipes qualifiées. Service World Wide garanti.",
    link: "/livraison-installation",
    image: "/surveying-equipment-and-construction-site.jpg",
    icon: Truck,
  },
  {
    title: "Déménagement",
    description: "Un service clé en main pour vos déménagements d'entreprise, avec soin et efficacité. Planification, emballage, transport et réinstallation.",
    link: "/demenagement",
    image: "/modern-office-interior-with-wooden-desk-and-archit.jpg",
    icon: PackageOpen,
  },
  {
    title: "Solutions de stockage",
    description: "Des espaces de stockage adaptés à vos besoins, sécurisés et accessibles. Entreposage temporaire ou longue durée pour votre mobilier.",
    link: "/solutions-stockage",
    image: "/modern-minimalist-interior-architecture-with-natur.jpg",
    icon: Warehouse,
  },
  {
    title: "Coaching & Formations",
    description: "Développez vos compétences avec nos experts. Formations sur mesure pour vos équipes sur l'ergonomie, l'aménagement et l'utilisation optimale de vos espaces.",
    link: "/coaching-formations",
    image: "/modern-interior-architecture-wooden-stairs.jpg",
    icon: GraduationCap,
  },
  {
    title: "Sourcing",
    description: "Nous trouvons pour vous les meilleurs matériaux et fournisseurs au meilleur rapport qualité-prix. Expertise et réseau international à votre service.",
    link: "/sourcing",
    image: "/modern-residential-exterior.jpg",
    icon: Search,
  },
];

export default function PrestationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/a.jpg"
            alt="Prestation de Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        <NavbarGreenTopBar />
        <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Prestation de Service
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              Un accompagnement complet pour tous vos projets d'aménagement
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Au-delà de la conception et de la fabrication, ORMA Swiss SA vous accompagne
            à chaque étape de votre projet. De la planification à l'installation,
            en passant par la logistique et la formation, nous mettons notre expertise
            à votre service pour garantir une expérience fluide et sans souci.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nos 7 Services
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Une gamme complète de prestations pour accompagner votre projet de A à Z
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 p-0 gap-0 flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1">
                      {service.description}
                    </p>
                    <Link href={service.link}>
                      <Button className="bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#333333] border border-[#E5E7EB] rounded-full px-6">
                        En savoir plus
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>


      <CTASection />
      <Footer />
    </main>
  );
}
