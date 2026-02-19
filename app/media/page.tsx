"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MediaHero } from "@/components/media-hero"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { mediaItems } from "@/lib/media-data"

const categories = ["Toutes", "News", "Article", "Instagram", "Facebook", "TikTok", "Youtube", "Linkedin"];

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }: { itemsPerPage: number, totalItems: number, paginate: (n: number) => void, currentPage: number }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length <= 1) return null;

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


export default function MediaPage() {
  const [sortOrder, setSortOrder] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter by category first
  const filteredByCategory = selectedCategory === 'Toutes'
    ? mediaItems
    : mediaItems.filter(item => item.category === selectedCategory);

  // Then sort
  const sortedMediaItems = [...filteredByCategory].sort((a, b) => {
    // Pinned items come first
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;

    // Then sort by date
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMediaItems = sortedMediaItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  return (
    <main className="min-h-screen bg-white">
      <MediaHero />
      <div className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <p className="font-semibold">Catégories</p>
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={selectedCategory === category ? "destructive" : "outline"}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <p className="font-semibold">Trier par date</p>
              <Select value={sortOrder} onValueChange={(value) => setSortOrder(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Plus récent</SelectItem>
                  <SelectItem value="oldest">Plus ancien</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {currentMediaItems.length === 0 ? (
            <div className="py-16">
              <p className="text-muted-foreground text-lg">Aucun article trouvé pour cette catégorie.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentMediaItems.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-0 gap-0 flex flex-col">
                  <div className="relative w-full h-48">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{item.description}</p>
                    <Link href={item.slug || "#"}>
                      <Button className="bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#333333] border border-[#E5E7EB] rounded-full px-6">
                        {item.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={sortedMediaItems.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  )
}
