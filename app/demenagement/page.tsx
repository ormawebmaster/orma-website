"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Package,
    Truck,
    Shield,
    Home,
    Building2,
    RefreshCw,
    Award,
    MapPin
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const emballagePoints = [
    "Emballage renforcé pour tous types de biens",
    "Protection spéciale pour pièces sensibles",
    "Étiquetage clair pour une organisation optimale",
    "Matériel professionnel fourni par nos équipes",
    "Préparation conforme aux standards de sécurité",
];

const transportGaranties = [
    "Véhicules adaptés aux volumes et aux contraintes techniques",
    "Manutention professionnelle et sécurisée",
    "Suivi logistique et coordination",
    "Respect des horaires et des délais",
    "Transport adapté aux biens fragiles, lourds ou sur mesure",
];

const reinstallationSteps = [
    "Déchargement sécurisé",
    "Positionnement du mobilier et des équipements",
    "Remontage professionnel si nécessaire",
    "Mise en place selon votre aménagement initial ou nouveau plan",
    "Vérifications finales avant la remise des lieux",
];

const domainesIntervention = [
    { text: "Déménagement résidentiel", icon: Home },
    { text: "Transfert de bureaux", icon: Building2 },
    { text: "Déplacement de locaux commerciaux", icon: MapPin },
    { text: "Déménagement d'espaces techniques ou ateliers", icon: Package },
    { text: "Réaménagement interne", icon: RefreshCw },
];

const engagements = [
    "Organisation claire et professionnelle",
    "Protection optimale des biens",
    "Transport sécurisé",
    "Réinstallation conforme à vos exigences",
    "Respect des délais et coordination efficace",
    "Satisfaction garantie",
];

const faqItems = [
    {
        question: "Prenez-vous en charge l'emballage complet ?",
        answer: "Oui, nous réalisons l'emballage de l'ensemble de vos biens avec du matériel professionnel.",
    },
    {
        question: "Gérez-vous les déménagements d'entreprises ?",
        answer: "Oui, nous réalisons des transferts de bureaux, commerces et locaux professionnels.",
    },
    {
        question: "Pouvez-vous démonter et remonter le mobilier ?",
        answer: "Oui, le démontage et le remontage font partie de nos prestations.",
    },
    {
        question: "Le transport est-il sécurisé ?",
        answer: "Oui, nous utilisons des véhicules adaptés et une manutention spécialisée.",
    },
    {
        question: "Peut-on planifier un déménagement urgent ?",
        answer: "Oui, selon les disponibilités, nous pouvons organiser une intervention rapide.",
    },
];

export default function DemenagementPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/modern-office-interior-with-wooden-desk-and-archit.jpg"
                        alt="Déménagement"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                          Déménagement
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Un service complet de A à Z, avec rigueur et professionnalisme
                      </p>
                  </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Chez <strong className="text-foreground">ORMA Swiss SA</strong>, nous prenons en charge votre
                        déménagement de A à Z, avec une organisation rigoureuse, une équipe qualifiée et des solutions
                        adaptées à vos besoins.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Notre priorité est de garantir un transport sécurisé, un emballage professionnel et une
                        réinstallation parfaite, tout en respectant vos délais.
                    </p>
                </div>
            </section>

            {/* Emballage & Protection - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Package className="w-5 h-5" />
                                <span className="font-semibold">Protection professionnelle</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Emballage & Protection
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous assurons l'emballage complet de vos biens grâce à des matériaux de haute qualité,
                                conçus pour protéger le mobilier, les équipements techniques, les objets fragiles ou volumineux.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous assurons</h3>
                            <ul className="space-y-3 mb-6">
                                {emballagePoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Chaque élément est soigneusement protégé pour éviter tout risque de dommage.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-minimalist-interior-architecture-with-natur.jpg"
                                alt="Emballage et protection"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Transport Sécurisé - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/construction-site-cranes.jpg"
                                alt="Transport sécurisé"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Truck className="w-5 h-5" />
                                <span className="font-semibold">Logistique experte</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Transport Sécurisé
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous garantissons un transport fiable et adapté, que ce soit pour un déménagement local,
                                national ou international. Nos équipes spécialisées assurent une manutention sans risque.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos garanties de transport</h3>
                            <ul className="space-y-3 mb-6">
                                {transportGaranties.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Vous bénéficiez d'un transport maîtrisé du point de départ jusqu'à la destination finale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Réinstallation - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Shield className="w-5 h-5" />
                                <span className="font-semibold">Installation complète</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Réinstallation Complète sur Site
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                À l'arrivée, nos techniciens procèdent au déchargement, à la mise en place et à la
                                réinstallation de vos espaces selon vos besoins ou vos plans d'agencement.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre processus</h3>
                            <ul className="space-y-3 mb-6">
                                {reinstallationSteps.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Nous vous livrons un espace immédiatement opérationnel.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-office-interior-with-wooden-desk-and-wall-m.jpg"
                                alt="Réinstallation complète"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Flexible - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modern-executive-office.jpg"
                                alt="Service flexible"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Building2 className="w-5 h-5" />
                                <span className="font-semibold">Adaptabilité totale</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Service Flexible
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Que vous soyez un particulier, une entreprise ou un commerce, nous adaptons notre service
                                selon la taille de votre projet et vos contraintes opérationnelles.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Domaines d'intervention</h3>
                            <ul className="space-y-3 mb-6">
                                {domainesIntervention.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Chaque projet est traité avec précision et discrétion.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Complet - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Award className="w-5 h-5" />
                                <span className="font-semibold">Engagement qualité</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Un Service Complet et Sans Stress
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous gérons toutes les étapes du déménagement pour vous offrir une expérience fluide
                                et parfaitement encadrée.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos engagements</h3>
                            <ul className="space-y-3 mb-6">
                                {engagements.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Votre satisfaction est notre priorité absolue.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-tech-meeting-room.jpg"
                                alt="Service complet"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            FAQ – Déménagement
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-[#F3F4F6] border-0 rounded-lg shadow-md px-6 overflow-hidden"
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
