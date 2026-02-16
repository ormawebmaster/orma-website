"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, ChevronDown, Youtube } from 'lucide-react'
import { useCallback, useEffect, useState } from "react"

const slides = [
    {
        image: "/orma-building.jpg",
        alt: "ORMA Building",
        title: "ORMA depuis 1948",
        subtitle: "Issus de l'ameublement, vers l'agencement... aujourd'hui fabricants.",
        titleStyle: ""
    },
    {
        image: "/orma-warehouse.png",
        alt: "ORMA Warehouse",
        title: "Le bien-être au travail ne s'improvise pas.",
        subtitle: null,
        titleStyle: ""
    }
]

export function Hero2() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setCurrentSlide(emblaApi.selectedScrollSnap())
        }

        emblaApi.on('select', onSelect)
        onSelect()

        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const currentContent = slides[currentSlide]

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Embla Carousel */}
            <div className="absolute inset-0" ref={emblaRef}>
                <div className="flex h-full">
                    {slides.map((slide, index) => (
                        <div key={index} className="relative flex-[0_0_100%]">
                            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent" />
                        </div>
                    ))}
                </div>
            </div>

            <NavbarGreenTopBar />

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-12 lg:px-20 max-w-4xl">
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight ${currentContent?.titleStyle || ''}`}>
                    {currentContent?.title}
                </h1>
                {currentContent?.subtitle && (
                    <p className="text-xl md:text-2xl text-white/90 mb-8 italic">
                        {currentContent.subtitle}
                    </p>
                )}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                        <Button size="lg" variant="destructive" className="bg-red-600 hover:bg-red-700 text-white">
                            Prendre contact
                        </Button>
                    </Link>
                    <Link href="/media">
                        <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 flex items-center gap-2">
                            <Youtube className="h-5 w-5" />
                            Orma en vidéo
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Slider Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 z-20 w-full flex items-center justify-between px-4">
                <Button onClick={scrollPrev} variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button onClick={scrollNext} variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="w-8 h-12 border-2 border-white rounded-full flex items-center justify-center">
                    <ChevronDown className="w-4 h-4 text-white animate-bounce" />
                </div>
            </div>
        </section>
    )
}
