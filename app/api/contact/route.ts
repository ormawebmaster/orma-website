import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, phone, category, representative, companyName, role, message } = body

        // Create Outlook SMTP transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.office365.com",
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                ciphers: "SSLv3",
            },
        })

        // Map category values to readable labels
        const categoryLabels: Record<string, string> = {
            architecture: "Agencement de Bureaux",
            geometrie: "Industrie",
            diagnostic: "Établi horloger",
            autre: "Autre",
        }

        // Build email HTML content
        const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #2D2D2D; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">📩 Nouveau message de contact - ORMA</h1>
        </div>
        
        <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #CC2A3F; padding-bottom: 8px;">Informations du contact</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 200px;">Nom et Prénom:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Téléphone:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Catégorie:</td>
              <td style="padding: 8px 0;">${categoryLabels[category] || category}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Représente une entreprise:</td>
              <td style="padding: 8px 0;">${representative === "oui" ? "Oui" : "Non"}</td>
            </tr>
            ${representative === "oui" ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Nom de l'entreprise:</td>
              <td style="padding: 8px 0;">${companyName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Rôle:</td>
              <td style="padding: 8px 0;">${role}</td>
            </tr>
            ` : ""}
          </table>

          ${message ? `
          <h2 style="color: #333; border-bottom: 2px solid #CC2A3F; padding-bottom: 8px; margin-top: 24px;">Message</h2>
          <p style="background-color: #f9fafb; padding: 16px; border-radius: 6px; line-height: 1.6; color: #333;">${message.replace(/\n/g, "<br>")}</p>
          ` : ""}
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            Ce message a été envoyé depuis le formulaire de contact du site orma.ch
          </p>
        </div>
      </div>
    `

        // Send the email
        await transporter.sendMail({
            from: process.env.SMTP_FROM || "info@orma.ch",
            to: process.env.SMTP_TO || "info@orma.ch",
            replyTo: email,
            subject: `[ORMA Contact] Nouveau message de ${name} - ${categoryLabels[category] || category}`,
            html: htmlContent,
        })

        return NextResponse.json({ success: true, message: "Email envoyé avec succès" })
    } catch (error) {
        console.error("Error sending email:", error)
        return NextResponse.json(
            { success: false, message: "Erreur lors de l'envoi de l'email" },
            { status: 500 }
        )
    }
}
