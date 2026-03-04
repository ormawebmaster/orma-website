"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Users,
    Search,
    Move,
    Package,
    ClipboardCheck,
    Target
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const analysePoints = [
    "Flux, zones et circulation",
    "Postures et gestes répétitifs",
    "Sécurité & conformité",
    "Contraintes techniques et opérationnelles",
];

const solutionsPoints = [
    "Réglages & modularité",
    "Plans de travail optimisés",
    "Rangements intégrés",
    "Accessoires et supports dédiés",
];

const optimisationsPoints = [
    "Zoning & organisation",
    "Réduction des trajets",
    "Solutions de rangement adaptées à la méthode 5S",
    "Amélioration continue",
];

const mobilierPoints = [
    "Établis & postes techniques",
    "Armoires & rangements sécurisés",
    "Chariots & accessoires",
    "Solutions modulaires",
];

const validationPoints = [
    "Installation sur site",
    "Ajustements finaux",
    "Tests et validation",
    "Suivi après mise en service",
];

const pointsFortsPoints = [
    "Expertise ergonomique + fabrication intégrée",
    "Solutions sur mesure et évolutives",
    "Qualité durable",
    "Accompagnement de bout en bout",
];

const faqItems = [
    {
        question: "Proposez-vous une analyse ergonomique complète ?",
        answer: "Oui. Nous analysons les flux, les gestes, les contraintes opérationnelles et la sécurité afin de concevoir un atelier réellement optimisé.",
    },
    {
        question: "Pouvez-vous améliorer un atelier déjà existant ?",
        answer: "Oui. Nous intervenons sur l'existant : réorganisation des flux, optimisation des postes, ajout de mobilier technique et amélioration progressive.",
    },
    {
        question: "Travaillez-vous uniquement pour l'industrie ?",
        answer: "Non. Nos solutions s'adaptent à tout environnement professionnel : ateliers, laboratoires, zones techniques, logistique, maintenance et espaces de production.",
    },
    {
        question: "Intégrez-vous les contraintes de sécurité et de conformité ?",
        answer: "Oui. Nos propositions tiennent compte des exigences réglementaires, des normes internes et des contraintes de terrain propres à chaque activité.",
    },
];

export default function AtelierErgonomiquePage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/architectural-blueprints-and-drawings.jpg" alt="Atelier Ergonomique" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Ingénierie Ergonomique (Innospace)</h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                            Performance, confort et sécurité pour vos environnements de travail.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">Nos ateliers Innospace optimisent les flux, les gestes et l'organisation des postes.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Objectif : un environnement <strong className="text-foreground">plus efficace, plus sûr, et plus durable</strong> au quotidien.</p>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Search className="w-5 h-5" /><span className="font-semibold">Analyse ergonomique</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Analyse Ergonomique</h2>
                            <p className="text-muted-foreground mb-6">Avant toute conception, nous réalisons une analyse précise de vos usages, de vos contraintes et de vos objectifs de performance.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous analysons</h3>
                            <ul className="space-y-3 mb-6">
                                {analysePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/analyse-ergonomique.jpg" alt="Analyse" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/modern-executive-office.jpg" alt="Postes ergonomiques" className="w-full h-full object-cover" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Users className="w-5 h-5" /><span className="font-semibold">Postes ergonomiques</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Postes de Travail Ergonomiques</h2>
                            <p className="text-muted-foreground mb-6">Des postes adaptés à vos équipes, à vos tâches et à vos cadences, pour réduire la fatigue et améliorer la productivité.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Solutions proposées</h3>
                            <ul className="space-y-3 mb-6">
                                {solutionsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Move className="w-5 h-5" /><span className="font-semibold">Flux optimisés</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Optimisation des Flux</h2>
                            <p className="text-muted-foreground mb-6">Une organisation claire pour réduire les déplacements inutiles et sécuriser les parcours de travail.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos optimisations</h3>
                            <ul className="space-y-3 mb-6">
                                {optimisationsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/flux-optimises.jpg" alt="Flux" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/modern-office-interior-with-wooden-desk-and-archit.jpg" alt="Mobilier" className="w-full h-full object-cover" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Package className="w-5 h-5" /><span className="font-semibold">Mobilier technique</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Mobilier Technique Sur Mesure</h2>
                            <p className="text-muted-foreground mb-6">Du mobilier robuste et intelligent, conçu pour durer et s'adapter aux contraintes métiers.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos équipements</h3>
                            <ul className="space-y-3 mb-6">
                                {mobilierPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <ClipboardCheck className="w-5 h-5" /><span className="font-semibold">Validation</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Mise en Place & Validation</h2>
                            <p className="text-muted-foreground mb-6">Installation, ajustements et validation terrain : nous sécurisons la prise en main et la performance réelle.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre accompagnement</h3>
                            <ul className="space-y-3 mb-6">
                                {validationPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/modern-executive-office.jpg" alt="Validation" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/modern-office-building.jpg" alt="Pourquoi ORMA" className="w-full h-full object-cover" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Target className="w-5 h-5" /><span className="font-semibold">Nos atouts</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pourquoi Choisir ORMA ?</h2>
                            <p className="text-muted-foreground mb-6">Une approche complète, de l'analyse ergonomique à la fabrication, avec un haut niveau d'exigence.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos avantages</h3>
                            <ul className="space-y-3 mb-6">
                                {pointsFortsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">FAQ – Ingénierie ergonomique (Innospace)</h2>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqItems.map((item, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white border-0 rounded-lg shadow-md px-6 overflow-hidden">
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
