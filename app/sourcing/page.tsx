"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Search,
    Globe,
    FileText,
    Ruler,
    Shield,
    Wallet,
    ClipboardCheck,
    Package,
    Truck,
    Award,
    Eye,
    RefreshCw,
    Target
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const analyseBesoins = [
    "Caractéristiques techniques souhaitées",
    "Contraintes de dimensions, matériaux et finitions",
    "Normes de sécurité & exigences de durabilité",
    "Budget cible et délais d'approvisionnement",
    "Compatibilité avec vos modèles ou plans existants",
];

const processusSelection = [
    "Analyse du marché et des options disponibles",
    "Pré-sélection des fournisseurs adaptés (Suisses, Européens ou Worldwide)",
    "Vérification de la qualité, certifications et fiabilité",
    "Comparatif des prix, délais et garanties",
    "Présentation des meilleures options avec recommandations",
];

const exemplesSourcing = [
    "Matériaux d'agencement (bois, stratifiés, surfaces techniques, métal…)",
    "Quincailleries professionnelles",
    "Accessoires et équipements spécialisés",
    "Solutions d'éclairage et composants électriques",
    "Mobilier spécifique ou sur catalogue",
    "Machines, outils ou appareils techniques",
];

const validationSuivi = [
    "Demandes d'échantillons & prototypes",
    "Commandes auprès des fournisseurs",
    "Suivi de production et contrôles qualité",
    "Vérification de conformité selon le cahier de charge",
    "Organisation de la livraison (Suisse / Europe / International)",
];

const engagements = [
    { text: "Réseau international de fournisseurs qualifiés", icon: Globe },
    { text: "Recherche optimisée selon budget et délais", icon: Target },
    { text: "Transparence totale sur la provenance et la qualité", icon: Eye },
    { text: "Solutions alternatives en cas d'urgence ou rupture", icon: RefreshCw },
    { text: "Accompagnement jusqu'à la réception finale", icon: CheckCircle2 },
];

const faqItems = [
    {
        question: "Faites-vous du sourcing international ?",
        answer: "Oui, nous sourçons auprès de fournisseurs en Suisse, en Europe et dans le monde entier selon les besoins du projet.",
    },
    {
        question: "Pouvez-vous fournir des échantillons ?",
        answer: "Oui, nous pouvons demander et organiser l'envoi d'échantillons avant validation finale.",
    },
    {
        question: "Travaillez-vous avec des fabricants spécifiques ?",
        answer: "Nous collaborons avec un large réseau, mais restons totalement indépendants pour vous proposer les meilleurs produits du marché.",
    },
    {
        question: "Gérez-vous également la commande et la livraison ?",
        answer: "Oui, nous pouvons gérer l'ensemble du processus : commande, suivi, contrôle qualité et livraison.",
    },
    {
        question: "Pouvez-vous chercher un produit très spécifique ou rare ?",
        answer: "Oui, c'est l'un de nos atouts : trouver des solutions techniques complexes ou difficilement disponibles.",
    },
];

export default function SourcingPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/modern-residential-exterior.jpg"
                        alt="Sourcing"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                          Sourcing
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Trouvez les meilleurs produits et fournisseurs grâce à notre réseau international
                      </p>
                  </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Chez <strong className="text-foreground">ORMA Swiss SA</strong>, nous vous accompagnons dans
                        la recherche et la sélection des meilleurs produits, matériaux et équipements pour vos projets d'aménagement.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Nous mobilisons notre réseau international de fournisseurs et partenaires pour vous garantir
                        des solutions fiables, durables et adaptées à vos contraintes techniques et esthétiques.
                    </p>
                </div>
            </section>

            {/* Analyse des besoins - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <FileText className="w-5 h-5" />
                                <span className="font-semibold">Cahier des charges</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Analyse des Besoins
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Avant toute recherche, nous réalisons une analyse précise de vos besoins pour garantir
                                un sourcing efficace et ciblé.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous définissons</h3>
                            <ul className="space-y-3 mb-6">
                                {analyseBesoins.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Une définition précise pour des résultats optimaux.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-laboratory-workspace.jpg"
                                alt="Analyse des besoins"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Recherche & Sélection - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modern-office-building.jpg"
                                alt="Recherche et sélection"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Search className="w-5 h-5" />
                                <span className="font-semibold">Réseau mondial</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Recherche & Sélection
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous identifions les fournisseurs les plus fiables en fonction de vos critères
                                spécifiques et de vos exigences de qualité.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre processus de sélection</h3>
                            <ul className="space-y-3 mb-6">
                                {processusSelection.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Une sélection rigoureuse pour les meilleurs résultats.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Matériaux & produits - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Package className="w-5 h-5" />
                                <span className="font-semibold">Solutions complètes</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Matériaux, Produits & Solutions
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous sourçons tous types d'éléments nécessaires à vos projets d'aménagement,
                                du plus courant au plus spécifique.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Exemples de sourcing</h3>
                            <ul className="space-y-3 mb-6">
                                {exemplesSourcing.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Une gamme complète pour tous vos besoins.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/traditional-workshop-renovation.jpg"
                                alt="Matériaux et produits"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Validation & Suivi - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modern-tech-meeting-room.jpg"
                                alt="Validation et suivi"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <ClipboardCheck className="w-5 h-5" />
                                <span className="font-semibold">Suivi complet</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Validation, Commandes & Suivi
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Après validation, nous assurons le suivi complet jusqu'à la réception
                                de vos produits et matériaux.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous prenons en charge</h3>
                            <ul className="space-y-3 mb-6">
                                {validationSuivi.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Un accompagnement jusqu'à la livraison finale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Votre avantage - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Award className="w-5 h-5" />
                                <span className="font-semibold">Expertise ORMA</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Votre Avantage avec ORMA
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Notre expertise garantit un sourcing rapide, fiable et transparent
                                pour tous vos projets d'aménagement.
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
                                Un partenaire de confiance pour vos approvisionnements.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-executive-office.jpg"
                                alt="Avantage ORMA"
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
                            FAQ – Sourcing
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
