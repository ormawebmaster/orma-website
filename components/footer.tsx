import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#F3F4F6] text-foreground py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Image src="/logo-orma-1948.png" alt="ORMA Logo" width={120} height={50} className="h-12 w-auto mb-4" />
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline text-muted-foreground hover:text-foreground">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/manufacture-et-fabrication" className="hover:underline text-muted-foreground hover:text-foreground">
                  Manufacture et fabrication
                </Link>
              </li>
              <li>
                <Link href="/mobilier-d-agencement" className="hover:underline text-muted-foreground hover:text-foreground">
                  Mobilier d'agencement
                </Link>
              </li>
              <li>
                <Link href="/prestation-de-service" className="hover:underline text-muted-foreground hover:text-foreground">
                  Prestation de service
                </Link>
              </li>
              <li>
                <Link href="/references" className="hover:underline text-muted-foreground hover:text-foreground">
                  Références
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:underline text-muted-foreground hover:text-foreground">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/planification-dao" className="hover:underline text-muted-foreground hover:text-foreground">
                  Planification & DAO
                </Link>
              </li>
              <li>
                <Link href="/livraison-installation" className="hover:underline text-muted-foreground hover:text-foreground">
                  Livraison et Installation
                </Link>
              </li>
              <li>
                <Link href="/demenagement" className="hover:underline text-muted-foreground hover:text-foreground">
                  Déménagement
                </Link>
              </li>
              <li>
                <Link href="/solutions-stockage" className="hover:underline text-muted-foreground hover:text-foreground">
                  Solutions de stockage
                </Link>
              </li>
              <li>
                <Link href="/coaching-formations" className="hover:underline text-muted-foreground hover:text-foreground">
                  Coaching & Formations
                </Link>
              </li>
              <li>
                <Link href="/sourcing" className="hover:underline text-muted-foreground hover:text-foreground">
                  Sourcing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <a href="tel:+41848848849" className="text-muted-foreground hover:text-foreground">
                  +41 848 848 849
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a href="mailto:info@orma.ch" className="text-muted-foreground hover:text-foreground">
                  info@orma.ch
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <img src="/lsf.png" alt="LSF" className="h-20 w-auto" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">© 2025 ORMA. Tous droits réservés.</p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/ormaswiss/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-white" />
              </a>
              <a
                href="https://www.facebook.com/ormaswisssa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/ormaswiss"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-white" />
              </a>
              <a
                href="https://www.youtube.com/@OrmaSwissSA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group"
              >
                <Youtube className="w-5 h-5 text-primary group-hover:text-white" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/mentions-legales" className="hover:text-foreground">
                Mentions légales
              </Link>
              <Link href="/politique-de-confidentialite" className="hover:text-foreground">
                Politique de confidentialité
              </Link>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
