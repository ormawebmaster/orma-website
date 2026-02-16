"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Layers,
    Scissors,
    Building2,
    Settings,
    Wrench
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const applicationsPoints = [
    "Plans de travail sur mesure",
    "Comptoirs professionnels (hôtels, restaurants, cliniques)",
    "Mobilier design",
    "Éléments sanitaires et vasques",
    "Habillages muraux et surfaces techniques",
    "Pièces thermoformées et formes organiques",
];

const expertisesPoints = [
    "Découpe CNC de précision",
    "Assemblage invisible",
    "Collage et jonctions parfaites",
    "Thermoformage et cintrage",
    "Ponçage et finitions professionnelles",
    "Création de formes complexes",
];

const secteursPoints = [
    "Hôtellerie & Restauration",
    "Commerces & Espaces publics",
    "Architecture d'intérieur",
    "Environnements médicaux et sanitaires",
    "Bureaux et zones d'accueil",
    "Résidentiel & projets privés",
];

const engagementsPoints = [
    "Étude du besoin & conseil technique",
    "Conception sur mesure",
    "Fabrication de précision",
    "Montage & installation professionnelle",
    "Contrôle qualité systématique",
];

const maintenancePoints = [
    "Réparation des fissures",
    "Reprise des surfaces rayées",
    "Ponçage et remise à neuf",
    "Ajustements et modifications",
];

const faqItems = [
    {
        question: "Quels matériaux Solid Surface utilisez-vous ?",
        answer: "Nous travaillons avec Corian®, HI-MACS®, Krion® et autres marques reconnues.",
    },
    {
        question: "Proposez-vous du thermoformage ?",
        answer: "Oui, nous réalisons le thermoformage dans notre atelier.",
    },
    {
        question: "Pouvez-vous installer les pièces sur site ?",
        answer: "Oui, nos équipes assurent installation et mise en place finales.",
    },
    {
        question: "Est-il possible de réparer un Solid Surface abîmé ?",
        answer: "Oui, la plupart des surfaces peuvent être réparées ou restaurées.",
    },
];

export default function SolidesSurfacesPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/modern-office-interior-with-wooden-desk-and-archit.jpg" alt="Solides Surfaces" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Solides Surfaces</h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">Résistance, hygiène, précision et design premium</p>
                  </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">Les matériaux « Solid Surface » offrent <strong className="text-foreground">résistance, hygiène et design premium</strong>.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Nous maîtrisons l'ensemble du processus : découpe, façonnage, assemblage invisible et finition.</p>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Layers className="w-5 h-5" /><span className="font-semibold">Solid Surface</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Solutions en Solid Surface</h2>
                            <p className="text-muted-foreground mb-6">Nous travaillons avec Corian®, HI-MACS®, Krion® et autres marques reconnues.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Applications possibles</h3>
                            <ul className="space-y-3 mb-6">
                                {applicationsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Des pièces uniques, élégantes et faciles à entretenir.</p>
                        </div>
                        <div><img src="/modern-minimalist-interior-architecture-with-natur.jpg" alt="Solid Surface" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-laboratory-workspace.jpg" alt="Techniques" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Scissors className="w-5 h-5" /><span className="font-semibold">Fabrication précision</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Techniques de Fabrication</h2>
                            <p className="text-muted-foreground mb-6">Notre atelier assure une production de haute précision.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos expertises</h3>
                            <ul className="space-y-3 mb-6">
                                {expertisesPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Qualité contrôlée, conforme aux exigences professionnelles.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Building2 className="w-5 h-5" /><span className="font-semibold">Secteurs</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Domaines d'Application</h2>
                            <p className="text-muted-foreground mb-6">Nos réalisations s'adaptent à tous types d'environnements.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Secteurs concernés</h3>
                            <ul className="space-y-3 mb-6">
                                {secteursPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Surfaces robustes, hygiéniques et élégantes.</p>
                        </div>
                        <div><img src="/modern-mall-interior.jpg" alt="Secteurs" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-executive-office.jpg" alt="Clé en main" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Settings className="w-5 h-5" /><span className="font-semibold">Clé en main</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Service Clé en Main</h2>
                            <p className="text-muted-foreground mb-6">Nous gérons votre projet de A à Z.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre accompagnement</h3>
                            <ul className="space-y-3 mb-6">
                                {engagementsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Un rendu impeccable et durable.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Wrench className="w-5 h-5" /><span className="font-semibold">Maintenance</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Maintenance & Réparations</h2>
                            <p className="text-muted-foreground mb-6">Pour prolonger la durée de vie de vos surfaces.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Services disponibles</h3>
                            <ul className="space-y-3 mb-6">
                                {maintenancePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Un matériau qui conserve son aspect neuf.</p>
                        </div>
                        <div><img src="/traditional-workshop-renovation.jpg" alt="Maintenance" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">FAQ – Solides Surfaces</h2>
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
