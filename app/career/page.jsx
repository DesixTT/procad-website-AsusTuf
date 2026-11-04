"use client";

import Header from "@/app/components/Header";
import { useState } from "react";
import { useLanguage } from "@/app/components/LanguageContext"; // Assuming you have this context

export default function Career() {
  const { language } = useLanguage(); // Get the current language

  // Translations
  const translations = {
    en: {
      pageTitle: "Career Application",
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "Your email address",
      message: "Message",
      messagePlaceholder: "Write your message here...",
      uploadCV: "Upload CV (PDF only)",
      submitButton: "Submit Application",
      sending: "Sending...",
      successMessage: "Application sent successfully!",
      errorMessage: "Failed to send the application. Please try again.",
    },
    ro: {
      pageTitle: "Aplicare pentru Carieră",
      name: "Nume",
      namePlaceholder: "Numele tău complet",
      email: "Email",
      emailPlaceholder: "Adresa ta de email",
      message: "Mesaj",
      messagePlaceholder: "Scrie mesajul tău aici...",
      uploadCV: "Încarcă CV-ul (doar PDF)",
      submitButton: "Trimite",
      sending: "Se trimite...",
      successMessage: "Aplicația a fost trimisă cu succes!",
      errorMessage: "Trimiterea aplicației a eșuat. Te rugăm să încerci din nou.",
    },
  };

  const t = translations[language]; // Choose the appropriate translation based on the language

  const [formData, setFormData] = useState({ name: "", email: "", message: "", cv: null });
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (r) => {
        setFormData({ ...formData, cv: { filename: file.name, content: r.target.result.split(",")[1] } });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
    // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      // Creăm un obiect FormData pentru a trimite fișiere
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);
      // Luăm fișierul direct din input-ul HTML
      const fileInput = document.getElementById("cv");
      if (fileInput.files[0]) {
        data.append("cv", fileInput.files[0]);
      }

      const response = await fetch("/api/career/send", {
        method: "POST",
        // NU mai punem headers cu Content-Type, browserul o face automat pentru FormData
        body: data, 
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: "", email: "", message: "", cv: null });
        document.getElementById("cv").value = ""; // Resetăm input-ul de fișier
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 min-h-screen text-white">
      {/* Include Header at the top */}
      <Header />

      <main className="container mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">{t.pageTitle}</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-lg shadow-lg text-gray-900"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.namePlaceholder}
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.emailPlaceholder}
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.messagePlaceholder}
              rows={4}
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="cv" className="block text-sm font-medium">
              {t.uploadCV}
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              accept=".pdf"
              onChange={handleFileChange}
              className="mt-2 block w-full text-sm"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium text-lg"
              disabled={status.loading}
            >
              {status.loading ? t.sending : t.submitButton}
            </button>
          </div>

          {/* Status Messages */}
          {status.success && (
            <p className="text-green-500 text-center">{t.successMessage}</p>
          )}
          {status.error && (
            <p className="text-red-500 text-center">{t.errorMessage}</p>
          )}
        </form>
      </main>
    </div>
  );
}
