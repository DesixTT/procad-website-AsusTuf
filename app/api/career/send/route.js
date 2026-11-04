import { Resend } from "resend";
import validator from "validator";
import EmailTemplate from "@/components/emails/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // Citim FormData pentru că avem fișier
    const formData = await req.formData();
    
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const cvFile = formData.get("cv");

    // Validare
    if (
      !name || !email || !message ||
      !validator.isEmail(email) ||
      !validator.isLength(name, { min: 1, max: 50 }) ||
      !validator.isLength(message, { min: 10, max: 1000 })
    ) {
      return new Response(
        JSON.stringify({ error: "Date invalide. Verifică lungimea mesajului (minim 10 caractere)." }),
        { status: 400 }
      );
    }

    // Pregătim atașamentul
    let attachments = [];
    if (cvFile && cvFile.size > 0) {
      const arrayBuffer = await cvFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: cvFile.name,
        content: buffer,
      });
    }

    // Trimitem
    const { data, error } = await resend.emails.send({
      from: "Procad Contact <onboarding@resend.dev>",
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Career Application from ${name}`,
      react: <EmailTemplate name={name} email={email} message={message} />,
      attachments: attachments,
    });

    if (error) {
      console.error("Eroare Resend:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    console.error("Eroare server:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}