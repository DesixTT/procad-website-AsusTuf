"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "./LanguageContext"; // Import the language context

export default function Contact() {
  const { language } = useLanguage(); // Access the current language

  // Translations
  const translations = {
    ro: {
      title: "Contactează-ne",
      description:
        "Ne-ar face plăcere să auzim de la tine! Indiferent dacă ai o întrebare despre serviciile noastre sau dorești să începi următorul proiect, spune-ne cum te putem ajuta.",
      email: "Email",
      emailValue: "procadtm@gmail.com",
      phone: "Telefon",
      phoneValue: "(0256) 430 856, (0356) 437 098",
      address: "Adresă",
      addressValue: "Str. Suceava, Nr. 13, Timișoara, Timiș",
      nameLabel: "Nume",
      namePlaceholder: "Numele tău complet",
      emailLabel: "Email",
      emailPlaceholder: "Adresa ta de email",
      messageLabel: "Mesaj",
      messagePlaceholder: "Scrie mesajul tău aici...",
      submitButton: "Trimite Mesaj",
      successMessage: "Mesajul a fost trimis cu succes!",
      errorMessage: "A apărut o eroare. Te rugăm să încerci din nou.",
    },
    en: {
      title: "Contact Us",
      description:
        "We’d love to hear from you! Whether you have a question about our services or want to start your next project, let us know how we can help.",
      email: "Email",
      emailValue: "procadtm@gmail.com",
      phone: "Phone",
      phoneValue: "(0256) 430 856, (0356) 437 098",
      address: "Address",
      addressValue: "Str. Suceava, Nr. 13, Timișoara, Timiș",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "Your email address",
      messageLabel: "Message",
      messagePlaceholder: "Write your message here...",
      submitButton: "Send Message",
      successMessage: "Your message was sent successfully!",
      errorMessage: "An error occurred. Please try again.",
    },
  };

  const t = translations[language]; // Use the appropriate translations based on the current language

  // Form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: false });
  const [errorMessage, setErrorMessage] = useState(""); // Custom error messages

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill out all fields.");
      setStatus({ loading: false, success: false, error: true });
      return;
    }
    if (!formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      setStatus({ loading: false, success: false, error: true });
      return;
    }
    if (formData.message.length < 10) {
      setErrorMessage("Message must be at least 10 characters long.");
      setStatus({ loading: false, success: false, error: true });
      return;
    }

    setStatus({ loading: true, success: false, error: false });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        const result = await response.json();
        setErrorMessage(result.error || "Failed to send email.");
        setStatus({ loading: false, success: false, error: true });
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-200 relative mt-20"
      style={{ marginBottom: "6rem" }}
    >
      <div className="container mx-auto max-w-4xl px-6">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-800">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t.description}</p>
        </div>

        {/* Form Section */}
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                  className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.emailPlaceholder}
                  className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                {t.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                rows={4}
                className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium text-lg"
                disabled={status.loading}
              >
                {status.loading ? "Sending..." : t.submitButton}
              </Button>
            </div>

            {/* Status Messages */}
            {status.success && (
              <p className="text-green-600 text-center">{t.successMessage}</p>
            )}
            {status.error && (
              <p className="text-red-600 text-center">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
