"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Globe,
    Package,
    Truck,
    Shield,
    Clock,
    Users,
    Wrench,
    Settings,
    MessageSquare,
    Award,
    RefreshCw,
    Hammer,
    CalendarCheck,
    Cog,
    Search
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const livraisonGaranties = [
    { text: "Livraison en Suisse, en Europe et à l'International (Worldwide)", icon: Globe },
    { text: "Emballage renforcé et protection des surfaces fragiles", icon: Package },
    { text: "Transport sécurisé avec partenaires spécialisés", icon: Truck },
    { text: "Planification des délais adaptée à votre projet", icon: Clock },
    { text: "Gestion des formalités logistiques si nécessaire", icon: Shield },
];

const installationSteps = [
    "Préparation et contrôle du matériel",
    "Montage complet sur site",
    "Ajustements, réglages et nivellement",
    "Mise en place finale selon vos plans",
    "Nettoyage et contrôle de conformité",
];

const engagements = [
    { text: "Respect strict des délais", icon: Clock },
    { text: "Qualité d'exécution irréprochable", icon: Award },
    { text: "Communication claire pendant toute la durée du projet", icon: MessageSquare },
    { text: "Intervention coordonnée avec les autres corps de métier", icon: Users },
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
        answer: "Oui, nous livrons partout dans le monde, avec des solutions adaptées aux projets volumineux et techniques.",
    },
    {
        question: "L'installation est-elle incluse dans la prestation ?",
        answer: "L'installation peut être incluse ou proposée en service complémentaire selon le projet.",
    },
    {
        question: "Qui réalise l'installation ?",
        answer: "Nos techniciens professionnels ORMA Swiss SA ou des partenaires certifiés suivant votre localisation.",
    },
    {
        question: "Pouvez-vous coordonner avec un architecte ou un chantier en cours ?",
        answer: "Oui, nous collaborons régulièrement avec architectes, gestionnaires de chantier et autres corps de métier.",
    },
    {
        question: "Que se passe-t-il si un élément est endommagé lors du transport ?",
        answer: "Nous gérons la prise en charge, la réparation ou le remplacement selon notre garantie transport.",
    },
];

export default function LivraisonInstallation2Page() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/orma-warehouse-hero.png"
                        alt="Livraison & Installation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                          Livraison & Installation
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Un service complet de la fabrication à l'installation finale – Worldwide
                      </p>
                  </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Chez <strong className="text-foreground">ORMA Swiss SA</strong>, nous garantissons un service complet
                        allant de la fabrication à l'installation finale de vos aménagements.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Nos équipes spécialisées assurent une livraison sécurisée, un montage professionnel et une mise en
                        service impeccable, en respectant vos délais et vos contraintes organisationnelles.
                    </p>
                </div>
            </section>

            {/* Livraison Sécurisée - Style Création & Conception */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Globe className="w-5 h-5" />
                                <span className="font-semibold">Disponible WORLDWIDE</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Livraison Sécurisée
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous assurons la livraison de vos projets partout dans le monde, avec un suivi professionnel
                                et des emballages adaptés aux pièces techniques et sur mesure.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous garantissons</h3>
                            <ul className="space-y-3 mb-6">
                                {livraisonGaranties.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Votre mobilier et vos aménagements arrivent en parfait état, prêts pour l'installation.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/orma-livraison-truck.png"
                                alt="Livraison sécurisée ORMA"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Installation Professionnelle - Style Création & Conception */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modern-executive-office.jpg"
                                alt="Installation professionnelle"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Wrench className="w-5 h-5" />
                                <span className="font-semibold">Montage expert</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Installation Professionnelle
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                L'installation est réalisée par nos techniciens spécialisés, formés aux méthodes de montage les plus exigeantes.
                                Nous intervenons dans tous types d'espaces : <strong className="text-foreground">bureaux, ateliers, commerces,
                                    environnements industriels, espaces privés et collectivités</strong>.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre processus d'installation</h3>
                            <ul className="space-y-3 mb-6">
                                {installationSteps.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Chaque installation est menée avec rigueur, discrétion et efficacité.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Clé en Main - Style Création & Conception */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Settings className="w-5 h-5" />
                                <span className="font-semibold">Service complet</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Un Service Clé en Main
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Notre objectif est de vous offrir une solution complète et sans stress.
                                Nous prenons en charge l'ensemble du processus jusqu'à la mise en service finale.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos engagements</h3>
                            <ul className="space-y-3 mb-6">
                                {engagements.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Satisfaction client garantie à chaque étape du projet.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-tech-meeting-room.jpg"
                                alt="Service clé en main"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Maintenance & Ajustements - Style Création & Conception */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/traditional-workshop-renovation.jpg"
                                alt="Maintenance et ajustements"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Cog className="w-5 h-5" />
                                <span className="font-semibold">Suivi continu</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Maintenance & Ajustements
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Pour les projets nécessitant un suivi, nous proposons également des services de maintenance adaptés à vos besoins.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos services optionnels</h3>
                            <ul className="space-y-3 mb-6">
                                {maintenanceServices.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Nous restons à vos côtés même après l'installation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Style Création & Conception */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            FAQ – Livraison & Installation
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-white border-0 rounded-lg shadow-md px-6 overflow-hidden"
                            >
                                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-5">
                                    {item.answer}
                                </AccordionContent>
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
