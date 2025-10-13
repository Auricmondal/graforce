'use client'
import React from 'react';
import { useSidebarActions, useContactSidebar, useReadingSidebar } from '@/hooks/useSidebarActions';
import { sidebarUtils } from '@/utils/sidebarUtils';
import PrimaryButton from '@/components/utils/buttons/PrimaryButton';

/**
 * Example component showing different ways to trigger the sidebar
 * This can be used anywhere in your app
 */
const SidebarExamples = () => {
  // Using hooks (inside React components)
  const { showNavigation, showContactForm, showReadingContent, showCustomContent } = useSidebarActions();
  const { inquireAboutProduct, inquireAboutService, generalInquiry } = useContactSidebar();
  const { showArticle, showBlogPost, showNews } = useReadingSidebar();

  // Example data
  const sampleArticle = {
    title: "Revolutionary Plasma Technology in Energy Production",
    content: `
      <p>Plasma technology represents a breakthrough in sustainable energy production. Our innovative approach to plasma-based systems offers unprecedented efficiency in converting waste materials into clean energy.</p>
      
      <h3>Key Benefits:</h3>
      <ul>
        <li>Zero emissions production</li>
        <li>99.9% conversion efficiency</li>
        <li>Scalable from industrial to residential applications</li>
        <li>Cost-effective implementation</li>
      </ul>
      
      <p>This technology addresses the growing need for sustainable energy solutions while providing economic benefits to organizations worldwide.</p>
    `,
    author: "Dr. Sarah Johnson",
    date: "October 13, 2025",
    readTime: "5 min read",
    category: "Technology",
    tags: ["plasma", "energy", "sustainability", "innovation"],
    relatedLinks: [
      { title: "Learn More About Our Technology", url: "https://graforce.com/technology" },
      { title: "Case Studies", url: "https://graforce.com/case-studies" }
    ]
  };

  const customContentExample = {
    title: "Custom Sidebar Content",
    description: "This is an example of custom content in the sidebar",
    content: (
      <div>
        <p className="text-gray-600 mb-4">You can put any React components here!</p>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-blue-800 mb-2">Features:</h4>
          <ul className="text-blue-700 space-y-1">
            <li>• Dynamic content loading</li>
            <li>• Custom styling</li>
            <li>• Interactive elements</li>
          </ul>
        </div>
      </div>
    ),
    actions: [
      {
        label: "Primary Action",
        primary: true,
        onClick: () => alert("Primary action clicked!")
      },
      {
        label: "Secondary Action",
        primary: false,
        onClick: () => alert("Secondary action clicked!")
      }
    ]
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Sidebar Examples</h1>
      
      {/* Basic Sidebar Controls */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Controls</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PrimaryButton onClick={showNavigation}>
            Show Navigation
          </PrimaryButton>
          <PrimaryButton onClick={() => showContactForm()}>
            Show Contact Form
          </PrimaryButton>
          <PrimaryButton onClick={() => showReadingContent(sampleArticle)}>
            Show Article
          </PrimaryButton>
          <PrimaryButton onClick={() => showCustomContent(customContentExample)}>
            Show Custom Content
          </PrimaryButton>
        </div>
      </section>

      {/* Contact Examples */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PrimaryButton onClick={() => inquireAboutProduct("Methane Plasmalyzer®")}>
            Product Inquiry
          </PrimaryButton>
          <PrimaryButton onClick={() => inquireAboutService("Hydrogen Production")}>
            Service Inquiry
          </PrimaryButton>
          <PrimaryButton onClick={generalInquiry}>
            General Inquiry
          </PrimaryButton>
        </div>
      </section>

      {/* Reading Content Examples */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibent mb-4">Reading Content Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PrimaryButton onClick={() => showArticle(sampleArticle)}>
            Show Article
          </PrimaryButton>
          <PrimaryButton onClick={() => showBlogPost({
            ...sampleArticle,
            title: "Latest Blog Post: Green Energy Trends",
            category: "Blog"
          })}>
            Show Blog Post
          </PrimaryButton>
          <PrimaryButton onClick={() => showNews({
            ...sampleArticle,
            title: "Breaking: New Partnership Announced",
            category: "News"
          })}>
            Show News
          </PrimaryButton>
        </div>
      </section>

      {/* Utility Functions (can be called from anywhere) */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Utility Functions (Global Access)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PrimaryButton onClick={() => sidebarUtils.openNavigation()}>
            Utils: Open Nav
          </PrimaryButton>
          <PrimaryButton onClick={() => sidebarUtils.showProduct("Plasma Generator", "Advanced plasma generation system")}>
            Utils: Show Product
          </PrimaryButton>
          <PrimaryButton onClick={() => sidebarUtils.showArticle("Utils Article", "This article was opened using utility functions!")}>
            Utils: Show Article
          </PrimaryButton>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage Examples</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">In React Components:</h3>
          <pre className="text-sm text-gray-800 mb-4 overflow-x-auto">
{`// Using hooks
import { useSidebarActions } from '@/hooks/useSidebarActions';

const MyComponent = () => {
  const { showContactForm, showReadingContent } = useSidebarActions();
  
  return (
    <button onClick={() => showContactForm()}>
      Contact Us
    </button>
  );
};`}
          </pre>
          
          <h3 className="font-semibold mb-2">From Anywhere (including event handlers, API callbacks, etc.):</h3>
          <pre className="text-sm text-gray-800 overflow-x-auto">
{`// Using utility functions
import { sidebarUtils } from '@/utils/sidebarUtils';

// Can be called from anywhere
sidebarUtils.openContact();
sidebarUtils.showProduct("Product Name", "Description");
sidebarUtils.showArticle("Title", "Content");`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default SidebarExamples;