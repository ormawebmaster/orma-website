"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Zap,
    Award,
    Package,
    ClipboardCheck,
    Truck,
    Clock,
    Target,
    Globe
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const atoutsPoints = [
    "Adaptation rapide aux demandes spécifiques",
    "Réactivité sur les modifications et ajustements",
    "Possibilité de variantes ou options",
    "Disponibilité d'essais, prototypes ou validations préliminaires",
    "Suivi technique complet",
];

const qualitePoints = [
    "Finitions irréprochables",
    "Tolérances maîtrisées",
    "Assemblages solides et durables",
    "Sélection précise des matériaux",
    "Contrôles qualité à chaque étape",
];

const typesSeriesPoints = [
    "Mobilier technique ou professionnel",
    "Composants d'agencement",
    "Éléments de décoration et habillage",
    "Structures métalliques ou bois",
    "Pièces uniques répétées en faible volume",
];

const processusSteps = [
    "Analyse technique de votre demande",
    "Conception ou adaptation des plans",
    "Fabrication en atelier",
    "Assemblage, finitions & contrôle qualité",
    "Emballage et expédition (Suisse / Europe / International)",
];

const avantagesPoints = [
    "Production flexible",
    "Délais rapides",
    "Interlocuteur unique",
    "Fabrication locale & contrôlée",
    "Scaling vers des séries plus grandes",
    "Suivi qualité strict",
];

const faqItems = [
    {
        question: "Quel est le volume minimum d'une petite série ?",
        answer: "Nous pouvons produire à partir d'une seule pièce jusqu'à plusieurs dizaines selon le type de projet.",
    },
    {
        question: "Pouvez-vous gérer un projet sans plans fournis ?",
        answer: "Oui, nous pouvons créer les plans via notre bureau de conception avant fabrication.",
    },
    {
        question: "Réalisez-vous des prototypes avant la série ?",
        answer: "Oui, nous pouvons produire un prototype pour validation technique ou esthétique.",
    },
    {
        question: "Livrez-vous à l'international ?",
        answer: "Oui, nous livrons en Suisse, Europe et Worldwide selon les projets.",
    },
];

export default function FabricationPetiteSeriePage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/b.webp" alt="Fabrication de Petite Série" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Fabrication de Petite Série</h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Flexibilité, précision et qualité Swiss Made
                      </p>
                  </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">La fabrication de petite série est l'une des forces d'ORMA Swiss SA.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Nous produisons des séries limitées de haute qualité, avec une <strong className="text-foreground">précision irréprochable</strong> et un <strong className="text-foreground">suivi strict</strong>.</p>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Zap className="w-5 h-5" /><span className="font-semibold">Production flexible</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Une Production Flexible et Maîtrisée</h2>
                            <p className="text-muted-foreground mb-6">Nous adaptons notre capacité de production à vos besoins, même pour des volumes réduits.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos Atouts en Petite Série</h3>
                            <ul className="space-y-3 mb-6">
                                {atoutsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Une flexibilité qui fait la différence.</p>
                        </div>
                        <div><img src="/traditional-workshop-renovation.jpg" alt="Production flexible" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-laboratory-workspace.jpg" alt="Qualité Swiss Made" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Award className="w-5 h-5" /><span className="font-semibold">Swiss Made</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Qualité Swiss Made & Précision Technique</h2>
                            <p className="text-muted-foreground mb-6">Chaque pièce produite respecte un niveau d'exigence élevé, tant sur le plan esthétique que mécanique.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous garantissons</h3>
                            <ul className="space-y-3 mb-6">
                                {qualitePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Des pièces fiables, prêtes à être intégrées.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Package className="w-5 h-5" /><span className="font-semibold">Sur mesure</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Fabrication Sur Mesure</h2>
                            <p className="text-muted-foreground mb-6">Nous produisons selon votre cahier des charges ou selon nos propres plans issus de notre bureau technique.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Types de Petites Séries</h3>
                            <ul className="space-y-3 mb-6">
                                {typesSeriesPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Du prototype à la série, nous gérons tout.</p>
                        </div>
                        <div><img src="/modern-office-interior-with-wooden-desk-and-archit.jpg" alt="Fabrication sur mesure" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/building-inspection-and-structural-analysis.jpg" alt="Processus" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <ClipboardCheck className="w-5 h-5" /><span className="font-semibold">Méthodologie</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Processus de Fabrication</h2>
                            <p className="text-muted-foreground mb-6">Nous assurons une gestion complète du projet, du premier prototype à la série finale.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos étapes</h3>
                            <ul className="space-y-3 mb-6">
                                {processusSteps.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Un processus fluide et encadré.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Target className="w-5 h-5" /><span className="font-semibold">Avantages</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Avantages de la Petite Série</h2>
                            <p className="text-muted-foreground mb-6">Pourquoi choisir ORMA Swiss SA pour vos productions en petite série ?</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos points forts</h3>
                            <ul className="space-y-3 mb-6">
                                {avantagesPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Qualité, flexibilité et réactivité garanties.</p>
                        </div>
                        <div><img src="/modern-executive-office.jpg" alt="Avantages" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">FAQ – Fabrication de Petite Série</h2>
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
