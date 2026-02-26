'use client'

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { mediaItems } from "@/lib/media-data"

export default function EquipeEPHJ2025Page() {
    const relatedArticles = mediaItems
        .filter(item => item.slug !== '/media/equipe-ephj-2025')
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src="/ephj-stand-2025.jpg"
                        alt="Équipe ORMA à l'EPHJ 2025"
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
                            📸 Un moment d&apos;équipe capturé à l&apos;EPHJ 2025
                        </h1>
                        <div className="flex items-center gap-6 text-white/80 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>26 Février 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>1 min de lecture</span>
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
                                Notre équipe s&apos;est réunie pour immortaliser cette belle aventure au cœur du salon.
                            </p>

                            <div className="my-8 p-6 bg-[#F3F4F6] rounded-xl border-l-4 border-[#CC2A3F]">
                                <p className="text-lg font-semibold text-gray-800 italic">
                                    🔔 Dernier jour aujourd&apos;hui ! Venez nous retrouver au stand S36 pour découvrir nos nouveautés,
                                    échanger avec nous et clôturer cette édition sur une note inspirante.
                                </p>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                🙏 Merci à toutes celles et ceux qui sont déjà passés, vos échanges ont rendu cette édition encore plus enrichissante.
                            </p>
                        </div>

                        {/* Video Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-6">La vidéo souvenir</h2>
                            <div className="flex justify-center">
                                <div className="rounded-2xl overflow-hidden shadow-lg bg-black w-full max-w-[400px]">
                                    <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                                        <iframe
                                            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1227239122238559&show_text=false"
                                            className="absolute top-0 left-0 w-full h-full border-0"
                                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-3 italic text-center">
                                Vidéo originale publiée sur <a href="https://www.facebook.com/reel/1227239122238559" target="_blank" rel="noopener noreferrer" className="text-[#CC2A3F] hover:underline">Facebook</a>
                            </p>
                        </div>

                        {/* Key Info */}
                        <div className="bg-[#F3F4F6] rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-foreground mb-6">EPHJ 2025 en bref</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-[#CC2A3F]/10 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <h3 className="font-bold mb-2">Stand S36</h3>
                                    <p className="text-sm text-muted-foreground">Palexpo, Genève</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-[#CC2A3F]/10 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">⌚</span>
                                    </div>
                                    <h3 className="font-bold mb-2">Horlogerie</h3>
                                    <p className="text-sm text-muted-foreground">Établis & innovation</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-[#CC2A3F]/10 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">🤝</span>
                                    </div>
                                    <h3 className="font-bold mb-2">Team ORMA</h3>
                                    <p className="text-sm text-muted-foreground">Unis et passionnés</p>
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-4">
                            {["ormaswiss", "ephj2025", "etabli", "horlogerie", "innovation", "palexpogeneva", "ergonomie", "watchmaking", "TeamOrmaswiss"].map(tag => (
                                <span key={tag} className="px-4 py-2 bg-[#F3F4F6] text-sm font-medium text-gray-600 rounded-full">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Contact */}
                        <div className="border-t pt-8 mt-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Intéressé par nos solutions pour l&apos;horlogerie et la joaillerie ? Contactez-nous.
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
