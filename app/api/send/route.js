import { Resend } from "resend";
import validator from "validator";
import EmailTemplate from "@/components/emails/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (
      !name || !email || !message ||
      !validator.isEmail(email) ||
      !validator.isLength(name, { min: 1, max: 50 }) ||
      !validator.isLength(message, { min: 10, max: 1000 })
    ) {
      return new Response(
        JSON.stringify({ error: "Invalid input. Please fill all fields correctly." }),
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Procad Contact <onboarding@resend.dev>",
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      react: <EmailTemplate name={name} email={email} message={message} />,
    });

    if (error) {
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    console.error("Error handling request:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
