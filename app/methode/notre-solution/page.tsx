import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, PenTool, Compass, Layers, Palette } from "lucide-react"

export default function NotreSolutionPage() {
    return (
        <main className="min-h-screen">
            <NavbarGreenTopBar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-red-600 to-red-800">
                <div className="max-w-4xl text-white">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                        <PenTool className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 italic">Notre Solution</h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                        Nous dessinons les premières esquisses de votre futur environnement.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="bg-gray-100 rounded-2xl p-8">
                            <img src="/b.jpg" alt="Solution" className="w-full h-64 object-cover rounded-xl" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">La créativité au service de vos projets</h2>
                            <p className="text-gray-600 mb-4">
                                Nos designers et architectes d'intérieur transforment vos idées en concepts visuels.
                                À travers des plans, des maquettes 3D et des rendus réalistes, nous donnons forme
                                à votre vision.
                            </p>
                            <p className="text-gray-600">
                                Chaque proposition est pensée pour optimiser l'espace, améliorer le bien-être
                                et refléter l'identité de votre entreprise.
                            </p>
                        </div>
                    </div>

                    {/* Key Points */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Compass className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Plans détaillés</h3>
                            <p className="text-gray-600 text-sm">
                                Création de plans d'aménagement précis et fonctionnels.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Layers className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Modélisation 3D</h3>
                            <p className="text-gray-600 text-sm">
                                Visualisation immersive de votre futur espace de travail.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Palette className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Choix des matériaux</h3>
                            <p className="text-gray-600 text-sm">
                                Sélection de finitions et coloris adaptés à votre identité.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="">
                        <Link href="/methode/votre-inspiration">
                            <Button variant="outline" className="mr-4">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Étape précédente
                            </Button>
                        </Link>
                        <Link href="/methode/notre-concretisation">
                            <Button className="bg-red-600 hover:bg-red-700 text-white">
                                Étape suivante : Notre Concrétisation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
