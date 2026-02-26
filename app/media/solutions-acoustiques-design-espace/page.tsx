'use client'

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { mediaItems } from "@/lib/media-data"

export default function SolutionsAcoustiquesPage() {
    const relatedArticles = mediaItems
        .filter(item => item.slug !== '/media/solutions-acoustiques-design-espace')
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src="/acoustique-bureau-1.jpg"
                        alt="Solutions acoustiques et design d'espace"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full text-left">
                    <div className="max-w-7xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-[#CC2A3F] text-white px-4 py-2 rounded-full mb-6">
                            <span className="font-semibold">Facebook</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Solutions acoustiques & design d&apos;espace
                        </h1>
                        <div className="flex items-center gap-6 text-white/80 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>26 Février 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>2 min de lecture</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <article className="py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none space-y-12">
                        {/* Introduction */}
                        <div>
                            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                                Solutions acoustiques, moquette chaleureuse et postes ergonomiques s&apos;unissent pour créer un espace confortable, fonctionnel et inspirant ✨
                            </p>

                            <div className="my-8 p-6 bg-[#F3F4F6] rounded-xl border-l-4 border-[#CC2A3F]">
                                <p className="text-lg font-semibold text-gray-800 italic">
                                    &quot;Un espace où acoustique, confort et design se rencontrent pour inspirer au quotidien.&quot;
                                </p>
                            </div>
                        </div>

                        {/* Section 1: Vue d'ensemble */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">Un espace de travail repensé</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Cet aménagement combine panneaux acoustiques en bois, moquette en dalles aux tons gris chaleureux,
                                    et mobilier ergonomique pour offrir un environnement de travail à la fois fonctionnel et esthétique.
                                    L&apos;espace intègre harmonieusement zone de travail, coin détente et salle de réunion.
                                </p>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 relative">
                                <Image
                                    src="/acoustique-bureau-1.jpg"
                                    alt="Vue d'ensemble de l'espace aménagé"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Section 2: Espace détente */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 relative">
                                <Image
                                    src="/acoustique-bureau-2.jpg"
                                    alt="Espace détente avec canapé bleu"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-2xl font-bold text-foreground mb-4">Coin détente & accueil</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Un espace lounge confortable avec assises modulaires bleues et table d&apos;appoint,
                                    parfait pour les pauses ou l&apos;accueil des visiteurs. Les panneaux acoustiques en bois
                                    apportent une touche chaleureuse tout en régulant le son ambiant.
                                </p>
                            </div>
                        </div>

                        {/* Section 3: Salle de réunion */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">Salle de réunion équipée</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    La table de conférence, accompagnée de chaises ergonomiques et d&apos;un écran mural,
                                    offre un cadre professionnel idéal pour les réunions. Les panneaux acoustiques muraux
                                    en lattes de bois garantissent une excellente qualité sonore.
                                </p>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 relative">
                                <Image
                                    src="/acoustique-bureau-3.jpg"
                                    alt="Salle de réunion avec panneaux acoustiques"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Section 4: Full width - Panneaux acoustiques */}
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Séparation acoustique sur mesure</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Le meuble de rangement central, habillé de panneaux acoustiques en lattes de bois,
                                sert à la fois de séparation et de traitement sonore entre les zones de travail et la salle de réunion.
                                Des panneaux suspendus complètent le dispositif acoustique.
                            </p>
                            <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-[500px] relative">
                                <Image
                                    src="/acoustique-bureau-4.jpg"
                                    alt="Panneaux acoustiques sur mesure"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Section 5: Mur acoustique */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 relative">
                                <Image
                                    src="/acoustique-bureau-5.jpg"
                                    alt="Mur acoustique en lattes de bois"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-2xl font-bold text-foreground mb-4">Mur acoustique intégral</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Le mur complet en lattes de bois verticales offre une absorption acoustique optimale
                                    tout en créant une identité visuelle forte. Associé aux dalles de plafond acoustiques,
                                    il garantit un confort sonore maximal dans la salle de conférence.
                                </p>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-4">
                            {["interiordesign", "acoustics", "ergonomics", "moquette", "officedesign"].map(tag => (
                                <span key={tag} className="px-4 py-2 bg-[#F3F4F6] text-sm font-medium text-gray-600 rounded-full">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Facebook Link */}
                        <div className="my-8 p-8 bg-[#F3F4F6] rounded-xl text-center">
                            <p className="text-gray-700 mb-4 font-medium">Voir la publication originale sur Facebook</p>
                            <a href="https://www.facebook.com/share/p/1BUMjvfKbv/" target="_blank" rel="noopener noreferrer">
                                <Button className="bg-[#1877F2] hover:bg-[#166FE5] text-white text-base font-bold rounded-full px-10 py-3 shadow-md">
                                    Voir sur Facebook <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </a>
                        </div>

                        {/* Contact */}
                        <div className="border-t pt-8 mt-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Vous souhaitez un aménagement acoustique pour vos espaces de travail ? Contactez-nous pour une étude personnalisée.
                            </p>
                            <ul className="list-none space-y-3 mt-6 text-gray-700 font-medium">
                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-[#CC2A3F]">📧</span>
                                    <a href="mailto:info@orma.ch" className="hover:text-[#CC2A3F] transition-colors">info@orma.ch</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-[#CC2A3F]">📞</span>
                                    <a href="tel:+41848848849" className="hover:text-[#CC2A3F] transition-colors">+41 848 848 849</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Articles */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                        Articles Similaires
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedArticles.map((article, index) => (
                            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-0 group flex flex-col h-full">
                                <div className="relative h-48 overflow-hidden shrink-0">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <CardContent className="p-6 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">{article.description}</p>
                                    <Link href={article.slug || '#'}>
                                        <Button className="bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#333333] border border-[#E5E7EB] rounded-full px-6 w-fit mt-auto">
                                            Lire plus <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    )
}
