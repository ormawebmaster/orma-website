"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Lightbulb,
    Search,
    Layers,
    Cog,
    Users
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const objectifsPoints = [
    "Donner vie à vos idées à travers des concepts clairs",
    "Garantir cohérence esthétique et faisabilité technique",
    "Anticiper les contraintes de fabrication",
    "Concevoir des solutions adaptées à vos usages",
];

const analysePoints = [
    "Vos besoins fonctionnels",
    "L'identité visuelle et l'ambiance recherchée",
    "Les contraintes d'espace et techniques",
    "Les objectifs budgétaires et calendaires",
];

const productionsPoints = [
    "Plans techniques détaillés",
    "Modélisations 3D et rendus réalistes",
    "Dessins d'assemblage",
    "Variantes et ajustements",
];

const conceptionPoints = [
    "Dimensionnement et ingénierie",
    "Sélection des matériaux adaptés",
    "Optimisation des procédés",
    "Plans de fabrication",
];

const accompagnementPoints = [
    "Communication transparente",
    "Réactivité et ajustements",
    "Validation formelle avant fabrication",
    "Respect du cahier des charges",
];

const faqItems = [
    {
        question: "Peut-on partir d'une simple idée ?",
        answer: "Oui. Nous accompagnons nos clients dès les premières réflexions afin de transformer une idée initiale en concept structuré et techniquement viable.",
    },
    {
        question: "Fournissez-vous des plans techniques détaillés ?",
        answer: "Oui. Chaque projet inclut des plans techniques précis, des modélisations 2D/3D et des documents nécessaires à la fabrication.",
    },
    {
        question: "Travaillez-vous avec des architectes ou bureaux externes ?",
        answer: "Nous collaborons régulièrement avec des architectes et bureaux d'ingénierie afin d'assurer cohérence et intégration technique optimale.",
    },
    {
        question: "Peut-on demander plusieurs variantes de design ?",
        answer: "Oui. Nous proposons différentes pistes conceptuelles lorsque cela est pertinent, afin d'aboutir à la solution la plus adaptée.",
    },
];

export default function CreationConceptionPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/cc.webp" alt="Création et Conception" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Conception & Création</h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl">De l'intuition initiale au concept maîtrisé.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">La conception est le fondement de chaque projet ORMA.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Nous traduisons vos besoins en solutions concrètes, <strong className="text-foreground">esthétiques et techniquement viables</strong>.</p>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Lightbulb className="w-5 h-5" /><span className="font-semibold">Approche créative</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Une Approche Créative & Structurée</h2>
                            <p className="text-muted-foreground mb-6">Notre démarche associe vision créative, maîtrise technique et compréhension fine des usages. Chaque concept est pensé pour être à la fois inspirant et réalisable.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos objectifs</h3>
                            <ul className="space-y-3 mb-6">
                                {objectifsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Chaque projet naît d'une vision structurée et maîtrisée.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/architectural-blueprints-and-drawings.jpg" alt="Approche créative" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/modern-office-interior-with-wooden-desk-and-wall-m.jpg" alt="Analyse" className="w-full h-full object-cover" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Search className="w-5 h-5" /><span className="font-semibold">Analyse complète</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Étude & Définition du Concept</h2>
                            <p className="text-muted-foreground mb-6">Nous réalisons une analyse complète afin de définir un cadre précis pour votre projet.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous analysons</h3>
                            <ul className="space-y-3 mb-6">
                                {analysePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Un concept clair avant toute mise en production.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Layers className="w-5 h-5" /><span className="font-semibold">Modélisation 2D/3D</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Design & Modélisation</h2>
                            <p className="text-muted-foreground mb-6">Nous produisons des plans et visualisations 2D/3D permettant d'anticiper chaque détail avant fabrication.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos livrables</h3>
                            <ul className="space-y-3 mb-6">
                                {productionsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Visualiser avant de fabriquer.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/accompagnement-validation.png" alt="Modélisation" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/design-modelisation.jpg" alt="Conception technique" className="w-full h-full object-cover" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Cog className="w-5 h-5" /><span className="font-semibold">Conception technique</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Conception Technique & Détails</h2>
                            <p className="text-muted-foreground mb-6">Nous traduisons le design en solutions techniques viables, optimisées pour la production et la durabilité.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nous prenons en charge</h3>
                            <ul className="space-y-3 mb-6">
                                {conceptionPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Précision technique au service du design.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Users className="w-5 h-5" /><span className="font-semibold">Accompagnement</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Accompagnement jusqu'à validation</h2>
                            <p className="text-muted-foreground mb-6">Vous êtes impliqué à chaque étape clé afin d'assurer cohérence et conformité avant lancement en production.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos engagements</h3>
                            <ul className="space-y-3 mb-6">
                                {accompagnementPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Une validation maîtrisée avant réalisation.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/conception-technique.jpg" alt="Accompagnement" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">FAQ – Conception & Création</h2>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqItems.map((item, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-[#F3F4F6] border-0 rounded-lg shadow-md px-6 overflow-hidden">
                                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-5">{item.answer}</AccordionContent>
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
