export interface JobPost {
    id: string;
    title: string;
    category: string;
    location: string;
    contractType: string;
    duration: string;
    activityRate: string;
    description: string;
    missions: string[];
    requirements: string[];
    benefits: string[];
    iconName: string;
}

export const JOB_POSTS: JobPost[] = [
    {
        id: 'programmeur-cn',
        title: 'Programmeur CN – Centre Numérique 5 Axes',
        category: 'Technique',
        location: 'Amancey, France / Télétravail partiel',
        contractType: 'CDI',
        duration: 'Indéterminée',
        activityRate: '100%',
        iconName: 'Cpu',
        description: 'Rejoignez notre pôle technique pour piloter notre centre numérique Biesse 5 axes. Un rôle clé au cœur de notre atelier moderne de 3000 m², alliant précision et haute technologie pour des projets d\'exception.',
        missions: [
            'Programmer et piloter un centre numérique 5 axes (Biesse)',
            'Préparer et optimiser les fichiers d\u2019usinage (bois, Corian, panneaux)',
            'Collaborer avec les équipes conception, production et montage',
            'Améliorer la précision, la qualité et l\u2019efficacité des processus CN',
            'Participer activement à l\u2019évolution technique de l\u2019atelier'
        ],
        requirements: [
            'Programmeur CN confirmé ou junior fortement motivé',
            'Maîtrise ou intérêt pour l\u2019usinage 5 axes',
            'Lecture de plans et compréhension des contraintes de fabrication',
            'Rigueur, logique technique et sens du détail',
            'Français professionnel requis'
        ],
        benefits: [
            'Projets horlogers internationaux et agencements de luxe',
            'Parc machines récent (Centre 5 axes Biesse)',
            'Possibilité de travail à distance partiel',
            'Cadre convivial : cafétéria, espaces détente, terrain de pétanque',
            'Formation interne et accompagnement technique'
        ]
    },
    {
        id: 'monteur',
        title: 'Monteur / Opérateur Polyvalent',
        category: 'Production',
        location: 'Amancey – France',
        contractType: 'CDI',
        duration: 'Indéterminée',
        activityRate: '100%',
        iconName: 'Wrench',
        description: 'Devenez un acteur essentiel de notre production en assemblant du mobilier technique et des agencements haut de gamme. Une opportunité de travailler des matériaux nobles comme le bois et le Corian au sein d\'une équipe passionnée.',
        missions: [
            'Assurer le montage, l\u2019assemblage et l\u2019ajustage de mobilier et d\u2019agencements sur mesure',
            'Réaliser les finitions premium (bois, panneaux techniques, Corian)',
            'Contrôler la qualité des éléments avant expédition ou installation',
            'Collaborer avec les équipes atelier, CN et chefs de projets',
            'Participer à l\u2019amélioration continue des méthodes de montage'
        ],
        requirements: [
            'Expérience en montage, menuiserie, agencement ou fabrication de mobilier',
            'Bonne compréhension technique et sens du détail',
            'Rigueur, autonomie et logique dans l\u2019exécution',
            'Esprit d\u2019équipe et motivation à évoluer dans un environnement technique exigeant',
            'Français professionnel requis'
        ],
        benefits: [
            'Projets horlogers internationaux et agencements haut de gamme',
            'Atelier moderne avec menuiserie bois et Corian intégrées',
            'Formation interne et montée en compétences rapide',
            'Perspectives d\u2019évolution réelles au sein de l\u2019entreprise',
            'Postes ergonomiques et cadre de travail convivial (cafétéria, espaces détente, terrain de pétanque)'
        ]
    },
    {
        id: 'menuisier',
        title: 'Menuisier – Fabrication & Agencement',
        category: 'Artisanat',
        location: 'Amancey – France',
        contractType: 'CDI',
        duration: 'Indéterminée',
        activityRate: '100%',
        iconName: 'Hammer',
        description: 'Exprimez votre savoir-faire au sein de notre atelier de fabrication. Vous réaliserez des ouvrages sur mesure et des finitions soignées, en participant à des projets d\'agencement prestigieux pour une clientèle internationale.',
        missions: [
            'Fabriquer et assembler des éléments de mobilier et d\u2019agencement sur mesure',
            'Travailler différentes matières : bois massif, panneaux techniques, stratifiés et Corian',
            'Lire et interpréter les plans techniques pour assurer une fabrication précise',
            'Collaborer avec les équipes CN, montage et chefs de projets',
            'Garantir un niveau de finition élevé conforme aux standards ORMA'
        ],
        requirements: [
            'Formation ou expérience en menuiserie, agencement ou fabrication de mobilier',
            'Bonne maîtrise des outils et machines d\u2019atelier',
            'Sens du détail, précision et rigueur dans l\u2019exécution',
            'Esprit d\u2019équipe et motivation à évoluer dans un environnement technique exigeant',
            'Français professionnel requis'
        ],
        benefits: [
            'Projets horlogers internationaux et agencements haut de gamme',
            'Atelier moderne intégrant menuiserie bois et Corian',
            'Formation interne et montée en compétences continue',
            'Perspectives d\u2019évolution réelles',
            'Environnement de travail ergonomique et convivial (cafétéria, espaces détente, terrain de pétanque)'
        ]
    },
    {
        id: 'admin',
        title: 'Administrateur(trice) – Gestion Administrative & Opérationnelle',
        category: 'Administration',
        location: 'Amancey – France',
        contractType: 'CDI / Missions longues',
        duration: 'Indéterminée',
        activityRate: '100%',
        iconName: 'Briefcase',
        description: 'Pilotez la gestion administrative et opérationnelle de nos projets. Un poste polyvalent au cœur de l\'organisation, garantissant la fluidité des flux d\'information entre nos équipes et nos partenaires.',
        missions: [
            'Piloter et structurer les processus administratifs liés aux projets et aux opérations',
            'Assurer le suivi des dossiers clients, fournisseurs et internes',
            'Participer à l\u2019organisation administrative globale et à l\u2019optimisation des flux',
            'Collaborer avec les équipes commerciales, production et direction',
            'Utiliser et faire évoluer les outils digitaux internes (Office 365, CRM, outils collaboratifs…)'
        ],
        requirements: [
            'Expérience confirmée en gestion administrative ou coordination opérationnelle',
            'Bonne aisance avec les outils digitaux et les environnements collaboratifs',
            'Sens de l\u2019organisation, autonomie et esprit d\u2019initiative',
            'Capacité à structurer et améliorer des processus internes',
            'Anglais professionnel apprécié (allemand est un plus)'
        ],
        benefits: [
            'Responsabilités réelles et missions évolutives',
            'Formation interne aux méthodes ORMA',
            'Intégration dans une entreprise reconnue depuis 1948',
            'Cadre de travail structuré et collaboratif',
            'Environnement favorisant la prise d\u2019initiative'
        ]
    },
    {
        id: 'compta-rh',
        title: 'Responsable Comptabilité & Ressources Humaines',
        category: 'Gestion',
        location: 'Amancey – France',
        contractType: 'CDI / Missions longues',
        duration: 'Indéterminée',
        activityRate: '100%',
        iconName: 'Calculator',
        description: 'Prenez en charge la gestion financière et humaine de la structure. Un rôle stratégique assurant la rigueur comptable et le suivi des équipes, dans un environnement de travail dynamique et structuré.',
        missions: [
            'Assurer le suivi comptable courant en collaboration avec les partenaires fiduciaires et experts externes',
            'Participer à la gestion administrative RH : contrats, dossiers collaborateurs, suivi interne',
            'Suivre les factures, paiements et éléments administratifs liés aux projets',
            'Structurer et améliorer les processus comptables et RH',
            'Collaborer étroitement avec la direction et les équipes administratives'
        ],
        requirements: [
            'Expérience en comptabilité, gestion administrative RH ou gestion d\u2019entreprise',
            'Aisance avec les outils digitaux (Office 365, outils comptables, CRM…)',
            'Organisation, discrétion et sens des responsabilités',
            'Capacité à gérer plusieurs sujets en parallèle avec rigueur'
        ],
        benefits: [
            'Missions évolutives avec responsabilités réelles',
            'Possibilité de travail à distance partiel selon le profil',
            'Formation interne aux méthodes et outils ORMA',
            'Intégration dans une entreprise reconnue depuis 1948',
            'Environnement collaboratif et structuré'
        ]
    }
];
