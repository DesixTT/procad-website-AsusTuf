"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext"; // Import the LanguageContext

import MapMeasurements from "@/public/images/map-measurements.jpg";
import Procad4 from "@/public/images/Procad4.jpg";
import Procad5 from "@/public/images/Procad5.jpg";
import Procad6 from "@/public/images/Procad6.jpg";
import Procad7 from "@/public/images/Procad7.jpg";
import arhivare from "@/public/images/arhivare.jpg";
import evaluare from "@/public/images/evaluare.jpg";
import proiectare from "@/public/images/proiectare.jpg";
import Procad10 from "@/public/images/Procad10.jpg";
import Procad8 from "@/public/images/Procad8.jpg";
import fotogrammetrie from "@/public/images/fotogrammetrie.jpg";
export default function Projects() {
  const { language } = useLanguage(); // Access the current language

  // Translations
  const translations = {
    ro: {
      title: "Proiecte Realizate",
      projects: [
        {
          title: "Cadastru",
          image: Procad4,
          description: "Revitalizarea centrului orașului și dezvoltarea zonelor rezidențiale.",
          slug: "city-center-revitalization",
        },
        {
          title: "Topografie",
          image: Procad10,
          description: "Planificare suburbie ecologică și măsurători precise.",
          slug: "eco-friendly-suburb-planning",
        },
        {
          title: "Mobile Mapping si GIS",
          image: Procad5,
          description: "Cartografiere industrială și infrastructuri.",
          slug: "industrial-zone-mapping",
        },
        {
          title: "Fotogrammetrie",
          image: fotogrammetrie
          ,
          description: "Organizarea și digitalizarea documentelor esențiale.",
          slug: "proiecte-arhivare",
        },
        {
          title: " Arhitectura - Urbanism",
          image:Procad8,
          description: "Arhitectura - Urbanism",
          slug: "arhitectura-urbanism",

        },
        {
          title: "Arhivare electronica",
          image:arhivare,
          description: "Arhivare electronica",
          slug: "arhivare-electronica",
        },
        {
          title: " Proiectare",
          image:proiectare,
          description: "Proiectare",
          slug: "proiectare",
        },
        {
          title: " Evaluari",
          image:evaluare,
          description: "Evaluari",
          slug: "evaluari",
        }


        
      ],
      viewAll: "Vezi toate proiectele",
    },
    en: {
      title: "Completed Projects",
      projects: [
        {
          title: "Cadastre and Urbanism Collaborations",
          image: MapMeasurements,
          description: "City center revitalization and residential area development.",
          slug: "city-center-revitalization",
        },
        {
          title: "Topography Collaborations",
          image: MapMeasurements,
          description: "Eco-friendly suburb planning and precise measurements.",
          slug: "eco-friendly-suburb-planning",
        },
        {
          title: "Design Works and Collaborations",
          image: MapMeasurements,
          description: "Industrial mapping and infrastructure projects.",
          slug: "industrial-zone-mapping",
        },
        {
          title: "Archiving Projects and Collaborations",
          image: MapMeasurements,
          description: "Organizing and digitizing essential documents.",
          slug: "proiecte-arhivare",
        },
        
      ],
      viewAll: "View All Projects",
    },
  };

  const t = translations[language]; // Use the appropriate translations based on the current language

  return (
    <section
  id="projects"
  className="w-screen min-h-screen py-12 md:py-24 lg:py-32 bg-cover bg-center bg-fixed bg-no-repeat relative"
  style={{
    backgroundImage: "url('/images/Procad10.jpg')", // Fixed background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    left: "50%",
    transform: "translateX(-50%)",
  }}
>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center"
      >
        {/* Section Title */}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 gradient-text">
          {t.title}
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover-lift"
            >
              {/* Project Card */}
              <Link href={`/projects/${project.slug}`} passHref>
                <div>
                  <Image
                    width={600}
                    height={400}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black/60">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-white bg-slate-700">
            {t.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
