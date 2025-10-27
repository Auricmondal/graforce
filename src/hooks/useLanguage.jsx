'use client'
import React, { createContext, useState, useContext } from 'react';

// Translation objects
const translations = {
  en: {
    // Add your English translations here
    greeting: 'Hello',
    welcome: 'Welcome',
    goodbye: 'Goodbye',
  },
  de: {
    // Add your German translations here
    greeting: 'Hallo',
    welcome: 'Willkommen',
    goodbye: 'Auf Wiedersehen',
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translate = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang) => {
    if (lang === 'en' || lang === 'de') {
      setLanguage(lang);
    }
  };

  const value = {
    language,
    setLanguage: changeLanguage,
    getLanguage: () => language,
    t: translate,
    translations: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
