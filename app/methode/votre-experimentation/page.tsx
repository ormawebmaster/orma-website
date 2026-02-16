import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, FlaskConical, Settings, MessageCircle, RefreshCw } from "lucide-react"

export default function VotreExperimentationPage() {
    return (
        <main className="min-h-screen">
            <NavbarGreenTopBar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-red-600 to-red-800">
                <div className="max-w-4xl text-white">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                        <FlaskConical className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 italic">Votre Expérimentation</h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                        Vous testez les éléments et nous ajustons chaque détail ensemble.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="bg-gray-100 rounded-2xl p-8">
                            <img src="/a.jpg" alt="Expérimentation" className="w-full h-64 object-cover rounded-xl" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Votre retour, notre priorité</h2>
                            <p className="text-gray-600 mb-4">
                                Une fois l'installation réalisée, nous vous accompagnons dans la prise en main
                                de votre nouvel espace. Votre ressenti est essentiel : nous prenons en compte
                                chacune de vos remarques.
                            </p>
                            <p className="text-gray-600">
                                Cette phase d'expérimentation nous permet d'affiner les derniers détails
                                pour que votre environnement de travail soit parfaitement adapté à vos usages quotidiens.
                            </p>
                        </div>
                    </div>

                    {/* Key Points */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <FlaskConical className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Phase de test</h3>
                            <p className="text-gray-600 text-sm">
                                Période d'utilisation pour valider le confort et la fonctionnalité.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <MessageCircle className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Feedback continu</h3>
                            <p className="text-gray-600 text-sm">
                                Échange régulier pour recueillir vos impressions et besoins.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <RefreshCw className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Ajustements</h3>
                            <p className="text-gray-600 text-sm">
                                Modifications et optimisations selon vos retours.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="">
                        <Link href="/methode/notre-concretisation">
                            <Button variant="outline" className="mr-4">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Étape précédente
                            </Button>
                        </Link>
                        <Link href="/methode/votre-satisfaction">
                            <Button className="bg-red-600 hover:bg-red-700 text-white">
                                Étape suivante : Votre Satisfaction
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
