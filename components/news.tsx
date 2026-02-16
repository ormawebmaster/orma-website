"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { getLatestMediaItems } from "@/lib/media-data"

export function News() {
  const latestNews = getLatestMediaItems(3)

  // Fonction pour formater la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <section id="actualites" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-4">Actualités & Médias</h2>
        <p className="text-left text-muted-foreground mb-16 max-w-3xl">
          Plongez dans l’univers d’ORMA à travers nos dernières actualités, projets et temps forts.

          Un aperçu de notre savoir-faire en action.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {latestNews.map((item) => (
            <Card key={item.title} className="overflow-hidden group hover:shadow-lg transition-shadow p-0 gap-0 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                  {item.category}
                </span>
              </div>
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(item.date)}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 flex-1">{item.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                <Link href={item.slug || "/media"}>
                  <Button size="sm" className="bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#333333] border border-[#E5E7EB] rounded-full px-6">
                    Lire l'article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/media">
            <Button size="lg" className="bg-[#CC2A3F] hover:bg-[#b02536] text-white rounded-full px-8 py-6 text-base">
              Voir toutes les actualités
            </Button>
          </Link>
        </div>
      </div>
    </section >
  )
}

