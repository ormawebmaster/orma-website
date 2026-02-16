"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Search, PenTool, CheckCircle, Wrench, Truck, Users, MessageSquare, Eye, Target, ClipboardCheck } from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const decouvertePoints = [
    "Écoute et analyse de vos besoins",
    "Compréhension de votre environnement",
    "Analyse de vos attentes et contraintes",
    "Identification des solutions d'agencement adaptées",
];

const conceptionPoints = [
    "Plans 2D/3D par nos architectes d'intérieur",
    "Rendus réalistes et choix de matériaux",
    "Équilibre esthétique, durabilité et ergonomie",
    "Vision concrète de votre projet",
];

const validationPoints = [
    "Prototype ou échantillon avant fabrication",
    "Validation des dimensions et finitions",
    "Vérification des aspects fonctionnels",
    "Conformité garantie entre idée et résultat",
];

const fabricationPoints = [
    "Outils de production haute précision",
    "Savoir-faire artisanal suisse",
    "Contrôle qualité rigoureux",
    "Chaque pièce vérifiée avant livraison",
];

const installationPoints = [
    "Mise en place complète sur site",
    "Intégration fluide dans vos espaces",
    "Suivi après installation",
    "Durabilité et satisfaction garanties",
];

const engagementsPoints = [
    { text: "Communication claire", icon: MessageSquare },
    { text: "Transparence sur les choix techniques", icon: Eye },
    { text: "Réactivité et adaptabilité", icon: Target },
    { text: "Respect strict de votre cahier des charges", icon: ClipboardCheck },
];

const faqItems = [
    {
        question: "Combien de temps dure un projet complet ?",
        answer: "Selon la complexité, un projet peut durer de 2 à 12 semaines, incluant conception, validation et installation."
    },
    {
        question: "Puis-je participer à la phase de conception ?",
        answer: "Oui, nous privilégions une co-création avec nos clients. Vous validez chaque étape avant le lancement en fabrication."
    },
    {
        question: "Utilisez-vous des matériaux écologiques ?",
        answer: "Oui, nous proposons une gamme complète de matériaux durables et recyclables, sélectionnés auprès de partenaires certifiés."
    },
    {
        question: "Que se passe-t-il après l'installation ?",
        answer: "Nous assurons un suivi post-projet, incluant maintenance, ajustements et évolutions selon vos besoins futurs."
    }
];

export default function MobilierMethodePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/a.jpg"
                        alt="Méthode de Fonctionnement - Mobilier"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                          Notre Méthode de Fonctionnement
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Un processus clair, rigoureux et collaboratif pour transformer vos idées en espaces parfaits
                      </p>
                  </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Chaque projet d'agencement est unique. Chez <strong className="text-foreground">ORMA Swiss SA</strong>, notre méthode repose sur un processus clair, rigoureux et collaboratif.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Nous mettons l'accent sur l'écoute, la compréhension et la précision technique pour transformer vos idées en <strong className="text-foreground">espaces parfaitement fonctionnels et esthétiques</strong>.
                    </p>
                </div>
            </section>

            {/* Étape 1: Découverte & Inspiration */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Search className="w-5 h-5" />
                                <span className="font-semibold">Étape 01</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Découverte & Inspiration
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous commençons par une phase d'écoute et d'analyse de vos besoins, de votre environnement et de vos attentes. Cette étape nous permet de comprendre votre univers et d'imaginer les solutions d'agencement les plus adaptées à vos usages et à votre image.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous faisons</h3>
                            <ul className="space-y-3 mb-6">
                                {decouvertePoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                🎯 Comprendre votre vision et vos besoins uniques.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/a.webp"
                                alt="Découverte & Inspiration"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Étape 2: Conception & Design */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/b.webp"
                                alt="Conception & Design"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <PenTool className="w-5 h-5" />
                                <span className="font-semibold">Étape 02</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Conception & Design
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nos architectes d'intérieur et concepteurs techniques développent une vision concrète de votre projet à travers des plans 2D/3D, des rendus réalistes et des choix de matériaux cohérents.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre approche</h3>
                            <ul className="space-y-3 mb-6">
                                {conceptionPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                🎯 Marier l'esthétique, la durabilité et l'ergonomie.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Étape 3: Validation & Prototypage */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-semibold">Étape 03</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Validation & Prototypage
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Avant toute fabrication, un prototype ou un échantillon peut être réalisé pour valider les dimensions, finitions et aspects fonctionnels. Cela garantit une parfaite conformité entre votre idée et le résultat final.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre processus</h3>
                            <ul className="space-y-3 mb-6">
                                {validationPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                🎯 Assurer la conformité avant production.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/cc.webp"
                                alt="Validation & Prototypage"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Étape 4: Fabrication & Contrôle Qualité */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/architectural-blueprints-and-drawings.jpg"
                                alt="Fabrication & Contrôle Qualité"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Wrench className="w-5 h-5" />
                                <span className="font-semibold">Étape 04</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Fabrication & Contrôle Qualité
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nos équipes en atelier donnent vie à votre mobilier d'agencement grâce à des outils de production de haute précision et un savoir-faire artisanal suisse. Chaque pièce est contrôlée rigoureusement avant livraison.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous garantissons</h3>
                            <ul className="space-y-3 mb-6">
                                {fabricationPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                🎯 Qualité et précision suisse garanties.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Étape 5: Installation & Suivi */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Truck className="w-5 h-5" />
                                <span className="font-semibold">Étape 05</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Installation & Suivi
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nos installateurs assurent la mise en place complète du mobilier sur site. Nous garantissons une intégration fluide dans vos espaces, et un suivi après installation pour assurer la durabilité et la satisfaction à long terme.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos engagements</h3>
                            <ul className="space-y-3 mb-6">
                                {installationPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                🎯 Intégration parfaite et satisfaction durable.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-office-interior-with-wooden-desk-and-archit.jpg"
                                alt="Installation & Suivi"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Accompagnement */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modern-tech-meeting-room.jpg"
                                alt="Accompagnement jusqu'à la Validation Finale"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Users className="w-5 h-5" />
                                <span className="font-semibold">Accompagnement</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Accompagnement jusqu'à la Validation Finale
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                À chaque étape, vous êtes guidé et accompagné par nos équipes pour garantir une réalisation conforme à vos attentes.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos engagements</h3>
                            <ul className="space-y-3 mb-6">
                                {engagementsPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                🎯 Vous validez à chaque étape avant le lancement de la production.
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
                            FAQ – Méthode & Processus
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
