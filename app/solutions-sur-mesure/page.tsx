"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Wrench,
    Cog,
    Microscope,
    RefreshCw,
    Target,
    Brain,
    Leaf,
    Handshake,
    Factory,
    Users,
    Award
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const mobilierPoints = [
    "Établis techniques",
    "Mobilier de laboratoire",
    "Postes de travail spécialisés",
    "Mobilier industriel sur mesure",
    "Intégration d'équipements techniques",
];

const equipementsPoints = [
    "Équipements industriels spécifiques",
    "Postes techniques spécialisés",
    "Mobilier pour environnements contrôlés",
    "Solutions pour laboratoires",
    "Intégration d'appareils et machines",
];

const prototypagePoints = [
    "Étude technique et validation",
    "Conception et modélisation",
    "Prototype fonctionnel",
    "Ajustements et optimisation",
    "Validation avant production",
];

const modificationsPoints = [
    "Modernisation d'équipements",
    "Adaptation de mobilier existant",
    "Optimisation ergonomique",
    "Intégration de nouvelles technologies",
    "Réorganisation d'espaces de travail",
];

const pourquoiOrma = [
    { text: "Fabrication 100 % suisse, alliant rigueur et excellence", icon: Factory },
    { text: "Équipe pluridisciplinaire : designers, techniciens, ingénieurs", icon: Brain },
    { text: "Maîtrise complète du processus : étude, fabrication et installation", icon: Cog },
    { text: "Matériaux durables et solutions éco-responsables", icon: Leaf },
    { text: "Accompagnement sur mesure à chaque étape du projet", icon: Handshake },
];

const faqItems = [
    {
        question: "Travaillez-vous uniquement pour les entreprises industrielles ?",
        answer: "Non. Nous accompagnons aussi bien les entreprises industrielles que les laboratoires, bureaux, commerces ou projets architecturaux.",
    },
    {
        question: "Peut-on personnaliser les matériaux et finitions ?",
        answer: "Oui. Chaque projet est entièrement personnalisable : matériaux, dimensions, finitions et intégration technique.",
    },
    {
        question: "Réalisez-vous des prototypes avant production ?",
        answer: "Oui. Le prototypage fait partie intégrante de notre processus afin de valider les solutions techniques avant fabrication.",
    },
    {
        question: "Quels sont les délais pour une solution sur mesure ?",
        answer: "Les délais varient selon la complexité du projet. Après étude, nous établissons un planning précis.",
    },
    {
        question: "Proposez-vous l'installation sur site ?",
        answer: "Oui. Nos équipes assurent également la livraison et l'installation professionnelle des équipements.",
    },
];

export default function SolutionsSurMesurePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/solutions-sur-mesure-hero.jpg"
                        alt="Solutions Sur Mesure"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Solutions Sur Mesure
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                            Une approche personnalisée pour chaque projet.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Chaque projet est unique.
                        Nous concevons des solutions techniques et mobiliers sur mesure parfaitement adaptés à votre environnement professionnel.
                    </p>
                    <p className="text-lg font-semibold text-red-600">
                        🎯 Objectif : proposer des solutions précises, durables et parfaitement intégrées à vos besoins.
                    </p>
                </div>
            </section>

            {/* Mobilier Technique */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Wrench className="w-5 h-5" />
                                <span className="font-semibold">Sur Mesure</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Mobilier Technique Sur Mesure
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous concevons et fabriquons du mobilier technique sur mesure pour les environnements
                                industriels, laboratoires et espaces professionnels exigeants.
                                Chaque meuble est pensé pour optimiser les flux de travail, améliorer l'ergonomie et garantir une durabilité maximale.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos réalisations</h3>
                            <ul className="space-y-3 mb-6">
                                {mobilierPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Matériaux résistants, design fonctionnel et fabrication suisse de précision.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src="/mobilier-technique-sur-mesure.jpg"
                                alt="Mobilier Technique sur mesure"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Équipements Spécialisés */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/equipements-specialises.jpg"
                                alt="Équipements Spécialisés"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Cog className="w-5 h-5" />
                                <span className="font-semibold">Ingénierie de précision</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Équipements Spécialisés
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous développons des équipements professionnels sur mesure conçus pour répondre à des contraintes techniques spécifiques.
                                Qu'il s'agisse de l'industrie, du médical ou de la recherche, nos solutions s'adaptent aux exigences de chaque environnement.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Applications</h3>
                            <ul className="space-y-3 mb-6">
                                {equipementsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Une ingénierie de précision au service de la performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prototypage Rapide */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Microscope className="w-5 h-5" />
                                <span className="font-semibold">Innovation</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Prototypage Rapide
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous réalisons des prototypes fonctionnels afin de valider les concepts avant la mise en production.
                                Cette étape garantit la faisabilité technique et la conformité du projet avant fabrication finale.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Étapes</h3>
                            <ul className="space-y-3 mb-6">
                                {prototypagePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                De l'idée à la réalité, en toute maîtrise.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src="/prototypage-rapide.jpg"
                                alt="Prototypage rapide"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Modifications & Adaptations */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modifications-adaptations.jpg"
                                alt="Modifications et Adaptations"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <RefreshCw className="w-5 h-5" />
                                <span className="font-semibold">Revalorisation</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Modifications & Adaptations
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Vous disposez déjà d'une installation existante ?
                                Nous proposons des services de modification et d'adaptation pour améliorer ou transformer vos équipements selon vos nouveaux besoins.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Services proposés</h3>
                            <ul className="space-y-3 mb-6">
                                {modificationsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Une évolution durable pour prolonger la vie de vos équipements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pourquoi choisir ORMA */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Award className="w-5 h-5" />
                                <span className="font-semibold">Excellence Suisse</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Pourquoi choisir ORMA Swiss SA ?
                            </h2>
                            <ul className="space-y-3 mb-6">
                                {pourquoiOrma.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg font-semibold text-red-600">
                                🔴 Notre force : combiner la précision industrielle et la créativité du design suisse.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src="/modern-executive-office.jpg"
                                alt="Excellence ORMA Swiss SA"
                                className="w-full h-full object-cover"
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
                            FAQ – Solutions Sur Mesure
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
