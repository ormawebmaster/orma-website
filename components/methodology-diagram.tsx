"use client"

import { Tag, Rocket } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

// Définition des étapes avec leurs positions en degrés sur le cercle vert
// Parcours dans le sens horaire : Inspiration → Solution → Concrétisation → Expérimentation → Satisfaction
const methodologySteps = [
  {
    id: 1,
    title: "Votre inspiration",
    description: "Vous partagez votre vision et vos envies. Nous donnons forme à vos idées.",
    angle: 315, // top-right - DÉPART
  },
  {
    id: 2,
    title: "Notre solution",
    description: "Nous imaginons un espace cohérent et réalisable. Design, usage et équilibre au cœur du projet.",
    angle: 15, // right - slightly lower
  },
  {
    id: 3,
    title: "Notre concrétisation",
    description: "Nous fabriquons et installons avec précision. Votre projet devient réalité.",
    angle: 90, // bottom
  },
  {
    id: 4,
    title: "Votre expérimentation",
    description: "Vous explorez, ajustez et validez les choix essentiels. Un projet construit ensemble.",
    angle: 166, // left - slightly lower
  },
  {
    id: 5,
    title: "Votre satisfaction",
    description: "Votre confiance guide chacune de nos actions. Votre satisfaction est notre récompense. ",
    angle: 225, // top-left - ARRIVÉE
  },
]

