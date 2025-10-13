'use client'
import React from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { FiClock, FiUser, FiCalendar, FiExternalLink, FiBookmark } from 'react-icons/fi';
import { BsArrowLeftCircle } from 'react-icons/bs';
import PrimaryButton from '@/components/utils/buttons/PrimaryButton';

const ReadingContent = () => {
  const { closeSidebar, contentData, openContact } = useSidebar();

  if (!contentData) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">No content available</p>
      </div>
    );
  }

  const {
    title,
    content,
    author,
    date,
    readTime,
    category,
    tags,
    relatedLinks,
    ctaText,
    ctaAction
  } = contentData;

  const handleCtaClick = () => {
    if (ctaAction === 'contact') {
      openContact({ 
        subject: `Inquiry about: ${title}`,
        showSubject: true,
        additionalInfo: 'I would like to know more about this topic.'
      });
    } else if (ctaAction && typeof ctaAction === 'function') {
      ctaAction();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header with Back Button */}
      <div className="mb-4 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-3 ml-1">
          <button
            onClick={closeSidebar}
            className="group flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <BsArrowLeftCircle className='text-xl group-hover:translate-x-[-4px] transition-all duration-300 ease-in-out' />
            <span className="text-sm">Back</span>
          </button>
        </div>
        
        {category && (
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
            {category}
          </div>
        )}
        
        <h2 className="text-xl font-bold text-gray-800 leading-tight mb-3">
          {title}
        </h2>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          {author && (
            <div className="flex items-center gap-1">
              <FiUser className="text-xs" />
              <span>{author}</span>
            </div>
          )}
          {date && (
            <div className="flex items-center gap-1">
              <FiCalendar className="text-xs" />
              <span>{date}</span>
            </div>
          )}
          {readTime && (
            <div className="flex items-center gap-1">
              <FiClock className="text-xs" />
              <span>{readTime}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="prose prose-sm max-w-none">
          {typeof content === 'string' ? (
            <div 
              className="text-gray-700 leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <div className="text-gray-700 leading-relaxed">
              {content}
            </div>
          )}
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <FiBookmark className="text-gray-400 text-sm" />
              <span className="text-sm font-medium text-gray-600">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Links */}
        {relatedLinks && relatedLinks.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-800 mb-3">Related Links</h4>
            <div className="space-y-2">
              {relatedLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm group"
                >
                  <FiExternalLink className="text-xs group-hover:translate-x-1 transition-transform" />
                  <span>{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      {ctaText && (
        <div className="mt-auto pt-4 border-t border-gray-200">
          <PrimaryButton
            onClick={handleCtaClick}
            className="w-full bg-primary text-white rounded-lg py-3 px-4"
          >
            {ctaText}
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};

export default ReadingContent;