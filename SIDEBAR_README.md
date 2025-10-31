# Dynamic Sidebar System

A comprehensive, multi-type sidebar system that can display navigation, contact forms, reading content, technical specifications, job postings, and custom components. Can be triggered from anywhere in your Next.js application.

## Features

- 🚀 **Multiple Content Types**: Navigation, contact forms, reading content, specifications, jobs, and custom components
- 🎯 **Global Access**: Trigger from anywhere using utility functions or React hooks
- 🎨 **Smooth Animations**: GSAP-powered animations for seamless transitions
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 🔧 **Developer Friendly**: Comprehensive hooks and utility functions
- 🎪 **Highly Extensible**: Easy to add new content types and customize existing ones
- 🎛️ **Action Support**: Interactive buttons and CTAs within sidebar content
- 🔄 **State Management**: Built-in state tracking and management

## Quick Start

### 1. Basic Usage (React Components)

```jsx
import { useSidebarActions, useContactSidebar, useReadingSidebar } from '@/hooks/useSidebarActions';

const MyComponent = () => {
  const { 
    showNavigation, 
    showContactForm, 
    showReadingContent,
    showSpecificationsContent,
    showJobContent,
    showCustomContent,
    hideSidebar,
    toggleNav,
    isOpen
  } = useSidebarActions();
  
  const { inquireAboutProduct, inquireAboutService, generalInquiry, supportRequest } = useContactSidebar();
  const { showArticle, showBlogPost, showNews, showCaseStudy } = useReadingSidebar();

  return (
    <div>
      <button onClick={showNavigation}>Menu</button>
      <button onClick={() => showContactForm()}>Contact</button>
      <button onClick={() => inquireAboutProduct("Methane Plasmalyzer®")}>Product Inquiry</button>
      <button onClick={() => showReadingContent(articleData)}>Read Article</button>
      <button onClick={() => showSpecificationsContent(specsData)}>View Specs</button>
      <button onClick={() => showJobContent(jobData)}>Job Details</button>
      <p>Sidebar is {isOpen ? 'open' : 'closed'}</p>
    </div>
  );
};
```

### 2. Global Usage (Anywhere in your app)

```javascript
import { sidebarUtils } from '@/utils/sidebarUtils';

// Basic functions - can be called from anywhere
sidebarUtils.openNavigation();
sidebarUtils.openContact();
sidebarUtils.close();
sidebarUtils.toggle();

// Convenience methods for common use cases
sidebarUtils.showProduct("Product Name", "Description");
sidebarUtils.showService("Service Name", "Description");
sidebarUtils.showArticle("Title", "Content", "Author", "Date");
sidebarUtils.showNews("Title", "Content", "Date");

// Advanced usage with custom data
sidebarUtils.openCustom(customData, "Custom Title");
sidebarUtils.openReading(articleData);
sidebarUtils.openContact({
  subject: "Custom Subject",
  showSubject: true,
  additionalInfo: "Pre-filled info"
});
```

## Content Types

### 1. Navigation Menu
```javascript
const { showNavigation } = useSidebarActions();
showNavigation();
// Or globally: sidebarUtils.openNavigation();
```

### 2. Contact Forms
```javascript
const { showContactForm } = useSidebarActions();

// Basic contact form
showContactForm();

// With pre-filled data
showContactForm({
  subject: "Product Inquiry",
  showSubject: true,
  additionalInfo: "I'm interested in learning more about your products..."
});

// Specialized contact hooks
const { inquireAboutProduct, inquireAboutService, generalInquiry, supportRequest } = useContactSidebar();
inquireAboutProduct("Methane Plasmalyzer®");
inquireAboutService("Hydrogen Production");
generalInquiry();
supportRequest();
```

### 3. Reading Content
```javascript
const { showReadingContent } = useSidebarActions();
const { showArticle, showBlogPost, showNews, showCaseStudy } = useReadingSidebar();

// General reading content
showReadingContent({
  title: "Article Title",
  content: "Your content here...",
  author: "Author Name",
  date: "October 13, 2025",
  readTime: "5 min read",
  category: "Technology",
  tags: ["tag1", "tag2"],
  relatedLinks: [
    { title: "Link 1", url: "https://..." },
    { title: "Link 2", url: "https://..." }
  ],
  ctaText: "Contact Us",
  ctaAction: "contact" // or custom function
});

// Specialized reading content
showArticle(articleData);     // For articles
showBlogPost(blogData);       // For blog posts
showNews(newsData);           // For news items
showCaseStudy(caseStudy);     // For case studies
```

