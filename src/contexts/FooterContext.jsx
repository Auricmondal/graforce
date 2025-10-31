"use client";
import React, { createContext, useContext, useState } from 'react';

const FooterContext = createContext();

export const useFooterHeight = () => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error('useFooterHeight must be used within FooterProvider');
  }
  return context;
};

export const FooterProvider = ({ children }) => {
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <FooterContext.Provider value={{ footerHeight, setFooterHeight }}>
      {children}
    </FooterContext.Provider>
  );
};