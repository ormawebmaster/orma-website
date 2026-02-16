"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Shield,
    Warehouse,
    Clock,
    Package,
    ClipboardCheck,
    Building2,
    Home,
    Lock,
    Eye,
    Truck
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const securiteGaranties = [
    "Espaces protégés et sous surveillance",
    "Zones de stockage propres et contrôlées",
    "Conditions adaptées pour éviter les dégradations",
    "Traçabilité et gestion des entrées / sorties",
    "Accès exclusivement réservé au personnel autorisé",
];

const optionsStockage = [
    "Stockage temporaire entre deux projets",
    "Stockage longue durée pour mobilier excédentaire",
    "Conservation d'éléments non encore installés",
    "Gestion des stocks pour projets multi-sites",
    "Solutions adaptées aux professionnels comme aux particuliers",
];

const manutentionServices = [
    "Réception et contrôle des marchandises",
    "Emballage et protection si nécessaire",
    "Manipulation en toute sécurité",
    "Préparation avant transport ou installation",
    "Organisation et inventaire sur demande",
];

const pourQui = [
    { text: "Entreprises en transition ou réaménagement", icon: Building2 },
    { text: "Architectes et installateurs", icon: ClipboardCheck },
    { text: "Particuliers en cours de déménagement", icon: Home },
    { text: "Entreprises avec stockage temporaire de mobilier", icon: Package },
    { text: "Chantiers nécessitant une mise en attente du matériel", icon: Warehouse },
];

const faqItems = [
    {
        question: "Peut-on stocker du mobilier et des équipements ?",
        answer: "Oui, nous stockons tout type de mobilier, matériel et équipements non dangereux.",
    },
    {
        question: "Proposez-vous un stockage temporaire ?",
        answer: "Oui, nous proposons du stockage à court, moyen et long terme.",
    },
    {
        question: "Est-ce sécurisé ?",
        answer: "Nos espaces sont surveillés, contrôlés et réservés exclusivement au personnel autorisé.",
    },
    {
        question: "Pouvez-vous gérer la manutention sur place ?",
        answer: "Oui, nous assurons la réception, la manipulation et la préparation du matériel stocké.",
    },
    {
        question: "Est-il possible de combiner stockage + livraison + installation ?",
        answer: "Oui, nous pouvons intégrer le stockage dans une prestation globale clé en main.",
    },
];

export default function SolutionsStockagePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/modern-minimalist-interior-architecture-with-natur.jpg"
                        alt="Solutions de Stockage"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                          Solutions de Stockage
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Espaces sécurisés et gestion professionnelle pour vos biens
                      </p>
                  </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        <strong className="text-foreground">ORMA Swiss SA</strong> met à votre disposition des espaces
                        de stockage sécurisés, adaptés au mobilier, aux équipements techniques, aux matériaux ou aux
                        pièces en attente de livraison ou d'installation.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Nous assurons une gestion organisée, professionnelle et flexible selon vos besoins.
                    </p>
                </div>
            </section>

            {/* Stockage Sécurisé - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Lock className="w-5 h-5" />
                                <span className="font-semibold">Sécurité garantie</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Stockage Sécurisé & Contrôlé
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nos installations offrent un environnement sécurisé et optimisé pour la conservation de vos biens,
                                qu'il s'agisse de mobilier, d'aménagements sur mesure ou de matériel professionnel.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos garanties de sécurité</h3>
                            <ul className="space-y-3 mb-6">
                                {securiteGaranties.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Votre matériel est conservé en parfait état jusqu'à sa restitution ou installation.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-office-building.jpg"
                                alt="Stockage sécurisé"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stockage Court/Long Terme - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modern-building-exterior-dusk-architecture.jpg"
                                alt="Stockage flexible"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Clock className="w-5 h-5" />
                                <span className="font-semibold">Flexibilité totale</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Stockage Court & Long Terme
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous proposons des solutions flexibles adaptées au volume, à la durée et au type de biens
                                que vous souhaitez stocker.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Options disponibles</h3>
                            <ul className="space-y-3 mb-6">
                                {optionsStockage.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Nous ajustons l'espace selon vos besoins, sans engagement inutile.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manutention & Gestion - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Shield className="w-5 h-5" />
                                <span className="font-semibold">Gestion professionnelle</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Manutention & Gestion
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Notre équipe assure la réception, la manutention et la préparation du matériel stocké,
                                dans le respect de votre planning et de vos instructions.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous prenons en charge</h3>
                            <ul className="space-y-3 mb-6">
                                {manutentionServices.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Nous garantissons une gestion fluide et professionnelle de votre stock.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/traditional-workshop-renovation.jpg"
                                alt="Manutention professionnelle"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pour qui ? - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modern-executive-office.jpg"
                                alt="Solutions pour tous"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Eye className="w-5 h-5" />
                                <span className="font-semibold">Solution idéale</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Pour Vos Projets d'Aménagement
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nos solutions de stockage s'intègrent parfaitement dans vos projets de fabrication,
                                déménagement, installation ou rénovation.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Pour qui ?</h3>
                            <ul className="space-y-3 mb-6">
                                {pourQui.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Une solution adaptée à chaque besoin professionnel ou particulier.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            FAQ – Solutions de Stockage
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
