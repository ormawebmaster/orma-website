"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Palette,
    Layers,
    Building2,
    Settings,
    Shield
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const finitionsPoints = [
    "Laquage professionnel",
    "Vernis et protections spécifiques",
    "Traitements anti-UV",
    "Protection contre l'usure",
    "Textures et effets spéciaux",
];

const sublimationPoints = [
    "Couleurs stables et profondes",
    "Résistance aux UV",
    "Impression haute définition",
    "Surface homogène",
    "Durabilité renforcée",
];

const supportsPoints = [
    "Aluminium traité",
    "Panneaux composites",
    "Bois technique",
    "Surfaces décoratives",
    "Éléments de mobilier",
];

const domainesPoints = [
    "Signalétique haut de gamme",
    "Aménagement retail",
    "Habillages muraux décoratifs",
    "Mobilier personnalisé",
    "Projets architecturaux",
];

const durabilitePoints = [
    "Nettoyage simple",
    "Résistance aux rayures",
    "Stabilité des couleurs",
    "Longévité accrue",
    "Adapté aux environnements publics",
];

const faqItems = [
    {
        question: "Quelles finitions proposez-vous ?",
        answer: "Nous proposons laquage professionnel, vernis spécifiques, protections techniques et traitements adaptés aux environnements exigeants.",
    },
    {
        question: "En quoi la sublimation est-elle différente d'une impression classique ?",
        answer: "La sublimation intègre le visuel directement dans la matière par transfert thermique, garantissant durabilité et homogénéité sans film de surface.",
    },
    {
        question: "Les couleurs résistent-elles aux UV ?",
        answer: "Oui. Nos procédés assurent une excellente stabilité face aux UV et aux usages intensifs.",
    },
    {
        question: "Peut-on personnaliser des petites séries ?",
        answer: "Oui. Nous réalisons des pièces unitaires comme des petites ou moyennes séries.",
    },
    {
        question: "Proposez-vous l'installation ?",
        answer: "Oui. Nous pouvons assurer la fabrication et la pose des éléments finis.",
    },
];

export default function TechniquesSublimationPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/modern-minimalist-interior-architecture-with-natur.jpg" alt="Techniques de finition & sublimation" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Techniques de finition & sublimation</h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                            Finitions haut de gamme et personnalisation durable.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">Nos techniques de finition et de sublimation valorisent chaque surface avec précision.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Nous assurons un <strong className="text-foreground">rendu homogène, durable et parfaitement maîtrisé</strong>.</p>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Sparkles className="w-5 h-5" /><span className="font-semibold">Finitions</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Finitions Haut de Gamme</h2>
                            <p className="text-muted-foreground mb-6">La finition est l'étape qui révèle la qualité d'un projet. Nous appliquons des traitements précis pour garantir esthétique et longévité.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos finitions</h3>
                            <ul className="space-y-3 mb-6">
                                {finitionsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">La qualité se voit dans les détails.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/modern-office-interior-with-wooden-desk-and-wall-m.jpg" alt="Finitions" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/durabilite-maintenance.jpg" alt="Sublimation" className="w-full h-full object-cover" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Palette className="w-5 h-5" /><span className="font-semibold">Sublimation</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Sublimation Haute Précision</h2>
                            <p className="text-muted-foreground mb-6">La sublimation permet d'intégrer durablement un visuel dans la matière, sans film apparent.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Avantages</h3>
                            <ul className="space-y-3 mb-6">
                                {sublimationPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">L'image fusionnée à la surface.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Layers className="w-5 h-5" /><span className="font-semibold">Supports variés</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Supports Compatibles</h2>
                            <p className="text-muted-foreground mb-6">Nous appliquons nos techniques de finition et sublimation sur différents supports professionnels.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Supports</h3>
                            <ul className="space-y-3 mb-6">
                                {supportsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Polyvalence maîtrisée.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/sublimation-haute-precision.png" alt="Supports" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/applications-professionnelles.jpg" alt="Applications" className="w-full h-full object-cover" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Building2 className="w-5 h-5" /><span className="font-semibold">Applications pro</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Applications Professionnelles</h2>
                            <p className="text-muted-foreground mb-6">Ces techniques trouvent leur place dans les environnements exigeants et à forte visibilité.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Domaines</h3>
                            <ul className="space-y-3 mb-6">
                                {domainesPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Valoriser l'espace par la finition.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Shield className="w-5 h-5" /><span className="font-semibold">Durabilité</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Durabilité & Maintenance</h2>
                            <p className="text-muted-foreground mb-6">Nos finitions sont conçues pour résister aux usages intensifs tout en conservant leur qualité visuelle.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Caractéristiques</h3>
                            <ul className="space-y-3 mb-6">
                                {durabilitePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Esthétique durable et technique maîtrisée.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/supports-compatibles.jpg" alt="Durabilité" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">FAQ – Techniques de finition & sublimation</h2>
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
