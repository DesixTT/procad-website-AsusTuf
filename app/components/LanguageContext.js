"use client";

import { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null); // Start with null to prevent hydration issues

  // Load language from localStorage after component mounts (to avoid SSR mismatch)
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "ro";
    setLanguage(storedLanguage);
  }, []);

  // Update localStorage when language changes
  useEffect(() => {
    if (language) {
      localStorage.setItem("language", language);
    }
  }, [language]);

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ro" ? "en" : "ro"));
  };

  // Prevent rendering until language is loaded (fixes hydration mismatch)
  if (!language) return null;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
