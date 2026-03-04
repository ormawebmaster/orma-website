"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Factory, Rocket, Users, Layers, Sparkles } from "lucide-react"
import Link from "next/link"

const domaines = [
    {
        title: "Conception & Création",
        description: "De l'idée au concept abouti, nous donnons forme à des solutions cohérentes et réalisables.",
        link: "/creation-conception",
        image: "/cc.webp",
        icon: Lightbulb,
    },
    {
        title: "Fabrication en petite série",
        description: "Production maîtrisée et flexible, avec une exigence constante de qualité et de précision.",
        link: "/fabrication-petite-serie",
        image: "/a.webp",
        icon: Factory,
    },
    {
        title: "Développement de projets",
        description: "Un accompagnement structuré, du prototypage à la réalisation finale.",
        link: "/developpement-projets",
        image: "/modern-office-interior-with-wooden-desk-and-archit.jpg",
        icon: Rocket,
    },
    {
        title: "Ingénierie ergonomique",
        description: "Des espaces pensés pour la performance, alliant confort, usage et efficacité.",
        link: "/atelier-ergonomique",
        image: "/ephj-stand-2025.jpg",
        icon: Users,
    },
    {
        title: "Solid Surface & matériaux techniques",
        description: "Maîtrise des matériaux innovants, pour des réalisations durables et personnalisées.",
        link: "/solides-surfaces",
        image: "/solid-surface.png",
        icon: Layers,
    },
    {
        title: "Techniques de finition & sublimation",
        description: "Des finitions de haute précision, pour un rendu esthétique exigeant et durable.",
        link: "/techniques-sublimation",
        image: "/expertises-hero.jpg",
        icon: Sparkles,
    },
];

export default function DomainesDeCompetencePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/techniques-de-finition.jpg"
                        alt="Expertises"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Expertises
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                            Des expertises maîtrisées, au cœur de chaque réalisation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        Chez ORMA, notre savoir-faire s'exprime à travers six expertises complémentaires.
                        De la conception à la fabrication, nous maîtrisons l'ensemble de la chaîne de valeur afin de garantir cohérence, qualité et performance durable.
                    </p>
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Nos 6 Expertises
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Une maîtrise complète, de l'idée à la réalisation.
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

            {/* Back to Manufacture */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                        Une approche intégrée
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                        Ces expertises fonctionnent en synergie pour offrir des solutions cohérentes et parfaitement maîtrisées.
                        De la conception à l'installation, ORMA assure une continuité technique et qualitative à chaque étape.
                    </p>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
