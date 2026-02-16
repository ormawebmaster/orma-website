"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Monitor,
    Building2,
    Wrench,
    Palette,
    Layers,
    ClipboardCheck,
    Headphones
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const bureauPoints = [
    "Panneaux acoustiques suspendus",
    "Séparateurs de postes",
    "Cabines ou modules isolants",
    "Habillages muraux absorbants",
];

const publicPoints = [
    "Halls d'accueil",
    "Bibliothèques",
    "Écoles et universités",
    "Centres culturels",
    "Restaurants & cantines",
];

const industrielPoints = [
    "Panneaux techniques absorbants",
    "Écrans anti-bruit",
    "Cloisons acoustiques industrielles",
    "Optimisation des zones de production",
];

const designPoints = [
    "Choix des textures",
    "Formes et découpes sur mesure",
    "Couleurs adaptées à votre charte",
    "Intégrations murales et plafonds design",
];

const materiauxPoints = [
    "Absorption élevée (coefficients techniques)",
    "Matériaux ignifuges au besoin",
    "Finitions résistantes et durables",
];

const processusSteps = [
    "Audit & Analyse Sonore – Relevé acoustique et évaluation des besoins",
    "Conception Sur Mesure – Modélisation 3D et choix des matériaux",
    "Fabrication & Finitions – Réalisation sur mesure dans notre atelier",
    "Installation Professionnelle – Pose contrôlée et validation finale",
];

const faqItems = [
    {
        question: "Proposez-vous un audit acoustique avant le projet ?",
        answer: "Oui, nous réalisons une analyse complète pour identifier les besoins réels.",
    },
    {
        question: "Vos matériaux acoustiques sont-ils ignifuges ?",
        answer: "Oui, nous proposons des matériaux conformes aux normes de sécurité incendie.",
    },
    {
        question: "Peut-on personnaliser les panneaux acoustiques ?",
        answer: "Bien sûr : formats, couleurs, formes, textures et impressions personnalisées.",
    },
    {
        question: "Assurez-vous la pose des installations ?",
        answer: "Oui, toutes nos solutions sont installées par nos équipes spécialisées.",
    },
];

export default function AcoustiquePage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/modern-interior-architecture-wooden-stairs.jpg" alt="Acoustique" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Acoustique</h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">Design, performance et confort sonore pour tous vos espaces</p>
                  </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">Nous développons des solutions acoustiques performantes pour améliorer le confort sonore.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Nos réalisations combinent <strong className="text-foreground">design, fonctionnalité et performance</strong>.</p>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Monitor className="w-5 h-5" /><span className="font-semibold">Bureaux</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Bureaux & Espaces de Travail</h2>
                            <p className="text-muted-foreground mb-6">Réduction du bruit ambiant, confidentialité et confort acoustique.</p>
                            <ul className="space-y-3 mb-6">
                                {bureauPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Des espaces de travail calmes et productifs.</p>
                        </div>
                        <div><img src="/modern-executive-office.jpg" alt="Bureaux" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-mall-interior.jpg" alt="Espaces Publics" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Building2 className="w-5 h-5" /><span className="font-semibold">Collectivités</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Espaces Publics & Collectivités</h2>
                            <p className="text-muted-foreground mb-6">Solutions esthétiques et résistantes pour les lieux à forte fréquentation.</p>
                            <ul className="space-y-3 mb-6">
                                {publicPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Des espaces publics agréables et confortables.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Wrench className="w-5 h-5" /><span className="font-semibold">Industrie</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Industriels & Techniques</h2>
                            <p className="text-muted-foreground mb-6">Traitements dédiés aux zones à forte émission sonore.</p>
                            <ul className="space-y-3 mb-6">
                                {industrielPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Protection auditive et confort des opérateurs.</p>
                        </div>
                        <div><img src="/traditional-workshop-renovation.jpg" alt="Industriel" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-minimalist-interior-architecture-with-natur.jpg" alt="Design" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Palette className="w-5 h-5" /><span className="font-semibold">Esthétique</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Design Personnalisé</h2>
                            <p className="text-muted-foreground mb-6">Solutions acoustiques intégrées à votre identité visuelle.</p>
                            <ul className="space-y-3 mb-6">
                                {designPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">L'acoustique au service du design.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Layers className="w-5 h-5" /><span className="font-semibold">Performance</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Matériaux Certifiés</h2>
                            <p className="text-muted-foreground mb-6">Tous nos matériaux sont sélectionnés pour leur performance.</p>
                            <ul className="space-y-3 mb-6">
                                {materiauxPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                        </div>
                        <div><img src="/modern-laboratory-workspace.jpg" alt="Matériaux" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/building-inspection-and-structural-analysis.jpg" alt="Processus" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <ClipboardCheck className="w-5 h-5" /><span className="font-semibold">Méthodologie</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Notre Processus d'Intervention</h2>
                            <p className="text-muted-foreground mb-6">De l'analyse acoustique à l'installation.</p>
                            <ul className="space-y-3 mb-6">
                                {processusSteps.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">FAQ – Acoustique</h2>
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
