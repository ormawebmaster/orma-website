"use client"

import { Footer } from "@/components/footer"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Database, Lock, Eye, UserCheck, Mail, Clock, FileText } from "lucide-react"
import Link from "next/link"

export default function PolitiqueConfidentialitePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-primary" />
                <NavbarGreenTopBar />
                <div className="relative z-10 px-6 md:px-12 lg:px-20 w-full">
                  <div className="max-w-7xl mx-auto">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                          Politique de Confidentialité
                      </h1>
                      <p className="text-lg md:text-xl text-white/90">
                          Protection de vos données personnelles
                      </p>
                  </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-4xl">

                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Chez ORMA Swiss SA, nous accordons une importance primordiale à la protection de vos données
                            personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons,
                            utilisons et protégeons vos informations.
                        </p>
                    </div>

                    {/* Responsable du traitement */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Responsable du Traitement</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <p>Le responsable du traitement des données personnelles est :</p>
                                <p><strong className="text-foreground">ORMA Swiss SA</strong></p>
                                <p>Siège social : Suisse</p>
                                <p>Email : info@orma.ch</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Données collectées */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                                    <Database className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Données Collectées</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <p>Nous pouvons collecter les types de données suivants :</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-foreground">Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                                    <li><strong className="text-foreground">Données professionnelles :</strong> entreprise, fonction, secteur d'activité</li>
                                    <li><strong className="text-foreground">Données de navigation :</strong> adresse IP, cookies, pages visitées</li>
                                    <li><strong className="text-foreground">Données de correspondance :</strong> contenu des messages envoyés via nos formulaires</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Finalités */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Finalités du Traitement</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <p>Vos données personnelles sont collectées pour les finalités suivantes :</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Répondre à vos demandes de contact et de devis</li>
                                    <li>Gérer la relation commerciale et le suivi des projets</li>
                                    <li>Améliorer nos services et notre site web</li>
                                    <li>Vous informer sur nos actualités et services (avec votre consentement)</li>
                                    <li>Respecter nos obligations légales</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Base légale */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Base Légale</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <p>Le traitement de vos données repose sur :</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-foreground">Votre consentement</strong> pour l'envoi de communications commerciales</li>
                                    <li><strong className="text-foreground">L'exécution d'un contrat</strong> ou de mesures précontractuelles</li>
                                    <li><strong className="text-foreground">Notre intérêt légitime</strong> à améliorer nos services</li>
                                    <li><strong className="text-foreground">Nos obligations légales</strong> le cas échéant</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Conservation */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Durée de Conservation</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Vos données personnelles sont conservées pendant la durée nécessaire aux finalités
                                    pour lesquelles elles ont été collectées, et conformément aux exigences légales applicables.
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-foreground">Données clients :</strong> durée de la relation commerciale + 10 ans</li>
                                    <li><strong className="text-foreground">Données prospects :</strong> 3 ans à compter du dernier contact</li>
                                    <li><strong className="text-foreground">Cookies :</strong> 13 mois maximum</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Sécurité */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                                    <Lock className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Sécurité des Données</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
                                    protéger vos données personnelles contre tout accès non autorisé, toute modification,
                                    divulgation ou destruction.
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Connexions sécurisées (SSL/TLS)</li>
                                    <li>Accès restreint aux données</li>
                                    <li>Sauvegardes régulières</li>
                                    <li>Formation du personnel</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Vos droits */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <UserCheck className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Vos Droits</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <p>Conformément à la législation applicable, vous disposez des droits suivants :</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-foreground">Droit d'accès :</strong> obtenir une copie de vos données</li>
                                    <li><strong className="text-foreground">Droit de rectification :</strong> corriger des données inexactes</li>
                                    <li><strong className="text-foreground">Droit à l'effacement :</strong> demander la suppression de vos données</li>
                                    <li><strong className="text-foreground">Droit à la limitation :</strong> restreindre le traitement</li>
                                    <li><strong className="text-foreground">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                                    <li><strong className="text-foreground">Droit d'opposition :</strong> vous opposer au traitement</li>
                                </ul>
                                <p className="mt-4">
                                    Pour exercer ces droits, contactez-nous à : <strong className="text-foreground">info@orma.ch</strong>
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Cookies */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                                    <Database className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Cookies</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Notre site utilise des cookies pour améliorer votre expérience de navigation.
                                    Les cookies sont de petits fichiers texte stockés sur votre appareil.
                                </p>
                                <p><strong className="text-foreground">Types de cookies utilisés :</strong></p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-foreground">Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                                    <li><strong className="text-foreground">Cookies analytiques :</strong> pour comprendre l'utilisation du site</li>
                                    <li><strong className="text-foreground">Cookies de performance :</strong> pour améliorer les performances</li>
                                </ul>
                                <p className="mt-4">
                                    Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Modifications */}
                    <Card className="border-0 shadow-lg mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">Modifications</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                                    Toute modification sera publiée sur cette page avec une date de mise à jour.
                                </p>
                                <p><strong className="text-foreground">Dernière mise à jour :</strong> Décembre 2024</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact */}
                    <Card className="border-0 shadow-lg bg-[#F3F4F6] mb-8">
                        <CardContent className="p-8">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Questions ?</h2>
                            <p className="text-muted-foreground mb-6">
                                Pour toute question concernant cette politique de confidentialité ou vos données personnelles,
                                n'hésitez pas à nous contacter.
                            </p>
                            <Link href="/contact">
                                <Button className="bg-primary hover:bg-primary/90 group">
                                    Nous Contacter
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Lien vers mentions légales */}
                    <div className="mt-12">
                        <Link href="/mentions-legales">
                            <Button variant="outline" className="group">
                                <ArrowRight className="mr-2 w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                                Voir les Mentions Légales
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