### 4. Technical Specifications
```javascript
const { showSpecificationsContent } = useSidebarActions();

showSpecificationsContent({
  title: "Product Specifications",
  content: {
    specifications: [
      {
        subtitle: "Performance Specifications",
        details: "High-performance system specifications",
        points: [
          "Processing capacity: 100-500 Nm³/h",
          "Conversion efficiency: >99.9%",
          "Energy consumption: <15 kWh/kg H₂"
        ]
      },
      {
        subtitle: "System Requirements",
        details: "Technical requirements for installation",
        points: [
          "Power supply: 380-480V, 50/60Hz",
          "Installation space: 6m x 4m x 3m"
        ]
      }
    ]
  },
  actions: [
    {
      label: "Request Quote",
      primary: true,
      onClick: "() => sidebarUtils.showProduct('Product Name', 'Description')"
    },
    {
      label: "Download PDF",
      primary: false,
      onClick: "() => downloadSpecs()"
    }
  ]
});
```

### 5. Job Postings
```javascript
const { showJobContent } = useSidebarActions();

showJobContent({
  content: {
    title: "Senior Plasma Engineer",
    postedOn: "2025-10-30",
    location: "Berlin, Germany",
    applyBy: "2025-11-30",
    aboutUs: "Company description...",
    aboutUsPoints: [
      "Innovative technology solutions",
      "Focus on sustainability",
      "Global market leader"
    ],
    jobDescription: "Role description...",
    jobDescriptionPoints: [
      "Design plasma systems",
      "Lead technical projects",
      "Collaborate with teams"
    ]
  },
  actions: [
    {
      label: "Apply Now",
      primary: true,
      onClick: "() => sidebarUtils.openContact({ subject: 'Job Application' })"
    },
    {
      label: "Save Job",
      primary: false,
      onClick: "() => saveJob(jobId)"
    }
  ]
});
```

### 6. Custom Content
```javascript
const { showCustomContent } = useSidebarActions();

// With React component
showCustomContent(<MyCustomComponent />, "Custom Title");

// With object structure
showCustomContent({
  title: "Custom Content",
  description: "Description here",
  content: <div>Your JSX here</div>,
  actions: [
    {
      label: "Primary Action",
      primary: true,
      onClick: "() => handleAction()"
    }
  ]
}, "Custom Title");

// Custom job content via custom content type
showCustomContent({
  type: "job",
  content: { /* job data */ },
  actions: [ /* action buttons */ ]
}, "Job Opening");
```

## Specialized Hooks

### Contact-Specific Actions
```javascript
import { useContactSidebar } from '@/hooks/useSidebarActions';

const { 
  inquireAboutProduct, 
  inquireAboutService, 
  generalInquiry,
  supportRequest 
} = useContactSidebar();

// Pre-configured contact forms with auto-filled subjects
inquireAboutProduct("Methane Plasmalyzer®");      // Product inquiry form
inquireAboutService("Hydrogen Production");        // Service inquiry form  
generalInquiry();                                  // General contact form
supportRequest();                                  // Support request form
```

### Reading-Specific Actions
```javascript
import { useReadingSidebar } from '@/hooks/useSidebarActions';

const { 
  showArticle, 
  showBlogPost, 
  showNews, 
  showCaseStudy 
} = useReadingSidebar();

showArticle(articleData);         // Technical articles
showBlogPost(blogData);          // Blog content
showNews(newsData);              // News updates
showCaseStudy(caseStudyData);    // Customer case studies
```

### Additional Hooks
```javascript
import { useSidebarActions } from '@/hooks/useSidebarActions';

const { 
  // Basic actions
  showNavigation,
  showContactForm,
  showReadingContent,
  showSpecificationsContent,
  showJobContent,
  showCustomContent,
  
  // Control actions
  hideSidebar,
  toggleNav,
  
  // State
  isOpen,
  
  // Aliases for convenience
  showContact,
  showReading,
  showSpecifications,
  showJob,
  showCustom,
  hide,
  toggle
} = useSidebarActions();
```

