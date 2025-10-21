/**
 * Utility functions to trigger sidebar from anywhere in the app
 * These can be imported and used without needing to be inside a React component
 */

// Store reference to sidebar actions (will be set by the SidebarProvider)
let sidebarActions = null;

export const setSidebarActions = (actions) => {
  sidebarActions = actions;
};

export const getSidebarActions = () => sidebarActions;

// Utility functions that can be called from anywhere
export const sidebarUtils = {
  /**
   * Open navigation sidebar
   */
  openNavigation: () => {
    if (sidebarActions) {
      sidebarActions.openNavigation();
    } else {
      console.warn('Sidebar actions not initialized. Make sure SidebarProvider is wrapped around your app.');
    }
  },

  /**
   * Open contact form
   * @param {Object} contactData - Optional contact data
   */
  openContact: (contactData = null) => {
    if (sidebarActions) {
      sidebarActions.openContact(contactData);
    } else {
      console.warn('Sidebar actions not initialized. Make sure SidebarProvider is wrapped around your app.');
    }
  },

  /**
   * Open reading content
   * @param {Object} readingData - Content data
   */
  openReading: (readingData) => {
    if (sidebarActions) {
      sidebarActions.openReading(readingData);
    } else {
      console.warn('Sidebar actions not initialized. Make sure SidebarProvider is wrapped around your app.');
    }
  },

  /**
   * Open custom content
   * @param {*} customData - Custom content
   * @param {string} title - Sidebar title
   */
  openCustom: (customData, title = "Custom") => {
    if (sidebarActions) {
      sidebarActions.openCustom(customData, title);
    } else {
      console.warn('Sidebar actions not initialized. Make sure SidebarProvider is wrapped around your app.');
    }
  },

  /**
   * Close sidebar
   */
  close: () => {
    if (sidebarActions) {
      sidebarActions.closeSidebar();
    } else {
      console.warn('Sidebar actions not initialized. Make sure SidebarProvider is wrapped around your app.');
    }
  },

  /**
   * Toggle navigation sidebar
   */
  toggle: () => {
    if (sidebarActions) {
      sidebarActions.toggleSidebar();
    } else {
      console.warn('Sidebar actions not initialized. Make sure SidebarProvider is wrapped around your app.');
    }
  },

  // Convenience methods
  showProduct: (productName, productDescription) => {
    sidebarUtils.openContact({
      subject: `Product Inquiry: ${productName}`,
      showSubject: true,
      additionalInfo: `I'm interested in learning more about ${productName}. ${productDescription ? `\n\n${productDescription}` : ''}`
    });
  },

  showService: (serviceName, serviceDescription) => {
    sidebarUtils.openContact({
      subject: `Service Inquiry: ${serviceName}`,
      showSubject: true,
      additionalInfo: `I would like to know more about your ${serviceName} service. ${serviceDescription ? `\n\n${serviceDescription}` : ''}`
    });
  },

  showArticle: (title, content, author = null, date = null) => {
    sidebarUtils.openReading({
      title,
      content,
      author,
      date,
      category: 'Article',
      ctaText: 'Contact Us for More Info',
      ctaAction: 'contact'
    });
  },

  showNews: (title, content, date = null) => {
    sidebarUtils.openReading({
      title,
      content,
      date,
      category: 'News',
      ctaText: 'Stay Updated',
      ctaAction: 'contact'
    });
  }
};

// Backward compatibility - export individual functions
export const openSidebarNavigation = sidebarUtils.openNavigation;
export const openSidebarContact = sidebarUtils.openContact;
export const openSidebarReading = sidebarUtils.openReading;
export const openSidebarCustom = sidebarUtils.openCustom;
export const closeSidebar = sidebarUtils.close;
export const toggleSidebar = sidebarUtils.toggle;