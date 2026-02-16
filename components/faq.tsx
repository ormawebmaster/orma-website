import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqCategories = [
  {
    title: "À propos d'ORMA",
    icon: "🔹",
    faqs: [
      {
        question: "Qui est ORMA ?",
        answer: "ORMA est une entreprise spécialisée dans la conception, la fabrication et l'aménagement d'espaces professionnels sur mesure. Nous accompagnons nos clients de l'idée à la réalisation, en combinant design, ergonomie et savoir-faire industriel.",
      },
      {
        question: "Depuis quand ORMA existe-t-elle ?",
        answer: "ORMA bénéficie de plus de 75 ans d'expérience dans la manufacture et l'aménagement d'espaces, au service de projets exigeants.",
      },
      {
        question: "Dans quelles zones géographiques intervenez-vous ?",
        answer: "Nous intervenons principalement en Suisse et en France, et pouvons étudier des projets à l'international selon leur nature.",
      },
    ],
  },
  {
    title: "Projets & prestations",
    icon: "🔹",
    faqs: [
      {
        question: "Quels types de projets réalisez-vous ?",
        answer: "Bureaux, laboratoires, espaces commerciaux, coworking, établissements publics et environnements techniques.",
      },
      {
        question: "Proposez-vous des solutions sur mesure ?",
        answer: "Oui, toutes nos solutions sont conçues sur mesure afin de répondre précisément aux besoins, contraintes et usages de chaque client.",
      },
      {
        question: "Prenez-vous en charge l'ensemble du projet ?",
        answer: "Oui, nous assurons un accompagnement complet : conseil, conception, fabrication, livraison et installation.",
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
        answer: "Nous sélectionnons des matériaux durables et de haute qualité, adaptés aux usages professionnels et aux exigences techniques.",
      },
      {
        question: "Comment garantissez-vous la qualité de vos réalisations ?",
        answer: "Chaque projet fait l'objet de contrôles rigoureux à chaque étape, de la conception à la finition.",
      },
    ],
  },
  {
    title: "Délais & organisation",
    icon: "🔹",
    faqs: [
      {
        question: "Quels sont vos délais moyens de réalisation ?",
        answer: "Les délais varient selon la complexité du projet. Un planning précis est défini dès la validation du cahier des charges.",
      },
      {
        question: "Puis-je suivre l'avancement de mon projet ?",
        answer: "Oui, un interlocuteur dédié vous accompagne et vous informe tout au long du projet.",
      },
    ],
  },
  {
    title: "Devis & budget",
    icon: "🔹",
    faqs: [
      {
        question: "Comment obtenir un devis ?",
        answer: "Il suffit de nous contacter via le formulaire du site ou par téléphone. Nous analyserons votre besoin et vous proposerons une offre personnalisée.",
      },
      {
        question: "Le devis est-il gratuit ?",
        answer: "Oui, l'étude initiale et le devis sont gratuits et sans engagement.",
      },
      {
        question: "Proposez-vous des solutions adaptées à différents budgets ?",
        answer: "Oui, nous concevons des solutions optimisées selon vos contraintes budgétaires tout en garantissant la qualité.",
      },
    ],
  },
  {
    title: "Service après-vente",
    icon: "🔹",
    faqs: [
      {
        question: "Assurez-vous le service après-vente ?",
        answer: "Oui, ORMA assure le suivi et le service après-vente après l'installation.",
      },
      {
        question: "Proposez-vous des modifications ou extensions ultérieures ?",
        answer: "Oui, nous pouvons faire évoluer vos aménagements selon vos nouveaux besoins.",
      },
    ],
  },
]

export function FAQ() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-12">Foire aux questions</h2>

        <div className="space-y-4">
          {faqCategories.map((category, categoryIndex) => (
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
      </div>
    </section>
  )
}