## Utility Functions (Global Access)

Perfect for use outside React components - in event handlers, API callbacks, utility functions, etc:

```javascript
import { sidebarUtils } from '@/utils/sidebarUtils';

// Core functions
sidebarUtils.openNavigation();           // Show navigation menu
sidebarUtils.openContact(contactData);   // Show contact form
sidebarUtils.openReading(readingData);   // Show reading content
sidebarUtils.openCustom(data, title);    // Show custom content
sidebarUtils.close();                    // Close sidebar
sidebarUtils.toggle();                   // Toggle navigation

// Convenience methods for common scenarios
sidebarUtils.showProduct("Product Name", "Description");
sidebarUtils.showService("Service Name", "Description");  
sidebarUtils.showArticle("Title", "Content", "Author", "Date");
sidebarUtils.showNews("Title", "Content", "Date");

// Advanced usage examples
sidebarUtils.openContact({
  subject: "Partnership Inquiry",
  showSubject: true,
  additionalInfo: "I'm interested in exploring partnership opportunities..."
});

// Integration with API responses
fetch('/api/articles/123')
  .then(res => res.json())
  .then(article => {
    sidebarUtils.showArticle(article.title, article.content, article.author);
  });

// Event handler usage
document.addEventListener('custom-event', (e) => {
  sidebarUtils.showProduct(e.detail.productName, e.detail.description);
});
```

## Real-World Examples

### Product Cards
```jsx
const ProductCard = ({ product }) => {
  const { showSpecificationsContent } = useSidebarActions();
  
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="buttons">
        <button onClick={() => sidebarUtils.showProduct(product.name, product.description)}>
          Inquire Now
        </button>
        <button onClick={() => showSpecificationsContent(product.specifications)}>
          View Specifications
        </button>
      </div>
    </div>
  );
};
```

### Blog/Article Previews
```jsx
const ArticlePreview = ({ article }) => {
  const { showArticle } = useReadingSidebar();
  
  return (
    <div className="article-preview">
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <div className="meta">
        <span>{article.author}</span>
        <span>{article.readTime}</span>
      </div>
      <button onClick={() => showArticle(article)}>
        Read Full Article
      </button>
    </div>
  );
};
```

### Service Inquiries
```jsx
const ServiceCard = ({ service }) => {
  const { inquireAboutService } = useContactSidebar();
  
  return (
    <div className="service-card">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button onClick={() => inquireAboutService(service.name)}>
        Get Quote
      </button>
    </div>
  );
};
```

### Job Listings
```jsx
const JobListing = ({ job }) => {
  const { showJobContent } = useSidebarActions();
  
  return (
    <div className="job-listing">
      <h3>{job.title}</h3>
      <div className="job-meta">
        <span>{job.location}</span>
        <span>Posted: {job.postedOn}</span>
      </div>
      <p>{job.summary}</p>
      <button onClick={() => showJobContent(job)}>
        View Details & Apply
      </button>
    </div>
  );
};
```

### News & Updates
```jsx
const NewsCard = ({ news }) => {
  const { showNews } = useReadingSidebar();
  
  return (
    <div className="news-card">
      <h3>{news.title}</h3>
      <p className="date">{news.date}</p>
      <p>{news.excerpt}</p>
      <button onClick={() => showNews(news)}>
        Read More
      </button>
    </div>
  );
};
```

### Technical Documentation
```jsx
const TechDocCard = ({ doc }) => {
  const { showReadingContent, showSpecificationsContent } = useSidebarActions();
  
  return (
    <div className="tech-doc-card">
      <h3>{doc.title}</h3>
      <p>{doc.description}</p>
      <div className="buttons">
        <button onClick={() => showReadingContent(doc.content)}>
          Read Documentation
        </button>
        {doc.specifications && (
          <button onClick={() => showSpecificationsContent(doc.specifications)}>
            View Specifications
          </button>
        )}
      </div>
    </div>
  );
};
```

## Architecture

