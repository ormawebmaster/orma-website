"use client"

import { useState, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'

const testimonials = [
  {
    title: "Expertise et professionnalisme remarquables",
    text: "ORMA nous a accompagnés sur un projet complexe de rénovation. Leur expertise et leur professionnalisme ont fait toute la différence. Les relevés étaient d'une précision remarquable.",
    name: "Jacques Dubois",
    role: "Architecte",
    rating: 5,
    badge: null,
  },
  {
    title: "Équipe réactive et compétente",
    text: "Une équipe réactive et compétente qui a su répondre à toutes nos exigences. Les délais ont été respectés et la qualité du travail est irréprochable. Je recommande vivement.",
    name: "Marie Laurent",
    role: "Promoteur immobilier",
    rating: 5,
    badge: null,
  },
  {
    title: "Vaut chaque franc",
    text: "La finition, les matériaux et la fonctionnalité m'ont convaincu - de plus, je trouve le design réussi. La chaise vaut chaque franc.\"",
    name: "Martin Jungfer",
    role: "Testeur Galaxus",
    rating: 5,
    badge: null,
  },
  {
    title: "Excellent service après-vente",
    text: "L'équipe ORMA a été exceptionnelle du début à la fin. Une attention particulière aux détails et un suivi impeccable qui font toute la différence.\"",
    name: "Sophie Martin",
    role: "Acheteur vérifié",
    rating: 5,
    badge: null,
  },
  {
    title: "Qualité professionnelle",
    text: "En tant qu'architecte, je recommande ORMA pour tous les projets d'aménagement. Leur expertise et leur savoir-faire sont remarquables.\"",
    name: "Pierre Durand",
    role: "Architecte partenaire",
    rating: 5,
    badge: null,
  },
  {
    title: "Transformation de notre espace de travail",
    text: "ORMA a complètement transformé nos bureaux. L'ergonomie et le design sont parfaits. Nos employés sont ravis de leur nouvel environnement.\"",
    name: "Marie Leclerc",
    role: "Directrice RH",
    rating: 5,
    badge: null,
  },
  {
    title: "Un partenaire de confiance",
    text: "Depuis 3 ans, nous travaillons exclusivement avec ORMA pour tous nos projets d'aménagement. Fiabilité, qualité et professionnalisme au rendez-vous.\"",
    name: "François Blanc",
    role: "Promoteur immobilier",
    rating: 5,
    badge: {
      name: "GOOGLE",
      rating: "★★★★★",
      label: "Avis certifié"
    },
  },
  {
    title: "Livraison parfaite et montage simple",
    text: "Commande reçue dans les délais, parfaitement emballée. Le montage était un jeu d'enfant grâce aux instructions claires. Très satisfait !\"",
    name: "Thomas Müller",
    role: "Acheteur vérifié",
    rating: 5,
    badge: null,
  },
  {
    title: "Design suisse impeccable",
    text: "La qualité suisse se ressent dans chaque détail. Les finitions sont irréprochables et le design s'intègre parfaitement dans notre intérieur moderne.\"",
    name: "Claire Hoffmann",
    role: "Acheteur vérifié",
    rating: 5,
    badge: null,
  },
  {
    title: "Service client exceptionnel",
    text: "Une question sur ma commande ? Réponse en moins de 2 heures. Le service client ORMA est vraiment au top, très réactif et professionnel.\"",
    name: "Antoine Dubois",
    role: "Acheteur vérifié",
    rating: 5,
    badge: null,
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-4">
          L'avis de nos clients compte
        </h2>
        <p className="text-left text-muted-foreground mb-16 max-w-3xl">
          La satisfaction de nos clients est notre priorité. Découvrez ce qu'ils pensent de nos services.
        </p>

        {/* Cards Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg mb-3">{testimonial.title}</h3>

                  {/* Review text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    "{testimonial.text}
                  </p>

                  {/* Author info and optional badge */}
                  <div className="flex items-end justify-between mt-auto">
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.role}</div>
                    </div>

                    {testimonial.badge && (
                      <div className="bg-white border border-gray-200 rounded-lg p-2 text-center shadow-sm">
                        <div className="text-orange-400 text-xs">{testimonial.badge.rating}</div>
                        <div className="font-bold text-xs flex items-center gap-1">
                          {testimonial.badge.name}
                        </div>
                        <div className="text-[10px] text-gray-500 bg-[#1a5a3c] text-white px-2 py-0.5 rounded mt-1">
                          {testimonial.badge.label}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={scrollNext}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <Link href="/contact">
            <Button className="bg-[#CC2A3F] hover:bg-[#b02536] text-white rounded-full px-8 py-6 text-base">
              Optimisez votre espace de travail maintenant
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
