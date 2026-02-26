"use client"

export interface MediaItem {
    image: string
    title: string
    description: string
    linkText: string
    date: string
    slug?: string
    category: string
    pinned?: boolean
}

export const mediaItems: MediaItem[] = [
    {
        image: "/acoustique-bureau-1.jpg",
        title: "Avant ➡️ Après : nouvelle moquette, nouvelle ambiance",
        description: "Un espace transformé, plus élégant, plus confortable et plus chaleureux ✨ #orma #moquette #interiordesign",
        linkText: "Voir la vidéo",
        date: "2026-02-26",
        slug: "/media/avant-apres-nouvelle-moquette",
        category: "Facebook",
        pinned: true,
    },
    {
        image: "/acoustique-bureau-1.jpg",
        title: "Solutions acoustiques & design d'espace",
        description: "Solutions acoustiques, moquette chaleureuse et postes ergonomiques s'unissent pour créer un espace confortable, fonctionnel et inspirant ✨",
        linkText: "Lire plus",
        date: "2026-02-26",
        slug: "/media/solutions-acoustiques-design-espace",
        category: "Facebook",
        pinned: true,
    },
    {
        image: "/cc.webp",
        title: "🛠️ Du plan à la réalité",
        description: "Découvrez les coulisses de la réalisation d'une table de conférence sur mesure, finition Corian, réalisée dans notre usine à Amancey et livrée chez notre client 👌",
        linkText: "Voir la vidéo",
        date: "2026-02-26",
        slug: "/media/du-plan-a-la-realite",
        category: "Facebook",
        pinned: true,
    },
    {
        image: "/632287536_18258210934288066_2230392133929048762_n.jpg",
        title: "Projet réalisé en 2021 à Saint-Blaise !",
        description: "Livraison et installation complète de mobilier pour un collège : bureaux administratifs et espaces éducatifs.",
        linkText: "Lire plus",
        date: "2021-09-01",
        slug: "/media/projet-realise-en-2021-a-saint-blaise",
        category: "Article",
        pinned: true,
    },
    {
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
        title: "Orma vous souhaite un très bel été !",
        description: "Profitez du soleil, reposez-vous et savourez chaque bon moment",
        linkText: "Lire plus",
        date: "2025-07-20",
        slug: "/media/orma-vous-souhaite-un-tres-bel-ete",
        category: "News",
    },
]

// Fonction pour obtenir les articles triés par date (plus récent en premier)
export function getLatestMediaItems(count: number = 3): MediaItem[] {
    return [...mediaItems]
        .sort((a, b) => {
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
        .slice(0, count)
}
