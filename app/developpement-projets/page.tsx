"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Search,
    Settings,
    Calendar,
    Users,
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
    "Enjeux fonctionnels et opérationnels",
    "Contraintes techniques, réglementaires et spatiales",
    "Dimensions, circulations, usage réel de l'espace",
    "Budget, délais et contraintes logistiques",
    "Matériaux et solutions envisageables",
];

const travailPoints = [
    "Conception ou adaptation de plans",
    "Études techniques (matériaux, assemblages, structures)",
    "Validation des solutions retenues",
    "Coordination avec les équipes internes et externes",
    "Préparation du dossier technique",
];

const planificationPoints = [
    "Calendrier complet du projet",
    "Organisation des étapes clés",
    "Coordination avec les artisans et intervenants",
    "Suivi des validations",
    "Gestion des imprévus",
];

const engagementsPoints = [
    "Communication transparente",
    "Contrôle qualité avant production",
    "Validation des éléments en atelier",
    "Coordination fabrication et montage",
    "Garantie de conformité",
];

const pointsFortsPoints = [
    "Expertise technique et savoir-faire d'atelier",
    "Gestion claire, structurée et professionnelle",
    "Souplesse et adaptabilité",
    "Connaissance des contraintes d'aménagement",
    "Solutions réalistes et optimisées",
    "Interlocuteur unique",
];

const faqItems = [
    {
        question: "Pouvez-vous gérer un projet depuis l'idée jusqu'à la réalisation ?",
        answer: "Oui, nous accompagnons nos clients du concept initial jusqu'à l'installation finale.",
    },
    {
        question: "Travaillez-vous avec des architectes ou des bureaux externes ?",
        answer: "Oui, nous collaborons régulièrement avec architectes, ingénieurs ou autres partenaires.",
    },
    {
        question: "Fournissez-vous un planning complet ?",
        answer: "Oui, un planning détaillé est fourni et mis à jour tout au long du projet.",
    },
    {
        question: "Pouvez-vous intervenir sur un projet déjà en cours ?",
        answer: "Oui, nous pouvons rejoindre un projet pour en assurer la gestion ou la finalisation.",
    },
];

export default function DeveloppementProjetsPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/cc.webp" alt="Développement de Projets" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Développement de Projets</h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          De l'analyse initiale à la finalisation, une gestion globale et structurée
                      </p>
                  </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">Le développement de projets est une étape essentielle pour garantir la cohérence et la réussite de vos aménagements.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Nous assurons une <strong className="text-foreground">gestion globale et structurée</strong>, de l'analyse initiale jusqu'à la finalisation.</p>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Search className="w-5 h-5" /><span className="font-semibold">Analyse complète</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Analyse & Structuration du Projet</h2>
                            <p className="text-muted-foreground mb-6">Chaque projet commence par une étude complète pour garantir une compréhension précise des objectifs.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous analysons</h3>
                            <ul className="space-y-3 mb-6">
                                {analysePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Cette étape nous permet d'établir la base solide du projet.</p>
                        </div>
                        <div><img src="/architectural-blueprints-and-drawings.jpg" alt="Analyse" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-office-interior-with-wooden-desk-and-wall-m.jpg" alt="Développement Technique" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Settings className="w-5 h-5" /><span className="font-semibold">Coordination technique</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Développement Technique & Coordination</h2>
                            <p className="text-muted-foreground mb-6">Nous assurons la cohérence entre les aspects techniques, esthétiques et pratiques.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre travail inclut</h3>
                            <ul className="space-y-3 mb-6">
                                {travailPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Nous veillons à la faisabilité de chaque détail avant production.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Calendar className="w-5 h-5" /><span className="font-semibold">Planification</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Planification & Gestion Opérationnelle</h2>
                            <p className="text-muted-foreground mb-6">Une planification précise est essentielle pour garantir un déroulement fluide.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nous prenons en charge</h3>
                            <ul className="space-y-3 mb-6">
                                {planificationPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Gestion rigoureuse pour tenir les délais sans compromis.</p>
                        </div>
                        <div><img src="/modern-tech-meeting-room.jpg" alt="Planification" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-executive-office.jpg" alt="Accompagnement" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Users className="w-5 h-5" /><span className="font-semibold">Accompagnement</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Accompagnement jusqu'à la Livraison</h2>
                            <p className="text-muted-foreground mb-6">Nous restons impliqués jusqu'à la réception complète du projet.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos engagements</h3>
                            <ul className="space-y-3 mb-6">
                                {engagementsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Un résultat fidèle à vos attentes, sans stress.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Target className="w-5 h-5" /><span className="font-semibold">Nos atouts</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pourquoi Choisir ORMA Swiss SA ?</h2>
                            <p className="text-muted-foreground mb-6">Nos points forts pour le développement de vos projets.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos avantages</h3>
                            <ul className="space-y-3 mb-6">
                                {pointsFortsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Un partenaire de confiance pour vos projets.</p>
                        </div>
                        <div><img src="/modern-office-building.jpg" alt="Pourquoi ORMA" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">FAQ – Développement de Projets</h2>
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
