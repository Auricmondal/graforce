import { useSidebar } from '@/contexts/SidebarContext';

/**
 * Custom hook to easily trigger different sidebar content types
 * @returns {Object} - Sidebar control functions
 */
export const useSidebarActions = () => {
  const { 
    openNavigation, 
    openContact, 
    openReading, 
    openCustom, 
    closeSidebar,
    toggleSidebar,
    isOpen 
  } = useSidebar();

  /**
   * Opens sidebar with navigation menu
   */
  const showNavigation = () => {
    openNavigation();
  };

  /**
   * Opens sidebar with contact form
   * @param {Object} contactData - Optional contact form data
   * @param {string} contactData.subject - Pre-filled subject
   * @param {boolean} contactData.showSubject - Show subject field
   * @param {string} contactData.additionalInfo - Additional info text
   */
  const showContactForm = (contactData = null) => {
    openContact(contactData);
  };

  /**
   * Opens sidebar with reading content
   * @param {Object} readingData - Content data for reading
   * @param {string} readingData.title - Content title
   * @param {string|React.ReactNode} readingData.content - Main content
   * @param {string} readingData.author - Author name
   * @param {string} readingData.date - Publication date
   * @param {string} readingData.readTime - Estimated read time
   * @param {string} readingData.category - Content category
   * @param {Array<string>} readingData.tags - Content tags
   * @param {Array<Object>} readingData.relatedLinks - Related links
   * @param {string} readingData.ctaText - Call to action text
   * @param {string|Function} readingData.ctaAction - CTA action ('contact' or function)
   */
  const showReadingContent = (readingData) => {
    openReading(readingData);
  };

  /**
   * Opens sidebar with custom content
   * @param {React.ReactNode|Object} customData - Custom content or component
   * @param {string} title - Sidebar title
   */
  const showCustomContent = (customData, title = "Custom") => {
    openCustom(customData, title);
  };

  /**
   * Closes the sidebar
   */
  const hideSidebar = () => {
    closeSidebar();
  };

  /**
   * Toggles the sidebar (mainly for navigation)
   */
  const toggleNav = () => {
    toggleSidebar();
  };

  return {
    // Basic controls
    showNavigation,
    showContactForm,
    showReadingContent,
    showCustomContent,
    hideSidebar,
    toggleNav,
    
    // State
    isOpen,
    
    // Quick access methods
    showContact: showContactForm,
    showReading: showReadingContent,
    showCustom: showCustomContent,
    hide: hideSidebar,
    toggle: toggleNav
  };
};

/**
 * Hook specifically for contact form interactions
 * @returns {Object} - Contact-specific functions
 */
export const useContactSidebar = () => {
  const { showContactForm, isOpen } = useSidebarActions();

  /**
   * Show contact form with inquiry about a specific product
   * @param {string} productName - Name of the product
   */
  const inquireAboutProduct = (productName) => {
    showContactForm({
      subject: `Product Inquiry: ${productName}`,
      showSubject: true,
      additionalInfo: `I'm interested in learning more about ${productName}.`
    });
  };

  /**
   * Show contact form with service inquiry
   * @param {string} serviceName - Name of the service
   */
  const inquireAboutService = (serviceName) => {
    showContactForm({
      subject: `Service Inquiry: ${serviceName}`,
      showSubject: true,
      additionalInfo: `I would like to know more about your ${serviceName} service.`
    });
  };

  /**
   * Show general contact form
   */
  const generalInquiry = () => {
    showContactForm({
      subject: 'General Inquiry',
      showSubject: true,
      additionalInfo: 'Please fill out the form below and we\'ll get back to you soon.'
    });
  };

  /**
   * Show support contact form
   */
  const supportRequest = () => {
    showContactForm({
      subject: 'Support Request',
      showSubject: true,
      additionalInfo: 'Need help? Describe your issue and our support team will assist you.'
    });
  };

  return {
    inquireAboutProduct,
    inquireAboutService,
    generalInquiry,
    supportRequest,
    isOpen
  };
};

/**
 * Hook for reading content interactions
 * @returns {Object} - Reading content functions
 */
export const useReadingSidebar = () => {
  const { showReadingContent, isOpen } = useSidebarActions();

  /**
   * Show article in sidebar
   * @param {Object} article - Article data
   */
  const showArticle = (article) => {
    showReadingContent({
      ...article,
      ctaText: article.ctaText || 'Contact Us for More Info',
      ctaAction: 'contact'
    });
  };

  /**
   * Show blog post in sidebar
   * @param {Object} blogPost - Blog post data
   */
  const showBlogPost = (blogPost) => {
    showReadingContent({
      ...blogPost,
      category: blogPost.category || 'Blog',
      ctaText: blogPost.ctaText || 'Read More on Our Blog'
    });
  };

  /**
   * Show news item in sidebar
   * @param {Object} news - News data
   */
  const showNews = (news) => {
    showReadingContent({
      ...news,
      category: news.category || 'News',
      ctaText: news.ctaText || 'Stay Updated'
    });
  };

  /**
   * Show case study in sidebar
   * @param {Object} caseStudy - Case study data
   */
  const showCaseStudy = (caseStudy) => {
    showReadingContent({
      ...caseStudy,
      category: caseStudy.category || 'Case Study',
      ctaText: caseStudy.ctaText || 'Discuss Your Project',
      ctaAction: 'contact'
    });
  };

  return {
    showArticle,
    showBlogPost,
    showNews,
    showCaseStudy,
    isOpen
  };
};