```
src/
├── contexts/
│   └── SidebarContext.jsx              # Main context provider with SIDEBAR_TYPES
├── components/shared/sidebar/
│   ├── DynamicSidebar.jsx              # Main sidebar component with GSAP animations
│   └── content/
│       ├── NavigationContent.jsx       # Navigation menu
│       ├── ContactContent.jsx          # Contact form
│       ├── ReadingContent.jsx          # Articles, blogs, news display
│       ├── SpecificationsContent.jsx   # Technical specifications display
│       ├── JobContent.jsx              # Job posting display
│       └── CustomContent.jsx           # Custom content handler
├── hooks/
│   └── useSidebarActions.js            # React hooks (useSidebarActions, useContactSidebar, useReadingSidebar)
├── utils/
│   └── sidebarUtils.js                 # Global utility functions
└── components/examples/
    └── SidebarExamples.jsx             # Comprehensive usage examples
```

### Content Type System

The sidebar supports six main content types defined in `SIDEBAR_TYPES`:

- **NAVIGATION**: Main menu system
- **CONTACT**: Contact forms with various configurations  
- **READING**: Articles, blogs, news, case studies
- **SPECIFICATIONS**: Technical product specifications
- **JOB**: Job postings with detailed information
- **CUSTOM**: Flexible custom content and components

## Setup & Integration

The sidebar system is already integrated into your app layout:

```jsx
// app/layout.js
import { SidebarProvider } from '@/contexts/SidebarContext';
import DynamicSidebar from '@/components/shared/sidebar/DynamicSidebar';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SidebarProvider>
          {/* Your app content */}
          {children}
          
          {/* Sidebar component */}
          <DynamicSidebar />
        </SidebarProvider>
      </body>
    </html>
  );
}
```

### Required Dependencies

- **GSAP**: For smooth animations
- **Tailwind CSS**: For styling with custom classes (`cst-neutral-1`, `cst-primary-1`, etc.)
- **React Icons**: For UI icons

## Customization & Extension

### Adding New Content Types

1. **Create Content Component**: Add new component in `src/components/shared/sidebar/content/`
   ```jsx
   const MyNewContent = () => {
     const { contentData } = useSidebar();
     return <div>{/* Your content */}</div>;
   };
   ```

2. **Add to SIDEBAR_TYPES**: Update `SidebarContext.jsx`
   ```jsx
   export const SIDEBAR_TYPES = {
     // ... existing types
     MY_NEW_TYPE: 'my_new_type'
   };
   ```

3. **Update Renderer**: Modify `renderContent()` in `DynamicSidebar.jsx`
   ```jsx
   case SIDEBAR_TYPES.MY_NEW_TYPE:
     return <MyNewContent />;
   ```

4. **Add Hook Methods**: Update `useSidebarActions.js`
   ```jsx
   const showMyNewContent = (data) => openMyNewType(data);
   ```

5. **Add Utility Functions**: Update `sidebarUtils.js`
   ```jsx
   showMyNewType: (data) => sidebarUtils.openCustom(data, "My New Type")
   ```

### Styling System

The sidebar uses a comprehensive Tailwind CSS styling system:

```css
/* Custom color classes used */
.bg-cst-neutral-5     /* Primary dark background */
.bg-cst-primary-1     /* Primary brand color */
.text-cst-neutral-1   /* Light text */
.text-cst-neutral-2   /* Medium text */
.border-cst-neutral-2 /* Border color */

/* Responsive breakpoints */
.md:text-base         /* Medium screens and up */
.lg:grid-cols-3       /* Large screens grid */
.min-[1300px]:flex-row /* Extra large screens */
```

### Animation Customization

Animations use GSAP with custom timing:

```jsx
// In DynamicSidebar.jsx - customize these values
tl.to(overlay, { x: '0vw', duration: 0.3, ease: "power2.inOut" });
tl.to(sidebarOverlayBackdrop, { x: '0vw', duration: 0.3, ease: "power2.inOut" });
tl.to(menuContainer, { x: '0vw', duration: 0.3, ease: "power2.inOut" });
```

### Action Button System

Content can include interactive action buttons:

```jsx
// In any content component
const actions = [
  {
    label: "Primary Action",
    primary: true,  // Styling flag
    onClick: "() => handlePrimaryAction()"  // String function for eval()
  },
  {
    label: "Secondary Action", 
    primary: false,
    onClick: "() => handleSecondaryAction()"
  }
];
```

