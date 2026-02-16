"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    representative: "non",
    companyName: "",
    role: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contactez-nous directement</h2>
          <p className="text-muted-foreground">Visite Sur rendez-vous. Merci de nous contacter</p>
        </div>

        {/* Image and Form Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Image */}
          <div className="min-h-[500px] h-full rounded-lg overflow-hidden border border-border">
            <img
              src="/contact-office.jpg"
              alt="ORMA Office Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form */}
          <div className="bg-accent/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Parlez-nous de votre projet</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Representative Radio - FIRST */}
              <div className="space-y-3">
                <Label>
                  Vous représentez une entreprise <span className="text-red-600">*</span>
                </Label>
                <RadioGroup
                  value={formData.representative}
                  onValueChange={(value) => setFormData({ ...formData, representative: value })}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="non" id="non" />
                    <Label htmlFor="non" className="font-normal cursor-pointer">
                      Non
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="oui" id="oui" />
                    <Label htmlFor="oui" className="font-normal cursor-pointer">
                      Oui
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Company Name and Role - Show only if representative is "oui" */}
              {formData.representative === "oui" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="companyName">
                      Nom de l'entreprise <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      id="companyName"
                      placeholder="Entrer le nom de votre entreprise"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">
                      Rôle <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      id="role"
                      placeholder="Entrer votre rôle"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                </>
              )}

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Nom et Prénom <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Entrer votre nom complet"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Entrer votre adresse email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Numéro de téléphone <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Entrer votre numéro de téléphone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">
                  Choisissez une catégorie <span className="text-red-600">*</span>
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="-- Sélectionner un choix --" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="architecture">Agencement de Bureaux</SelectItem>
                    <SelectItem value="geometrie">Industrie</SelectItem>
                    <SelectItem value="diagnostic">Établi horloger</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Entrer votre message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="sm"
                variant="destructive"
                className="bg-[#CC2A3F] hover:bg-[#b02536] w-full md:w-auto px-12 rounded-full"
              >
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

