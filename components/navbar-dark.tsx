"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
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

export function NavbarDark() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [manufactureMenuOpen, setManufactureMenuOpen] = useState(false)
    const [mobilierMenuOpen, setMobilierMenuOpen] = useState(false)
    const [prestationMenuOpen, setPrestationMenuOpen] = useState(false)

    return (
        <nav className="fixed top-4 left-4 right-4 z-50 px-6 md:px-12 lg:px-16 py-4 bg-[#335c67] dark:bg-white rounded-full shadow-sm">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo-orma-1948.png" alt="ORMA Logo" width={100} height={40} className="h-10 w-auto brightness-0 invert dark:brightness-100 dark:invert-0" priority />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {/* Manufacture et fabrication Dropdown */}
                    <div onMouseEnter={() => setManufactureMenuOpen(true)} onMouseLeave={() => setManufactureMenuOpen(false)}>
                        <DropdownMenu open={manufactureMenuOpen} onOpenChange={setManufactureMenuOpen}>
                            <DropdownMenuTrigger asChild>
                                <Link href="/manufacture-et-fabrication" className="flex items-center gap-1 text-white dark:text-gray-700 hover:text-gray-200 dark:hover:text-gray-900 transition-colors text-sm focus:outline-none">
                                    Manufacture et fabrication <ChevronDown className="w-4 h-4" />
                                </Link>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#335c67] dark:bg-white text-white dark:text-gray-800 p-2 rounded-md shadow-lg">
                                <DropdownMenuItem asChild>
                                    <Link href="/methode-de-fonctionnement" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                        Méthode de Fonctionnement
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger className="px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md cursor-pointer">
                                        <Link href="/domaines-de-competence" className="flex-1">
                                            Domaines de compétence
                                        </Link>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent className="bg-[#335c67] dark:bg-white text-white dark:text-gray-800 p-2 rounded-md shadow-lg">
                                            <DropdownMenuItem asChild>
                                                <Link href="/creation-conception" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                                    Création & Conception
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href="/fabrication-petite-serie" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                                    Fabrication de Petite série
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href="/developpement-projets" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                                    Développement de Projets
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href="/atelier-ergonomique" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                                    Atelier Ergonomique (Innospace)
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href="/solides-surfaces" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                                    Solides Surfaces
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href="/techniques-sublimation" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                                    Techniques de Sublimation
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuItem asChild>
                                    <Link href="/solutions-sur-mesure" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
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
                                <Link href="/mobilier-d-agencement" className="flex items-center gap-1 text-white dark:text-gray-700 hover:text-gray-200 dark:hover:text-gray-900 transition-colors text-sm focus:outline-none">
                                    Mobilier d'agencement <ChevronDown className="w-4 h-4" />
                                </Link>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#335c67] dark:bg-white text-white dark:text-gray-800 p-2 rounded-md shadow-lg">
                                <DropdownMenuItem asChild>
                                    <Link href="/mobilier-methode-de-fonctionnement" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                        Méthode de Fonctionnement
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger className="px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md cursor-pointer">
                                        <Link href="/mobilier-domaines-de-competence" className="flex-1">
                                            Domaines de compétence
                                        </Link>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent className="bg-[#335c67] dark:bg-white text-white dark:text-gray-800 p-2 rounded-md shadow-lg">
                                            <DropdownMenuItem asChild>
                                                <Link href="/amenagement-industriel" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                                    Aménagement Industriel
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href="/espaces-de-bureau" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                                    Espaces de Bureau
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href="/amenagement-prive" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                                    Aménagement Privé
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href="/amenagement-public" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                                    Aménagement Public & Collectivités
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href="/acoustique" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                                    Acoustique
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuItem asChild>
                                    <Link href="/mobilier-solutions-sur-mesure" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
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
                                <Link href="/prestation-de-service" className="flex items-center gap-1 text-white dark:text-gray-700 hover:text-gray-200 dark:hover:text-gray-900 transition-colors text-sm focus:outline-none">
                                    Prestation de service <ChevronDown className="w-4 h-4" />
                                </Link>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#335c67] dark:bg-white text-white dark:text-gray-800 p-2 rounded-md shadow-lg">
                                <DropdownMenuItem asChild>
                                    <Link href="/planification-dao" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                        Planification & DAO
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/livraison-installation" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                        Livraison et Installation (World Wilde)
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/demenagement" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                        Déménagement
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/solutions-stockage" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                        Solutions de stockage
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/coaching-formations" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                        Coaching & Formations
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/sourcing" className="block px-4 py-2 hover:bg-white/10 dark:hover:bg-gray-100 rounded-md">
                                        Sourcing
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <Link href="/a-propos" className="text-white dark:text-gray-700 hover:text-gray-200 dark:hover:text-gray-900 transition-colors text-sm">
                        À propos
                    </Link>
                    <Link href="/references" className="text-white dark:text-gray-700 hover:text-gray-200 dark:hover:text-gray-900 transition-colors text-sm">
                        Références
                    </Link>
                    <Link href="/media" className="text-white dark:text-gray-700 hover:text-gray-200 dark:hover:text-gray-900 transition-colors text-sm">
                        Media
                    </Link>

                    <Link href="/contact">
                        <Button size="sm" className="bg-[#CC2A3F] hover:bg-[#b02536] text-white rounded-full px-6">
                            Contact
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white dark:text-gray-700">
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-[#335c67] dark:bg-white shadow-lg rounded-2xl py-4 px-6">
                    <div className="flex flex-col gap-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-white dark:text-gray-700 hover:text-gray-200 dark:hover:text-gray-900 transition-colors py-2">
                                    Manufacture et fabrication
                                </AccordionTrigger>
                                <AccordionContent className="pl-4 text-white/80 dark:text-gray-600">
                                    <Link href="/methode-de-fonctionnement" className="block py-2 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Méthode de Fonctionnement</Link>
                                    <div className="py-2">
                                        <Link href="/domaines-de-competence" className="font-semibold text-white dark:text-gray-800 block hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Domaines de compétence</Link>
                                        <div className="pl-4 mt-1">
                                            <Link href="/creation-conception" className="block py-1 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Création & Conception</Link>
                                            <Link href="/fabrication-petite-serie" className="block py-1 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Fabrication de Petite série</Link>
                                            <Link href="/developpement-projets" className="block py-1 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Développement de Projets</Link>
                                            <Link href="/atelier-ergonomique" className="block py-1 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Atelier Ergonomique (Innospace)</Link>
                                            <Link href="/solides-surfaces" className="block py-1 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Solides Surfaces</Link>
                                            <Link href="/techniques-sublimation" className="block py-1 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Techniques de Sublimation</Link>
                                        </div>
                                    </div>
                                    <Link href="/solutions-sur-mesure" className="block py-2 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Solutions Sur Mesure</Link>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-white dark:text-gray-700 hover:text-gray-200 dark:hover:text-gray-900 transition-colors py-2">
                                    Mobilier d'agencement
                                </AccordionTrigger>
                                <AccordionContent className="pl-4 text-white/80 dark:text-gray-600">
                                    <Link href="/mobilier-methode-de-fonctionnement" className="block py-2 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Méthode de Fonctionnement</Link>
                                    <div className="py-2">
                                        <Link href="/mobilier-domaines-de-competence" className="font-semibold text-white dark:text-gray-800 block hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Domaines de compétence</Link>
                                        <div className="pl-4 mt-1">
                                            <Link href="/amenagement-industriel" className="block py-1 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Aménagement Industriel</Link>
                                            <Link href="/espaces-de-bureau" className="block py-1 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Espaces de Bureau</Link>
                                            <Link href="/amenagement-prive" className="block py-1 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Aménagement Privé</Link>
                                            <Link href="/amenagement-public" className="block py-1 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Aménagement Public & Collectivités</Link>
                                            <Link href="/acoustique" className="block py-1 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Acoustique</Link>
                                        </div>
                                    </div>
                                    <Link href="/mobilier-solutions-sur-mesure" className="block py-2 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Solutions Sur Mesure</Link>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-white dark:text-gray-700 hover:text-gray-200 dark:hover:text-gray-900 transition-colors py-2">
                                    Prestation de service
                                </AccordionTrigger>
                                <AccordionContent className="pl-4 text-white/80 dark:text-gray-600">
                                    <Link href="/planification-dao" className="block px-4 py-2 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Planification & DAO</Link>
                                    <Link href="/livraison-installation" className="block px-4 py-2 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Livraison et Installation (World Wilde)</Link>
                                    <Link href="/demenagement" className="block px-4 py-2 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Déménagement</Link>
                                    <Link href="/solutions-stockage" className="block px-4 py-2 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Solutions de stockage</Link>
                                    <Link href="/coaching-formations" className="block px-4 py-2 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Coaching & Formations</Link>
                                    <Link href="/sourcing" className="block px-4 py-2 hover:text-white dark:hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Sourcing</Link>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Link
                            href="/a-propos"
                            className="text-white dark:text-gray-700 hover:text-gray-200 dark:hover:text-gray-900 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            À propos
                        </Link>
                        <Link
                            href="/references"
                            className="text-white dark:text-gray-700 hover:text-gray-200 dark:hover:text-gray-900 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Références
                        </Link>
                        <Link
                            href="/media"
                            className="text-white dark:text-gray-700 hover:text-gray-200 dark:hover:text-gray-900 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Media
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
    )
}
