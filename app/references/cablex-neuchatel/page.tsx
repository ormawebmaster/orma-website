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
    title: "Cablex SA, Neuchâtel",
    subtitle: "Leader dans le domaine de l’infrastructure et des services de réseaux.",
    location: "Neuchâtel, Suisse",
    date: "2021",
    duration: "2 mois", // Estimated based on description "temps maitrisé"
    surface: "180 m²", // 2 espaces de 90 m2
    client: "Cablex SA",
    category: "Agencement de Bureaux",
    mainImage: "/Cablex_pub_final.jpg",
    gallery: [
        "/1201757687488155.ZWZlGLd24U5JatK4ESur_height640.png",
        "/1201757687488157.fLHJi4Ts7K6Zl4utEzn8_height640.png",
        "/1201757687488159.s4NyGf93D3eFQKvGgQ8Y_height640.png",
        "/1201757687488161.EYd23kkohMPe6ZYumji9_height640.png",
        "/1201757687488163.7U5FIUhpwzMirzx9kn2r_height640.png",
        "/1201757687488165.rGBdjIataO9rpFx7lNNs_height640.png",
    ],
    description: `Valorisation et réorganisation des espaces de travail post covid.

Réhabilitation de 2 espaces de travail de 90 m2 chacun avec notamment solution technique pour l’acoustique. Intervention sur l’ergonomie du poste de travail ainsi que sur l’identité corporate de la société Cablex.

Un environnement de travail à revoir dans un contexte post covid : une 30aine de collaborateurs, de retour en présentiel, devaient pouvoir retrouver leur marque. Notre objectif : proposer un espace de travail valorisé permettant un travail collaboratif de manière adapté en répondant, notamment à des problématiques acoustiques.

Orma Swiss à réorganisé l’implantation complète des postes de travail favorisant les flux circulatoires en dynamisant l’image de marque de la société. Mise en place d’un tapis de sol avec intégration du logo Cablex. La thématique de l’acoustique était une priorité pour répondre à l’activité de collaborateurs de la société (nombreux échanges téléphonique) que nous avons su relever avec la mise en place de dalles phoniques. Nous avons su relever ce défis en un temps maitrisé avec le déménagement complet du mobilier existant.`,
    challenges: [
        "Réorganisation des espaces de travail post-covid",
        "Amélioration de l'acoustique pour les échanges téléphoniques",
        "Intégration de l'identité corporate (logo sur tapis)",
        "Déménagement complet du mobilier existant",
        "Respect d'un timing maîtrisé",
    ],
    solutions: [
        {
            title: "Réorganisation Spatiale",
            description: "Implantation complète des postes de travail favorisant les flux circulatoires et le travail collaboratif.",
        },
        {
            title: "Traitement Acoustique",
            description: "Mise en place de dalles phoniques pour répondre aux problématiques acoustiques liées aux nombreux échanges téléphoniques.",
        },
        {
            title: "Identité Visuelle",
            description: "Dynamisation de l'image de marque avec l'intégration du logo Cablex sur tapis de sol.",
        },
        {
            title: "Ergonomie",
            description: "Intervention sur l'ergonomie des postes de travail pour le confort des collaborateurs.",
        },
    ],
    results: [
        "Retour au bureau dans des conditions optimales",
        "Espace de travail valorisé et collaboratif",
        "Amélioration significative de l'acoustique",
        "Environnement ergonomique et visuellement plaisant",
    ],
    testimonial: {
        quote: "Nous avons confié à ORMA SWISS la réhabilitation de nos locaux de Neuchâtel. La société a su menée à bien sa mission originelle de moderniser nos espaces de travail. La société ORMA SWISS a su apportée toute son expertise pour nous accompagner pleinement sur des thématiques sensibles liées à l’acoustique, bien être et à l’organisation de nos espaces. Nous sommes pleinement satisfaits de cette collaboration et pour cet accompagnement global.",
        author: "M. André BACH",
        role: "Teamleader CBU/ Site manager",
        company: "Cablex SA",
    },
}

export default function CablexPage() {
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
