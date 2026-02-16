"use client"

import { notFound } from "next/navigation"
import { Footer } from "@/components/footer"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { use } from "react"

// Team members data with full profiles
const teamMembers: Record<string, {
    name: string
    role: string
    department: string
    avatar: string
    email: string
    phone: string
    linkedin?: string
    bio: string
    expertise: string[]
}> = {
    "benjamin-leuenberger": {
        name: "Benjamin Leuenberger",
        role: "Fondateur & Directeur",
        department: "Direction",
        avatar: "/membre1_photo.jpeg",
        email: "info@orma.ch",
        phone: "+41 848 848 849",
        linkedin: "https://www.linkedin.com/in/benjamin-leuenberger",
        bio: "Benjamin Leuenberger est le fondateur et directeur d'ORMA Swiss SA. Fort de plus de 20 ans d'expérience dans l'agencement et la manufacture sur mesure, il a créé ORMA avec la vision de proposer des solutions innovantes et durables pour les espaces de travail. Passionné par l'excellence et l'innovation, il dirige l'entreprise avec une approche centrée sur la qualité et la satisfaction client.",
        expertise: [
            "Direction stratégique",
            "Développement commercial",
            "Innovation produit",
            "Gestion d'entreprise",
            "Relations clients"
        ]
    },
    "antoine-blaising": {
        name: "Antoine Blaising",
        role: "Directeur Technique et Commercial",
        department: "Département Vente",
        avatar: "/membre2_photo.jpg",
        email: "a.blaising@orma.ch",
        phone: "+41(0)79 888 84 46",
        linkedin: "https://www.linkedin.com/in/antoine-blaising",
        bio: "Antoine Blaising occupe le poste de Directeur Technique et Commercial chez ORMA Swiss SA. Avec une expertise approfondie dans les solutions d'agencement industriel et horloger, il accompagne les clients dans la définition et la réalisation de leurs projets. Son approche technique combinée à ses compétences commerciales lui permet de proposer des solutions sur mesure adaptées aux besoins spécifiques de chaque client.",
        expertise: [
            "Solutions techniques",
            "Conseil commercial",
            "Agencement horloger",
            "Gestion de projets",
            "Relation client"
        ]
    },
    "marc-dormoy": {
        name: "Marc Dormoy",
        role: "Attaché commercial",
        department: "Département Vente",
        avatar: "/placeholder-user.jpg",
        email: "m.dormoy@orma.ch",
        phone: "+41 (0)79.550.39.62",
        bio: "Marc Dormoy est attaché commercial chez ORMA. Il accompagne les clients dans leurs projets d'aménagement et de mobilier sur mesure, en apportant conseil et suivi personnalisé tout au long du processus.",
        expertise: [
            "Développement commercial",
            "Conseil client",
            "Suivi de projets",
            "Aménagement sur mesure"
        ]
    },
    "nelly-trigona": {
        name: "Nelly Trigona",
        role: "Responsable Administration",
        department: "Département Administration",
        avatar: "/membre3_1photo.jpg",
        email: "n.trigona@orma.ch",
        phone: "+41 (0)848.848.849",
        bio: "Nelly Trigona est responsable de l'administration chez ORMA. Elle supervise l'ensemble des activités administratives et veille au bon fonctionnement organisationnel de l'entreprise.",
        expertise: [
            "Gestion administrative",
            "Organisation",
            "Coordination interne",
            "Suivi opérationnel"
        ]
    },
    "elisabeth-suffissais": {
        name: "Elisabeth Suffissais",
        role: "Assistante Administration",
        department: "Département Administration",
        avatar: "/membre3_2photo.jpg",
        email: "e.suffissais@orma.ch",
        phone: "+41 (0)848 848 849",
        bio: "Elisabeth Suffissais est assistante en administration chez ORMA. Elle contribue au bon déroulement des opérations administratives quotidiennes et assure un support efficace à l'ensemble de l'équipe.",
        expertise: [
            "Support administratif",
            "Gestion documentaire",
            "Accueil et coordination",
            "Organisation"
        ]
    },
    "salwa-en-naji": {
        name: "Salwa En-Naji",
        role: "Assistante Administration",
        department: "Département Administration",
        avatar: "/membre3_3photo.jpg",
        email: "s.ennaji@orma.ch",
        phone: "+41 (0)848 848 849",
        bio: "Salwa En-Naji est assistante en administration chez ORMA. Elle participe activement à la gestion administrative et au suivi des dossiers courants de l'entreprise.",
        expertise: [
            "Support administratif",
            "Gestion de dossiers",
            "Coordination",
            "Communication interne"
        ]
    },
    "adil-el-ouirari": {
        name: "Adil El Ouirari",
        role: "Assistant Administration",
        department: "Département Administration",
        avatar: "/membre3_4photo.jpg",
        email: "a.elouirari@orma.ch",
        phone: "+41 (0)848 848 849",
        bio: "Adil El Ouirari est assistant en administration chez ORMA. Il assure le suivi des tâches administratives et contribue à l'organisation interne de l'entreprise.",
        expertise: [
            "Support administratif",
            "Gestion opérationnelle",
            "Suivi de dossiers",
            "Logistique administrative"
        ]
    },
    "fatima-chababa": {
        name: "Fatima Chababa",
        role: "Assistante Administration",
        department: "Département Administration",
        avatar: "/placeholder-user.jpg",
        email: "f.chababa@orma.ch",
        phone: "+41 (0)848 848 849",
        bio: "Fatima Chababa est assistante en administration chez ORMA. Elle apporte un soutien essentiel aux opérations administratives et à la coordination quotidienne.",
        expertise: [
            "Support administratif",
            "Organisation",
            "Gestion documentaire",
            "Coordination"
        ]
    },
    "brahim-kabbaj": {
        name: "Brahim Kabbaj",
        role: "Service Comptabilité",
        department: "Département Comptabilité",
        avatar: "/placeholder-user.jpg",
        email: "accounting@orma.ch",
        phone: "+41 (0)848 848 849",
        bio: "Brahim Kabbaj fait partie du service comptabilité d'ORMA. Il assure le suivi comptable et financier de l'entreprise avec rigueur et professionnalisme.",
        expertise: [
            "Comptabilité",
            "Suivi financier",
            "Gestion budgétaire",
            "Reporting"
        ]
    },
    "celine-groslambert": {
        name: "Céline Groslambert",
        role: "Assistante comptable",
        department: "Département Comptabilité",
        avatar: "/placeholder-user.jpg",
        email: "c.groslambert@orma.ch",
        phone: "+33 (0)3 53 57 01 32",
        bio: "Céline Groslambert est assistante comptable chez ORMA. Elle contribue à la gestion comptable quotidienne et au suivi des opérations financières de l'entreprise.",
        expertise: [
            "Comptabilité",
            "Suivi des opérations",
            "Gestion administrative",
            "Reporting financier"
        ]
    },
    "jerome-perny": {
        name: "Jérôme Perny",
        role: "Responsable Logistique",
        department: "Département Montage",
        avatar: "/placeholder-user.jpg",
        email: "j.perny@orma.ch",
        phone: "+41 (0)79 890 08 16",
        bio: "Jérôme Perny est responsable logistique chez ORMA. Il coordonne l'ensemble des opérations de montage, livraison et installation, garantissant le respect des délais et la qualité d'exécution sur chaque chantier.",
        expertise: [
            "Logistique",
            "Coordination de chantier",
            "Gestion des livraisons",
            "Montage et installation"
        ]
    },
    "quentin-ligier": {
        name: "Quentin Ligier",
        role: "Directeur Orma France",
        department: "Orma France",
        avatar: "/placeholder-user.jpg",
        email: "q.ligier@orma.ch",
        phone: "+33 (0) 6.50.94.12.26",
        bio: "Quentin Ligier est le directeur d'ORMA France. Il pilote les activités de la filiale française et assure le développement commercial et opérationnel sur le territoire français.",
        expertise: [
            "Direction générale",
            "Développement commercial",
            "Gestion opérationnelle",
            "Relation client"
        ]
    },
    "karine-socik": {
        name: "Karine Socik",
        role: "Assistante commerciale & logistique",
        department: "Orma France",
        avatar: "/placeholder-user.jpg",
        email: "acl.france@orma.ch",
        phone: "+33(0)3 53 57 01 31",
        bio: "Karine Socik est assistante commerciale et logistique chez ORMA France. Elle assure le suivi des commandes, la coordination logistique et le support commercial au quotidien.",
        expertise: [
            "Support commercial",
            "Logistique",
            "Suivi de commandes",
            "Coordination"
        ]
    }
}

