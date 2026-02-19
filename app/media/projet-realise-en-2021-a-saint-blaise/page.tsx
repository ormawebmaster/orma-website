'use client'

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Facebook, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { mediaItems } from "@/lib/media-data"

export default function ProjectSaintBlaisePage() {
    // Find related articles (excluding current one)
    const relatedArticles = mediaItems
        .filter(item => item.slug !== '/media/projet-realise-en-2021-a-saint-blaise')
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src="/632287536_18258210934288066_2230392133929048762_n.jpg"
                        alt="Projet Saint-Blaise"
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
                            <span className="font-semibold">Article</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Projet réalisé en 2021 à Saint-Blaise !
                        </h1>
                        <div className="flex items-center gap-6 text-white/80 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>1 Septembre 2021</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>3 min de lecture</span>
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
                                Retour sur une belle réalisation de 2021 : Livraison et installation complète de mobilier pour un collège à Saint-Blaise.
                                Un projet d'envergure qui démontre notre capacité à gérer des aménagements complexes, alliant besoins éducatifs et impératifs administratifs.
                            </p>

                            <div className="my-8 p-6 bg-[#F3F4F6] rounded-xl border-l-4 border-[#CC2A3F]">
                                <p className="text-lg font-semibold text-gray-800 italic">
                                    "Un projet réalisé avec précision et professionnalisme par notre équipe 👌"
                                </p>
                            </div>
                        </div>

                        {/* Section 1: Image + Text */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">Des espaces éducatifs optimisés</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    L'aménagement des salles de classe a été pensé pour favoriser l'apprentissage et la concentration.
                                    Nous avons sélectionné du mobilier ergonomique, robuste et modulable, permettant d'adapter la disposition
                                    des salles selon les besoins pédagogiques. Chaises confortables, tables spacieuses et rangements astucieux
                                    composent cet environnement d'étude idéal.
                                </p>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 relative">
                                <Image
                                    src="/630107217_18258210943288066_5469333369882651139_n.jpg"
                                    alt="Aménagement salle de classe"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Section 2: Text + Image (Reversed) */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 relative">
                                <Image
                                    src="/630152653_18258210961288066_375853990978628509_n.jpg"
                                    alt="Bureaux administratifs"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-2xl font-bold text-foreground mb-4">Bureaux administratifs et direction</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Pour le personnel encadrant et administratif, nous avons créé des espaces de travail alliant
                                    fonctionnalité et esthétique. Les bureaux de direction et les espaces de secrétariat ont été équipés
                                    de mobilier haut de gamme, offrant confort et solutions de rangement intégrées, tout en respectant
                                    la sobriété et l'élégance requises pour ces fonctions.
                                </p>
                            </div>
                        </div>

                        {/* Section 3: Full width image */}
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Une installation clé en main</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Notre équipe s'est chargée de l'intégralité du processus, de la livraison à l'installation finale.
                                Le montage a été réalisé avec soin, dans le respect des délais, pour permettre une rentrée dans
                                les meilleures conditions. Ce projet témoigne de notre expertise dans l'aménagement global d'établissements scolaires.
                            </p>
                            <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-[500px] relative">
                                <Image
                                    src="/632286822_18258210952288066_6865487626921893059_n.jpg"
                                    alt="Vue d'ensemble installation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 italic text-center">
                                Vue d'ensemble des nouveaux aménagements
                            </p>
                        </div>

                        {/* Additional Gallery Grid if applicable */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                            <div className="rounded-xl overflow-hidden h-40 relative">
                                <Image src="/630016751_18258210970288066_5175339030935308956_n.jpg" alt="Détail mobilier" fill className="object-cover hover:scale-105 transition-transform" />
                            </div>
                            <div className="rounded-xl overflow-hidden h-40 relative">
                                <Image src="/629256033_18258210841288066_2240468061419674141_n.jpg" alt="Détail installation" fill className="object-cover hover:scale-105 transition-transform" />
                            </div>
                            <div className="rounded-xl overflow-hidden h-40 relative">
                                <Image src="/630122723_18258210832288066_340415609741207334_n.jpg" alt="Espace détente" fill className="object-cover hover:scale-105 transition-transform" />
                            </div>
                            <div className="rounded-xl overflow-hidden h-40 relative">
                                <Image src="/628937826_18258210802288066_673866576719216016_n.jpg" alt="Aménagement scolaire" fill className="object-cover hover:scale-105 transition-transform" />
                            </div>
                            <div className="rounded-xl overflow-hidden h-40 relative">
                                <Image src="/629250138_18258210799288066_3861123749384691257_n.jpg" alt="Mobilier éducatif" fill className="object-cover hover:scale-105 transition-transform" />
                            </div>
                            <div className="rounded-xl overflow-hidden h-40 relative">
                                <Image src="/629252896_18258210823288066_1405963336085419579_n.jpg" alt="Espace de travail" fill className="object-cover hover:scale-105 transition-transform" />
                            </div>
                            <div className="rounded-xl overflow-hidden h-40 relative">
                                <Image src="/629519689_18258210820288066_3649928168486644695_n.jpg" alt="Bureau administratif" fill className="object-cover hover:scale-105 transition-transform" />
                            </div>
                            <div className="rounded-xl overflow-hidden h-40 relative">
                                <Image src="/629778633_18258210784288066_3214709361200783273_n.jpg" alt="Salle de classe" fill className="object-cover hover:scale-105 transition-transform" />
                            </div>
                            <div className="rounded-xl overflow-hidden h-40 relative">
                                <Image src="/632852136_18258210766288066_4744716317914337155_n.jpg" alt="Vue intérieure" fill className="object-cover hover:scale-105 transition-transform" />
                            </div>
                            <div className="rounded-xl overflow-hidden h-40 relative">
                                <Image src="/633918684_18258210805288066_7142434066850875877_n.jpg" alt="Finitions et détails" fill className="object-cover hover:scale-105 transition-transform" />
                            </div>
                        </div>


                        <div className="border-t pt-8 mt-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Un projet d'aménagement scolaire ou de bureaux ? Contactez-nous pour une étude personnalisée.
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
