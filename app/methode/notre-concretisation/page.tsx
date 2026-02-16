import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Hammer, Truck, Shield, Clock } from "lucide-react"

export default function NotreConcretisationPage() {
    return (
        <main className="min-h-screen">
            <NavbarGreenTopBar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-red-600 to-red-800">
                <div className="max-w-4xl text-white">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                        <Hammer className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 italic">Notre Concrétisation</h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                        Nous construisons, transformons et donnons vie à votre projet.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">L'expertise artisanale au service de la qualité</h2>
                            <p className="text-gray-600 mb-4">
                                C'est ici que tout prend forme. Nos équipes de fabrication, fortes de décennies
                                d'expérience, mettent leur savoir-faire au service de votre projet. Chaque pièce
                                est fabriquée avec précision dans nos ateliers.
                            </p>
                            <p className="text-gray-600">
                                De la menuiserie à l'assemblage, nous maîtrisons l'ensemble de la chaîne de production
                                pour garantir une qualité irréprochable.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-8">
                            <img src="/orma-building.jpg" alt="Concrétisation" className="w-full h-64 object-cover rounded-xl" />
                        </div>
                    </div>

                    {/* Key Points */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Hammer className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Fabrication sur mesure</h3>
                            <p className="text-gray-600 text-sm">
                                Production artisanale dans nos ateliers en Alsace.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Contrôle qualité</h3>
                            <p className="text-gray-600 text-sm">
                                Vérification rigoureuse à chaque étape de la production.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Truck className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Livraison soignée</h3>
                            <p className="text-gray-600 text-sm">
                                Transport et installation par nos équipes spécialisées.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="">
                        <Link href="/methode/notre-solution">
                            <Button variant="outline" className="mr-4">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Étape précédente
                            </Button>
                        </Link>
                        <Link href="/methode/votre-experimentation">
                            <Button className="bg-red-600 hover:bg-red-700 text-white">
                                Étape suivante : Votre Expérimentation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
