"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Building2,
    GraduationCap,
    Landmark,
    BookOpen,
    Heart,
    Shield,
    Layers,
    ClipboardCheck
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const sallesClassePoints = [
    "Mobilier robuste et ergonomique",
    "Rangements techniques",
    "Bureaux enseignants",
    "Postes informatiques",
    "Panneaux acoustiques et solutions anti-bruit",
];

const espacesAdminPoints = [
    "Mairies",
    "Services publics",
    "Salles d'attente",
    "Guichets et accueils",
    "Bureaux et salles de réunion",
];

const espacesCulturels = [
    "Bibliothèques",
    "Médiathèques",
    "Centres culturels",
    "Maisons de quartier",
    "Lieux d'exposition",
];

const santePoints = [
    "Bureaux et espaces administratifs",
    "Salles de soins",
    "Rangements médicaux techniques",
    "Espaces de réception",
];

const materiauxPoints = [
    "Surfaces résistantes aux chocs et rayures",
    "Panneaux nettoyables et hygiéniques",
    "Équipements anti-usure",
    "Solutions ignifuges (au besoin)",
];

const securitePoints = [
    "Bords arrondis",
    "Fixations renforcées",
    "Stabilité optimale",
    "Conformité aux normes institutionnelles",
];

const processusSteps = [
    "Analyse & Conseil – Évaluation de l'usage et de la sécurité",
    "Conception Sur Mesure – DAO, plans 3D, choix des matériaux",
    "Fabrication & Contrôle Qualité – Finitions professionnelles",
    "Installation Professionnelle – Mise en service et vérification finale",
];

const faqItems = [
    {
        question: "Travaillez-vous avec des administrations publiques ?",
        answer: "Oui, nous collaborons avec communes, cantons, écoles et institutions.",
    },
    {
        question: "Proposez-vous du mobilier adapté à un usage intensif ?",
        answer: "Oui, tous nos produits sont conçus pour résister à une utilisation fréquente.",
    },
    {
        question: "Les solutions sont-elles personnalisables ?",
        answer: "Oui, chaque mobilier peut être adapté en dimensions, matériaux et fonctionnalités.",
    },
    {
        question: "Assurez-vous la livraison et l'installation ?",
        answer: "Oui, nous livrons en Suisse et à l'international.",
    },
];

export default function AmenagementPublicPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/modern-mall-interior.jpg" alt="Aménagement Public" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Aménagement Public & Collectivités</h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">Sécurité, durabilité et ergonomie pour les espaces à forte fréquentation</p>
                  </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">Nous accompagnons les collectivités et institutions publiques dans la conception d'espaces fonctionnels et robustes.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Nos solutions répondent aux exigences de <strong className="text-foreground">sécurité, durabilité et ergonomie</strong>.</p>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <GraduationCap className="w-5 h-5" /><span className="font-semibold">Éducation</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Salles de Classe & Espaces Éducatifs</h2>
                            <p className="text-muted-foreground mb-6">Solutions adaptées aux écoles, universités et centres de formation.</p>
                            <ul className="space-y-3 mb-6">
                                {sallesClassePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Des environnements d'apprentissage confortables et durables.</p>
                        </div>
                        <div><img src="/modern-tech-meeting-room.jpg" alt="Salles de Classe" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-office-building.jpg" alt="Espaces Administratifs" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Landmark className="w-5 h-5" /><span className="font-semibold">Services publics</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Espaces Administratifs Publics</h2>
                            <p className="text-muted-foreground mb-6">Aménagement complet pour les services publics et administratifs.</p>
                            <ul className="space-y-3 mb-6">
                                {espacesAdminPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Des espaces publics efficaces et accueillants.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <BookOpen className="w-5 h-5" /><span className="font-semibold">Culture</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Espaces Culturels & Communautaires</h2>
                            <p className="text-muted-foreground mb-6">Aménagements sur mesure pour les lieux culturels.</p>
                            <ul className="space-y-3 mb-6">
                                {espacesCulturels.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                        </div>
                        <div><img src="/modern-interior-architecture-wooden-stairs.jpg" alt="Espaces Culturels" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-laboratory-workspace.jpg" alt="Santé" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Heart className="w-5 h-5" /><span className="font-semibold">Santé</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Santé et Médico-Sociales</h2>
                            <p className="text-muted-foreground mb-6">Environnements sécurisés et faciles à entretenir.</p>
                            <ul className="space-y-3 mb-6">
                                {santePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
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
                                <Layers className="w-5 h-5" /><span className="font-semibold">Durabilité</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Matériaux Résistants</h2>
                            <ul className="space-y-3 mb-6">
                                {materiauxPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                        </div>
                        <div><img src="/traditional-workshop-renovation.jpg" alt="Matériaux" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/building-inspection-and-structural-analysis.jpg" alt="Sécurité" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Shield className="w-5 h-5" /><span className="font-semibold">Sécurité</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Conception Sécurisée</h2>
                            <ul className="space-y-3 mb-6">
                                {securitePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
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
                                <ClipboardCheck className="w-5 h-5" /><span className="font-semibold">Service complet</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Un Accompagnement de A à Z</h2>
                            <ul className="space-y-3 mb-6">
                                {processusSteps.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                        </div>
                        <div><img src="/modern-building-exterior-dusk-architecture.jpg" alt="Accompagnement" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">FAQ – Aménagement Public</h2>
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
