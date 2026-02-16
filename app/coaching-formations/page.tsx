"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    GraduationCap,
    Monitor,
    Users,
    BookOpen,
    Award,
    Wrench,
    Settings,
    Target,
    MessageSquare,
    Lightbulb
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const formats = [
    "Sessions en présentiel (ateliers, workshops)",
    "Sessions en ligne (webinaires interactifs)",
    "Programmes mixtes (blended learning)",
    "Modules courts ou parcours certifiants",
];

const formationsTechniques = [
    "Méthodes d'assemblage et de montage",
    "Utilisation et sécurité des outils d'atelier",
    "Finitions et contrôles qualité",
];

const formationsOrganisationnelles = [
    "Gestion de projet & planification",
    "Optimisation des flux et espaces de travail",
    "Pratiques de logistique et manutention",
];

const formationsManagement = [
    "Leadership et conduite d'équipes",
    "Communication interne et relation client",
    "Gestion du changement et résolution de conflits",
];

const methodologieSteps = [
    "Analyse des besoins et définition des objectifs",
    "Conception d'un programme sur-mesure",
    "Sessions pratiques et évaluations intermédiaires",
    "Bilan, recommandations et plan d'action post-formation",
];

const garanties = [
    "Formateurs expérimentés et praticiens du terrain",
    "Programmes personnalisés selon vos contraintes métiers",
    "Supports pédagogiques et exercices pratiques fournis",
    "Suivi post-formation et recommandations concrètes",
];

const publicsConcernes = [
    { text: "Équipes production & atelier", icon: Wrench },
    { text: "Services logistique & installation", icon: Settings },
    { text: "Chefs de projet & managers", icon: Target },
    { text: "Architectes, designers et partenaires techniques", icon: Lightbulb },
];

const faqItems = [
    {
        question: "Proposez-vous des formations certifiantes ?",
        answer: "Selon le programme, nous pouvons délivrer des attestations de suivi ; des certifications partenaires sont possibles sur demande.",
    },
    {
        question: "Les formations peuvent-elles être réalisées sur site ?",
        answer: "Oui, nous intervenons dans vos locaux ou dans nos ateliers/showrooms pour des sessions pratiques.",
    },
    {
        question: "Quels sont les formats et durées habituels ?",
        answer: "Nous proposons des sessions courtes (demi-journée, journée) ou des parcours étalés (plusieurs semaines) selon les objectifs.",
    },
    {
        question: "Proposez-vous un suivi après la formation ?",
        answer: "Oui, un accompagnement post-formation (coaching de consolidation, audits) peut être inclus ou proposé en option.",
    },
    {
        question: "Combien de participants par session ?",
        answer: "Nous recommandons des groupes réduits (8–15 personnes) pour favoriser l'interaction et l'apprentissage pratique.",
    },
];

export default function CoachingFormationsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/modern-interior-architecture-wooden-stairs.jpg"
                        alt="Coaching & Formations"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                          Coaching & Formations
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Renforcez les compétences de vos équipes avec nos programmes sur-mesure
                      </p>
                  </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Chez <strong className="text-foreground">ORMA Swiss SA</strong>, nous proposons des services
                        de coaching et de formations conçus pour renforcer les compétences de vos équipes, optimiser
                        vos méthodes de travail et faciliter l'adoption des bonnes pratiques sur site.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Nos programmes sont pratiques, adaptés au terrain et pensés pour produire des résultats mesurables.
                    </p>
                </div>
            </section>

            {/* Approche pédagogique - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <GraduationCap className="w-5 h-5" />
                                <span className="font-semibold">Apprentissage pratique</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Approche pédagogique & Format
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nos formations allient apports théoriques, démonstrations pratiques et ateliers en situation
                                réelle afin d'assurer une assimilation rapide et durable des compétences.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Formats disponibles</h3>
                            <ul className="space-y-3 mb-6">
                                {formats.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Des formats adaptés à votre organisation et à vos contraintes.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-tech-meeting-room.jpg"
                                alt="Approche pédagogique"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Formations techniques - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/traditional-workshop-renovation.jpg"
                                alt="Formations techniques"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Wrench className="w-5 h-5" />
                                <span className="font-semibold">Expertise métier</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Formations Techniques
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Développez les compétences techniques de vos équipes avec des formations pratiques
                                adaptées aux réalités du terrain.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Thématiques couvertes</h3>
                            <ul className="space-y-3 mb-6">
                                {formationsTechniques.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Des compétences directement applicables en atelier.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formations organisationnelles - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Settings className="w-5 h-5" />
                                <span className="font-semibold">Optimisation</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Formations Organisationnelles
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Optimisez vos processus et améliorez la coordination de vos équipes grâce à des
                                formations axées sur l'organisation et la gestion de projet.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Thématiques couvertes</h3>
                            <ul className="space-y-3 mb-6">
                                {formationsOrganisationnelles.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Une meilleure organisation pour plus d'efficacité.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-office-interior-with-wooden-desk-and-archit.jpg"
                                alt="Formations organisationnelles"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Management & Soft-skills - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modern-executive-office.jpg"
                                alt="Management et soft-skills"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <MessageSquare className="w-5 h-5" />
                                <span className="font-semibold">Leadership</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Management & Soft-skills
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Renforcez les compétences managériales et relationnelles de vos responsables
                                pour une meilleure dynamique d'équipe.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Thématiques couvertes</h3>
                            <ul className="space-y-3 mb-6">
                                {formationsManagement.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Des leaders inspirants pour des équipes performantes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Méthodologie - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Target className="w-5 h-5" />
                                <span className="font-semibold">Processus structuré</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Méthodologie & Déroulé
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Chaque programme suit une méthodologie claire pour garantir l'efficacité
                                et l'atteinte des objectifs fixés.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Étapes de nos interventions</h3>
                            <ul className="space-y-3 mb-6">
                                {methodologieSteps.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Un accompagnement structuré du début à la fin.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-laboratory-workspace.jpg"
                                alt="Méthodologie"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Valeur ajoutée - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/architectural-blueprints-and-drawings.jpg"
                                alt="Valeur ajoutée"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Award className="w-5 h-5" />
                                <span className="font-semibold">Qualité garantie</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Valeur Ajoutée & Garanties
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous garantissons une transmission opérationnelle et mesurable des compétences
                                avec un suivi personnalisé.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous assurons</h3>
                            <ul className="space-y-3 mb-6">
                                {garanties.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Des résultats concrets et mesurables pour votre organisation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Publics concernés - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Users className="w-5 h-5" />
                                <span className="font-semibold">Pour tous profils</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Publics Concernés
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nos interventions s'adaptent à différents profils et niveaux d'expérience
                                au sein de votre organisation.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos formations s'adressent à</h3>
                            <ul className="space-y-3 mb-6">
                                {publicsConcernes.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Des programmes adaptés à chaque métier et niveau de responsabilité.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-office-interior-with-wooden-desk-and-wall-m.jpg"
                                alt="Publics concernés"
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
                            FAQ – Coaching & Formations
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
