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
    title: "Aménagement Bureau Corporate",
    subtitle: "Réalisation complète des espaces de travail pour une entreprise internationale",
    location: "Genève, Suisse",
    date: "Juillet 2024",
    duration: "4 mois",
    surface: "2'500 m²",
    client: "Entreprise Internationale",
    category: "Agencement de Bureaux",
    mainImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800&auto=format&fit=crop",
    ],
    description: `Ce projet d'envergure consistait en l'aménagement complet des nouveaux bureaux d'une entreprise internationale située au cœur de Genève. Notre mission était de créer un environnement de travail moderne, fonctionnel et inspirant, répondant aux exigences d'une organisation internationale tout en reflétant son identité et ses valeurs.

L'espace de 2'500 m² a été entièrement repensé pour favoriser la collaboration, le bien-être des employés et l'efficacité opérationnelle. Nous avons intégré des zones de travail variées allant des open spaces aux bureaux individuels, en passant par des salles de réunion innovantes et des espaces de détente.`,
    challenges: [
        "Optimisation d'un espace de 2'500 m² sur plusieurs étages",
        "Intégration de postes de travail pour 150+ collaborateurs",
        "Création de 12 salles de réunion de différentes capacités",
        "Respect des normes acoustiques strictes",
        "Délai serré de 4 mois pour la livraison complète",
    ],
    solutions: [
        {
            title: "Open Space Modulable",
            description: "Conception d'espaces ouverts avec cloisons acoustiques mobiles permettant une flexibilité totale selon les besoins.",
        },
        {
            title: "Bureaux Direction Premium",
            description: "Aménagement de bureaux de direction haut de gamme avec mobilier sur mesure et finitions luxueuses.",
        },
        {
            title: "Zones de Collaboration",
            description: "Création d'espaces informels favorisant les échanges spontanés et le travail en équipe.",
        },
        {
            title: "Salle de Conférence Technologique",
            description: "Installation de salles équipées des dernières technologies de visioconférence et de présentation.",
        },
    ],
    results: [
        "Augmentation de 35% de la satisfaction des employés",
        "Réduction de 20% des coûts énergétiques grâce à l'éclairage optimisé",
        "Amélioration de 40% de la collaboration inter-équipes",
        "Livraison dans les délais et le budget impartis",
    ],
    testimonial: {
        quote: "ORMA a su comprendre nos besoins spécifiques et transformer nos espaces de travail en un véritable atout pour notre entreprise. La qualité de la réalisation et le professionnalisme de l'équipe ont dépassé nos attentes.",
        author: "Marc Dupont",
        role: "Directeur des Opérations",
        company: "Entreprise Internationale SA",
    },
}

export default function AmenagementBureauCorporatePage() {
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
                    <h2 className="text-3xl font-bold mb-10">Témoignage client</h2>
                    <blockquote className="text-2xl md:text-3xl font-light text-muted-foreground italic mb-8 leading-relaxed">
                        "{projectData.testimonial.quote}"
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