## Advanced Usage Patterns

### Chaining Actions
```jsx
const handleProductInterest = (product) => {
  // Show specs first
  showSpecificationsContent(product.specifications);
  
  // Track user interest
  analytics.track('product_viewed', { productName: product.name });
  
  // Set up follow-up after sidebar closes
  setTimeout(() => {
    if (confirm('Would you like to speak with our team?')) {
      sidebarUtils.showProduct(product.name, product.description);
    }
  }, 5000);
};
```

### API Integration
```jsx
// Fetch and display dynamic content
const showDynamicArticle = async (articleId) => {
  try {
    const article = await fetch(`/api/articles/${articleId}`).then(r => r.json());
    showArticle({
      title: article.title,
      content: article.content,
      author: article.author,
      date: article.publishedAt,
      category: article.category
    });
  } catch (error) {
    sidebarUtils.openCustom(
      <ErrorComponent error={error} />, 
      "Error Loading Content"
    );
  }
};
```

### Conditional Content
```jsx
const showContextualContent = (user, content) => {
  if (user.role === 'admin') {
    showCustomContent(<AdminPanel content={content} />, "Admin Tools");
  } else if (content.type === 'product') {
    showSpecificationsContent(content.specifications);
  } else {
    showReadingContent(content);
  }
};
```

## Performance & Best Practices

1. **Lazy Loading**: Content components are only rendered when sidebar opens
2. **State Management**: Sidebar state automatically resets on close (300ms delay)
3. **Memory Optimization**: Large content should be passed by reference, not value
4. **Animation Performance**: GSAP animations are optimized for 60fps
5. **Mobile Optimization**: Touch gestures and responsive design included
6. **Accessibility**: ARIA labels, keyboard navigation, and focus management
7. **SEO Friendly**: Sidebar content doesn't affect page indexing

## Development Tips

### Debugging
```jsx
// Enable sidebar state debugging
const { isOpen, contentType, contentData } = useSidebarActions();
console.log('Sidebar State:', { isOpen, contentType, contentData });

// Check if actions are initialized
import { getSidebarActions } from '@/utils/sidebarUtils';
console.log('Sidebar Actions:', getSidebarActions());
```

### Testing Patterns
```jsx
// Test sidebar functionality
const testSidebarContent = () => {
  const testData = { title: "Test", content: "Testing content display" };
  
  // Test each content type
  showReadingContent(testData);
  setTimeout(() => showContactForm(), 2000);
  setTimeout(() => showNavigation(), 4000);
};
```

### Error Handling
```jsx
// Graceful error handling for sidebar actions
const safeShowContent = (contentData) => {
  try {
    if (!contentData) {
      throw new Error('Content data is required');
    }
    showReadingContent(contentData);
  } catch (error) {
    console.error('Sidebar error:', error);
    sidebarUtils.openCustom(
      <div className="error">Failed to load content</div>,
      "Error"
    );
  }
};
```

## Troubleshooting

### Common Issues

- **"Sidebar actions not initialized"**: 
  - Ensure `SidebarProvider` wraps your entire app in `layout.js`
  - Check that `DynamicSidebar` component is included in layout

- **Animations not working**: 
  - Verify GSAP is installed: `npm install gsap`
  - Check for JavaScript errors in console
  - Ensure `useGSAP` hook is properly imported

- **Styles not applied**: 
  - Verify Tailwind CSS is configured with custom color classes
  - Check that component files import Tailwind classes correctly
  - Ensure custom CSS classes (`cst-*`) are defined in your CSS

- **Content not displaying**:
  - Check console for React errors
  - Verify content data structure matches expected format
  - Ensure content components are properly exported

- **Actions not working**:
  - Check that action onClick functions are properly formatted as strings
  - Verify eval() can execute the action functions
  - Ensure required dependencies are available in scope

### Performance Issues

- **Slow animations**: Reduce GSAP duration values in `DynamicSidebar.jsx`
- **Memory leaks**: Ensure large objects are cleaned up when sidebar closes  
- **Bundle size**: Consider code splitting for large content components