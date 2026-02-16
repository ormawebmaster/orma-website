"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, MapPin, Building2, Users, Clock, CheckCircle2 } from "lucide-react"

const projectData = {
    title: "Notre Stand EPHJ",
    subtitle: "Conception et réalisation de notre stand pour le salon EPHJ à Genève",
    location: "Genève, Suisse",
    date: "Juin 2024",
    duration: "2 semaines",
    surface: "50 m²",
    client: "ORMA",
    category: "Salon Professionnel",
    mainImage: "/ref-stand-ephj-4.jpg",
    gallery: [
        "/ref-stand-ephj-1.png",
        "/ref-stand-ephj-2.jpg",
        "/ref-stand-ephj-3.jpg",
        "/ref-stand-ephj-4.jpg",
        "/ref-stand-ephj-5.jpg",
    ],
    description: `Le salon EPHJ (Environnement Professionnel Horlogerie Joaillerie) est le rendez-vous incontournable de l'industrie horlogère et des microtechniques à Genève. Pour cette édition, ORMA a conçu et réalisé son propre stand afin de présenter son expertise en aménagement, mobilier sur mesure et solutions ergonomiques destinées aux ateliers horlogers et aux espaces professionnels.

Le stand a été pensé comme une véritable vitrine de notre savoir-faire : chaque élément, du mobilier aux finitions, reflète la qualité et la précision qui caractérisent nos réalisations. Les visiteurs ont pu découvrir nos établis horlogers, nos solutions d'agencement de bureaux et nos innovations en matière de confort et d'ergonomie au poste de travail.

L'espace a été conçu pour favoriser les échanges et permettre des démonstrations en conditions réelles, offrant ainsi une expérience immersive à nos clients et partenaires.`,
    challenges: [
        "Concevoir un stand reflétant l'identité et le savoir-faire d'ORMA",
        "Optimiser un espace de 50 m² pour présenter l'ensemble de nos gammes",
        "Créer une expérience immersive pour les visiteurs du salon",
        "Respecter les délais serrés de montage et démontage du salon",
        "Intégrer des démonstrations produits en conditions réelles",
    ],
    solutions: [
        {
            title: "Design & Identité Visuelle",
            description: "Conception d'un stand à l'image d'ORMA, alliant esthétique moderne et fonctionnalité, avec une identité visuelle forte et cohérente.",
        },
        {
            title: "Présentation Produits",
            description: "Mise en scène de nos établis horlogers, mobilier de bureau et solutions ergonomiques dans un espace soigneusement agencé pour une découverte intuitive.",
        },
        {
            title: "Espace d'Échange",
            description: "Aménagement de zones dédiées aux rencontres clients et partenaires, favorisant les discussions et le networking dans un cadre professionnel et accueillant.",
        },
        {
            title: "Démonstrations Live",
            description: "Intégration d'espaces de démonstration permettant aux visiteurs de tester et découvrir nos produits en conditions réelles d'utilisation.",
        },
    ],
    results: [
        "Forte affluence et visibilité accrue au salon EPHJ",
        "Nombreux contacts qualifiés et nouveaux partenariats",
        "Retours positifs sur la qualité du stand et des produits présentés",
        "Renforcement de l'image de marque ORMA dans le secteur horloger",
    ],
    testimonial: {
        quote: "Notre stand EPHJ a été une véritable réussite. Il nous a permis de démontrer concrètement notre expertise et de tisser des liens précieux avec les acteurs clés de l'industrie horlogère.",
        author: "Équipe ORMA",
        role: "Direction",
        company: "ORMA SA",
    },
}

export default function StandEPHJPage() {
    return (
        <main className="min-h-screen bg-[#F3F4F6]">
            <NavbarGreenTopBar />
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px]">
                <Image
                    src={projectData.mainImage}
                    alt={projectData.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="max-w-6xl mx-auto">
                        <span className="inline-block bg-red-600 text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
                            {projectData.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{projectData.title}</h1>
                        <p className="text-xl text-white/90 max-w-3xl">{projectData.subtitle}</p>
                    </div>
                </div>
            </section>

            {/* Project Info Cards */}
            <section className="py-12 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <Card className="border-none shadow-sm">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="bg-red-100 p-3 rounded-full">
                                    <MapPin className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Localisation</p>
                                    <p className="font-semibold">{projectData.location}</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-sm">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="bg-red-100 p-3 rounded-full">
                                    <Calendar className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Date</p>
                                    <p className="font-semibold">{projectData.date}</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-sm">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="bg-red-100 p-3 rounded-full">
                                    <Clock className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Durée</p>
                                    <p className="font-semibold">{projectData.duration}</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-sm">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="bg-red-100 p-3 rounded-full">
                                    <Building2 className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Surface</p>
                                    <p className="font-semibold">{projectData.surface}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">À propos du projet</h2>
                            <div className="prose prose-lg text-muted-foreground">
                                {projectData.description.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Les défis</h2>
                            <ul className="space-y-4">
                                {projectData.challenges.map((challenge, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10">Galerie du projet</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {projectData.gallery.map((image, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-lg ${index === 0 ? 'col-span-2 row-span-2 h-[400px] md:h-[500px]' : 'h-[200px] md:h-[245px]'
                                    }`}
                            >
                                <Image
                                    src={image}
                                    alt={`${projectData.title} - Image ${index + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10">Nos solutions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projectData.solutions.map((solution, index) => (
                            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-bold">{solution.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10">Résultats obtenus</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projectData.results.map((result, index) => (
                            <div key={index} className="">
                                <div className="bg-red-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <CheckCircle2 className="h-8 w-8 text-white" />
                                </div>
                                <p className="text-lg font-medium text-foreground">{result}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10">Témoignage</h2>
                    <blockquote className="text-2xl md:text-3xl font-light text-muted-foreground italic mb-8 leading-relaxed">
                        &ldquo;{projectData.testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center">
                            <Users className="h-8 w-8 text-red-600" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-lg">{projectData.testimonial.author}</p>
                            <p className="text-muted-foreground">{projectData.testimonial.role}</p>
                            <p className="text-sm text-muted-foreground">{projectData.testimonial.company}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />

            <Footer />
        </main>
    )
}