export function MethodologyDiagram() {
  // Rouge foncé du logo ORMA
  const redColor = "#8B0000" // Rouge foncé
  const greenColor = "#7cb342" // Vert olive pour les éléments

  // Animation fluide continue - angle de la fusée
  const [rocketAngle, setRocketAngle] = useState(315) // Commence à "Votre inspiration"
  const animationRef = useRef<number | undefined>(undefined)
  const lastTimeRef = useRef<number>(0)

  // Animation continue : la fusée suit le cercle vert de manière fluide (comme un train sur rails)
  useEffect(() => {
    const speed = 0.015 // Vitesse de rotation (degrés par milliseconde)
    const startAngle = 315 // Votre inspiration (départ)
    const endAngle = 315 + 270 // Votre satisfaction (225° = 315° + 270° en sens horaire)

    const animate = (currentTime: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime
      }

      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime

      setRocketAngle(prevAngle => {
        let newAngle = prevAngle + speed * deltaTime
        // Si on dépasse l'angle de fin, on recommence
        if (newAngle >= endAngle) {
          newAngle = startAngle
        }
        return newAngle
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Position de la fusée sur le cercle VERT (cercle central)
  const getRocketPosition = () => {
    const radian = (rocketAngle * Math.PI) / 180
    // Rayon pour tourner autour du cercle vert central (width: 28%, height: 48%)
    const radiusX = 14 // % horizontal (moitié de 28%)
    const radiusY = 24 // % vertical (moitié de 48%)
    const x = 50 + Math.cos(radian) * radiusX
    const y = 50 + Math.sin(radian) * radiusY
    return { x, y }
  }

  // Calcul de la direction de la fusée (tangente au cercle, sens horaire)
  const getRocketRotation = () => {
    // La fusée pointe dans la direction du mouvement (tangente + 90° pour sens horaire)
    return rocketAngle + 90
  }

  const rocketPos = getRocketPosition()

  // Fonction pour calculer la position des points sur le cercle vert
  const getPointPosition = (angle: number) => {
    const radian = (angle * Math.PI) / 180
    const radiusX = 14
    const radiusY = 24
    const x = 50 + Math.cos(radian) * radiusX
    const y = 50 + Math.sin(radian) * radiusY
    return { x, y }
  }

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-12 lg:px-20 overflow-hidden">
      {/* Background avec sky */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white/40 md:bg-transparent z-10" />
        <img
          src="/sky5.png"
          alt="Sky background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Titre de la section */}
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-12 text-gray-900">
          Notre Méthode de Fonctionnement
        </h2>

        {/* Container principal - Desktop */}
        <div className="hidden md:block relative w-full" style={{ paddingBottom: '55%' }}>
          {/* Grand ovale extérieur rouge foncé HORIZONTAL (forme "O" du logo) */}
          <div
            className="absolute"
            style={{
              top: '5%',
              left: '5%',
              right: '5%',
              bottom: '5%',
              borderRadius: '50%',
              border: `3px solid ${redColor}`,
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              WebkitMaskImage: 'radial-gradient(ellipse 15.6% 26.5% at 50% 50%, transparent 100%, black 100%)',
              maskImage: 'radial-gradient(ellipse 15.6% 26.5% at 50% 50%, transparent 100%, black 100%)',
            }}
          />

          {/* Cercle intérieur vert transparent (au centre) */}
          <div
            className="absolute rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '28%',
              height: '48%',
              border: `3px solid ${greenColor}`,
              backgroundColor: 'transparent',
            }}
          />

          {/* Points blancs aux positions des étapes sur le cercle vert */}
          {methodologySteps.map((step) => {
            const pos = getPointPosition(step.angle)
            return (
              <div
                key={step.id}
                className="absolute z-20"
                style={{
                  top: `${pos.y}%`,
                  left: `${pos.x}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  className="rounded-full bg-white shadow-md"
                  style={{
                    width: '8px',
                    height: '8px',
                    border: `2px solid ${greenColor}`,
                  }}
                />
              </div>
            )
          })}
          {/* Icône fusée fixe à la position de "Votre satisfaction" (arrivée) */}
          <div
            className="absolute z-30"
            style={{
              top: `${getPointPosition(225).y}%`,
              left: `${getPointPosition(225).x}%`,
              transform: 'translate(-50%, -50%) rotate(0deg)',
            }}
          >
            <div
              className="p-1.5 rounded-full bg-white shadow-lg"
              style={{
                border: `2px solid ${greenColor}`,
              }}
            >
              <Rocket className="w-4 h-4" style={{ color: greenColor }} />
            </div>
          </div>

          {/* Cartes avec style : fond blanc, bordure rouge à gauche, coins arrondis */}
          {/* Positionnées à l'intérieur du cercle rouge, proches du cercle vert */}

          {/* Votre satisfaction - top left inside circle */}
          <Link
            href="/methode/votre-satisfaction"
            className="absolute transition-all duration-200 hover:scale-105 cursor-pointer block"
            style={{
              top: '24%',
              left: '16%',
              width: '180px',
              height: '80px',
              backgroundColor: 'white',
              borderRadius: '4px',
              padding: '10px 12px',
              boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
              borderLeft: `3px solid ${redColor}`,
              overflow: 'hidden',
            }}
          >
            <h4 className="text-[10px] md:text-xs font-bold mb-1" style={{ color: redColor }}>
              Votre satisfaction
            </h4>
            <p className="text-[8px] md:text-[10px] text-gray-600 leading-snug line-clamp-3">
              Votre confiance guide chacune de nos actions. Votre satisfaction est notre récompense.
            </p>
          </Link>

          {/* Votre expérimentation - left inside circle */}
          <Link
            href="/methode/votre-experimentation"
            className="absolute transition-all duration-200 hover:scale-105 cursor-pointer block"
            style={{
              top: '56%',
              left: '15%',
              width: '180px',
              height: '80px',
              backgroundColor: 'white',
              borderRadius: '4px',
              padding: '10px 12px',
              boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
              borderLeft: `3px solid ${redColor}`,
              overflow: 'hidden',
            }}
          >
            <h4 className="text-[10px] md:text-xs font-bold mb-1" style={{ color: redColor }}>
              Votre expérimentation
            </h4>
            <p className="text-[8px] md:text-[10px] text-gray-600 leading-snug line-clamp-3">
              Vous explorez, ajustez et validez les choix essentiels. Un projet construit ensemble.
            </p>
          </Link>

          {/* Notre concrétisation - bottom center inside circle */}
          <Link
            href="/methode/notre-concretisation"
            className="absolute transition-all duration-200 hover:scale-105 cursor-pointer block"
            style={{
              bottom: '11%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '180px',
              height: '80px',
              backgroundColor: 'white',
              borderRadius: '4px',
              padding: '10px 12px',
              boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
              borderLeft: `3px solid ${redColor}`,
              overflow: 'hidden',
            }}
          >
            <h4 className="text-[10px] md:text-xs font-bold mb-1" style={{ color: redColor }}>
              Notre concrétisation
            </h4>
            <p className="text-[8px] md:text-[10px] text-gray-600 leading-snug line-clamp-3">
              Nous fabriquons et installons avec précision. Votre projet devient réalité.
            </p>
          </Link>

          {/* Votre inspiration - top right inside circle */}
          <Link
            href="/methode/votre-inspiration"
            className="absolute transition-all duration-200 hover:scale-105 cursor-pointer block"
            style={{
              top: '23%',
              right: '16%',
              width: '180px',
              height: '80px',
              backgroundColor: 'white',
              borderRadius: '4px',
              padding: '10px 12px',
              boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
              borderLeft: `3px solid ${redColor}`,
              overflow: 'hidden',
            }}
          >
            <h4 className="text-[10px] md:text-xs font-bold mb-1" style={{ color: redColor }}>
              Votre inspiration
            </h4>
            <p className="text-[8px] md:text-[10px] text-gray-600 leading-snug line-clamp-3">
              Vous partagez votre vision et vos envies. Nous donnons forme à vos idées.
            </p>
          </Link>

          {/* Notre solution - right inside circle */}
          <Link
            href="/methode/notre-solution"
            className="absolute transition-all duration-200 hover:scale-105 cursor-pointer block"
            style={{
              top: '56%',
              right: '16%',
              width: '180px',
              height: '80px',
              backgroundColor: 'white',
              borderRadius: '4px',
              padding: '10px 12px',
              boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
              borderLeft: `3px solid ${redColor}`,
              overflow: 'hidden',
            }}
          >
            <h4 className="text-[10px] md:text-xs font-bold mb-1" style={{ color: redColor }}>
              Notre solution
            </h4>
            <p className="text-[8px] md:text-[10px] text-gray-600 leading-snug line-clamp-3">
              Nous imaginons un espace cohérent et réalisable. Design, usage et équilibre au cœur du projet.
            </p>
          </Link>

        </div>

        {/* Mobile View: Vertical Structured Cards */}
        <div className="md:hidden flex flex-col gap-6 mt-8 relative z-20">
          {[
            {
              step: "01",
              title: "Votre inspiration",
              desc: "Vous partagez votre vision et vos envies. Nous donnons forme à vos idées.",
              link: "/methode/votre-inspiration"
            },
            {
              step: "02",
              title: "Notre solution",
              desc: "Nous imaginons un espace cohérent et réalisable. Design, usage et équilibre au cœur du projet.",
              link: "/methode/notre-solution"
            },
            {
              step: "03",
              title: "Notre concrétisation",
              desc: "Nous fabriquons et installons avec précision. Votre projet devient réalité.",
              link: "/methode/notre-concretisation"
            },
            {
              step: "04",
              title: "Votre expérimentation",
              desc: "Vous explorez, ajustez et validez les choix essentiels. Un projet construit ensemble.",
              link: "/methode/votre-experimentation"
            },
            {
              step: "05",
              title: "Votre satisfaction",
              desc: "Votre confiance guide chacune de nos actions. Votre satisfaction est notre récompense.",
              link: "/methode/votre-satisfaction"
            }
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 relative overflow-hidden transition-transform hover:-translate-y-1"
            >
              {/* Left Accent Line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1.5"
                style={{ backgroundColor: redColor }}
              />

              <div className="flex items-start gap-4">
                {/* Step Number Badge */}
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-white shrink-0"
                  style={{ backgroundColor: redColor }}
                >
                  {item.step}
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: redColor }}>
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
