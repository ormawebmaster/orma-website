"use client"

import { Footer } from "@/components/footer"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Mail, Phone, Globe, Scale, FileText } from "lucide-react"
import Link from "next/link"

export default function MentionsLegalesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-primary" />
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                          Mentions Légales
                      </h1>
                      <p className="text-lg md:text-xl text-white/90">
                          Informations légales et conditions d'utilisation
                      </p>
                  </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl">

                    {/* Éditeur du site */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <Building2 className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Éditeur du Site</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <p><strong className="text-foreground">Raison sociale :</strong> ORMA Swiss SA</p>
                                <p><strong className="text-foreground">Forme juridique :</strong> Société Anonyme de droit suisse</p>
                                <p><strong className="text-foreground">Siège social :</strong> Suisse</p>
                                <p><strong className="text-foreground">Numéro IDE :</strong> CHE-XXX.XXX.XXX</p>
                                <p><strong className="text-foreground">Capital social :</strong> CHF XXX'XXX.-</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Contact</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-primary" />
                                    <span>info@orma.ch</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-primary" />
                                    <span>+41 848 848 849</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-primary" />
                                    <span>www.orma-swiss.ch</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Hébergement */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Hébergement</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <p>Le site est hébergé par :</p>
                                <p><strong className="text-foreground">Hébergeur :</strong> [Nom de l'hébergeur]</p>
                                <p><strong className="text-foreground">Adresse :</strong> [Adresse de l'hébergeur]</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Propriété intellectuelle */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                                    <Scale className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Propriété Intellectuelle</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.)
                                    est la propriété exclusive d'ORMA Swiss SA ou de ses partenaires et est protégé par les lois
                                    suisses et internationales relatives à la propriété intellectuelle.
                                </p>
                                <p>
                                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des
                                    éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation
                                    écrite préalable d'ORMA Swiss SA.
                                </p>
                                <p>
                                    Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera
                                    considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions légales
                                    en vigueur.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Responsabilité */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Limitation de Responsabilité</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    ORMA Swiss SA s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour
                                    des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment
                                    et sans préavis, le contenu.
                                </p>
                                <p>
                                    Toutefois, ORMA Swiss SA ne peut garantir l'exactitude, la précision ou l'exhaustivité des
                                    informations mises à disposition sur ce site.
                                </p>
                                <p>
                                    En conséquence, ORMA Swiss SA décline toute responsabilité pour tout dommage résultant notamment
                                    d'une imprécision ou inexactitude des informations disponibles sur ce site, ou résultant de
                                    l'intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à
                                    disposition sur le site.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Droit applicable */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                                    <Scale className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Droit Applicable</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Le présent site et les mentions légales sont régis par le droit suisse.
                                </p>
                                <p>
                                    En cas de litige, et après échec de toute tentative de recherche d'une solution amiable,
                                    les tribunaux suisses seront seuls compétents pour connaître de ce litige.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Lien vers politique de confidentialité */}
                    <div className="mt-12">
                        <p className="text-muted-foreground mb-4">
                            Pour en savoir plus sur la gestion de vos données personnelles :
                        </p>
                        <Link href="/politique-de-confidentialite">
                            <Button className="bg-primary hover:bg-primary/90 group">
                                Politique de Confidentialité
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
