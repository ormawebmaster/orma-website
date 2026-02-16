"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    FileText,
    Box,
    Zap,
    ClipboardCheck,
    Ruler,
    FileSearch,
    Layers,
    Lightbulb,
    Settings,
    Layout,
    Users,
    Eye
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const planificationPoints = [
    "Optimiser l'utilisation des espaces",
    "Anticiper les contraintes techniques (électricité, acoustique, circulations, ergonomie…)",
    "Assurer la cohérence entre esthétique et fonctionnalité",
    "Garantir une mise en production sans erreur",
];

const plans2D = [
    "Plans d'implantation",
    "Plans techniques cotés",
    "Plans de mobiliers spécifiques",
    "Plans d'électricité, éclairage et réseaux",
];

const rendus3D = [
    "Vues 3D photo-réalistes",
    "Perspectives immersives",
    "Intégration des matériaux, textures et couleurs réelles",
    "Ajustements instantanés selon vos retours",
];

const faisabilitePoints = [
    { text: "Vérification des contraintes structurelles", icon: FileSearch },
    { text: "Choix des matériaux adaptés", icon: Layers },
    { text: "Compatibilité avec les normes en vigueur", icon: ClipboardCheck },
    { text: "Adaptation aux dimensions existantes", icon: Ruler },
    { text: "Optimisation pour la fabrication", icon: Settings },
];

const accompagnementSteps = [
    "Relevés sur site",
    "Études préliminaires",
    "Plans techniques",
    "Modélisation 3D",
    "Validation finale",
    "Transmission aux ateliers & pilotage du projet",
];

const faqItems = [
    {
        question: "Fournissez-vous des plans avant la production ?",
        answer: "Oui, tous nos projets sont accompagnés de plans 2D et de modèles 3D pour validation.",
    },
    {
        question: "Puis-je demander des modifications après le rendu 3D ?",
        answer: "Bien sûr. Les ajustements font partie du processus afin d'obtenir le résultat parfait.",
    },
    {
        question: "Travaillez-vous avec des architectes ou bureaux externes ?",
        answer: "Oui, nous collaborons régulièrement avec des architectes, designers et ingénieurs.",
    },
    {
        question: "Puis-je recevoir uniquement un service de DAO sans fabrication ?",
        answer: "Absolument. Nous proposons des services de planification et DAO indépendants, adaptés à vos besoins spécifiques.",
    },
];

export default function PlanificationDAOPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/architectural-blueprints-and-drawings.jpg"
                        alt="Planification & DAO"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                          Planification & DAO
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Transformez vos idées en plans détaillés et visualisations 3D réalistes
                      </p>
                  </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        La planification et la DAO (Dessin Assisté par Ordinateur) sont des étapes essentielles
                        pour assurer une réalisation précise et cohérente de vos projets d'aménagement.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Chez <strong className="text-foreground">ORMA Swiss SA</strong>, nous transformons vos idées
                        en plans techniques détaillés et en visualisations 3D réalistes, afin de garantir une
                        coordination optimale entre toutes les phases du projet.
                    </p>
                </div>
            </section>

            {/* Planification rigoureuse - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Layout className="w-5 h-5" />
                                <span className="font-semibold">Expertise métier</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Une planification rigoureuse
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Chaque projet commence par une compréhension approfondie de vos besoins,
                                de vos contraintes techniques et de votre vision. Nos spécialistes assurent
                                une planification complète permettant de :
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Ce que nous garantissons</h3>
                            <ul className="space-y-3 mb-6">
                                {planificationPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Notre objectif : vous offrir un rendu clair, fiable et immédiatement exploitable.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-office-interior-with-wooden-desk-and-archit.jpg"
                                alt="Planification rigoureuse"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans 2D - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/architectural-blueprints-and-drawings.jpg"
                                alt="Plans 2D détaillés"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <FileText className="w-5 h-5" />
                                <span className="font-semibold">Documentation technique</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Plans 2D détaillés
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nous réalisons l'ensemble des documents techniques nécessaires à la fabrication
                                et à l'installation de votre futur aménagement.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos livrables 2D</h3>
                            <ul className="space-y-3 mb-6">
                                {plans2D.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Ces documents garantissent une exécution précise et alignée à vos attentes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modélisation 3D - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Box className="w-5 h-5" />
                                <span className="font-semibold">Visualisation immersive</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Modélisation 3D & Rendus
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nos rendus 3D permettent de visualiser votre espace avant même sa fabrication.
                                Découvrez votre projet dans ses moindres détails.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos rendus incluent</h3>
                            <ul className="space-y-3 mb-6">
                                {rendus3D.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                La 3D est un outil essentiel pour valider le design final et faciliter la prise de décision.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/3d-scanning-technology-equipment.jpg"
                                alt="Modélisation 3D"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Coordination technique - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/building-inspection-and-structural-analysis.jpg"
                                alt="Coordination technique"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Zap className="w-5 h-5" />
                                <span className="font-semibold">Analyse complète</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Coordination technique & Faisabilité
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Chaque projet bénéficie d'une analyse de faisabilité complète pour assurer
                                une production maîtrisée et une installation sans surprise.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre analyse inclut</h3>
                            <ul className="space-y-3 mb-6">
                                {faisabilitePoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Cette étape garantit une exécution fluide du projet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accompagnement A à Z - Style livraison-installation-2 */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Users className="w-5 h-5" />
                                <span className="font-semibold">Service complet</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Un accompagnement de A à Z
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Notre équipe vous accompagne tout au long du processus,
                                de la première esquisse jusqu'à la transmission aux ateliers.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre processus</h3>
                            <ul className="space-y-3 mb-6">
                                {accompagnementSteps.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Tout est pensé pour garantir un résultat fiable, esthétique et durable.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-tech-meeting-room.jpg"
                                alt="Accompagnement de A à Z"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Style Création & Conception */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            FAQ – Planification & DAO
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
