"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedWord from "./AnimatedWord";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Importing Link component for routing
import { useLanguage } from "./LanguageContext"; // Import LanguageContext

export default function Hero() {
  const { language } = useLanguage(); // Get the current language

  const translations = {
    ro: {
      title: "Măsurăm lumea pentru a crea viitorul în",
      animatedWords: ["Topografie", "Modelare 3D", "Urbanism"],
      description:
        "Descoperiți servicii precise și inovatoare pentru proiectele dvs. de construcție și planificare urbană.",
      exploreServices: "Explorați Serviciile",
      ourProjects: "Proiectele Noastre",
    },
    en: {
      title: "Measuring the world to create the future in",
      animatedWords: ["Topography", "3D Modeling", "Urbanism"],
      description:
        "Discover precise and innovative services for your construction and urban planning projects.",
      exploreServices: "Explore Services",
      ourProjects: "Our Projects",
    },
  };

  const t = translations[language]; // Select translations based on current language

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "Procad1.jpeg",
    "Procad2.jpeg",
    "Procad3.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-background to-muted">
      {/* Background Image Carousel */}
      <AnimatePresence>
        {images.map((img, index) => (
          <motion.div
            key={img}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={`/images/${img}`}
              alt={img.split(".")[0]}
              layout="fill"
              objectFit="cover"
              className="brightness-60"
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {t.title}
          <br />
          <span className="text-primary block">
            <AnimatedWord words={t.animatedWords} />
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t.description}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Primary Button with Link */}
          <Link href="/#services">
            <Button className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary px-8 py-4 font-medium rounded-lg shadow-md transition-transform transform hover:scale-105">
              {t.exploreServices} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          {/* Secondary Button with Link */}
          <Link href="/#projects">
            <Button
              variant="outline"
              className="border-white text-black hover:text-black hover:bg-white px-8 py-4 font-medium rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              {t.ourProjects}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
