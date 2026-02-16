"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Ruler,
    Layout,
    Box,
    Factory,
    Users,
    Target,
    Scan,
    Home,
    Building
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const approchePoints = [
    "Prise de mesures numérique haute précision grâce au scan laser, pour capturer fidèlement l'existant.",
    "Plans, modélisation et rendus 2D / 3D réalisés par notre équipe DAO, pour projeter rapidement des solutions réalistes.",
    "Valorisation des surfaces : optimisation des volumes, des circulations, des usages et de l'ergonomie.",
    "Fabrication sur mesure dans notre usine ORMA France.",
    "Agencement et installation par nos équipes terrain.",
];

const garantiesPoints = [
    "Une meilleure précision des projets",
    "Des délais maîtrisés",
    "Une cohérence entre conception, fabrication et pose",
    "Des espaces pensés pour le bien-être, la fonctionnalité et la durabilité",
];

const interventionsPoints = [
    { text: "La prise de mesures seule", icon: Scan },
    { text: "L'étude et valorisation d'espace", icon: Layout },
    { text: "Un accompagnement global jusqu'à la fabrication et l'installation", icon: Factory },
];

const espacesTypes = [
    { text: "Bureaux et espaces de travail", icon: Building },
    { text: "Réceptions et accueils", icon: Users },
    { text: "Salles de conférence", icon: Target },
    { text: "Cuisines et salles de bain", icon: Home },
    { text: "Aménagements sur mesure", icon: Box },
];

const faqItems = [
    {
        question: "Quels types d'espaces pouvez-vous aménager ?",
        answer: "Nous intervenons sur tous types d'espaces professionnels et privés : bureaux, espaces de travail, réceptions, salles de conférence, cuisines, salles de bain et aménagements sur mesure.",
    },
    {
        question: "Comment fonctionne la prise de mesures numérique ?",
        answer: "Nous utilisons la technologie de scan laser 3D pour capturer fidèlement l'existant avec une haute précision. Cela nous permet de créer des plans détaillés et des modélisations 3D réalistes.",
    },
    {
        question: "Puis-je demander uniquement une étude de valorisation d'espace ?",
        answer: "Absolument. Selon vos besoins, nous pouvons intervenir uniquement sur la prise de mesures, l'étude de valorisation d'espace, ou un accompagnement global incluant fabrication et installation.",
    },
    {
        question: "Quels sont les délais pour un projet d'architecture d'intérieur ?",
        answer: "Les délais varient selon l'ampleur du projet. Grâce à notre intégration complète (conception, fabrication, installation), nous garantissons des délais maîtrisés et une cohérence optimale.",
    },
];

export default function ArchitectureInterieurPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/plans-3D-Happy-Monday.jpg"
                        alt="Architecture d'intérieur"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                          Architecture d'intérieur & Valorisation des espaces
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          De la prise de mesures à la réalisation sur mesure
                      </p>
                  </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Nous transformons vos espaces existants en environnements fonctionnels, esthétiques et durables,
                        grâce à une approche intégrée alliant mesure numérique, conception 2D/3D, fabrication sur mesure et installation.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Depuis 1948, <strong className="text-foreground">ORMA</strong> accompagne ses clients dans la conception
                        et la valorisation d'espaces professionnels et privés : bureaux, espaces de travail, réceptions,
                        salles de conférence, cuisines, salles de bain et aménagements sur mesure.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Aujourd'hui, nous structurons cette expertise historique au sein d'une prestation complète
                        d'architecture d'intérieur, s'appuyant sur des outils numériques de dernière génération
                        et un savoir-faire interne reconnu.
                    </p>
                </div>
            </section>

            {/* Notre approche */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Layout className="w-5 h-5" />
                                <span className="font-semibold">Notre expertise</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Une chaîne cohérente et maîtrisée
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Notre approche repose sur une intégration complète de tous les métiers
                                pour garantir un résultat optimal :
                            </p>
                            <ul className="space-y-3 mb-6">
                                {approchePoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <img
                                src="/i-mapper.jpg"
                                alt="Approche intégrée"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Ce que nous garantissons */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/building-inspection-and-structural-analysis.jpg"
                                alt="Garanties ORMA"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Target className="w-5 h-5" />
                                <span className="font-semibold">Nos garanties</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Cette intégration complète nous permet de garantir
                            </h2>
                            <ul className="space-y-3 mb-6">
                                {garantiesPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Des espaces pensés pour le bien-être, la fonctionnalité et la durabilité.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types d'espaces */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Building className="w-5 h-5" />
                                <span className="font-semibold">Nos domaines</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Types d'espaces que nous aménageons
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Notre expertise couvre une large gamme d'espaces professionnels et privés :
                            </p>
                            <ul className="space-y-3 mb-6">
                                {espacesTypes.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-tech-meeting-room.jpg"
                                alt="Types d'espaces"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Interventions flexibles */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/architectural-blueprints-and-drawings.jpg"
                                alt="Interventions flexibles"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Ruler className="w-5 h-5" />
                                <span className="font-semibold">Flexibilité</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Selon vos besoins, ORMA peut intervenir sur
                            </h2>
                            <ul className="space-y-4 mb-6">
                                {interventionsPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <item.icon className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground text-lg">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Avec cette offre, ORMA se positionne comme un partenaire structuré et légitime
                                en architecture d'intérieur, capable de transformer vos espaces en véritables
                                leviers de performance et de confort.
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
                            FAQ – Architecture d'intérieur
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
