import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ChatWidget } from "@/components/chat-widget"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
})

export const metadata: Metadata = {
  title: "ORMA - Agence-conseil & Agence de mesure en Suisse",
  description:
    "ORMA est une agence spécialisée en mesure, conseil et relevés architecturaux en Suisse. Services professionnels de topographie, diagnostic et modélisation 3D.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`font-sans antialiased ${playfair.variable}`}>
        <ThemeProvider defaultTheme="light" storageKey="orma-theme">
          {children}
          {/* <ChatWidget /> */}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
