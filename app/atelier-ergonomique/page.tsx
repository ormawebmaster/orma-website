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
    "Flux de travail et circulation interne",
    "Postures et gestes répétitifs",
    "Zones de tension ou de perte de productivité",
    "Sécurité & conformité réglementaire",
    "Contraintes matérielles et outils utilisés",
];

const solutionsPoints = [
    "Postes de travail réglables",
    "Plans de travail ergonomiques",
    "Rangements intégrés pour limiter les déplacements",
    "Adaptation aux gestes répétitifs",
    "Accessoires techniques (support outillage, éclairage)",
];

const optimisationsPoints = [
    "Organisation logique des zones de travail",
    "Réduction des déplacements inutiles",
    "Zones spécifiques : préparation, assemblage, stockage",
    "Mise en place d'un flux linéaire et intuitif",
    "Solutions de rangement adaptées à la méthode 5S",
];

const mobilierPoints = [
    "Établis et postes industriels",
    "Chariots techniques",
    "Armoires sécurisées",
    "Stations modulaires",
    "Supports d'outils personnalisés",
];

const validationPoints = [
    "Installation du mobilier et des équipements",
    "Ajustements personnalisés",
    "Adaptation aux utilisateurs finaux",
    "Conseils ergonomiques",
    "Tests sur poste et corrections",
];

const pointsFortsPoints = [
    "Expertise ergonomique complète",
    "Approche centrée utilisateur",
    "Fabrication sur mesure",
    "Solutions robustes et adaptées",
    "Optimisation technique et esthétique",
    "Accompagnement du concept à l'installation",
];

const faqItems = [
    {
        question: "Proposez-vous une analyse ergonomique complète ?",
        answer: "Oui, nous réalisons une étude détaillée avant toute conception.",
    },
    {
        question: "Pouvez-vous créer un atelier entièrement sur mesure ?",
        answer: "Oui, que ce soit un poste unique ou un atelier complet.",
    },
    {
        question: "Travaillez-vous pour des environnements industriels ?",
        answer: "Oui, nous intervenons dans les ateliers techniques, usines et laboratoires.",
    },
    {
        question: "Faites-vous l'installation et les réglages sur place ?",
        answer: "Oui, installation, réglages et validation ergonomique sont inclus.",
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
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Atelier Ergonomique (Innospace)</h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Productivité, confort et sécurité pour vos environnements de travail
                      </p>
                  </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">Les ateliers ergonomiques Innospace combinent <strong className="text-foreground">productivité, confort et sécurité</strong>.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Notre objectif : créer un espace où <strong className="text-foreground">chaque geste est optimisé</strong>.</p>
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
                            <p className="text-muted-foreground mb-6">Avant de concevoir l'espace, nous réalisons une étude approfondie.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous analysons</h3>
                            <ul className="space-y-3 mb-6">
                                {analysePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Une analyse détaillée pour une conception sur-mesure.</p>
                        </div>
                        <div><img src="/modern-laboratory-workspace.jpg" alt="Analyse" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-executive-office.jpg" alt="Postes ergonomiques" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Users className="w-5 h-5" /><span className="font-semibold">Postes ergonomiques</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Postes de Travail Ergonomiques</h2>
                            <p className="text-muted-foreground mb-6">Des postes adaptés aux besoins physiques et opérationnels.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Solutions proposées</h3>
                            <ul className="space-y-3 mb-6">
                                {solutionsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Réduction de la fatigue et augmentation de l'efficacité.</p>
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
                            <p className="text-muted-foreground mb-6">Un atelier performant repose sur une bonne organisation.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos optimisations</h3>
                            <ul className="space-y-3 mb-6">
                                {optimisationsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Des espaces qui fluidifient le travail.</p>
                        </div>
                        <div><img src="/traditional-workshop-renovation.jpg" alt="Flux" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-office-interior-with-wooden-desk-and-archit.jpg" alt="Mobilier" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Package className="w-5 h-5" /><span className="font-semibold">Mobilier technique</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Mobilier Technique Sur Mesure</h2>
                            <p className="text-muted-foreground mb-6">Nous fabriquons du mobilier adapté à l'usage intensif.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos équipements</h3>
                            <ul className="space-y-3 mb-6">
                                {mobilierPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Conçu pour durer et faciliter les opérations.</p>
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
                            <p className="text-muted-foreground mb-6">Nous validons l'ergonomie réelle sur le terrain.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre accompagnement</h3>
                            <ul className="space-y-3 mb-6">
                                {validationPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Atelier optimisé et prêt à l'emploi.</p>
                        </div>
                        <div><img src="/building-inspection-and-structural-analysis.jpg" alt="Validation" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-office-building.jpg" alt="Pourquoi ORMA" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Target className="w-5 h-5" /><span className="font-semibold">Nos atouts</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pourquoi Choisir ORMA ?</h2>
                            <p className="text-muted-foreground mb-6">Nos points forts pour votre atelier Innospace.</p>
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
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">FAQ – Atelier Ergonomique</h2>
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
