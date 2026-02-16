"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, Share2, Facebook, Linkedin, Twitter, ArrowLeft, Sun, Umbrella, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const relatedArticles = [
    {
        title: "Nouveaux bureaux ORMA : Espace et Lumière",
        description: "Découvrez nos nouveaux aménagements conçus pour le bien-être.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
        slug: "#",
    },
    {
        title: "Un moment d'équipe capturé à l'EPHJ 2025",
        description: "Notre équipe s'est réunie pour immortaliser cette belle aventure.",
        image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=800&auto=format&fit=crop",
        slug: "#",
    },
    {
        title: "ORMA partenaire du Salon de l'Horlogerie",
        description: "Retour sur notre participation et les innovations présentées.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
        slug: "#",
    },
];

export default function ArticleBelEtePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
                        alt="Plage été"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full text-left">
                  <div className="max-w-7xl mx-auto">
                      <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-6">
                          <Sun className="w-5 h-5" />
                          <span className="font-semibold">News ORMA</span>
                      </div>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                          ORMA vous souhaite un très bel été !
                      </h1>
                      <div className="flex items-center gap-6 text-white/80 text-sm">
                          <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>20 Juillet 2025</span>
                          </div>
                          <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>2 min de lecture</span>
                          </div>
                      </div>
                  </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-3xl mx-auto">

                    {/* Introduction */}
                    <div className="prose prose-lg max-w-none mb-12">
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            L'équipe ORMA Swiss SA vous souhaite un <strong className="text-foreground">magnifique été</strong> !
                            Profitez de cette période pour vous ressourcer, passer du temps avec vos proches
                            et recharger vos batteries.
                        </p>
                    </div>

                    {/* Decorative Summer Card */}
                    <Card className="border-0 shadow-xl mb-12 overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50">
                        <CardContent className="p-8">
                            <div className="flex justify-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                    <Sun className="w-8 h-8 text-white" />
                                </div>
                                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                    <Umbrella className="w-8 h-8 text-white" />
                                </div>
                                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                Profitez du soleil, reposez-vous et savourez chaque bon moment !
                            </h2>
                            <p className="text-muted-foreground">
                                L'été est une période précieuse pour se détendre et créer des souvenirs inoubliables.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Content Sections */}
                    <div className="prose prose-lg max-w-none space-y-8">
                        <h2 className="text-2xl font-bold text-foreground">Une pause bien méritée</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Après des mois de travail intensif et de nombreux projets réalisés ensemble,
                            nous pensons qu'il est essentiel de prendre le temps de se reposer.
                            Que vous partiez en vacances ou que vous profitiez simplement de l'été chez vous,
                            nous vous souhaitons des moments de détente et de bonheur.
                        </p>

                        {/* Image 1 */}
                        <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1200&auto=format&fit=crop"
                                alt="Vacances d'été"
                                className="w-full h-64 md:h-80 object-cover"
                            />
                            <p className="text-sm text-muted-foreground py-3 bg-[#F3F4F6] italic">
                                Profitez de chaque instant de vos vacances
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-foreground">Nos équipes restent à votre disposition</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Même pendant la période estivale, nos équipes restent disponibles pour répondre
                            à vos questions et accompagner vos projets. N'hésitez pas à nous contacter
                            si vous avez besoin de nos services.
                        </p>

                        {/* Image 2 */}
                        <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                                alt="Équipe ORMA"
                                className="w-full h-64 md:h-80 object-cover"
                            />
                            <p className="text-sm text-muted-foreground py-3 bg-[#F3F4F6] italic">
                                L'équipe ORMA Swiss SA toujours à votre service
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-foreground">À très bientôt !</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Nous avons hâte de vous retrouver à la rentrée pour de nouveaux projets
                            passionnants. D'ici là, profitez pleinement de cette belle saison !
                        </p>

                        {/* Image 3 */}
                        <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop"
                                alt="Coucher de soleil été"
                                className="w-full h-64 md:h-80 object-cover"
                            />
                            <p className="text-sm text-muted-foreground py-3 bg-[#F3F4F6] italic">
                                À très bientôt pour de nouvelles aventures !
                            </p>
                        </div>
                    </div>

                    {/* Signature */}
                    <div className="mt-12 pt-8 border-t">
                        <p className="text-lg font-semibold text-foreground">
                            Chaleureusement,
                        </p>
                        <p className="text-primary font-bold text-xl mt-2">
                            L'équipe ORMA Swiss SA
                        </p>
                    </div>

                    {/* Share Section */}
                    <div className="mt-12 pt-8 border-t">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center gap-2">
                                <Share2 className="w-5 h-5 text-muted-foreground" />
                                <span className="text-muted-foreground font-medium">Partager cet article :</span>
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                >
                                    <Facebook className="w-5 h-5 text-white" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                                >
                                    <Linkedin className="w-5 h-5 text-white" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                                >
                                    <Twitter className="w-5 h-5 text-white" />
                                </a>
                            </div>
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
                            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-0 group">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4">{article.description}</p>
                                    <Link href={article.slug}>
                                        <Button className="bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#333333] border border-[#E5E7EB] rounded-full px-6 w-fit">
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
    );
}
