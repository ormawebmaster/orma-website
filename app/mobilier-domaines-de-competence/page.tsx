"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Factory, Building2, Home, Building, Volume2 } from "lucide-react"
import Link from "next/link"

const domaines = [
    {
        title: "Aménagement Industriel",
        description: "Solutions d'aménagement sur mesure pour vos espaces industriels. Optimisation des flux, ergonomie des postes de travail et espaces de production fonctionnels.",
        link: "/amenagement-industriel",
        image: "/a.webp",
        icon: Factory,
    },
    {
        title: "Espaces de Bureau",
        description: "Conception et aménagement d'espaces de travail modernes et productifs. Open spaces, bureaux individuels, salles de réunion et espaces collaboratifs.",
        link: "/espaces-de-bureau",
        image: "/b.webp",
        icon: Building2,
    },
    {
        title: "Aménagement Privé",
        description: "Mobilier et agencement personnalisé pour vos espaces privés. Design sur mesure alliant confort, esthétique et fonctionnalité.",
        link: "/amenagement-prive",
        image: "/cc.webp",
        icon: Home,
    },
    {
        title: "Aménagement Public & Collectivités",
        description: "Aménagement d'espaces publics, collectivités et institutions. Solutions durables et accessibles répondant aux normes et exigences spécifiques.",
        link: "/amenagement-public",
        image: "/architectural-blueprints-and-drawings.jpg",
        icon: Building,
    },
    {
        title: "Acoustique",
        description: "Solutions acoustiques pour améliorer le confort sonore de vos espaces. Panneaux absorbants, cloisons phoniques et traitement acoustique sur mesure.",
        link: "/acoustique",
        image: "/modern-office-interior-with-wooden-desk-and-archit.jpg",
        icon: Volume2,
    },
];

export default function MobilierDomainesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/a.jpg"
                        alt="Domaines de Compétence - Mobilier"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Domaines de Compétence
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                            Cinq pôles d'expertise pour aménager tous vos espaces
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        ORMA Swiss SA vous accompagne dans l'aménagement de tous types d'espaces.
                        De l'industriel au résidentiel, du public au privé, nous apportons notre expertise
                        pour créer des environnements fonctionnels, esthétiques et durables.
                    </p>
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Nos 5 Domaines d'Expertise
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Une expertise complète pour aménager chaque type d'espace selon vos besoins
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {domaines.map((domaine, index) => {
                            const IconComponent = domaine.icon;
                            return (
                                <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 p-0 gap-0 flex flex-col">
                                    <div className="aspect-[4/3] overflow-hidden relative">
                                        <img
                                            src={domaine.image}
                                            alt={domaine.title}
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
                                            {domaine.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1">
                                            {domaine.description}
                                        </p>
                                        <Link href={domaine.link}>
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
