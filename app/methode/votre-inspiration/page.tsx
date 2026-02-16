import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Lightbulb, MessageSquare, Target, Users } from "lucide-react"

export default function VotreInspirationPage() {
    return (
        <main className="min-h-screen">
            <NavbarGreenTopBar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-red-600 to-red-800">
                <div className="max-w-4xl text-white">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                        <Lightbulb className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 italic">Votre Inspiration</h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                        Vous nous décrivez votre vision pour repousser les limites de l'espace.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">L'écoute au cœur de notre démarche</h2>
                            <p className="text-gray-600 mb-4">
                                Tout commence par une rencontre. Nous prenons le temps de vous écouter, de comprendre vos besoins,
                                vos contraintes et vos aspirations. Chaque projet est unique, et c'est en saisissant pleinement
                                votre vision que nous pouvons la transformer en réalité.
                            </p>
                            <p className="text-gray-600">
                                Notre équipe d'experts vous accompagne dès les premières réflexions pour définir ensemble
                                les contours de votre futur espace de travail idéal.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-8">
                            <img src="/a.jpg" alt="Inspiration" className="w-full h-64 object-cover rounded-xl" />
                        </div>
                    </div>

                    {/* Key Points */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <MessageSquare className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Échange personnalisé</h3>
                            <p className="text-gray-600 text-sm">
                                Une première rencontre pour comprendre vos attentes et vos objectifs.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Target className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Analyse des besoins</h3>
                            <p className="text-gray-600 text-sm">
                                Étude approfondie de vos contraintes techniques et fonctionnelles.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Vision partagée</h3>
                            <p className="text-gray-600 text-sm">
                                Définition collaborative des grandes lignes de votre projet.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    )
}
