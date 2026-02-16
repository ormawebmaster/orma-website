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

const avantagesPoints = [
    "Résistance à l'usure, aux UV et à l'humidité",
    "Couleurs vives et haute définition",
    "Aucune délamination ou écaillage",
    "Finition parfaitement lisse",
    "Convient aux environnements exigeants",
];

const supportsPoints = [
    "Aluminium haute finition",
    "Panneaux rigides (composites, surfaces techniques)",
    "Textiles techniques",
    "Plaques décoratives",
    "Éléments graphiques et signalétiques",
];

const domainesPoints = [
    "Signalétique & panneaux informatifs",
    "Décorations murales haute qualité",
    "Panneaux d'identité visuelle",
    "Mobilier décoratif sublimé",
    "Textiles techniques personnalisés",
    "Projets architecturaux et artistiques",
];

const processusSteps = [
    "Analyse du support et préparation",
    "Traitement et correction graphique",
    "Impression haute résolution",
    "Transfert thermique professionnel",
    "Contrôle qualité complet",
    "Emballage & livraison sécurisée",
];

const personnalisationPoints = [
    "Finition brillante, satinée ou mate",
    "Impression bord à bord",
    "Formats personnalisés",
    "Séries limitées ou prototypes",
    "Visuels haute résolution",
];

const durabilitePoints = [
    "Nettoyage simple",
    "Résistance aux rayures",
    "Excellente tenue dans le temps",
    "Convient aux zones de fort passage",
];

const faqItems = [
    {
        question: "Quels types de supports peuvent être sublimés ?",
        answer: "L'aluminium, les panneaux rigides compatibles et certains textiles techniques.",
    },
    {
        question: "La sublimation résiste-t-elle aux UV ?",
        answer: "Oui, les couleurs conservent leur intensité grâce à une excellente résistance.",
    },
    {
        question: "Est-il possible de produire des petites séries ?",
        answer: "Oui, nous proposons aussi bien des pièces uniques que des séries limitées.",
    },
    {
        question: "Proposez-vous un service de création graphique ?",
        answer: "Oui, nous pouvons vous accompagner dans la conception de vos visuels.",
    },
];

export default function TechniquesSublimationPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/modern-minimalist-interior-architecture-with-natur.jpg" alt="Sublimation" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Techniques de Sublimation</h1>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                          Impression haut de gamme pour une durabilité incomparable
                      </p>
                  </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">La sublimation permet un transfert permanent du visuel dans la matière.</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">Nous maîtrisons l'ensemble du processus pour un <strong className="text-foreground">rendu professionnel et homogène</strong>.</p>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Sparkles className="w-5 h-5" /><span className="font-semibold">Impression durable</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Processus d'Impression Durable</h2>
                            <p className="text-muted-foreground mb-6">La sublimation intègre le visuel dans la surface pour une tenue longue durée.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Avantages</h3>
                            <ul className="space-y-3 mb-6">
                                {avantagesPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Personnalisation durable et esthétique.</p>
                        </div>
                        <div><img src="/modern-office-interior-with-wooden-desk-and-wall-m.jpg" alt="Sublimation" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-laboratory-workspace.jpg" alt="Supports" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Layers className="w-5 h-5" /><span className="font-semibold">Supports variés</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Supports Compatibles</h2>
                            <p className="text-muted-foreground mb-6">Nous sublimons plusieurs types de surfaces.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Surfaces sublimables</h3>
                            <ul className="space-y-3 mb-6">
                                {supportsPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Adhérence optimale du visuel garantie.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Building2 className="w-5 h-5" /><span className="font-semibold">Applications pro</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Applications Professionnelles</h2>
                            <p className="text-muted-foreground mb-6">La sublimation offre un champ d'utilisation très large.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Domaines d'utilisation</h3>
                            <ul className="space-y-3 mb-6">
                                {domainesPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Pièces uniques ou projets complets.</p>
                        </div>
                        <div><img src="/modern-mall-interior.jpg" alt="Applications" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/building-inspection-and-structural-analysis.jpg" alt="Processus" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Settings className="w-5 h-5" /><span className="font-semibold">Processus</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Notre Processus de Réalisation</h2>
                            <p className="text-muted-foreground mb-6">Nous prenons en charge votre projet de A à Z.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Nos étapes</h3>
                            <ul className="space-y-3 mb-6">
                                {processusSteps.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Finition irréprochable garantie.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                                <Palette className="w-5 h-5" /><span className="font-semibold">Personnalisation</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Options de Personnalisation</h2>
                            <p className="text-muted-foreground mb-6">Configurations adaptées à vos besoins.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Possibilités</h3>
                            <ul className="space-y-3 mb-6">
                                {personnalisationPoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">Sublimation adaptée au design et à l'usage final.</p>
                        </div>
                        <div><img src="/modern-executive-office.jpg" alt="Personnalisation" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1"><img src="/modern-office-building.jpg" alt="Durabilité" className="w-full h-auto rounded-2xl shadow-xl" /></div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
                                <Shield className="w-5 h-5" /><span className="font-semibold">Durabilité</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Maintenance & Durabilité</h2>
                            <p className="text-muted-foreground mb-6">La sublimation nécessite peu d'entretien.</p>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Caractéristiques</h3>
                            <ul className="space-y-3 mb-6">
                                {durabilitePoints.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>))}
                            </ul>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-red-600 pl-4">Éclat et netteté conservés pendant des années.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">FAQ – Techniques de Sublimation</h2>
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
