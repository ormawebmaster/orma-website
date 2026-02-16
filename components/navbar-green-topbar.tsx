"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function NavbarGreenTopBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [manufactureMenuOpen, setManufactureMenuOpen] = useState(false)
    const [mobilierMenuOpen, setMobilierMenuOpen] = useState(false)
    const [prestationMenuOpen, setPrestationMenuOpen] = useState(false)
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
    const [currentLanguage, setCurrentLanguage] = useState<'FR' | 'EN'>('FR')

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            {/* Green Top Bar - Disabled
            <div className="bg-[#1a5a3c] text-white py-2 px-6 md:px-12 lg:px-20">
                <div className="flex items-center justify-center gap-8 md:gap-16 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-green-400">✦</span>
                        <span>Garantie satisfait ou remboursé 100 jours</span>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                        <span className="text-green-400">✦</span>
                        <span>Jusqu'à 10 ans de garantie</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        <span className="text-green-400">✦</span>
                        <span>Support client de premier ordre</span>
                    </div>
                </div>
            </div>
            */}

            {/* Main White Navbar */}
            <nav className="bg-white shadow-sm px-6 md:px-12 lg:px-20 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo-orma-1948.png" alt="ORMA Logo" width={80} height={32} className="h-8 w-auto" priority />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Manufacture et fabrication Dropdown */}
                        <div onMouseEnter={() => setManufactureMenuOpen(true)} onMouseLeave={() => setManufactureMenuOpen(false)}>
                            <DropdownMenu open={manufactureMenuOpen} onOpenChange={setManufactureMenuOpen}>
                                <DropdownMenuTrigger asChild>
                                    <Link href="/manufacture-et-fabrication" className="flex items-center gap-1 text-gray-800 hover:text-[#CC2A3F] transition-colors text-sm font-medium focus:outline-none">
                                        Manufacture et fabrication <ChevronDown className="w-3.5 h-3.5" />
                                    </Link>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white text-gray-800 p-2 rounded-md shadow-lg">
                                    <DropdownMenuItem asChild>
                                        <Link href="/methode-de-fonctionnement" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                            Méthode de Fonctionnement
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger className="px-4 py-2 hover:bg-[#EAF2F0] rounded-md cursor-pointer">
                                            <Link href="/domaines-de-competence" className="flex-1">
                                                Domaines de compétence
                                            </Link>
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent className="bg-white text-gray-800 p-2 rounded-md shadow-lg">
                                                <DropdownMenuItem asChild>
                                                    <Link href="/creation-conception" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                                        Création & Conception
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link href="/fabrication-petite-serie" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                                        Fabrication de Petite série
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link href="/developpement-projets" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                                        Développement de Projets
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link href="/atelier-ergonomique" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                                        Atelier Ergonomique (Innospace)
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link href="/solides-surfaces" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                                        Solides Surfaces
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link href="/techniques-sublimation" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                                        Techniques de Sublimation
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                    <DropdownMenuItem asChild>
                                        <Link href="/solutions-sur-mesure" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                            Solutions Sur Mesure
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        {/* Mobilier d'agencement Dropdown */}
                        <div onMouseEnter={() => setMobilierMenuOpen(true)} onMouseLeave={() => setMobilierMenuOpen(false)}>
                            <DropdownMenu open={mobilierMenuOpen} onOpenChange={setMobilierMenuOpen}>
                                <DropdownMenuTrigger asChild>
                                    <Link href="/mobilier-d-agencement" className="flex items-center gap-1 text-gray-800 hover:text-[#CC2A3F] transition-colors text-sm font-medium focus:outline-none">
                                        Mobilier d'agencement <ChevronDown className="w-3.5 h-3.5" />
                                    </Link>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white text-gray-800 p-2 rounded-md shadow-lg">
                                    <DropdownMenuItem asChild>
                                        <Link href="/mobilier-methode-de-fonctionnement" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                            Méthode de Fonctionnement
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger className="px-4 py-2 hover:bg-[#EAF2F0] rounded-md cursor-pointer">
                                            <Link href="/mobilier-domaines-de-competence" className="flex-1">
                                                Domaines de compétence
                                            </Link>
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent className="bg-white text-gray-800 p-2 rounded-md shadow-lg">
                                                <DropdownMenuItem asChild>
                                                    <Link href="/amenagement-industriel" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                                        Aménagement Industriel
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link href="/espaces-de-bureau" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                                        Espaces de Bureau
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link href="/amenagement-prive" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                                        Aménagement Privé
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link href="/amenagement-public" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                                        Aménagement Public & Collectivités
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link href="/acoustique" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                                        Acoustique
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                    <DropdownMenuItem asChild>
                                        <Link href="/mobilier-solutions-sur-mesure" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                            Solutions Sur Mesure
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        {/* Prestation de service Dropdown */}
                        <div onMouseEnter={() => setPrestationMenuOpen(true)} onMouseLeave={() => setPrestationMenuOpen(false)}>
                            <DropdownMenu open={prestationMenuOpen} onOpenChange={setPrestationMenuOpen}>
                                <DropdownMenuTrigger asChild>
                                    <Link href="/prestation-de-service" className="flex items-center gap-1 text-gray-800 hover:text-[#CC2A3F] transition-colors text-sm font-medium focus:outline-none">
                                        Prestation de service <ChevronDown className="w-3.5 h-3.5" />
                                    </Link>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white text-gray-800 p-2 rounded-md shadow-lg">
                                    <DropdownMenuItem asChild>
                                        <Link href="/architecture-interieur" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                            Architecture d'intérieur
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/planification-dao" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                            Planification & DAO
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/livraison-installation" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                            Livraison et Installation (World Wilde)
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/demenagement" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                            Déménagement
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/solutions-stockage" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                            Solutions de stockage
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/coaching-formations" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                            Coaching & Formations
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/sourcing" className="block px-4 py-2 hover:bg-[#EAF2F0] rounded-md">
                                            Sourcing
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <Link href="/a-propos" className="text-gray-800 hover:text-[#CC2A3F] transition-colors text-sm font-medium">
                            À propos
                        </Link>
                        <Link href="/references" className="text-gray-800 hover:text-[#CC2A3F] transition-colors text-sm font-medium">
                            Références
                        </Link>
                        <Link href="/media" className="text-gray-800 hover:text-[#CC2A3F] transition-colors text-sm font-medium">
                            Media
                        </Link>
                        <Link href="/carriere" className="flex items-center gap-1.5 text-gray-800 hover:text-[#CC2A3F] transition-colors text-sm font-medium">
                            Carrière
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CC2A3F] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#CC2A3F]"></span>
                            </span>
                        </Link>
                    </div>

                    {/* Right side icons and button */}
                    <div className="hidden lg:flex items-center gap-5">
                        {/* Language Selector */}
                        <div onMouseEnter={() => setLanguageMenuOpen(true)} onMouseLeave={() => setLanguageMenuOpen(false)}>
                            <DropdownMenu open={languageMenuOpen} onOpenChange={setLanguageMenuOpen}>
                                <DropdownMenuTrigger asChild>
                                    <button className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 transition-colors px-2.5 py-1.5 rounded-full focus:outline-none">
                                        <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-white text-sm">🇫🇷</span>
                                        <span className="font-medium text-gray-800 text-sm">{currentLanguage}</span>
                                        <ChevronDown className="w-3 h-3 text-gray-600" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white text-gray-800 p-1 rounded-md shadow-lg min-w-[100px]">
                                    <DropdownMenuItem onClick={() => setCurrentLanguage('FR')} className="flex items-center gap-2 px-3 py-2 hover:bg-[#EAF2F0] rounded cursor-pointer">
                                        <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center text-base">🇫🇷</span>
                                        <span>FR</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setCurrentLanguage('EN')} className="flex items-center gap-2 px-3 py-2 hover:bg-[#EAF2F0] rounded cursor-pointer">
                                        <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center text-base">🇬🇧</span>
                                        <span>EN</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <button className="text-gray-700 hover:text-gray-900 transition-colors">
                            <Search className="w-6 h-6" strokeWidth={2} />
                        </button>
                        <Link href="/contact">
                            <Button size="sm" className="bg-[#CC2A3F] hover:bg-[#b02536] text-white rounded-full px-6">
                                Contact
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-700">
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4">
                        <div className="flex flex-col gap-4">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-gray-700 hover:text-gray-900 transition-colors py-2">
                                        Manufacture et fabrication
                                    </AccordionTrigger>
                                    <AccordionContent className="pl-4 text-gray-600">
                                        <Link href="/manufacture-et-fabrication" className="block py-2 font-bold text-[#CC2A3F] hover:text-[#b02536]" onClick={() => setIsMenuOpen(false)}>Tout voir Manufacture et fabrication</Link>
                                        <Link href="/methode-de-fonctionnement" className="block py-2 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Méthode de Fonctionnement</Link>
                                        <div className="py-2">
                                            <Link href="/domaines-de-competence" className="font-semibold text-gray-800 block hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Domaines de compétence</Link>
                                            <div className="pl-4 mt-1">
                                                <Link href="/creation-conception" className="block py-1 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Création & Conception</Link>
                                                <Link href="/fabrication-petite-serie" className="block py-1 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Fabrication de Petite série</Link>
                                                <Link href="/developpement-projets" className="block py-1 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Développement de Projets</Link>
                                                <Link href="/atelier-ergonomique" className="block py-1 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Atelier Ergonomique (Innospace)</Link>
                                                <Link href="/solides-surfaces" className="block py-1 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Solides Surfaces</Link>
                                                <Link href="/techniques-sublimation" className="block py-1 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Techniques de Sublimation</Link>
                                            </div>
                                        </div>
                                        <Link href="/solutions-sur-mesure" className="block py-2 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Solutions Sur Mesure</Link>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-gray-700 hover:text-gray-900 transition-colors py-2">
                                        Mobilier d'agencement
                                    </AccordionTrigger>
                                    <AccordionContent className="pl-4 text-gray-600">
                                        <Link href="/mobilier-d-agencement" className="block py-2 font-bold text-[#CC2A3F] hover:text-[#b02536]" onClick={() => setIsMenuOpen(false)}>Tout voir Mobilier d'agencement</Link>
                                        <Link href="/mobilier-methode-de-fonctionnement" className="block py-2 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Méthode de Fonctionnement</Link>
                                        <div className="py-2">
                                            <Link href="/mobilier-domaines-de-competence" className="font-semibold text-gray-800 block hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Domaines de compétence</Link>
                                            <div className="pl-4 mt-1">
                                                <Link href="/amenagement-industriel" className="block py-1 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Aménagement Industriel</Link>
                                                <Link href="/espaces-de-bureau" className="block py-1 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Espaces de Bureau</Link>
                                                <Link href="/amenagement-prive" className="block py-1 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Aménagement Privé</Link>
                                                <Link href="/amenagement-public" className="block py-1 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Aménagement Public & Collectivités</Link>
                                                <Link href="/acoustique" className="block py-1 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Acoustique</Link>
                                            </div>
                                        </div>
                                        <Link href="/mobilier-solutions-sur-mesure" className="block py-2 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Solutions Sur Mesure</Link>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-gray-700 hover:text-gray-900 transition-colors py-2">
                                        Prestation de service
                                    </AccordionTrigger>
                                    <AccordionContent className="pl-4 text-gray-600">
                                        <Link href="/prestation-de-service" className="block px-4 py-2 font-bold text-[#CC2A3F] hover:text-[#b02536]" onClick={() => setIsMenuOpen(false)}>Tout voir Prestation de service</Link>
                                        <Link href="/architecture-interieur" className="block px-4 py-2 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Architecture d'intérieur</Link>
                                        <Link href="/planification-dao" className="block px-4 py-2 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Planification & DAO</Link>
                                        <Link href="/livraison-installation" className="block px-4 py-2 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Livraison et Installation (World Wilde)</Link>
                                        <Link href="/demenagement" className="block px-4 py-2 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Déménagement</Link>
                                        <Link href="/solutions-stockage" className="block px-4 py-2 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Solutions de stockage</Link>
                                        <Link href="/coaching-formations" className="block px-4 py-2 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Coaching & Formations</Link>
                                        <Link href="/sourcing" className="block px-4 py-2 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Sourcing</Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Link
                                href="/a-propos"
                                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                À propos
                            </Link>
                            <Link
                                href="/references"
                                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Références
                            </Link>
                            <Link
                                href="/media"
                                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Media
                            </Link>
                            <Link
                                href="/carriere"
                                className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Carrière
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CC2A3F] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#CC2A3F]"></span>
                                </span>
                            </Link>


                            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                                <Button size="sm" className="bg-[#CC2A3F] hover:bg-[#b02536] text-white rounded-full w-full">
                                    Contact
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}
