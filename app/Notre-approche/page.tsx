"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Lightbulb, PenTool, Wrench, FlaskConical, Heart, Target, Award, Users } from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const inspirationPoints = [
    "Écoute attentive et cadrage initial",
    "Analyse des besoins fonctionnels",
    "Compréhension globale des usages",
    "Définition des orientations stratégiques",
];

const solutionPoints = [
    "Conception sur mesure",
    "Équilibre entre design et performance",
    "Études techniques et validation de faisabilité",
    "Intégration de solutions durables",
];

const concretisationPoints = [
    "Fabrication de précision en atelier",
    "Assemblage et contrôle qualité",
    "Coordination logistique complète",
    "Installation professionnelle sur site",
];

const experimentationPoints = [
    "Tests et ajustements avant livraison",
    "Validation à chaque étape clé",
    "Ajustement des finitions",
    "Conformité aux exigences définies",
];

const satisfactionPoints = [
    "Suivi post-installation",
    "Garantie de bon fonctionnement",
    "Accompagnement durable",
    "Relation fondée sur la confiance",
];

const faqItems = [
    {
        question: "Quelle est la durée moyenne d'un projet ?",
        answer: "La durée varie selon la complexité, la taille et le niveau de personnalisation du projet. Un planning précis est défini dès la validation du cahier des charges, avec des étapes claires et maîtrisées jusqu'à la livraison."
    },
    {
        question: "Des ajustements sont-ils possibles en cours de réalisation ?",
        answer: "Oui. Notre méthode intègre des points de validation à chaque étape clé. Lorsque cela est techniquement et organisationnellement possible, nous adaptons le projet afin de garantir un résultat parfaitement conforme à vos attentes."
    },
    {
        question: "Travaillez-vous exclusivement sur mesure ?",
        answer: "Nous concevons majoritairement des solutions sur mesure, adaptées aux besoins spécifiques de chaque client. Cependant, lorsque cela est pertinent, nous pouvons également intégrer des éléments standardisés pour optimiser budget, délais ou cohérence technique."
    },
    {
        question: "Quelle est la valeur ajoutée d'ORMA par rapport à un fabricant classique ?",
        answer: "ORMA ne se limite pas à la fabrication. Nous maîtrisons l'ensemble de la chaîne : analyse, conception, ingénierie, production, logistique et installation. Cette approche intégrée garantit cohérence, précision et qualité à chaque étape du projet."
    }
];

export default function MethodePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/a.jpg"
                        alt="Méthode de Fonctionnement"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Notre approche
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                            Un processus structuré et maîtrisé, garantissant précision, qualité et durabilité.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Chez <strong className="text-foreground">ORMA</strong>, notre méthode repose sur un processus clair, structuré et éprouvé.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Chaque étape est pensée pour transformer votre vision en une réalisation concrète, <strong className="text-foreground">fidèle et maîtrisée</strong>.
                    </p>
                </div>
            </section>

            {/* Étape 1: Votre Inspiration */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Lightbulb className="w-5 h-5" />
                                <span className="font-semibold">Étape 01</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Votre Inspiration
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Tout commence par l'écoute. Nous analysons vos idées, vos besoins et vos contraintes afin de définir une base solide pour le projet.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous faisons</h3>
                            <ul className="space-y-3 mb-6">
                                {inspirationPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                🎯 Transformer votre vision en un concept clair et réalisable.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/etape-01-inspiration.png"
                                alt="Votre Inspiration"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Étape 2: Notre Solution */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/b.webp"
                                alt="Notre Solution"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <PenTool className="w-5 h-5" />
                                <span className="font-semibold">Étape 02</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Notre Solution
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                À partir de votre vision, nos équipes conçoivent une proposition sur mesure alliant esthétique, fonctionnalité et faisabilité technique.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre approche</h3>
                            <ul className="space-y-3 mb-6">
                                {solutionPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                🎯 Concevoir une solution cohérente, innovante et durable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Étape 3: Notre Concrétisation */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Wrench className="w-5 h-5" />
                                <span className="font-semibold">Étape 03</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Notre Concrétisation
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Une fois la solution validée, nous entrons en phase de fabrication. Chaque pièce est produite, assemblée et contrôlée avec exigence dans notre manufacture.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre processus</h3>
                            <ul className="space-y-3 mb-6">
                                {concretisationPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                🎯 Donner vie à votre projet avec maîtrise et exigence.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/etape-03-concretisation.png"
                                alt="Notre Concrétisation"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Étape 4: Votre Expérimentation */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/etape-04-experimentation.png"
                                alt="Votre Expérimentation"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <FlaskConical className="w-5 h-5" />
                                <span className="font-semibold">Étape 04</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Votre Expérimentation
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Avant la livraison finale, nous procédons aux ajustements nécessaires avec vous afin de garantir une parfaite adéquation avec vos attentes.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous garantissons</h3>
                            <ul className="space-y-3 mb-6">
                                {experimentationPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                🎯 Garantir un résultat fidèle à votre vision.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Étape 5: Votre Satisfaction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Heart className="w-5 h-5" />
                                <span className="font-semibold">Étape 05</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Votre Satisfaction
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Votre satisfaction est au cœur de notre engagement. Nous assurons un suivi après installation afin de garantir performance et pérennité.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos engagements</h3>
                            <ul className="space-y-3 mb-6">
                                {satisfactionPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                🎯 Construire une relation durable, fondée sur la qualité.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-office-interior-with-wooden-desk-and-archit.jpg"
                                alt="Votre Satisfaction"
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
                            FAQ – Notre approche
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