export default function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const member = teamMembers[slug]

    if (!member) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-primary text-white py-32">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90" />
                <NavbarGreenTopBar />
                <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 pt-16">
                    <h1 className="text-4xl md:text-5xl font-bold">{member.name}</h1>
                    <p className="text-xl text-white/80 mt-2">{member.role}</p>
                </div>
            </section>

            {/* Profile Content */}
            <section className="py-16 px-6 md:px-12 lg:px-20">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Left Column - Photo & Contact */}
                        <div className="md:col-span-1">
                            <div className="sticky top-8">
                                <div className="relative w-48 h-48 mx-auto mb-6">
                                    <Image
                                        src={member.avatar}
                                        alt={member.name}
                                        fill
                                        className="rounded-full object-cover border-4 border-white shadow-lg"
                                    />
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 space-y-4">
                                    <h3 className="font-bold text-lg mb-4">Contact</h3>

                                    {slug !== "benjamin-leuenberger" && member.phone && (
                                        <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                                            <Phone className="w-5 h-5" />
                                            <span className="text-sm">{member.phone}</span>
                                        </a>
                                    )}

                                    <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors">
                                        <Mail className="w-5 h-5" />
                                        <span className="text-sm">{member.email}</span>
                                    </a>

                                    <Link href="/contact" className="block mt-4">
                                        <Button className="w-full bg-red-600 hover:bg-red-700">
                                            Prendre contact
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Bio & Expertise */}
                        <div className="md:col-span-2">
                            <div className="mb-8">
                                <span className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
                                    {member.department}
                                </span>
                                <h2 className="text-2xl font-bold mb-4">À propos</h2>
                                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
