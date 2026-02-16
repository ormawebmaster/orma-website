"use client"

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const departments = [
  {
    name: "Directeur et unique actionnaire",
    members: [
      {
        name: "Benjamin Leuenberger",
        role: "Fondateur & Directeur",
        avatar: "/membre1_dessin.png",
        avatarHover: "/membre1_photo.jpeg",
        slug: "benjamin-leuenberger",
      },
    ],
  },
  {
    name: "Département Vente",
    members: [
      {
        name: "Antoine Blaising",
        role: "Directeur Technique et Commercial",
        avatar: "/membre2_dessin.png",
        avatarHover: "/membre2_photo.jpg",
        slug: "antoine-blaising",
      },
      {
        name: "Marc Dormoy",
        role: "Attaché commercial",
        avatar: "/m1.png",
        avatarHover: "/m2.png",
        slug: "marc-dormoy",
      },
    ],
  },
  {
    name: "Département Administration",
    members: [
      {
        name: "Nelly Trigona",
        role: "Responsable Administration",
        avatar: "/membre3_1dessin.png",
        avatarHover: "/membre3_1photo.jpg",
        slug: "nelly-trigona",
      },
    ],
  },
  {
    name: "Département Comptabilité",
    members: [
      {
        name: "Brahim Kabbaj",
        role: "Service Comptabilité",
        avatar: "/placeholder-user.jpg",
        avatarHover: "/placeholder-user.jpg",
        slug: "brahim-kabbaj",
      },
    ],
  },
  {
    name: "Département DAO",
    members: [
      {
        name: "Sophia Desousa",
        role: "Responsable DAO",
        avatar: "/placeholder-user.jpg",
        avatarHover: "/placeholder-user.jpg",
      },
    ],
  },
  {
    name: "Département Montage",
    members: [
      {
        name: "Jérôme Perny",
        role: "Responsable Logistique",
        avatar: "/placeholder-user.jpg",
        avatarHover: "/placeholder-user.jpg",
        slug: "jerome-perny",
      },
    ],
  },
  {
    name: "Orma France",
    members: [
      {
        name: "Quentin Ligier",
        role: "Directeur Orma France",
        avatar: "/placeholder-user.jpg",
        avatarHover: "/placeholder-user.jpg",
        slug: "quentin-ligier",
      },
      {
        name: "Céline Groslambert",
        role: "Service Comptabilité",
        avatar: "/placeholder-user.jpg",
        avatarHover: "/placeholder-user.jpg",
        slug: "celine-groslambert",
      },
    ],
  },
];

const TeamCarousel = ({ members }) => {
  const shouldAutoplay = members.length > 4;
  const plugins = shouldAutoplay ? [Autoplay({ delay: 3000, stopOnInteraction: false })] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: shouldAutoplay, align: 'start' }, plugins);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {members.map((member, index) => (
            <div key={index} className="flex-[0_0_auto] w-80 group">
              <div className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100 h-full flex flex-col">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  {member.avatar ? (
                    <>
                      <img src={member.avatar} alt={member.name} className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-white shadow-sm transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 object-cover" />
                      <img src={member.avatarHover} alt={`${member.name} hover`} className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-white shadow-sm transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 object-cover" />
                    </>
                  ) : (
                    <div className="w-full h-full rounded-full border-4 border-white shadow-sm bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">
                        {member.name.split(' ').map((n: string) => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-gray-500 mb-4 text-base">{member.role}</p>
                <div className="mt-auto">
                  {member.slug ? (
                    <Link href={`/equipe/${member.slug}`} className="inline-flex items-center gap-2 bg-[#CC2A3F] hover:bg-[#b02536] text-white text-sm font-semibold rounded-full px-6 py-2.5 transition-colors">En savoir plus <ArrowRight className="h-4 w-4" /></Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 bg-gray-300 text-gray-500 text-sm font-semibold rounded-full px-6 py-2.5 cursor-not-allowed">En savoir plus <ArrowRight className="h-4 w-4" /></span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {members.length > 4 && (
        <>
          <Button onClick={scrollPrev} variant="ghost" size="icon" className="absolute top-1/2 -translate-y-1/2 -left-4 rounded-full bg-white shadow-md hover:bg-gray-100">
            <ArrowLeft className="h-6 w-6 text-gray-700" />
          </Button>
          <Button onClick={scrollNext} variant="ghost" size="icon" className="absolute top-1/2 -translate-y-1/2 -right-4 rounded-full bg-white shadow-md hover:bg-gray-100">
            <ArrowRight className="h-6 w-6 text-gray-700" />
          </Button>
        </>
      )}

      <div className="flex justify-center gap-2 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full ${index === selectedIndex ? 'bg-red-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};


export function AboutTeam() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Rencontrez notre équipe</h2>

        <div className="space-y-8">
          {departments.map((department, index) => (
            <div key={index} className="pt-12 pb-12 first:pt-0">
              <h3 className="text-xl font-semibold mb-10 border-b pb-2">{department.name}</h3>
              <TeamCarousel members={department.members} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
