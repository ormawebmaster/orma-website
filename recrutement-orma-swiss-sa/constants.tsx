
import React from 'react';
import { JobPost } from './types';
import { 
  Wrench, 
  Hammer, 
  Briefcase, 
  Calculator, 
  Cpu 
} from 'lucide-react';

export const JOB_POSTS: JobPost[] = [
  {
    id: 'programmeur-cn',
    title: 'Programmeur CN – Centre Numérique 5 Axes',
    category: 'Technique',
    location: 'Amancey, France / Télétravail partiel',
    contractType: 'CDI',
    iconName: 'Cpu',
    description: 'Depuis 1948, ORMA conçoit et réalise des espaces professionnels haut de gamme. Intégrez notre atelier d’Amancey (3000 m²) pour piloter notre centre numérique Biesse 5 axes récent.',
    missions: [
      'Programmer et piloter un centre numérique 5 axes (Biesse)',
      'Préparer et optimiser les fichiers d’usinage (bois, Corian, panneaux)',
      'Collaborer avec les équipes conception, production et montage',
      'Améliorer la précision, la qualité et l’efficacité des processus CN',
      'Participer activement à l’évolution technique de l’atelier'
    ],
    requirements: [
      'Programmeur CN confirmé ou junior fortement motivé',
      'Maîtrise ou intérêt pour l’usinage 5 axes',
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
    iconName: 'Wrench',
    description: 'Depuis 1948, ORMA conçoit et réalise des espaces professionnels et des projets sur mesure à forte valeur ajoutée. Notre atelier d’Amancey regroupe plus de 3000 m² dédiés à la fabrication bois, Corian et mobilier technique.',
    missions: [
      'Assurer le montage, l’assemblage et l’ajustage de mobilier et d’agencements sur mesure',
      'Réaliser les finitions premium (bois, panneaux techniques, Corian)',
      'Contrôler la qualité des éléments avant expédition ou installation',
      'Collaborer avec les équipes atelier, CN et chefs de projets',
      'Participer à l’amélioration continue des méthodes de montage'
    ],
    requirements: [
      'Expérience en montage, menuiserie, agencement ou fabrication de mobilier',
      'Bonne compréhension technique et sens du détail',
      'Rigueur, autonomie et logique dans l’exécution',
      'Esprit d’équipe et motivation à évoluer dans un environnement technique exigeant',
      'Français professionnel requis'
    ],
    benefits: [
      'Projets horlogers internationaux et agencements haut de gamme',
      'Atelier moderne avec menuiserie bois et Corian intégrées',
      'Formation interne et montée en compétences rapide',
      'Perspectives d’évolution réelles au sein de l’entreprise',
      'Postes ergonomiques et cadre de travail convivial (cafétéria, espaces détente, terrain de pétanque)'
    ]
  },
  {
    id: 'menuisier',
    title: 'Menuisier – Fabrication & Agencement',
    category: 'Artisanat',
    location: 'Amancey – France',
    contractType: 'CDI',
    iconName: 'Hammer',
    description: 'Depuis 1948, ORMA conçoit et réalise des espaces professionnels et des projets sur mesure à forte valeur ajoutée. Notre atelier d’Amancey regroupe plus de 3000 m² dédiés à la fabrication bois, Corian et mobilier technique.',
    missions: [
      'Fabriquer et assembler des éléments de mobilier et d’agencement sur mesure',
      'Travailler différentes matières : bois massif, panneaux techniques, stratifiés et Corian',
      'Lire et interpréter les plans techniques pour assurer une fabrication précise',
      'Collaborer avec les équipes CN, montage et chefs de projets',
      'Garantir un niveau de finition élevé conforme aux standards ORMA'
    ],
    requirements: [
      'Formation ou expérience en menuiserie, agencement ou fabrication de mobilier',
      'Bonne maîtrise des outils et machines d’atelier',
      'Sens du détail, précision et rigueur dans l’exécution',
      'Esprit d’équipe et motivation à évoluer dans un environnement technique exigeant',
      'Français professionnel requis'
    ],
    benefits: [
      'Projets horlogers internationaux et agencements haut de gamme',
      'Atelier moderne intégrant menuiserie bois et Corian',
      'Formation interne et montée en compétences continue',
      'Perspectives d’évolution réelles',
      'Environnement de travail ergonomique et convivial (cafétéria, espaces détente, terrain de pétanque)'
    ]
  },
  {
    id: 'admin',
    title: 'Administrateur(trice) – Gestion Administrative & Opérationnelle',
    category: 'Administration',
    location: 'Amancey – France',
    contractType: 'CDI / Missions longues',
    iconName: 'Briefcase',
    description: 'Depuis 1948, ORMA conçoit et réalise des espaces professionnels et des projets sur mesure à forte valeur ajoutée. Présente en Suisse et en France, l’entreprise accompagne ses clients dans la conception et la réalisation d’environnements de travail ergonomiques.',
    missions: [
      'Piloter et structurer les processus administratifs liés aux projets et aux opérations',
      'Assurer le suivi des dossiers clients, fournisseurs et internes',
      'Participer à l’organisation administrative globale et à l’optimisation des flux',
      'Collaborer avec les équipes commerciales, production et direction',
      'Utiliser et faire évoluer les outils digitaux internes (Office 365, CRM, outils collaboratifs…)'
    ],
    requirements: [
      'Expérience confirmée en gestion administrative ou coordination opérationnelle',
      'Bonne aisance avec les outils digitaux et les environnements collaboratifs',
      'Sens de l’organisation, autonomie et esprit d’initiative',
      'Capacité à structurer et améliorer des processus internes',
      'Anglais professionnel apprécié (allemand est un plus)'
    ],
    benefits: [
      'Responsabilités réelles et missions évolutives',
      'Formation interne aux méthodes ORMA',
      'Intégration dans une entreprise reconnue depuis 1948',
      'Cadre de travail structuré et collaboratif',
      'Environnement favorisant la prise d’initiative'
    ]
  },
  {
    id: 'compta-rh',
    title: 'Responsable Comptabilité & Ressources Humaines',
    category: 'Gestion',
    location: 'Amancey – France',
    contractType: 'CDI / Missions longues',
    iconName: 'Calculator',
    description: 'Depuis 1948, ORMA conçoit et réalise des espaces professionnels et des projets sur mesure à forte valeur ajoutée. Présente en Suisse et en France, l’entreprise accompagne ses clients dans la réalisation d’environnements de travail ergonomiques combinant innovation digitale et exigence qualité.',
    missions: [
      'Assurer le suivi comptable courant en collaboration avec les partenaires fiduciaires et experts externes',
      'Participer à la gestion administrative RH : contrats, dossiers collaborateurs, suivi interne',
      'Suivre les factures, paiements et éléments administratifs liés aux projets',
      'Structurer et améliorer les processus comptables et RH',
      'Collaborer étroitement avec la direction et les équipes administratives'
    ],
    requirements: [
      'Expérience en comptabilité, gestion administrative RH ou gestion d’entreprise',
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

export const getIcon = (name: string) => {
  switch (name) {
    case 'Wrench': return <Wrench className="w-8 h-8" />;
    case 'Hammer': return <Hammer className="w-8 h-8" />;
    case 'Briefcase': return <Briefcase className="w-8 h-8" />;
    case 'Calculator': return <Calculator className="w-8 h-8" />;
    case 'Cpu': return <Cpu className="w-8 h-8" />;
    default: return <Briefcase className="w-8 h-8" />;
  }
};
