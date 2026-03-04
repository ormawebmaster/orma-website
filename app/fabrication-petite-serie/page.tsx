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
    "Adaptation rapide aux besoins spécifiques",
    "Réactivité sur les modifications",
    "Possibilité de pré-séries et validations",
    "Suivi technique complet",
];

const qualitePoints = [
    "Tolérances maîtrisées",
    "Finitions soignées",
    "Assemblages contrôlés",
    "Contrôle qualité à chaque étape",
];

const typesSeriesPoints = [
    "Mobilier technique ou professionnel",
    "Éléments d'agencement",
    "Structures bois ou métal",
    "Pièces techniques en petite série",
];

const processusSteps = [
    "Analyse technique",
    "Validation prototype",
    "Fabrication en atelier",
    "Assemblage & contrôle qualité",
    "Emballage et expédition",
];

const avantagesPoints = [
    "Volumes flexibles",
    "Délais maîtrisés",
    "Interlocuteur unique",
    "Possibilité d'évolution vers plus grande série",
    "Suivi qualité constant",
];

const faqItems = [
    {
        question: "Quel est le volume minimum d'une petite série ?",
        answer: "Nous adaptons nos productions aux besoins spécifiques du client. Les volumes peuvent commencer à partir de séries très limitées, selon la complexité du produit.",
    },
    {
        question: "Peut-on produire une pré-série ou un prototype avant lancement ?",
        answer: "Oui. Nous réalisons des prototypes ou pré-séries afin de valider les aspects techniques, esthétiques et fonctionnels avant production complète.",
    },
    {
        question: "Réalisez-vous l'assemblage et le contrôle qualité ?",
        answer: "Oui. L'assemblage et les contrôles qualité sont effectués dans notre manufacture, selon des standards stricts.",
    },
    {
        question: "Livrez-vous à l'international ?",
        answer: "Oui. Nous assurons l'expédition en Suisse, en Europe et à l'international, avec une logistique adaptée aux volumes et aux exigences du projet.",
    },
];

export default function FabricationPetiteSeriePage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/eclairage-led-atelier.png" alt="Fabrication de Petite Série" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Fabrication en Petite Série</h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                            Flexibilité maîtrisée. Précision Swiss Made.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">La fabrication en petite série est l'une des forces d'ORMA.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Nous produisons des séries limitées avec la même exigence que le sur-mesure : <strong className="text-foreground">précision, contrôle et traçabilité</strong>.</p>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Zap className="w-5 h-5" /><span className="font-semibold">Production flexible</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Production Flexible & Maîtrisée</h2>
                            <p className="text-muted-foreground mb-6">Notre organisation nous permet d'adapter les volumes, tout en garantissant constance et qualité.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos atouts</h3>
                            <ul className="space-y-3 mb-6">
                                {atoutsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Une flexibilité maîtrisée, sans compromis sur la qualité.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/traditional-workshop-renovation.jpg" alt="Production flexible" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/qualite-swiss-made.jpg" alt="Qualité Swiss Made" className="w-full h-full object-cover" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Award className="w-5 h-5" /><span className="font-semibold">Swiss Made</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Qualité Swiss Made & Précision Technique</h2>
                            <p className="text-muted-foreground mb-6">Chaque pièce produite respecte des standards d'exigence élevés, tant sur le plan esthétique que mécanique.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous garantissons</h3>
                            <ul className="space-y-3 mb-6">
                                {qualitePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Chaque pièce fabriquée selon les standards suisses.</p>
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
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Fabrication Sur Mesure en Série</h2>
                            <p className="text-muted-foreground mb-6">Nous produisons selon votre cahier des charges ou à partir de nos développements techniques internes.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Applications</h3>
                            <ul className="space-y-3 mb-6">
                                {typesSeriesPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Du prototype à la série, avec cohérence.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/fabrication-sur-mesure-serie.png" alt="Fabrication sur mesure" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/processus-fabrication.jpg" alt="Processus" className="w-full h-full object-cover" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <ClipboardCheck className="w-5 h-5" /><span className="font-semibold">Méthodologie</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Processus de Fabrication</h2>
                            <p className="text-muted-foreground mb-6">Nous assurons une gestion complète du projet, du prototype initial à la production finale.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos étapes</h3>
                            <ul className="space-y-3 mb-6">
                                {processusSteps.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Un processus structuré et rigoureux.</p>
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
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Les Avantages de la Petite Série</h2>
                            <p className="text-muted-foreground mb-6">La petite série permet d'allier personnalisation, maîtrise budgétaire et rapidité d'exécution.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos points forts</h3>
                            <ul className="space-y-3 mb-6">
                                {avantagesPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Flexibilité, précision, évolutivité.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/modern-executive-office.jpg" alt="Avantages" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">FAQ – Fabrication en Petite Série</h2>
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
