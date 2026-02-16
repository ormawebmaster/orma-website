"use client"

export interface MediaItem {
    image: string
    title: string
    description: string
    linkText: string
    date: string
    slug?: string
    category: string
}

export const mediaItems: MediaItem[] = [
    {
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
        title: "Orma vous souhaite un très bel été !",
        description: "Profitez du soleil, reposez-vous et savourez chaque bon moment",
        linkText: "Lire plus",
        date: "2025-07-20",
        slug: "/media/orma-vous-souhaite-un-tres-bel-ete",
        category: "News",
    },
    {
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
        title: "Nouveaux bureaux ORMA : Espace et Lumière",
        description: "Découvrez nos nouveaux aménagements conçus pour le bien-être et la productivité.",
        linkText: "Lire plus",
        date: "2025-06-15",
        category: "Article",
    },
    {
        image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=800&auto=format&fit=crop",
        title: "Un moment d'équipe capturé à l'EPHJ 2025",
        description: "Notre équipe s'est réunie pour immortaliser cette belle aventure au cœur du salon EPHJ.",
        linkText: "Lire plus",
        date: "2025-05-30",
        category: "Instagram",
    },
    {
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
        title: "ORMA partenaire du Salon de l'Horlogerie",
        description: "Retour sur notre participation et les innovations présentées pour les établis.",
        linkText: "Lire plus",
        date: "2025-04-10",
        category: "Linkedin",
    },
    {
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
        title: "Tendance : Le bureau flexible post-pandémie",
        description: "Comment adapter les espaces de travail aux nouvelles attentes des collaborateurs.",
        linkText: "Lire plus",
        date: "2025-03-22",
        category: "Article",
    },
    {
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
        title: "Matériaux durables pour un agencement éco-responsable",
        description: "Quels choix faire pour allier design, fonctionnalité et respect de l'environnement.",
        linkText: "Lire plus",
        date: "2025-02-18",
        category: "Youtube",
    },
    {
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        title: "Découvrez notre atelier en vidéo",
        description: "Une visite guidée de nos ateliers de fabrication sur mesure.",
        linkText: "Lire plus",
        date: "2025-01-15",
        category: "TikTok",
    },
    {
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto=format&fit=crop",
        title: "ORMA sur les réseaux sociaux",
        description: "Suivez-nous sur Facebook pour les dernières actualités.",
        linkText: "Lire plus",
        date: "2025-01-01",
        category: "Facebook",
    },
]

// Fonction pour obtenir les articles triés par date (plus récent en premier)
export function getLatestMediaItems(count: number = 3): MediaItem[] {
    return [...mediaItems]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, count)
}

