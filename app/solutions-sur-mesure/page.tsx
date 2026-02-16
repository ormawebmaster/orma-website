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

const pourquoiOrma = [
    { text: "Fabrication 100 % suisse, alliant rigueur et excellence", icon: Factory },
    { text: "Équipe pluridisciplinaire : designers, techniciens, ingénieurs", icon: Brain },
    { text: "Maîtrise complète du processus – de la conception au montage", icon: Cog },
    { text: "Matériaux durables et solutions éco-responsables", icon: Leaf },
    { text: "Accompagnement sur mesure à chaque étape du projet", icon: Handshake },
];

const faqItems = [
    {
        question: "Travaillez-vous uniquement pour les entreprises industrielles ?",
        answer: "Non, nos solutions sur mesure s'adressent aussi aux secteurs tertiaires, médicaux, hôteliers et publics.",
    },
    {
        question: "Peut-on personnaliser les matériaux et finitions ?",
        answer: "Oui, nous offrons un large choix de matériaux, couleurs et textures selon vos besoins techniques et esthétiques.",
    },
    {
        question: "Réalisez-vous des prototypes avant production ?",
        answer: "Oui, notre service de prototypage rapide vous permet de valider chaque détail avant la fabrication.",
    },
    {
        question: "Quels délais prévoir pour une solution sur mesure ?",
        answer: "En moyenne entre 6 et 10 semaines, selon la complexité du projet.",
    },
    {
        question: "Offrez-vous un service d'installation sur site ?",
        answer: "Oui, notre équipe assure la livraison, l'installation et le suivi complet en Suisse et en Europe.",
    },
];

export default function SolutionsSurMesurePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/a.jpg"
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
                          Une approche personnalisée pour chaque projet
                      </p>
                  </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Chaque projet est unique. Nos solutions sur mesure en manufacture s'adaptent parfaitement
                        à vos besoins spécifiques et contraintes techniques.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Grâce à notre <strong className="text-foreground">savoir-faire suisse</strong> et à notre maîtrise complète
                        du processus de fabrication, nous créons des espaces, équipements et mobiliers techniques
                        parfaitement intégrés à vos environnements professionnels.
                    </p>
                    <p className="text-lg font-semibold text-red-600">
                        🎯 Objectif : offrir des solutions précises, durables et adaptées à votre réalité de terrain.
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
                                Mobilier Technique
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Conception et fabrication de mobilier technique sur mesure pour les environnements
                                industriels, laboratoires ou espaces de production.
                            </p>
                            <p className="text-muted-foreground mb-6">
                                Chaque meuble est pensé pour faciliter vos processus et améliorer l'ergonomie
                                de vos postes de travail.
                            </p>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                🛠️ Matériaux résistants, design fonctionnel et fabrication suisse de précision.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/b.webp"
                                alt="Mobilier Technique sur mesure"
                                className="w-full h-auto rounded-2xl shadow-xl"
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
                                src="/cc.webp"
                                alt="Équipements Spécialisés"
                                className="w-full h-auto rounded-2xl shadow-xl"
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
                                Développement d'équipements professionnels sur mesure, conçus selon vos exigences
                                d'usage et vos contraintes techniques.
                            </p>
                            <p className="text-muted-foreground mb-6">
                                Que ce soit pour l'industrie, le médical ou la recherche, nous adaptons
                                nos solutions à vos process spécifiques.
                            </p>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                ⚙️ Une ingénierie de précision au service de vos performances.
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
                                Nous réalisons des prototypes fonctionnels pour valider vos concepts
                                avant la mise en production.
                            </p>
                            <p className="text-muted-foreground mb-6">
                                Cette étape garantit la fiabilité et la conformité de chaque projet
                                avant fabrication définitive.
                            </p>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                🔬 De l'idée à la réalité, en toute maîtrise.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/architectural-blueprints-and-drawings.jpg"
                                alt="Prototypage rapide"
                                className="w-full h-auto rounded-2xl shadow-xl"
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
                                src="/traditional-workshop-renovation.jpg"
                                alt="Modifications et Adaptations"
                                className="w-full h-auto rounded-2xl shadow-xl"
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
                                Besoin d'adapter ou de moderniser un mobilier existant ?
                            </p>
                            <p className="text-muted-foreground mb-6">
                                Nous proposons un service de revalorisation et d'adaptation sur mesure
                                de vos installations actuelles, selon vos nouvelles exigences ou contraintes d'espace.
                            </p>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                ♻️ Une démarche durable pour prolonger la vie de vos équipements.
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
                                Notre force : combiner la précision industrielle et la créativité du design suisse.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-executive-office.jpg"
                                alt="Excellence ORMA Swiss SA"
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
