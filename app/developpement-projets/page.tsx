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
    "Contraintes techniques et réglementaires",
    "Dimensions et organisation des espaces",
    "Budget et planning",
    "Faisabilité globale",
];

const travailPoints = [
    "Conception technique détaillée",
    "Plans d'exécution",
    "Validation des solutions techniques",
    "Coordination des équipes internes et partenaires",
    "Préparation du dossier technique complet",
];

const planificationPoints = [
    "Calendrier global",
    "Organisation des étapes clés",
    "Coordination des intervenants",
    "Suivi des validations",
    "Gestion des imprévus",
];

const engagementsPoints = [
    "Communication transparente",
    "Contrôle qualité avant production",
    "Validation des éléments clés",
    "Coordination fabrication & montage",
    "Garantie de conformité",
];

const pointsFortsPoints = [
    "Expertise technique et savoir-faire industriel",
    "Gestion claire et structurée",
    "Interlocuteur unique",
    "Solutions réalistes et optimisées",
    "Maîtrise complète de la chaîne de valeur",
];

const faqItems = [
    {
        question: "Pouvez-vous gérer un projet depuis l'idée jusqu'à la livraison ?",
        answer: "Oui. Nous accompagnons nos clients de l'analyse initiale à la réalisation finale, en assurant coordination, planification et suivi.",
    },
    {
        question: "Travaillez-vous avec des architectes ou bureaux externes ?",
        answer: "Oui. Nous collaborons régulièrement avec des architectes, bureaux d'études et partenaires techniques.",
    },
    {
        question: "Fournissez-vous un planning détaillé ?",
        answer: "Oui. Chaque projet bénéficie d'un calendrier structuré avec étapes, validations et jalons.",
    },
    {
        question: "Pouvez-vous intervenir sur un projet déjà en cours ?",
        answer: "Oui. Nous pouvons reprendre un projet à différents stades, après analyse technique préalable.",
    },
];

export default function DeveloppementProjetsPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/1201757687488157.fLHJi4Ts7K6Zl4utEzn8_height640.png" alt="Développement de Projets" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Développement de Projets</h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                            Une vision globale. Une exécution maîtrisée.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">Le développement de projets constitue une étape essentielle pour garantir la cohérence et la réussite de vos aménagements.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Nous assurons une <strong className="text-foreground">gestion globale, structurée et coordonnée</strong>, de l'analyse initiale jusqu'à la livraison finale.</p>
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
                            <p className="text-muted-foreground mb-6">Chaque projet débute par une étude approfondie afin de définir un cadre clair, précis et réaliste.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous analysons</h3>
                            <ul className="space-y-3 mb-6">
                                {analysePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Structurer pour mieux réussir.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/analyse-structuration-projet.png" alt="Analyse" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/dev-technique-coordination.png" alt="Développement Technique" className="w-full h-full object-cover" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Settings className="w-5 h-5" /><span className="font-semibold">Coordination technique</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Développement Technique & Coordination</h2>
                            <p className="text-muted-foreground mb-6">Nous assurons la cohérence entre les aspects techniques, esthétiques et pratiques du projet.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre travail inclut</h3>
                            <ul className="space-y-3 mb-6">
                                {travailPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Coordination précise, exécution maîtrisée.</p>
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
                            <p className="text-muted-foreground mb-6">Une planification rigoureuse garantit un déroulement fluide et maîtrisé du projet.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nous prenons en charge</h3>
                            <ul className="space-y-3 mb-6">
                                {planificationPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Maîtriser le temps, sécuriser le projet.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/modern-tech-meeting-room.jpg" alt="Planification" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/modern-executive-office.jpg" alt="Accompagnement" className="w-full h-full object-cover" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Users className="w-5 h-5" /><span className="font-semibold">Accompagnement</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Accompagnement jusqu'à la Livraison</h2>
                            <p className="text-muted-foreground mb-6">Nous restons engagés jusqu'à la réception complète du projet.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos engagements</h3>
                            <ul className="space-y-3 mb-6">
                                {engagementsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Un partenaire présent à chaque étape.</p>
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
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pourquoi choisir ORMA Swiss SA ?</h2>
                            <p className="text-muted-foreground mb-6">Nos projets sont menés avec méthode, précision et vision globale.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos avantages</h3>
                            <ul className="space-y-3 mb-6">
                                {pointsFortsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Une maîtrise globale, sans fragmentation.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/modern-office-building.jpg" alt="Pourquoi ORMA" className="w-full h-full object-cover" /></div>
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
