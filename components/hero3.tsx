"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Star, MessageCircle } from 'lucide-react'
import { useCallback, useEffect, useState } from "react"

const slides = [
    {
        image: "/orma-building (1) 2.jpg",
        alt: "ORMA Building",
        title: "ORMA depuis 1948",
        subtitle: "Issus de l'ameublement, vers l'agencement... aujourd'hui fabricants."
    },
    {
        image: "/orma-warehouse hd.png",
        alt: "ORMA Excellence",
        title: "Design & build",
        subtitle: "Aménagements sur mesure pour bureaux, industries et espaces horlogers."
    },
    {
        image: "/slider 3.png",
        alt: "ORMA Warehouse",
        title: "Le bien-être au travail ne s'improvise pas",
        subtitle: "Des solutions ergonomiques conçues pour votre confort et votre productivité."
    },
    {
        image: "/slider 4.png",
        alt: "ORMA Innovation",
        title: "Innovation & Qualité",
        subtitle: "Des solutions modernes pour répondre aux exigences de demain."
    }
]

export function Hero3() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])
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

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index)
    }, [emblaApi])

    const currentContent = slides[currentSlide]

    return (
        <>
            <NavbarGreenTopBar />

            <section className="bg-white px-4 md:px-6 lg:px-8 pt-[120px] pb-2">
                {/* Slider Container with Rounded Corners - Ofinto Style */}
                <div className="relative w-full max-w-[1500px] mx-auto rounded-3xl overflow-hidden shadow-sm">
                    {/* Embla Carousel */}
                    <div className="relative h-[600px] sm:h-[700px] md:h-auto md:aspect-[16/6.8]" ref={emblaRef}>
                        <div className="flex h-full">
                            {slides.map((slide, index) => (
                                <div key={index} className="relative flex-[0_0_100%] h-full">
                                    <img
                                        src={slide.image}
                                        alt={slide.alt}
                                        className="w-full h-full object-cover object-[center_40%]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dark Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none"></div>

                    {/* Content Overlay - Bottom Left (moved higher) */}
                    <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-0 right-0 p-6 md:p-10 lg:p-12 pointer-events-none">
                        {/* Title with PP Neue Montreal Style */}
                        <h1
                            className="text-white mb-2 max-w-full text-4xl sm:text-5xl md:text-[60px] md:leading-[66px] whitespace-normal md:whitespace-nowrap"
                            style={{
                                fontFamily: "'PP Neue Montreal', 'Inter', 'Helvetica Neue', sans-serif",
                                fontWeight: 500,
                                fontStyle: 'normal'
                            }}
                        >
                            {currentContent?.title}
                        </h1>

                        {/* Subtitle */}
                        {currentContent?.subtitle && (
                            <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light mb-6 max-w-2xl">
                                {currentContent.subtitle}
                            </p>
                        )}

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-white hover:bg-gray-100 text-gray-900 font-medium px-8 py-6 text-base rounded-full shadow-md transition-all duration-300"
                                >
                                    Prendre contact
                                </Button>
                            </Link>
                            <Link href="/media">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent hover:bg-white/10 text-white font-medium px-8 py-6 text-base rounded-full border-2 border-white/80 transition-all duration-300 flex items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                                        <polygon points="10,9 15,12 10,15" fill="currentColor" stroke="none" />
                                    </svg>
                                    Orma en vidéo
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Dot Indicators - Bottom Center */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
                                    ? 'bg-white'
                                    : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                aria-label={`Aller au slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Chat Button - Bottom Right */}
                {/* <button className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#1a5a3c] hover:bg-[#164a32] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105">
                    <MessageCircle className="w-6 h-6" />
                </button> */}
            </section>
        </>
    )
}
