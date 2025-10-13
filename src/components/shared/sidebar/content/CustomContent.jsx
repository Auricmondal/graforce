'use client'
import React from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import CustomJobContent from './custom/CustomJobContent';
import CustomSpecContent from './custom/CustomSpecContent';
import CustomBlogContent from './custom/CustomBlogContent';

const CustomContent = () => {
  const { contentData } = useSidebar();

  if (!contentData) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">No custom content provided</p>
      </div>
    );
  }

  // If contentData is a React component, render it directly
  if (React.isValidElement(contentData)) {
    return contentData;
  }

  // If contentData is an object with a component property
  if (contentData.component && React.isValidElement(contentData.component)) {
    return contentData.component;
  }

  // If contentData has renderContent function
  if (typeof contentData.renderContent === 'function') {
    return contentData.renderContent();
  }

  // If contentData is a simple object with content properties
  if (typeof contentData === 'object') {
    // Handle specific content types
    if (contentData.type) {
      switch (contentData.type) {
        case 'job':
          return <CustomJobContent contentData={contentData} />;
        case 'specifications':
          return <CustomSpecContent contentData={contentData} />;
        case 'blog':
          return <CustomBlogContent contentData={contentData} />;
        case 'project':
          return <div>Custom Project Content Component</div>;
        case 'faq':
          return <div>Custom FAQ Content Component</div>;
        default:
          // Fall through to default rendering
          break;
      }
    }

    // Default object rendering
    return (
      <div className="h-full">
        {contentData.title && (
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {contentData.title}
          </h2>
        )}
        
        {contentData.description && (
          <p className="text-gray-600 mb-4">
            {contentData.description}
          </p>
        )}

        {contentData.content && (
          <div className="flex-1">
            {typeof contentData.content === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: contentData.content }} />
            ) : (
              contentData.content
            )}
          </div>
        )}

        {contentData.actions && (
          <div className="mt-auto pt-4 space-y-2">
            {contentData.actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className={`w-full py-2 px-4 rounded-lg transition-colors ${
                  action.primary 
                    ? 'bg-primary text-white hover:bg-primary/90' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Fallback for string content
  return (
    <div className="h-full flex items-center justify-center">
      <p className="text-gray-700">{String(contentData)}</p>
    </div>
  );
};

export default CustomContent;