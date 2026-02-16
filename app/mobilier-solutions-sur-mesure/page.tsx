"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Briefcase, Store, Home, Building, Volume2, CheckCircle, Leaf, Ruler, Settings } from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const avantagesSurMesure = [
    "Valorisation optimale de vos espaces",
    "Fonctionnalité adaptée à vos usages",
    "Intégration parfaite dans l'environnement",
    "Respect des contraintes techniques et budgétaires",
];

const professionnelPoints = [
    "Bureaux ergonomiques et modernes",
    "Rangements optimisés sur mesure",
    "Comptoirs d'accueil design",
    "Tables de réunion fonctionnelles",
];

const commercialPoints = [
    "Mobilier pour magasins et boutiques",
    "Agencement restaurants et hôtels",
    "Espaces d'accueil premium",
    "Reflet de votre identité de marque",
];

const residentielPoints = [
    "Cuisines sur mesure haut de gamme",
    "Dressings et bibliothèques",
    "Espaces multimédia et salons",
    "Finitions premium et design harmonieux",
];

const collectivitesPoints = [
    "Agencements pour écoles et bureaux publics",
    "Salles de réunion fonctionnelles",
    "Bâtiments culturels et administratifs",
    "Durabilité, sécurité et qualité d'usage",
];

const acoustiquePoints = [
    "Solutions acoustiques personnalisées",
    "Amélioration du bien-être au travail",
    "Performance optimisée dans les open spaces",
    "Intégration esthétique des panneaux",
];

const processSteps = [
    "Étude et prise de mesure sur site",
    "Conception et modélisation 3D",
    "Validation des matériaux et finitions",
    "Fabrication en atelier suisse",
    "Livraison et installation par nos équipes",
];

const qualitePoints = [
    "Matériaux de fournisseurs certifiés",
    "Circuits courts privilégiés",
    "Bois issus de forêts gérées durablement",
    "Standards suisses de qualité et sécurité",
];

const faqItems = [
    {
        question: "Quels types d'espaces peuvent être aménagés sur mesure ?",
        answer: "Nous intervenons dans les domaines industriels, tertiaires, résidentiels, commerciaux et publics. Chaque environnement mérite une solution adaptée."
    },
    {
        question: "Puis-je combiner plusieurs matériaux ?",
        answer: "Absolument. Nous travaillons le bois, le métal, le verre, les surfaces solides et les matériaux composites selon vos goûts et vos besoins techniques."
    },
    {
        question: "Quelle est la durée moyenne d'un projet ?",
        answer: "De la conception à la pose, un projet complet dure généralement entre 4 et 10 semaines, selon la complexité."
    },
    {
        question: "Proposez-vous un service d'entretien ou de modification ?",
        answer: "Oui. Nous proposons des services d'adaptation, maintenance et évolution de vos installations existantes."
    }
];

export default function MobilierSolutionsSurMesurePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="/a.jpg"
                        alt="Solutions Sur Mesure - Mobilier"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                          Solutions Sur Mesure
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Des créations uniques adaptées à vos besoins, votre environnement et votre identité
                      </p>
                  </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Chez <strong className="text-foreground">ORMA Swiss SA</strong>, chaque projet d'agencement est une création unique.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Nos solutions sur mesure sont conçues pour s'adapter à vos besoins spécifiques, à votre environnement et à votre identité visuelle, qu'il s'agisse d'un <strong className="text-foreground">espace professionnel, privé ou collectif</strong>.
                    </p>
                </div>
            </section>

            {/* Pourquoi choisir une solution sur mesure */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Ruler className="w-5 h-5" />
                                <span className="font-semibold">Sur mesure</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Pourquoi choisir une solution sur mesure ?
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Le mobilier sur mesure permet de valoriser vos espaces tout en optimisant leur fonctionnalité. Chaque élément est pensé pour s'intégrer parfaitement dans son environnement.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Les avantages</h3>
                            <ul className="space-y-3 mb-6">
                                {avantagesSurMesure.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Nos équipes vous accompagnent de la conception à l'installation pour un résultat durable et élégant.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-minimalist-interior-architecture-with-natur.jpg"
                                alt="Solution sur mesure"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobilier Professionnel */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/a.webp"
                                alt="Mobilier Professionnel"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Briefcase className="w-5 h-5" />
                                <span className="font-semibold">Professionnel</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Mobilier Professionnel
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Conception de bureaux, rangements, comptoirs d'accueil, tables de réunion et solutions ergonomiques adaptées aux environnements de travail modernes.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos réalisations</h3>
                            <ul className="space-y-3 mb-6">
                                {professionnelPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Des espaces de travail optimisés pour la productivité et le bien-être.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Espaces Commerciaux et Hôtellerie */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Store className="w-5 h-5" />
                                <span className="font-semibold">Commercial</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Espaces Commerciaux & Hôtellerie
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Création de mobiliers sur mesure pour magasins, restaurants, hôtels et espaces d'accueil. Chaque réalisation reflète votre identité de marque et optimise l'expérience client.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre expertise</h3>
                            <ul className="space-y-3 mb-6">
                                {commercialPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Sublimez votre image de marque avec un mobilier unique.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/b.webp"
                                alt="Espaces Commerciaux"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Aménagement Privé et Résidentiel */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/cc.webp"
                                alt="Aménagement Privé"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Home className="w-5 h-5" />
                                <span className="font-semibold">Résidentiel</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Aménagement Privé & Résidentiel
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Mobilier sur mesure pour cuisines, dressings, bibliothèques, espaces multimédia ou salons. Des finitions haut de gamme et un design pensé pour le confort et l'harmonie.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos créations</h3>
                            <ul className="space-y-3 mb-6">
                                {residentielPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Transformez votre intérieur en un espace unique à votre image.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Espaces Publics et Collectivités */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Building className="w-5 h-5" />
                                <span className="font-semibold">Collectivités</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Espaces Publics & Collectivités
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Agencements fonctionnels pour les écoles, bureaux publics, salles de réunion ou bâtiments culturels. Nous privilégions la durabilité, la sécurité et la qualité d'usage.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre approche</h3>
                            <ul className="space-y-3 mb-6">
                                {collectivitesPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                Des aménagements durables au service du bien commun.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/architectural-blueprints-and-drawings.jpg"
                                alt="Espaces Publics"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Acoustique et Confort */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/modern-office-interior-with-wooden-desk-and-archit.jpg"
                                alt="Acoustique et Confort"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Volume2 className="w-5 h-5" />
                                <span className="font-semibold">Acoustique</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Acoustique & Confort
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Intégration de solutions acoustiques personnalisées pour améliorer le bien-être et la performance des utilisateurs dans les espaces ouverts.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos solutions</h3>
                            <ul className="space-y-3 mb-6">
                                {acoustiquePoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">
                                Un environnement sonore maîtrisé pour un confort optimal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notre Processus */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Settings className="w-5 h-5" />
                                <span className="font-semibold">Du dessin à la pose</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Une expertise complète
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Chaque projet suit un processus structuré garantissant une cohérence esthétique et une qualité irréprochable à chaque étape.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre processus</h3>
                            <ul className="space-y-3 mb-6">
                                {processSteps.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                                            {index + 1}
                                        </span>
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                De la première idée à l'installation finale, nous sommes à vos côtés.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-tech-meeting-room.jpg"
                                alt="Notre processus"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Engagement Qualité & Durabilité */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/traditional-workshop-renovation.jpg"
                                alt="Engagement Qualité"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-4">
                                <Leaf className="w-5 h-5" />
                                <span className="font-semibold">Durabilité</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Engagement Qualité & Durabilité
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Nos matériaux proviennent de fournisseurs certifiés, favorisant les circuits courts et les bois issus de forêts gérées durablement.
                            </p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos engagements</h3>
                            <ul className="space-y-3 mb-6">
                                {qualitePoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-green-600 pl-4">
                                Chaque pièce est fabriquée avec soin, dans le respect des standards suisses.
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
                            FAQ – Solutions Sur Mesure
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
