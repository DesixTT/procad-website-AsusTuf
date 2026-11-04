"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext"; // Import the Language Context
import Logo from "@/public/images/Procad_Logo_alb.png"; // Ensure this is the correct logo path

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current page route

  // 🔥 Import language state and toggle function
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* ✅ Logo + Conditional Procad Text */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="Procad Logo"
            width={120}
            height={50}
            className="transition-all duration-300"
          />
          {/* ✅ Show "Procad" text only when scrolling down (except on the landing page) */}
          {isScrolled && pathname !== "/" && (
            <span className="text-2xl font-bold tracking-wide text-gray-800 transition-opacity duration-300">
              Procad
            </span>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#services" className="hover:text-primary transition-colors">
            {language === "ro" ? "Servicii" : "Services"}
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            {language === "ro" ? "Proiecte" : "Projects"}
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            {language === "ro" ? "Despre" : "About"}
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            {language === "ro" ? "Contact" : "Contact"}
          </a>
          <Link href="/career" className="hover:text-primary transition-colors">
            {language === "ro" ? "Cariera" : "Career"}
          </Link>

          {/* ✅ Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="hover:text-primary transition-colors"
          >
            {language === "ro" ? "EN" : "RO"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-6 text-black">
            <a href="#services" className="hover:text-primary transition-colors">
              {language === "ro" ? "Servicii" : "Services"}
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              {language === "ro" ? "Proiecte" : "Projects"}
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              {language === "ro" ? "Despre" : "About"}
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              {language === "ro" ? "Contact" : "Contact"}
            </a>
            <Link href="/career" className="hover:text-primary transition-colors">
              {language === "ro" ? "Cariera" : "Career"}
            </Link>

            {/* ✅ Language Toggle Button for Mobile Menu */}
            <button
              onClick={toggleLanguage}
              className="hover:text-primary transition-colors mt-4"
            >
              {language === "ro" ? "EN" : "RO"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
