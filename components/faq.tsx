"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqCategories = [
  {
    title: "À propos d'ORMA",
    icon: "🔹",
    faqs: [
      {
        question: "Qui est ORMA ?",
        answer: "ORMA est une entreprise spécialisée dans la conception, la fabrication et l’aménagement d’espaces sur mesure, aussi bien pour les professionnels que pour les particuliers. Nous accompagnons chaque client, de l’idée initiale à la réalisation finale, en combinant design, ergonomie et savoir-faire industriel pour créer des environnements fonctionnels, durables et parfaitement adaptés à leurs besoins.",
      },
      {
        question: "Depuis quand ORMA existe-t-elle ?",
        answer: "ORMA bénéficie de plus de 75 ans d’expérience dans la conception, la fabrication et l’aménagement d’espaces sur mesure. Depuis sa création, l’entreprise accompagne des projets exigeants en alliant savoir-faire, innovation et exigence de qualité.",
      },
      {
        question: "Dans quelles zones géographiques intervenez-vous ?",
        answer: "Nous intervenons principalement en Suisse et en France, tout en accompagnant des projets à l’international selon leur nature. ORMA a notamment réalisé des projets en Corée du Sud, aux Émirats arabes unis et aux États-Unis, témoignant de notre capacité à répondre à des environnements et des exigences variés à travers le monde.",
      },
    ],
  },
  {
    title: "Projets & prestations",
    icon: "🔹",
    faqs: [
      {
        question: "Quels types de projets réalisez-vous ?",
        answer: "Nous réalisons une grande variété de projets sur mesure, adaptés aux besoins des professionnels comme des particuliers. Bureaux, laboratoires, espaces commerciaux, coworking, établissements publics, environnements techniques ou aménagements résidentiels : chaque projet est conçu pour allier fonctionnalité, ergonomie et qualité durable.",
      },
      {
        question: "Proposez-vous des solutions sur mesure ?",
        answer: "Oui, nous proposons aussi bien des solutions sur mesure que des solutions standards, selon les besoins de chaque projet. Notre objectif est d’offrir l’approche la plus adaptée en combinant personnalisation, fonctionnalité et efficacité, en fonction des contraintes et des usages.",
      },
      {
        question: "Assurez-vous un accompagnement global du projet, de la conception à l’installation ?",
        answer: "ORMA propose un accompagnement complet à chaque étape du projet. De l’analyse des besoins et de la conception, jusqu’à la fabrication en atelier, la livraison et l’installation finale, nos équipes assurent un pilotage rigoureux pour garantir qualité, cohérence et sérénité tout au long du processus.",
      },
    ],
  },
  {
    title: "Fabrication & qualité",
    icon: "🔹",
    faqs: [
      {
        question: "Disposez-vous de votre propre atelier de fabrication ?",
        answer: "Oui, ORMA possède ses propres ateliers de production, garantissant maîtrise, flexibilité et qualité.",
      },
      {
        question: "Quels matériaux utilisez-vous ?",
        answer: "Nous travaillons avec une large sélection de matériaux de qualité, choisis selon les besoins et les usages de chaque projet : bois, dérivés techniques, Corian®, métal, stratifiés, textiles acoustiques et bien d’autres. Chaque matériau est sélectionné pour sa durabilité, son esthétique et sa performance dans le temps.",
      },
      {
        question: "Comment garantissez-vous la qualité de vos réalisations ?",
        answer: "La qualité est intégrée à chaque étape de nos projets. De la conception à la fabrication et jusqu’à l’installation, nos équipes appliquent des contrôles rigoureux et un haut niveau d’exigence afin de garantir précision, durabilité et qualité des finitions.",
      },
    ],
  },
  {
    title: "Délais & organisation",
    icon: "🔹",
    faqs: [
      {
        question: "Quels sont vos délais moyens de réalisation ?",
        answer: "Les délais varient selon la nature et la complexité du projet. Dès la validation des besoins, un planning clair et réaliste est établi afin de garantir une organisation fluide et le respect des échéances.",
      },
      {
        question: "Puis-je suivre l'avancement de mon projet ?",
        answer: "Oui, un interlocuteur dédié assure le suivi de votre projet à chaque étape. Vous êtes informé de l’avancement, des validations clés et des prochaines étapes, pour une collaboration fluide et transparente.",
      },
    ],
  },
  {
    title: "Devis & budget",
    icon: "🔹",
    faqs: [
      {
        question: "Comment obtenir un devis ?",
        answer: (
          <>
            Il vous suffit de nous contacter via notre formulaire en ligne, par email ou par téléphone.
            <br />
            📩 Email : info@orma.ch
            <br />
            📞 Téléphone : <a href="tel:+41848848849" className="text-blue-600 hover:underline">+41 848 848 849</a>
            <br />
            🔗 Formulaire de demande de devis : <a href="/contact" className="text-blue-600 hover:underline">Demander un devis</a>
          </>
        ),
      },
      {
        question: "Le devis est-il gratuit ?",
        answer: "Oui, l’étude initiale et le devis sont proposés gratuitement et sans engagement. Nous analysons votre besoin afin de vous présenter une solution claire, adaptée et transparente dès le départ.",
      },
      {
        question: "Proposez-vous des solutions adaptées à différents budgets ?",
        answer: "Oui, nous adaptons nos solutions en fonction de vos objectifs et de votre budget. Notre approche consiste à trouver le juste équilibre entre qualité, fonctionnalité et maîtrise des coûts, sans compromis sur l’exigence ORMA.",
      },
    ],
  },
  {
    title: "Service après-vente",
    icon: "🔹",
    faqs: [
      {
        question: "Assurez-vous le service après-vente ?",
        answer: "Oui, ORMA assure le suivi et le service après-vente après l’installation. Nos équipes restent à votre écoute pour garantir la durabilité, le bon fonctionnement et la pérennité de votre aménagement.",
      },
      {
        question: "Proposez-vous des modifications ou extensions ultérieures ?",
        answer: "Oui, nos réalisations sont pensées pour évoluer dans le temps. Nous pouvons adapter, modifier ou étendre vos aménagements afin de répondre à vos nouveaux besoins et accompagner le développement de vos espaces.",
      },
    ],
  },
]

export function FAQ() {
  const [showAll, setShowAll] = useState(false)

  const visibleCategories = showAll ? faqCategories : faqCategories.slice(0, 1)

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-12">Foire aux questions</h2>

        <div className="space-y-4">
          {visibleCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-semibold mb-4">
                <span>{category.title}</span>
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`category-${categoryIndex}-item-${index}`}
                    className="bg-[#F3F4F6] border-0 rounded-lg shadow-md px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-[#2D2D2D] text-white rounded-lg font-medium hover:bg-[#404040] transition-colors duration-200"
          >
            {showAll ? "Afficher moins" : "Afficher plus"}
          </button>
        </div>
      </div>
    </section>
  )
}
