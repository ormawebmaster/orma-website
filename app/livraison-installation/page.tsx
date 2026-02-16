"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Globe,
    Truck,
    Wrench,
    Settings,
    Cog
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const livraisonGaranties = [
    "Livraison en Suisse, en Europe et à l'International (Worldwide)",
    "Emballage renforcé et protection des surfaces fragiles",
    "Transport sécurisé avec partenaires spécialisés",
    "Planification des délais adaptée à votre projet",
    "Gestion des formalités logistiques si nécessaire",
];

const installationSteps = [
    "Préparation et contrôle du matériel",
    "Montage complet sur site",
    "Ajustements, réglages et nivellement",
    "Mise en place finale selon vos plans",
    "Nettoyage et contrôle de conformité",
];

const engagements = [
    "Respect strict des délais",
    "Qualité d'exécution irréprochable",
    "Communication claire pendant toute la durée du projet",
    "Intervention coordonnée avec les autres corps de métier",
];

const maintenanceServices = [
    "Réglages post-installation",
    "Réparations et ajustements",
    "Renouvellement ou adaptation future du mobilier",
    "Interventions sur demande",
];

const faqItems = [
    {
        question: "Proposez-vous une livraison internationale (Worldwide) ?",
        answer: "Oui, nous livrons partout dans le monde, avec des solutions adaptées.",
    },
    {
        question: "L'installation est-elle incluse dans la prestation ?",
        answer: "L'installation peut être incluse ou proposée en service complémentaire.",
    },
    {
        question: "Qui réalise l'installation ?",
        answer: "Nos techniciens ORMA Swiss SA ou des partenaires certifiés.",
    },
    {
        question: "Que se passe-t-il si un élément est endommagé ?",
        answer: "Nous gérons la prise en charge selon notre garantie transport.",
    },
];

export default function LivraisonInstallationPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/orma-warehouse-hero.png" alt="Livraison et Installation" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Livraison & Installation</h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Un service complet de la fabrication à l'installation finale – Worldwide
                      </p>
                  </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">Chez <strong className="text-foreground">ORMA Swiss SA</strong>, nous garantissons un service complet allant de la fabrication à l'installation finale.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Livraison sécurisée, montage professionnel et mise en service impeccable.</p>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Globe className="w-5 h-5" /><span className="font-semibold">Disponible WORLDWIDE</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Livraison Sécurisée</h2>
                            <p className="text-muted-foreground mb-6">Nous assurons la livraison partout dans le monde avec un suivi professionnel.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous garantissons</h3>
                            <ul className="space-y-3 mb-6">
                                {livraisonGaranties.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Votre mobilier arrive en parfait état.</p>
                        </div>
                        <div><img src="/orma-livraison-truck.png" alt="Livraison" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-executive-office.jpg" alt="Installation" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Wrench className="w-5 h-5" /><span className="font-semibold">Montage expert</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Installation Professionnelle</h2>
                            <p className="text-muted-foreground mb-6">Installation par nos techniciens spécialisés, formés aux méthodes les plus exigeantes.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre processus</h3>
                            <ul className="space-y-3 mb-6">
                                {installationSteps.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Rigueur, discrétion et efficacité.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Settings className="w-5 h-5" /><span className="font-semibold">Service complet</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Un Service Clé en Main</h2>
                            <p className="text-muted-foreground mb-6">Solution complète et sans stress, de la fabrication à la mise en service.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos engagements</h3>
                            <ul className="space-y-3 mb-6">
                                {engagements.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Satisfaction garantie à chaque étape.</p>
                        </div>
                        <div><img src="/modern-tech-meeting-room.jpg" alt="Clé en main" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/traditional-workshop-renovation.jpg" alt="Maintenance" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Cog className="w-5 h-5" /><span className="font-semibold">Suivi continu</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Maintenance & Ajustements</h2>
                            <p className="text-muted-foreground mb-6">Services de maintenance adaptés à vos besoins.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Services optionnels</h3>
                            <ul className="space-y-3 mb-6">
                                {maintenanceServices.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Nous restons à vos côtés après l'installation.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">FAQ – Livraison & Installation</h2>
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
