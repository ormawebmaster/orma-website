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
    "Assurer une cohérence esthétique et technique",
    "Anticiper les contraintes de fabrication",
    "Créer des solutions sur mesure adaptées à vos usages",
];

const analysePoints = [
    "Vos besoins opérationnels",
    "L'identité visuelle de votre entreprise",
    "Le style souhaité (moderne, minimaliste, professionnel…)",
    "Les contraintes du site (espace, circulation, normes)",
    "Le budget et les délais",
];

const productionsPoints = [
    "Plans techniques 2D",
    "Modélisations 3D photoréalistes",
    "Dessins techniques et détails d'assemblage",
    "Propositions de matériaux et finitions",
    "Variantes et options selon vos besoins",
];

const conceptionPoints = [
    "Structures et systèmes d'assemblage",
    "Choix des matériaux adaptés",
    "Optimisation des dimensions et de la fabrication",
    "Anticipation des contraintes techniques",
    "Plans de fabrication prêts pour l'atelier",
];

const accompagnementPoints = [
    "Communication claire",
    "Transparence sur les choix techniques",
    "Réactivité et adaptabilité",
    "Respect strict de votre cahier des charges",
];

const faqItems = [
    {
        question: "Pouvez-vous créer un projet à partir d'une simple idée ?",
        answer: "Oui, nous pouvons partir d'un croquis ou d'une idée pour développer un concept complet.",
    },
    {
        question: "Fournissez-vous des plans techniques ?",
        answer: "Oui, nous réalisons des plans 2D, 3D et des dossiers techniques complets.",
    },
    {
        question: "Travaillez-vous avec des architectes ?",
        answer: "Oui, nous collaborons régulièrement avec architectes et designers.",
    },
    {
        question: "Peut-on demander plusieurs variantes de design ?",
        answer: "Bien sûr. Nous proposons différentes options pour trouver la meilleure solution.",
    },
];

export default function CreationConceptionPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/a.webp" alt="Création et Conception" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Création & Conception</h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">De l'idée au concept, une expertise créative et technique</p>
                  </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">La création et la conception constituent le cœur de notre expertise.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Nous transformons vos idées en concepts concrets, répondant à vos <strong className="text-foreground">besoins fonctionnels et esthétiques</strong>.</p>
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
                            <p className="text-muted-foreground mb-6">Notre processus allie vision artistique, maîtrise technique et compréhension fine de votre environnement.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos Objectifs</h3>
                            <ul className="space-y-3 mb-6">
                                {objectifsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Chaque projet est pensé pour être réalisable et optimisé.</p>
                        </div>
                        <div><img src="/architectural-blueprints-and-drawings.jpg" alt="Approche créative" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-office-interior-with-wooden-desk-and-wall-m.jpg" alt="Analyse" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Search className="w-5 h-5" /><span className="font-semibold">Analyse complète</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Étude & Définition du Concept</h2>
                            <p className="text-muted-foreground mb-6">Nous commençons par une analyse complète de votre projet.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous analysons</h3>
                            <ul className="space-y-3 mb-6">
                                {analysePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Une vision claire avant de passer au design.</p>
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
                            <p className="text-muted-foreground mb-6">Nous produisons des visuels précis pour visualiser votre aménagement.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos Productions</h3>
                            <ul className="space-y-3 mb-6">
                                {productionsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Parfaite compréhension du projet par les équipes.</p>
                        </div>
                        <div><img src="/modern-minimalist-interior-architecture-with-natur.jpg" alt="Modélisation" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-office-interior-with-wooden-desk-and-archit.jpg" alt="Conception technique" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Cog className="w-5 h-5" /><span className="font-semibold">Conception technique</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Conception Technique & Détails</h2>
                            <p className="text-muted-foreground mb-6">Nous développons des solutions fiables et adaptées.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nous prenons en charge</h3>
                            <ul className="space-y-3 mb-6">
                                {conceptionPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Conception pensée pour éviter les imprévus.</p>
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
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Accompagnement jusqu'à la Validation</h2>
                            <p className="text-muted-foreground mb-6">Vous êtes guidé à chaque étape par nos équipes.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos engagements</h3>
                            <ul className="space-y-3 mb-6">
                                {accompagnementPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Validation à chaque étape avant production.</p>
                        </div>
                        <div><img src="/modern-executive-office.jpg" alt="Accompagnement" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">FAQ – Création & Conception</h2>
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
