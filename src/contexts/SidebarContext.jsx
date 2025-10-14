"use client";
import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { setSidebarActions } from "@/utils/sidebarUtils";

const SidebarContext = createContext();

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

// Define sidebar content types
export const SIDEBAR_TYPES = {
  NAVIGATION: 'navigation',
  CONTACT: 'contact', 
  READING: 'reading',
  SPECIFICATIONS: 'specifications',
  CUSTOM: 'custom'
};

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentType, setContentType] = useState(SIDEBAR_TYPES.NAVIGATION);
  const [contentData, setContentData] = useState(null);
  const [title, setTitle] = useState("Menu");
  
  // Open sidebar with specific content
  const openSidebar = useCallback((type = SIDEBAR_TYPES.NAVIGATION, data = null, sidebarTitle = "Menu") => {
    setContentType(type);
    setContentData(data);
    setTitle(sidebarTitle);
    setIsOpen(true);
  }, []);

  // Close sidebar
  const closeSidebar = useCallback(() => {
    setIsOpen(false);
    // Reset content after animation completes
    setTimeout(() => {
      setContentType(SIDEBAR_TYPES.NAVIGATION);
      setContentData(null);
      setTitle("Menu");
    }, 300);
  }, []);

  // Toggle sidebar (primarily for navigation)
  const toggleSidebar = useCallback(() => {
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar(SIDEBAR_TYPES.NAVIGATION);
    }
  }, [isOpen, openSidebar, closeSidebar]);

  // Convenience methods for different content types
  const openNavigation = useCallback(() => {
    openSidebar(SIDEBAR_TYPES.NAVIGATION, null, "Navigation");
  }, [openSidebar]);

  const openContact = useCallback((contactData = null) => {
    openSidebar(SIDEBAR_TYPES.CONTACT, contactData, "Contact Us");
  }, [openSidebar]);

  const openReading = useCallback((readingData) => {
    const sidebarTitle = readingData?.title || "Read More";
    openSidebar(SIDEBAR_TYPES.READING, readingData, sidebarTitle);
  }, [openSidebar]);

  const openSpecifications = useCallback((specificationsData) => {
    openSidebar(SIDEBAR_TYPES.SPECIFICATIONS, specificationsData, "Specifications");
  }, [openSidebar]);

  const openCustom = useCallback((customData, customTitle = "Custom") => {
    openSidebar(SIDEBAR_TYPES.CUSTOM, customData, customTitle);
  }, [openSidebar]);

  const value = {
    // State
    isOpen,
    contentType,
    contentData,
    title,
    
    // Actions
    openSidebar,
    closeSidebar,
    toggleSidebar,
    
    // Convenience methods
    openNavigation,
    openContact,
    openReading,
    openSpecifications,
    openCustom,
    
    // Constants
    SIDEBAR_TYPES
  };

  // Set up global sidebar actions for utility functions
  useEffect(() => {
    setSidebarActions(value);
  }, [isOpen, contentType, contentData, title]);

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};