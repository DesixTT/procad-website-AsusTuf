"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Building2, MapPin, Users2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "./LanguageContext"; // Import the language context

import EngineersImage from "@/public/images/map-measurements.jpg";
import Procad8 from "@/public/images/Procad8.jpg";
import despre from "@/public/images/despre.jpeg";
import despre2 from "@/public/images/despre2.jpg";
import despre3 from "@/public/images/despre3.jpg";
export default function About() {
  const { language } = useLanguage(); // Access the current language

  // Translations
  const translations = {
    ro: {
      title: "Cine suntem noi?",
      description:
        "La Procad, combinăm tehnologia de ultimă generație cu decenii de experiență pentru a oferi soluții de topografie și planificare urbană fără egal.",
      card1:
        "Suntem onorați să vă punem la dispoziție cele mai de calitate servicii în domeniul - CADASTRU, URBANISM, TOPOGRAFIE și PROIECTARE.",
      card2:
        "Firma PROCAD a fost înființată în anul 2005 și este autorizată de către Agenția Națională de Cadastru și Publicitate Imobiliară fiind certificată în Clasa I pentru domeniile cadastrului, geodeziei și cartografiei.",
      stats: [
        "Experiență din 2005 în topografie și cadastru",
        "Certificare Clasa I în geodezie și cartografie",
        "Proiecte de urbanism și dezvoltări imobiliare",
        "Echipă de profesioniști certificați",
      ],
    },
    en: {
      title: "Who are we?",
      description:
        "At Procad, we combine cutting-edge technology with decades of experience to provide unmatched topography and urban planning solutions.",
      card1:
        "We are honored to provide you with the highest quality services in the fields of CADASTRE, URBANISM, TOPOGRAPHY, and DESIGN.",
      card2:
        "PROCAB was established in 2005 and is authorized by the National Agency for Cadastre and Real Estate Advertising, certified in Class I for the fields of cadastre, geodesy, and cartography.",
      stats: [
        "Experience since 2005 in topography and cadastre",
        "Class I certification in geodesy and cartography",
        "Urban planning and real estate development projects",
        "A team of certified professionals",
      ],
    },
  };

  const t = translations[language]; // Use the appropriate translations based on the current language

  const stats = t.stats.map((label, index) => ({
    icon: [Award, Building2, MapPin, Users2][index],
    label,
    color: "bg-blue-500/10 text-blue-500",
  }));

  return (
    <section
    id="about"
    className="w-screen min-h-screen py-16 md:py-24 lg:py-32 bg-cover bg-center bg-fixed bg-no-repeat relative"
    style={{
      backgroundImage: "url('/images/despre3.jpg')", // Fixed background image
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw",
    }}
  >
  
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t.title}
              </h2>
              <p className="text-gray-500 md:text-lg lg:text-base xl:text-lg leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-500 leading-relaxed">{t.card1}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-500 leading-relaxed">{t.card2}</p>
                </CardContent>
              </Card>
            </div>

            {/* Stats Section */}
            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm ${stat.color}`}
                  >
                    <div className="p-2 rounded-full">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl -z-10" />
            <div className="relative w-full h-[450px] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={Procad8}
                alt="Engineers at work"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
