"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Monitor,
    Users,
    Layout,
    Settings,
    FileText,
    Cog,
    HardHat,
    Heart,
    TrendingUp,
    Eye,
    MessageSquare,
    ClipboardCheck,
    Presentation
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const postesErgonomiques = [
    "Bureaux individuels et partagés",
    "Postes réglables en hauteur",
    "Solutions assis-debout",
    "Mobiliers modulaires et évolutifs",
];

const openSpacesPoints = [
    "Open spaces optimisés",
    "Espaces collaboratifs",
    "Zones de brainstorming",
    "Mobilier mobile et flexible",
    "Solutions acoustiques intégrées",
];

const sallesReunion = [
    "Tables de réunion sur mesure",
    "Bureaux de direction",
    "Rangements et crédences",
    "Intégration de solutions multimédia",
];

const optimisationPoints = [
    "Aux besoins de vos équipes",
    "À vos processus de travail",
    "À l'évolution future de votre entreprise",
];

const mobilierSurMesure = [
    "Bureaux",
    "Rangements",
    "Cabines acoustiques",
    "Séparations d'espaces",
    "Solutions techniques",
];

const processusSteps = [
    "Analyse & Conseil – Évaluation de vos besoins, contraintes et méthodes de travail",
    "Conception & DAO – Modélisation 2D/3D, rendus visuels, choix des matériaux",
    "Fabrication & Finition – Mobiliers sur mesure et assemblages professionnels",
    "Installation & Mise en Service – Assemblage, réglages et mise en place complète",
];

const performancePoints = [
    "Le bien-être des collaborateurs",
    "La productivité",
    "La cohérence visuelle de vos bureaux",
    "La collaboration et la communication interne",
];

const faqItems = [
    {
        question: "Proposez-vous des solutions pour open spaces et zones collaboratives ?",
        answer: "Oui, nous concevons et installons des espaces collaboratifs, open spaces et bureaux flexibles.",
    },
    {
        question: "Est-il possible d'obtenir du mobilier sur mesure ?",
        answer: "Oui, nous fabriquons du mobilier sur mesure pour répondre précisément à vos besoins.",
    },
    {
        question: "Pouvez-vous intégrer des solutions acoustiques ?",
        answer: "Oui, nous intégrons cloisons, panneaux et mobiliers acoustiques dans nos projets.",
    },
    {
        question: "Proposez-vous des plans ou modélisations 3D ?",
        answer: "Oui, nos projets incluent DAO, modélisation 3D et rendus visuels.",
    },
    {
        question: "Intervenez-vous dans les grandes surfaces de bureaux ?",
        answer: "Oui, nous intervenons dans les petites et grandes entreprises, administrations et espaces corporate.",
    },
];

export default function EspacesDeBureauPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/modern-executive-office.jpg"
                        alt="Espaces de Bureau"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                          Espaces de Bureau
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Design, fonctionnalité et confort pour un environnement productif
                      </p>
                  </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Nous créons des espaces de bureau modernes, ergonomiques et parfaitement adaptés à votre organisation.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Nos solutions allient <strong className="text-foreground">design, fonctionnalité et confort</strong> pour
                        offrir un environnement de travail productif et agréable.
                    </p>
                </div>
            </section>

            {/* Postes de Travail Ergonomiques - Style alternating */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Monitor className="w-5 h-5" />
                                <span className="font-semibold">Aménagement professionnel</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Postes de Travail Ergonomiques
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Conception et installation de postes de travail pensés pour réduire la fatigue
                                et améliorer le confort au quotidien de vos collaborateurs.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous proposons</h3>
                            <ul className="space-y-3 mb-6">
                                {postesErgonomiques.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Chaque poste est pensé pour réduire la fatigue et améliorer le confort au quotidien.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-office-interior-with-wooden-desk-and-archit.jpg"
                                alt="Postes de Travail Ergonomiques"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Spaces & Collaboratifs - Style alternating (inversé) */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modern-tech-meeting-room.jpg"
                                alt="Open Spaces et Collaboratifs"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Users className="w-5 h-5" />
                                <span className="font-semibold">Espaces dynamiques</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Open Spaces & Collaboratifs
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous aménageons des zones de travail dynamiques et fonctionnelles qui favorisent
                                la collaboration et la créativité de vos équipes.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos aménagements</h3>
                            <ul className="space-y-3 mb-6">
                                {openSpacesPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Des espaces conçus pour stimuler l'innovation et le travail d'équipe.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Salles de Réunion & Direction - Style alternating */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Presentation className="w-5 h-5" />
                                <span className="font-semibold">Espaces de prestige</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Salles de Réunion & Direction
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Des espaces conçus pour la communication, la concentration et la prise de décision.
                                Un environnement professionnel qui reflète votre image de marque.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos réalisations</h3>
                            <ul className="space-y-3 mb-6">
                                {sallesReunion.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Des espaces professionnels qui impressionnent vos clients et partenaires.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-office-interior-with-wooden-desk-and-wall-m.jpg"
                                alt="Salles de Réunion et Direction"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Optimisation des Flux - Style alternating (inversé) */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modern-building-exterior-dusk-architecture.jpg"
                                alt="Optimisation des Flux"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Layout className="w-5 h-5" />
                                <span className="font-semibold">Design fonctionnel</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Optimisation des Flux & de l'Espace
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous travaillons votre identité visuelle et l'ergonomie pour créer des environnements
                                cohérents, humains et productifs adaptés à votre organisation.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Des bureaux adaptés</h3>
                            <ul className="space-y-3 mb-6">
                                {optimisationPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Des espaces évolutifs qui accompagnent la croissance de votre entreprise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobilier sur Mesure - Style alternating */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Settings className="w-5 h-5" />
                                <span className="font-semibold">Sur mesure</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Mobilier sur Mesure
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Lorsque les solutions standards ne suffisent pas, nous fabriquons votre mobilier sur mesure
                                pour répondre parfaitement à vos besoins spécifiques.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos fabrications</h3>
                            <ul className="space-y-3 mb-6">
                                {mobilierSurMesure.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Un mobilier unique qui reflète votre identité d'entreprise.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-minimalist-interior-architecture-with-natur.jpg"
                                alt="Mobilier sur Mesure"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Processus - Style alternating (inversé) */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/building-inspection-and-structural-analysis.jpg"
                                alt="Processus de réalisation"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <ClipboardCheck className="w-5 h-5" />
                                <span className="font-semibold">Méthodologie éprouvée</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Un Processus Clair & Maîtrisé
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Notre méthodologie garantit une exécution rigoureuse de chaque projet,
                                de l'analyse initiale jusqu'à la mise en service finale.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos étapes clés</h3>
                            <ul className="space-y-3 mb-6">
                                {processusSteps.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Chaque projet est mené avec rigueur et professionnalisme.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance - Style alternating */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <TrendingUp className="w-5 h-5" />
                                <span className="font-semibold">Amélioration continue</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Un Environnement Qui Améliore la Performance
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nos aménagements sont conçus pour favoriser le bien-être et la productivité
                                de vos équipes au quotidien.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos aménagements favorisent</h3>
                            <ul className="space-y-3 mb-6">
                                {performancePoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Des espaces de travail qui valorisent votre capital humain.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-office-building.jpg"
                                alt="Performance et productivité"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            FAQ – Espaces de Bureau
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-[#F3F4F6] border-0 rounded-lg shadow-md px-6 overflow-hidden"
                            >
                                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-5">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>



            <CTASection />
            <Footer />
        </main>
    );
}
