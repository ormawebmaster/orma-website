"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Home,
    Utensils,
    Shirt,
    Sofa,
    Monitor,
    Palette,
    Layers,
    FileText,
    Cog,
    HardHat,
    ClipboardCheck,
    Sparkles
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const cuisinePoints = [
    "Optimisation ergonomique",
    "Plans de travail techniques",
    "Rangements intégrés",
    "Intégration d'électroménagers",
    "Matériaux premium",
];

const dressingPoints = [
    "Dressings ouverts ou fermés",
    "Armoires sur mesure",
    "Rangements techniques et esthétiques",
    "Solutions pour petits espaces",
];

const espacesViePoints = [
    "Salons et séjours",
    "Bibliothèques et espaces TV",
    "Meubles techniques et fonctionnels",
    "Séparations d'espaces design",
];

const bureauDomicilePoints = [
    "Bureaux intégrés ou sur mesure",
    "Rangements fonctionnels",
    "Éclairage et optimisation acoustique",
    "Postes assis-debout",
];

const materiauxPoints = [
    "Bois massifs et placages",
    "Surfaces techniques (Fenix, solid surfaces…)",
    "Panneaux décoratifs",
    "Finitions haut de gamme",
];

const processusSteps = [
    "Analyse & Conseil – Étude de votre mode de vie, de vos besoins et de vos attentes",
    "Conception & DAO – Plans détaillés, modélisations 3D, rendus visuels et choix des matériaux",
    "Fabrication & Finitions – Fabrication sur mesure dans nos ateliers, finitions haute qualité",
    "Installation & Mise en Service – Montage professionnel, réglages et mise en place finale",
];

const faqItems = [
    {
        question: "Intervenez-vous pour tous types d'espaces privés ?",
        answer: "Oui, nous réalisons des aménagements pour appartements, maisons, lofts et résidences.",
    },
    {
        question: "Proposez-vous du mobilier entièrement sur mesure ?",
        answer: "Oui, chaque meuble peut être conçu et fabriqué selon vos dimensions, matériaux et besoins.",
    },
    {
        question: "Pouvez-vous travailler avec un architecte ?",
        answer: "Oui, nous collaborons régulièrement avec architectes et décorateurs d'intérieur.",
    },
    {
        question: "Offrez-vous des plans ou rendus 3D ?",
        answer: "Oui, chaque projet inclut DAO, plans détaillés et modélisations 3D.",
    },
    {
        question: "Gérez-vous aussi la livraison et l'installation ?",
        answer: "Oui, notre équipe assure la livraison (Suisse / International) et l'installation complète.",
    },
];

export default function AmenagementPrivePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/modern-residential-exterior.jpg"
                        alt="Aménagement Privé"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                          Aménagement Privé
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Élégance, confort et sur-mesure pour votre intérieur
                      </p>
                  </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Nous créons des espaces privés élégants, fonctionnels et entièrement adaptés à votre mode de vie.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Chaque projet est conçu sur mesure, avec une attention particulière au
                        <strong className="text-foreground"> confort, à l'esthétique et à la durabilité</strong>.
                    </p>
                </div>
            </section>

            {/* Cuisines Sur Mesure - Style alternating */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Utensils className="w-5 h-5" />
                                <span className="font-semibold">Sur mesure</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Cuisines Sur Mesure
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Création de cuisines fonctionnelles et design, adaptées à votre espace et à vos habitudes.
                                Nous optimisons chaque centimètre pour un résultat à la hauteur de vos attentes.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous proposons</h3>
                            <ul className="space-y-3 mb-6">
                                {cuisinePoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Des cuisines pensées pour le quotidien, alliant praticité et élégance.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-minimalist-interior-architecture-with-natur.jpg"
                                alt="Cuisines Sur Mesure"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Dressings & Rangements - Style alternating (inversé) */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modern-interior-architecture-wooden-stairs.jpg"
                                alt="Dressings et Rangements"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Shirt className="w-5 h-5" />
                                <span className="font-semibold">Organisation optimale</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Dressings & Rangements
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Solutions personnalisées pour une organisation optimale de vos espaces.
                                Chaque dressing est conçu pour maximiser l'espace disponible.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos solutions</h3>
                            <ul className="space-y-3 mb-6">
                                {dressingPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Des rangements qui simplifient votre quotidien.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Espaces de Vie & Mobilier - Style alternating */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Sofa className="w-5 h-5" />
                                <span className="font-semibold">Espaces de vie</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Espaces de Vie & Mobilier
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous créons des aménagements sur mesure pour sublimer vos espaces de vie
                                et répondre à vos besoins quotidiens.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos aménagements</h3>
                            <ul className="space-y-3 mb-6">
                                {espacesViePoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Des espaces qui vous ressemblent et qui s'adaptent à votre style de vie.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-office-interior-with-wooden-desk-and-wall-m.jpg"
                                alt="Espaces de Vie et Mobilier"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bureaux & Télétravail - Style alternating (inversé) */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modern-executive-office.jpg"
                                alt="Bureaux et Télétravail"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Monitor className="w-5 h-5" />
                                <span className="font-semibold">Home office</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Bureaux & Télétravail
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Des solutions ergonomiques et confortables pour travailler chez soi.
                                Créez un espace de travail professionnel à domicile.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos solutions</h3>
                            <ul className="space-y-3 mb-6">
                                {bureauDomicilePoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Un espace de travail qui favorise la concentration et la productivité.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Choix des Matériaux - Style alternating */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Layers className="w-5 h-5" />
                                <span className="font-semibold">Qualité premium</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Choix des Matériaux
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous sélectionnons pour vous les meilleurs matériaux, alliant esthétique,
                                durabilité et qualité de finition.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre sélection</h3>
                            <ul className="space-y-3 mb-6">
                                {materiauxPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Des matériaux nobles pour des réalisations durables.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/traditional-workshop-renovation.jpg"
                                alt="Choix des Matériaux"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Du Concept à la Réalisation - Style alternating (inversé) */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/architectural-blueprints-and-drawings.jpg"
                                alt="Du Concept à la Réalisation"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <ClipboardCheck className="w-5 h-5" />
                                <span className="font-semibold">Méthodologie éprouvée</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Du Concept à la Réalisation
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Notre processus est conçu pour vous offrir une expérience fluide et maîtrisée,
                                de l'analyse initiale jusqu'à l'installation finale.
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
                                Un accompagnement complet pour un résultat parfait.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Clé en Main - Style alternating */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Sparkles className="w-5 h-5" />
                                <span className="font-semibold">Service complet</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Une Solution Clé en Main
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous prenons en charge l'ensemble du projet pour vous garantir un résultat parfait.
                                Du design à l'installation, nous gérons tout pour vous.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre prise en charge</h3>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">Design et conception personnalisés</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">Fabrication sur mesure</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">Livraison sécurisée (Suisse / International)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">Installation professionnelle</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">Ajustements et finitions</span>
                                </li>
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Satisfaction client garantie à chaque étape du projet.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-residential-exterior.jpg"
                                alt="Solution Clé en Main"
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
                            FAQ – Aménagement Privé
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
