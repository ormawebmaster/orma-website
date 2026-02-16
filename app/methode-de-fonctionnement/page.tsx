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
    "Écoute attentive de vos idées et envies",
    "Analyse de vos besoins fonctionnels",
    "Compréhension de votre vision globale",
    "Définition des grandes lignes du projet",
];

const solutionPoints = [
    "Proposition sur mesure par nos designers et ingénieurs",
    "Équilibre entre esthétique, fonctionnalité et faisabilité",
    "Premiers contours de votre futur espace ou produit",
    "Solutions innovantes et durables",
];

const concretisationPoints = [
    "Fabrication en manufacture avec précision",
    "Assemblage et contrôle qualité rigoureux",
    "Gestion de la logistique complète",
    "Installation professionnelle sur site",
];

const experimentationPoints = [
    "Tests et ajustements avant livraison finale",
    "Collaboration étroite pour affiner chaque détail",
    "Validation par le client à chaque étape",
    "Rendu final fidèle à vos attentes",
];

const satisfactionPoints = [
    "Suivi après installation",
    "Garantie de fonctionnement optimal",
    "Résultat dépassant vos attentes",
    "Relation durable basée sur la confiance",
];

const faqItems = [
    {
        question: "Combien de temps dure le processus complet ?",
        answer: "La durée varie selon la complexité du projet, mais notre approche structurée permet d'optimiser chaque étape sans compromis sur la qualité."
    },
    {
        question: "Peut-on intégrer des modifications en cours de projet ?",
        answer: "Oui, la phase d'expérimentation est justement prévue pour ajuster les détails avant la finalisation."
    },
    {
        question: "Travaillez-vous uniquement sur mesure ?",
        answer: "Oui, chaque projet ORMA est unique. Nous concevons, fabriquons et installons exclusivement des solutions personnalisées."
    },
    {
        question: "Quelle est la différence entre ORMA et un fabricant classique ?",
        answer: "Notre différence réside dans notre approche intégrée : nous maîtrisons à la fois la conception, la fabrication et la mise en œuvre, garantissant une cohérence totale."
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
                          Méthode de Fonctionnement
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Un processus rigoureux, structuré et éprouvé, garantissant la qualité, la précision et la durabilité de chaque projet.
                      </p>
                  </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Chez <strong className="text-foreground">ORMA Swiss SA</strong>, notre méthode de fonctionnement repose sur un processus rigoureux, structuré et éprouvé.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Chaque étape est pensée pour transformer une idée en une réalisation concrète, <strong className="text-foreground">sur mesure et fidèle à votre vision</strong>.
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
                                Tout commence par vous. Nous écoutons vos idées, vos envies, vos besoins. Cette phase d'échange et de réflexion est essentielle pour comprendre votre vision et définir les grandes lignes du projet.
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
                                🎯 Transformer vos aspirations en un concept clair et réalisable.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/a.webp"
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
                                À partir de votre inspiration, nos designers et ingénieurs élaborent une proposition sur mesure, alliant esthétique, fonctionnalité et faisabilité. Nous dessinons les premiers contours de votre futur espace ou produit.
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
                                🎯 Concevoir une solution équilibrée, innovante et durable.
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
                                Une fois la solution validée, nous passons à la phase de réalisation. Dans notre manufacture, chaque pièce est fabriquée, assemblée et contrôlée avec précision. Nos équipes assurent également la transformation, la logistique et l'installation sur site.
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
                                🎯 Donner vie à votre projet avec maîtrise et excellence.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/cc.webp"
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
                                src="/architectural-blueprints-and-drawings.jpg"
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
                                Avant la livraison finale, nous vous invitons à tester, ajuster et valider les éléments du projet. Cette étape collaborative nous permet d'affiner chaque détail et de garantir que le rendu final répond parfaitement à vos attentes.
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
                                🎯 Créer une expérience sur mesure, fidèle à votre identité.
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
                                Votre satisfaction est notre plus belle récompense. Nous assurons un suivi après installation pour nous assurer que tout fonctionne parfaitement et que le résultat final dépasse vos attentes.
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
                                🎯 Établir une relation durable, fondée sur la confiance et la qualité.
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
                            FAQ – Méthode de Fonctionnement
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
