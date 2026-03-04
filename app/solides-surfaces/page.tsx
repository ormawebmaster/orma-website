"use client"

import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CheckCircle2,
    Layers,
    Scissors,
    Building2,
    Settings,
    Wrench
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const applicationsPoints = [
    "Plans de travail sur mesure",
    "Comptoirs professionnels (hôtellerie, restauration, santé)",
    "Mobilier intégré design",
    "Habillages muraux techniques",
    "Formes organiques thermoformées",
];

const expertisesPoints = [
    "Découpe CNC de précision",
    "Collage et jonctions invisibles",
    "Thermoformage & cintrage",
    "Ponçage et finitions professionnelles",
    "Création de formes complexes",
];

const secteursPoints = [
    "Santé & laboratoires",
    "Hôtellerie & restauration",
    "Commerces & retail",
    "Architecture d'intérieur",
    "Bureaux & zones d'accueil",
    "Résidentiel premium",
];

const engagementsPoints = [
    "Analyse des besoins",
    "Conception sur mesure",
    "Fabrication de précision",
    "Installation professionnelle",
    "Contrôle qualité systématique",
];

const maintenancePoints = [
    "Réparation des fissures",
    "Restauration de surfaces rayées",
    "Ponçage et remise à neuf",
    "Ajustements et modifications",
];

const faqItems = [
    {
        question: "Quels matériaux Solid Surface utilisez-vous ?",
        answer: "Nous travaillons principalement avec Corian®, HI-MACS® et d'autres références reconnues pour leur qualité, durabilité et conformité technique.",
    },
    {
        question: "Proposez-vous le thermoformage ?",
        answer: "Oui. Nous réalisons le thermoformage pour créer des formes courbes, continues et complexes.",
    },
    {
        question: "Peut-on obtenir des assemblages invisibles ?",
        answer: "Oui. Nos techniques de collage et de finition permettent des jonctions pratiquement invisibles.",
    },
    {
        question: "Les surfaces Solid Surface sont-elles réparables ?",
        answer: "Oui. Les rayures et petits dommages peuvent être restaurés, prolongeant considérablement la durée de vie du matériau.",
    },
    {
        question: "Ces surfaces conviennent-elles aux environnements médicaux ?",
        answer: "Oui. Leur structure non poreuse et hygiénique les rend parfaitement adaptées aux environnements de santé et laboratoires.",
    },
];

export default function SolidesSurfacesPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/modern-office-interior-with-wooden-desk-and-archit.jpg" alt="Solides Surfaces" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Solid Surface & matériaux techniques</h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl">Résistance, hygiène, précision et design premium.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">Les matériaux Solid Surface offrent des <strong className="text-foreground">performances techniques élevées et une esthétique sans joints visibles</strong>.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Nous maîtrisons l'ensemble du processus : découpe, thermoformage, assemblage invisible et finition haut de gamme.</p>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Layers className="w-5 h-5" /><span className="font-semibold">Solid Surface</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Solutions en Solid Surface</h2>
                            <p className="text-muted-foreground mb-6">Nous travaillons avec des références reconnues telles que Corian®, HI-MACS® et autres matériaux techniques certifiés, pour des réalisations durables et esthétiques.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Applications possibles</h3>
                            <ul className="space-y-3 mb-6">
                                {applicationsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Des surfaces continues, élégantes et durables.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/solutions-solid-surface.png" alt="Solid Surface" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/techniques-fabrication-ss.png" alt="Techniques" className="w-full h-full object-cover" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Scissors className="w-5 h-5" /><span className="font-semibold">Fabrication précision</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Techniques de Fabrication</h2>
                            <p className="text-muted-foreground mb-6">Notre atelier assure une fabrication de haute précision, garantissant des assemblages invisibles et des finitions irréprochables.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos expertises</h3>
                            <ul className="space-y-3 mb-6">
                                {expertisesPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">La précision jusque dans le détail.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Building2 className="w-5 h-5" /><span className="font-semibold">Secteurs</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Domaines d'Application</h2>
                            <p className="text-muted-foreground mb-6">Les Solid Surfaces s'adaptent aux environnements exigeants où hygiène, durabilité et design sont essentiels.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Secteurs concernés</h3>
                            <ul className="space-y-3 mb-6">
                                {secteursPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Une matière polyvalente pour des usages exigeants.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/domaines-application-ss.jpg" alt="Secteurs" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/modern-executive-office.jpg" alt="Clé en main" className="w-full h-full object-cover" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Settings className="w-5 h-5" /><span className="font-semibold">Clé en main</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Service Clé en Main</h2>
                            <p className="text-muted-foreground mb-6">Nous assurons une gestion complète du projet, de l'étude à l'installation.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Notre accompagnement</h3>
                            <ul className="space-y-3 mb-6">
                                {engagementsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Une exécution irréprochable et durable.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Wrench className="w-5 h-5" /><span className="font-semibold">Maintenance</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Maintenance & Réparations</h2>
                            <p className="text-muted-foreground mb-6">Les surfaces Solid Surface sont réparables et durables. Nous assurons leur entretien et leur remise en état si nécessaire.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Services disponibles</h3>
                            <ul className="space-y-3 mb-6">
                                {maintenancePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Une surface qui conserve son aspect neuf.</p>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"><img src="/traditional-workshop-renovation.jpg" alt="Maintenance" className="w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">FAQ – Solides Surfaces</h2>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqItems.map((item, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-[#F3F4F6] border-0 rounded-lg shadow-md px-6 overflow-hidden">
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
