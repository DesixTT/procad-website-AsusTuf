"use client";

import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Services from "./Services";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { LanguageProvider } from "./LanguageContext"; // Import your LanguageProvider

export default function MainPage() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted">
        <Header />
        <main>
          {/* Hero Section - Full Width */}
          <Hero />

          {/* Other Sections - Centered */}
          <div className="container mx-auto px-6">
            <Services />
            <Projects />
            <About />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
