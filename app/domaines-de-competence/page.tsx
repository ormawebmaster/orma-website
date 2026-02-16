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
        title: "Création & Conception",
        description: "De l'idée au concept. Notre équipe de designers et d'ingénieurs transforme vos visions en projets concrets, alliant créativité et faisabilité technique.",
        link: "/creation-conception",
        image: "/a.webp",
        icon: Lightbulb,
    },
    {
        title: "Fabrication de Petite série",
        description: "Production en petite série avec la même exigence de qualité que pour les pièces uniques. Flexibilité et réactivité pour répondre à vos besoins spécifiques.",
        link: "/fabrication-petite-serie",
        image: "/b.webp",
        icon: Factory,
    },
    {
        title: "Développement de Projets",
        description: "Accompagnement complet de vos projets, de la phase de prototypage à la réalisation finale. Nous gérons chaque étape avec rigueur et expertise.",
        link: "/developpement-projets",
        image: "/cc.webp",
        icon: Rocket,
    },
    {
        title: "Atelier Ergonomique (Innospace)",
        description: "Conception d'espaces de travail ergonomiques favorisant le bien-être et la productivité. Solutions innovantes pour des environnements de travail optimisés.",
        link: "/atelier-ergonomique",
        image: "/architectural-blueprints-and-drawings.jpg",
        icon: Users,
    },
    {
        title: "Solides Surfaces",
        description: "Maîtrise des matériaux solid surface pour des réalisations durables et esthétiques. Surfaces sans joints, hygiéniques et personnalisables à l'infini.",
        link: "/solides-surfaces",
        image: "/modern-office-interior-with-wooden-desk-and-archit.jpg",
        icon: Layers,
    },
    {
        title: "Techniques de Sublimation",
        description: "Technologies de sublimation pour des finitions exceptionnelles. Personnalisation haute définition sur différents supports avec une durabilité remarquable.",
        link: "/techniques-sublimation",
        image: "/modern-minimalist-interior-architecture-with-natur.jpg",
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
                        src="/a.jpg"
                        alt="Domaines de Compétence"
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
                            Six pôles d'expertise au service de vos projets les plus ambitieux
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Chez ORMA, notre savoir-faire se déploie à travers six domaines de compétence complémentaires.
                        Chacun reflète notre engagement envers l'excellence, l'innovation et la qualité.
                        De la création à la fabrication, nous maîtrisons l'ensemble de la chaîne de valeur.
                    </p>
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Nos 6 Domaines d'Expertise
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Une expertise complète pour transformer vos idées en réalisations concrètes
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
                <div className="max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                        Une approche intégrée
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                        Ces six domaines de compétence fonctionnent en synergie pour vous offrir des solutions complètes et cohérentes.
                        De la conception à la réalisation, nous maîtrisons chaque étape de votre projet.
                    </p>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
