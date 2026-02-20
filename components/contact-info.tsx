import { MapPin, Clock, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactInfo() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-accent/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Addresses */}
        <Card className="border-none shadow-sm">
          <CardContent className="p-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Adresses</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">Orma Suisse</p>
                <p>• Rue du Lac 22b, CH-1020 Renens</p>
                <a href="https://www.google.com/maps/place/ORMA+Swiss+SA/@46.9861112,6.8628526,614m/data=!3m2!1e3!4b1!4m6!3m5!1s0x478e0a281d3aeb2f:0xc91a6c9bb5bf1b8e!8m2!3d46.9861112!4d6.8654275!16s%2Fg%2F1wc30457" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block mt-2">
                  <p>• Rue de la Chapelle 54-56 CH-2035 Corcelles NE, Suisse</p>
                </a>
              </div>
              <div className="pt-2">
                <a href="https://www.google.com/maps?q=Orma+France" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <p className="font-semibold text-foreground">Orma France</p>
                  <p>2 ZI sous le bois, 25330 Amancey</p>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hours */}
        <Card className="border-none shadow-sm">
          <CardContent className="p-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Nos horaires</h3>
            <p className="text-muted-foreground mb-2">Notre équipe est disponible par téléphone aux horaires suivants :</p>
            <p className="text-sm font-medium text-primary mb-4">Visite sur rendez-vous</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Lundi - Jeudi:</span>
                <span className="font-medium text-foreground">8h00 - 12h00 / 13h30 - 18h00</span>
              </div>
              <div className="flex justify-between">
                <span>Vendredi:</span>
                <span className="font-medium text-foreground">8h00 - 12h00 / 13h30 - 17h00</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="border-none shadow-sm">
          <CardContent className="p-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Téléphone:</p>
                <a href="tel:+41848848849" className="font-medium text-foreground hover:text-primary">
                  +41 848 848 849
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Email:</p>
                <a href="mailto:info@orma.ch" className="font-medium text-foreground hover:text-primary">
                  info@orma.ch
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
