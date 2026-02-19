"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { AllReferencesHero } from "@/components/all-references-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const allProjects = [
  {
    category: "Agencement de Bureaux", // Or "Collectivité" if available, sticking to existing categories for now
    image: "/632287536_18258210934288066_2230392133929048762_n.jpg",
    title: "Projet réalisé en 2021 à Saint-Blaise",
    description: "Aménagement complet de mobilier pour un collège : salles de classe, bureaux administratifs et espaces de direction.",
    date: "2021-09-01",
    slug: "../media/projet-realise-en-2021-a-saint-blaise", // Navigate to media page
  },
  {
    category: "Agencement de Bureaux",
    image: "/Cablex_pub_final.jpg",
    title: "Cablex SA, Neuchâtel",
    description: "Valorisation et réorganisation des espaces de travail post covid pour 30 collaborateurs.",
    date: "2024-06-01", // Updated for improved visibility in list
    slug: "cablex-neuchatel",
  },
  {
    category: "Industrie",
    image: "/ref-stand-ephj-4.jpg",
    title: "Notre Stand EPHJ",
    description: "Conception et réalisation de notre stand pour le salon EPHJ, vitrine de notre savoir-faire en aménagement et mobilier sur mesure.",
    date: "2025-02-12",
    slug: "stand-ephj",
  },
  {
    category: "Agencement de Bureaux",
    image: "/ref-hall-bureaux-4.jpg",
    title: "Aménagement Hall & Bureaux",
    description: "Aménagement du hall d'entrée et des espaces bureaux avec table de conférence sur mesure, traitement acoustique et mobilier ergonomique.",
    date: "2025-02-12",
    slug: "amenagement-hall-bureaux",
  },
  {
    category: "Agencement de Bureaux",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600&auto=format&fit=crop",
    title: "Aménagement Bureau Corporate",
    description: "Réalisation complète des espaces de travail pour une entreprise internationale à Genève.",
    date: "2024-07-10",
    slug: "amenagement-bureau-corporate",
  },
  {
    category: "Industrie",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    title: "Laboratoire Pharmaceutique",
    description: "Conception et installation de mobilier technique pour un laboratoire de recherche.",
    date: "2024-07-05",
  },
  {
    category: "Agencement de Bureaux",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
    title: "Espace Coworking",
    description: "Aménagement complet d'un espace de coworking moderne et fonctionnel à Lausanne.",
    date: "2024-07-01",
  },
  {
    category: "Agencement de Bureaux",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=600&auto=format&fit=crop",
    title: "Bureau Direction",
    description: "Aménagement complet pour direction.",
    date: "2024-05-10",
  },
  {
    category: "Établi horloger",
    image: "https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=600&auto=format&fit=crop",
    title: "Établi Double Horloger",
    description: "Poste double pour horlogers.",
    date: "2024-04-15",
  },
  {
    category: "Agencement de Bureaux",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop",
    title: "Open Space Moderne",
    description: "Espace ouvert et collaboratif.",
    date: "2024-03-22",
  },
  {
    category: "Établi horloger",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop",
    title: "Établi Traditionnel Atelier",
    description: "Fabrication artisanale robuste.",
    date: "2024-01-05",
  },
  {
    category: "Agencement de Bureaux",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=600&auto=format&fit=crop",
    title: "Salle de Réunion Tech",
    description: "Équipement technologique intégré.",
    date: "2023-11-01",
  },
  {
    category: "Industrie",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=600&auto=format&fit=crop",
    title: "Établi Spécialiste R&D",
    description: "Adapté aux besoins spécifiques R&D.",
    date: "2023-09-30",
  },
  {
    category: "Industrie",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
    title: "Centre de Production",
    description: "Aménagement industriel complet.",
    date: "2023-09-01",
  },
  {
    category: "Établi horloger",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
    title: "Atelier Horloger Premium",
    description: "Installation haut de gamme pour horlogers.",
    date: "2023-08-01",
  },
  {
    category: "Agencement de Bureaux",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=600&auto=format&fit=crop",
    title: "Siège Social Entreprise",
    description: "Conception complète du siège social.",
    date: "2023-07-01",
  },
];

const categories = ["Toutes", "Agencement de Bureaux", "Industrie", "Établi horloger"];

const Pagination = ({ projectsPerPage, totalProjects, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center items-center gap-4 mt-12">
      <Button
        variant="outline"
        size="icon"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {pageNumbers.map(number => (
        <Button
          key={number}
          onClick={() => paginate(number)}
          variant={currentPage === number ? "destructive" : "outline"}
        >
          {number}
        </Button>
      ))}
      <Button
        variant="outline"
        size="icon"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
};


export default function AllReferencesPage() {
  const [categoryFilter, setCategoryFilter] = useState("Toutes");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  const filteredAndSortedProjects = allProjects
    .filter(project => categoryFilter === "Toutes" || project.category === categoryFilter)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredAndSortedProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="min-h-screen bg-white">
      <AllReferencesHero />
      <div className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-4">
              <label htmlFor="category-filter" className="font-semibold">Filtrer par catégorie :</label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger id="category-filter" className="w-[240px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4">
              <label htmlFor="sort-order" className="font-semibold">Trier par :</label>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger id="sort-order" className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Date (Plus récent)</SelectItem>
                  <SelectItem value="oldest">Date (Plus ancien)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow p-0 gap-0">
                <div className="relative w-full h-56">
                  <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <p className="text-sm text-gray-500 mb-4">Réalisé le : {new Date(project.date).toLocaleDateString('fr-FR')}</p>
                  {project.slug ? (
                    <Link href={`/references/${project.slug}`}>
                      <Button className="bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#333333] border border-[#E5E7EB] rounded-full px-6 w-fit">
                        Voir le projet <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  ) : (
                    <span className="font-semibold text-gray-400 flex items-center text-sm cursor-not-allowed">
                      Bientôt disponible <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Pagination
            projectsPerPage={projectsPerPage}
            totalProjects={filteredAndSortedProjects.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
