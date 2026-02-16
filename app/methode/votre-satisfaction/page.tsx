import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Heart, Award, Handshake, Star } from "lucide-react"

export default function VotreSatisfactionPage() {
    return (
        <main className="min-h-screen">
            <NavbarGreenTopBar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-red-600 to-red-800">
                <div className="max-w-4xl text-white">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                        <Heart className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 italic">Votre Satisfaction</h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                        Votre satisfaction est notre plus belle récompense.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Un partenariat qui dure</h2>
                            <p className="text-gray-600 mb-4">
                                Notre mission ne s'arrête pas à la livraison. Nous restons à vos côtés pour
                                garantir votre entière satisfaction sur le long terme. Maintenance, évolution
                                de vos espaces, nouveaux projets : nous sommes là.
                            </p>
                            <p className="text-gray-600">
                                Depuis 1948, nous construisons des relations durables avec nos clients.
                                Votre satisfaction est la meilleure preuve de la qualité de notre travail
                                et notre plus belle source de motivation.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-8">
                            <img src="/b.jpg" alt="Satisfaction" className="w-full h-64 object-cover rounded-xl" />
                        </div>
                    </div>

                    {/* Key Points */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Award className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Garantie qualité</h3>
                            <p className="text-gray-600 text-sm">
                                Nos réalisations sont garanties pour vous assurer une tranquillité totale.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Handshake className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Service après-vente</h3>
                            <p className="text-gray-600 text-sm">
                                Une équipe dédiée pour répondre à toutes vos demandes.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Star className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Relation durable</h3>
                            <p className="text-gray-600 text-sm">
                                Un partenariat sur le long terme pour tous vos projets futurs.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="">
                        <Link href="/methode/votre-experimentation">
                            <Button variant="outline" className="mr-4">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Étape précédente
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button className="bg-red-600 hover:bg-red-700 text-white">
                                Démarrer votre projet
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
