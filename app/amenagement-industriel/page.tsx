"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Wrench,
    Settings,
    Shield,
    Users,
    ClipboardCheck,
    FileText,
    Move,
    TrendingUp,
    Cog,
    HardHat,
    Package,
    LayoutGrid,
    Target
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const mobilierIndustriel = [
    "Établis professionnels",
    "Plans de travail techniques",
    "Rangements renforcés",
    "Structures métalliques",
    "Postes de montage ou de contrôle",
];

const organisationPoints = [
    "Fluidifier les flux de travail",
    "Sécuriser les déplacements",
    "Améliorer la productivité",
    "Réduire la fatigue des opérateurs",
];

const ergonomiePoints = [
    "Postes réglables en hauteur",
    "Accessoires modulaires",
    "Ergonomie pour limiter les TMS",
    "Solutions sécurisées et conformes aux normes",
];

const processusSteps = [
    "Analyse & Étude Technique – Nous évaluons vos besoins, votre activité, vos contraintes et vos flux internes",
    "Conception & DAO – Plans détaillés, modélisations techniques, choix des matériaux et étude de faisabilité",
    "Fabrication Sur Mesure – Tout le mobilier est fabriqué selon vos dimensions et contraintes d'espace",
    "Installation Professionnelle – Montage complet, sécurisé, avec réglages et mise en service",
];

const performancePoints = [
    "Réduire les déplacements inutiles",
    "Augmenter la productivité",
    "Sécuriser le poste de travail",
    "Améliorer le confort des opérateurs",
    "Adapter l'espace à l'évolution de vos processus",
];

const faqItems = [
    {
        question: "Pouvez-vous intervenir dans des environnements très techniques ?",
        answer: "Oui, nous intervenons dans les ateliers, zones ESD, laboratoires, salles techniques ou environnements soumis à des normes.",
    },
    {
        question: "Le mobilier est-il disponible en fabrication sur mesure ?",
        answer: "Oui, tous nos mobiliers industriels peuvent être conçus sur mesure.",
    },
    {
        question: "Est-il possible d'obtenir des plans ou rendus avant la fabrication ?",
        answer: "Oui, chaque projet peut intégrer DAO, plans techniques et modélisations.",
    },
    {
        question: "Proposez-vous l'installation dans les ateliers ou zones de production ?",
        answer: "Oui, l'installation est réalisée par nos techniciens spécialisés.",
    },
    {
        question: "Travaillez-vous avec des architectes industriels ou des ingénieurs process ?",
        answer: "Oui, nous collaborons avec des bureaux d'études, architectes et responsables techniques.",
    },
];

export default function AmenagementIndustrielPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/traditional-workshop-renovation.jpg"
                        alt="Aménagement Industriel"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                          Aménagement Industriel
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Robustesse, ergonomie, sécurité et efficacité opérationnelle
                      </p>
                  </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Nous développons des solutions d'aménagement industriel conçues pour répondre aux exigences
                        des environnements techniques, logistiques et de production.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Nos installations garantissent <strong className="text-foreground">robustesse, ergonomie,
                            sécurité et efficacité opérationnelle</strong>.
                    </p>
                </div>
            </section>

            {/* Mobilier Industriel Robuste - Style alternating */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Package className="w-5 h-5" />
                                <span className="font-semibold">Environnements techniques</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Mobilier Industriel Robuste
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Conception de mobiliers capables de résister à une utilisation intensive, adaptés aux ateliers,
                                laboratoires, zones logistiques, espaces de production et environnements où les contraintes techniques sont élevées.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous fournissons</h3>
                            <ul className="space-y-3 mb-6">
                                {mobilierIndustriel.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Nous utilisons des matériaux certifiés et adaptés à l'usage industriel.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/traditional-workshop-renovation.jpg"
                                alt="Mobilier Industriel Robuste"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Organisation & Fonctionnalité - Style alternating (inversé) */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modern-laboratory-workspace.jpg"
                                alt="Organisation et Fonctionnalité"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <LayoutGrid className="w-5 h-5" />
                                <span className="font-semibold">Optimisation d'espace</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Organisation & Fonctionnalité
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Chaque espace est conçu et optimisé pour maximiser l'efficacité de vos opérations quotidiennes
                                tout en assurant la sécurité de vos équipes.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos optimisations</h3>
                            <ul className="space-y-3 mb-6">
                                {organisationPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Nos aménagements intègrent passage de câbles, postes ESD, fixations spécifiques et zones de stockage adaptées.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ergonomie & Sécurité - Style alternating */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Users className="w-5 h-5" />
                                <span className="font-semibold">Confort opérateurs</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Ergonomie & Sécurité
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                L'ergonomie est une priorité dans les postes industriels. Nous développons des solutions
                                qui protègent vos collaborateurs et améliorent leur confort de travail.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos solutions ergonomiques</h3>
                            <ul className="space-y-3 mb-6">
                                {ergonomiePoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Des postes de travail confortables et sécurisés pour une productivité maximale.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-executive-office.jpg"
                                alt="Ergonomie et Sécurité"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Processus de Réalisation - Style alternating (inversé) */}
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
                                Un Processus de Réalisation Maîtrisé
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Notre méthodologie garantit une exécution rigoureuse de chaque projet, de l'analyse initiale
                                jusqu'à l'installation finale.
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
                                Un Aménagement Qui Améliore la Performance
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nos solutions permettent d'optimiser vos opérations et de créer un environnement de travail
                                qui favorise la productivité et le bien-être.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos bénéfices</h3>
                            <ul className="space-y-3 mb-6">
                                {performancePoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Nous concevons des environnements durables qui accompagnent la croissance de votre activité.
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

            {/* FAQ Section - Style Création & Conception */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            FAQ – Aménagement Industriel
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
