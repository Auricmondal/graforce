# Dynamic Sidebar System

A flexible, context-based sidebar system that can display different types of content and be triggered from anywhere in your Next.js application.

## Features

- 🚀 **Dynamic Content**: Navigation menu, contact forms, reading content, and custom components
- 🎯 **Global Access**: Trigger from anywhere using utility functions or React hooks
- 🎨 **Smooth Animations**: GSAP-powered animations for seamless transitions
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🔧 **Type Safety**: Built with TypeScript-friendly patterns
- 🎪 **Extensible**: Easy to add new content types

## Quick Start

### 1. Basic Usage (React Components)

```jsx
import { useSidebarActions } from '@/hooks/useSidebarActions';

const MyComponent = () => {
  const { showNavigation, showContactForm, showReadingContent } = useSidebarActions();

  return (
    <div>
      <button onClick={showNavigation}>Menu</button>
      <button onClick={() => showContactForm()}>Contact</button>
      <button onClick={() => showReadingContent({
        title: "Article Title",
        content: "Article content...",
        author: "Author Name"
      })}>Read More</button>
    </div>
  );
};
```

### 2. Global Usage (Anywhere in your app)

```javascript
import { sidebarUtils } from '@/utils/sidebarUtils';

// Can be called from event handlers, API callbacks, etc.
sidebarUtils.openNavigation();
sidebarUtils.openContact();
sidebarUtils.showProduct("Product Name", "Description");
sidebarUtils.showArticle("Title", "Content");
```

## Content Types

### Navigation Menu
```javascript
const { showNavigation } = useSidebarActions();
showNavigation();
```

### Contact Form
```javascript
const { showContactForm } = useSidebarActions();

// Basic contact form
showContactForm();

// With pre-filled data
showContactForm({
  subject: "Product Inquiry",
  showSubject: true,
  additionalInfo: "I'm interested in..."
});
```

### Reading Content
```javascript
const { showReadingContent } = useSidebarActions();

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
```

### Custom Content
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
      onClick: () => console.log("Clicked!")
    }
  ]
}, "Custom Title");
```

## Specialized Hooks

### Contact-Specific Actions
```javascript
import { useContactSidebar } from '@/hooks/useSidebarActions';

const { inquireAboutProduct, inquireAboutService, generalInquiry } = useContactSidebar();

// Pre-configured contact forms
inquireAboutProduct("Methane Plasmalyzer®");
inquireAboutService("Hydrogen Production");
generalInquiry();
```

### Reading-Specific Actions
```javascript
import { useReadingSidebar } from '@/hooks/useSidebarActions';

const { showArticle, showBlogPost, showNews } = useReadingSidebar();

showArticle(articleData);
showBlogPost(blogData);
showNews(newsData);
```

## Utility Functions (Global Access)

Perfect for use outside React components:

```javascript
import { sidebarUtils } from '@/utils/sidebarUtils';

// Basic actions
sidebarUtils.openNavigation();
sidebarUtils.openContact();
sidebarUtils.close();
sidebarUtils.toggle();

// Convenience methods
sidebarUtils.showProduct("Product Name", "Description");
sidebarUtils.showService("Service Name", "Description");
sidebarUtils.showArticle("Title", "Content", "Author");
sidebarUtils.showNews("Title", "Content", "Date");
```

## Examples in Your App

### Product Cards
```jsx
const ProductCard = ({ product }) => (
  <div className="product-card">
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <button 
      onClick={() => sidebarUtils.showProduct(product.name, product.description)}
    >
      Learn More
    </button>
  </div>
);
```

### Blog/Article Previews
```jsx
const ArticlePreview = ({ article }) => (
  <div className="article-preview">
    <h3>{article.title}</h3>
    <p>{article.excerpt}</p>
    <button 
      onClick={() => showReadingContent(article)}
    >
      Read Full Article
    </button>
  </div>
);
```

### Service Inquiries
```jsx
const ServiceCard = ({ service }) => {
  const { inquireAboutService } = useContactSidebar();
  
  return (
    <div className="service-card">
      <h3>{service.name}</h3>
      <button onClick={() => inquireAboutService(service.name)}>
        Get Quote
      </button>
    </div>
  );
};
```

## Architecture

```
src/
├── contexts/
│   └── SidebarContext.jsx          # Main context provider
├── components/shared/sidebar/
│   ├── DynamicSidebar.jsx          # Main sidebar component
│   └── content/
│       ├── NavigationContent.jsx   # Navigation menu
│       ├── ContactContent.jsx      # Contact form
│       ├── ReadingContent.jsx      # Reading content
│       └── CustomContent.jsx       # Custom content handler
├── hooks/
│   └── useSidebarActions.js        # React hooks for sidebar
├── utils/
│   └── sidebarUtils.js             # Global utility functions
└── components/examples/
    └── SidebarExamples.jsx         # Usage examples
```

## Setup

The sidebar system is already integrated into your app layout. Make sure the `SidebarProvider` wraps your app and the `DynamicSidebar` component is included in your layout.

## Customization

### Adding New Content Types

1. Create a new content component in `src/components/shared/sidebar/content/`
2. Add the new type to `SIDEBAR_TYPES` in `SidebarContext.jsx`
3. Update the `renderContent` method in `DynamicSidebar.jsx`
4. Add corresponding methods to hooks and utilities

### Styling

The sidebar uses Tailwind CSS classes and can be customized by modifying the component files. The design follows your existing design system with `cst-neutral-1`, `cst-primary-1`, etc.

### Animations

Animations are powered by GSAP and can be customized in the `useGSAP` hooks within each component.

## Tips

1. **Performance**: Content components are only rendered when needed
2. **Memory**: Sidebar state is automatically reset when closed
3. **Accessibility**: Includes proper ARIA labels and keyboard navigation
4. **Mobile**: Responsive design works on all screen sizes
5. **SEO**: Sidebar content doesn't interfere with page SEO

## Troubleshooting

- **"Sidebar actions not initialized"**: Make sure `SidebarProvider` wraps your app
- **Animations not working**: Ensure GSAP is installed and imported
- **Styles not applied**: Check Tailwind CSS configuration and custom CSS classes