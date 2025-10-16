import { useEffect } from 'react';

/**
 * Custom hook to manage body scroll lock when modal/sidebar is open
 * @param {boolean} isOpen - Whether the modal/sidebar is open
 */
export const useScrollLock = (isOpen) => {
  useEffect(() => {
    if (isOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      
      // Get the current body styles
      const originalStyle = window.getComputedStyle(document.body);
      const originalOverflow = originalStyle.overflow;
      const originalPosition = originalStyle.position;
      const originalTop = originalStyle.top;
      const originalWidth = originalStyle.width;

      // Lock the scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Cleanup function
      return () => {
        // Restore original styles
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.top = originalTop;
        document.body.style.width = originalWidth;
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);
};

/**
 * Hook to prevent event propagation for scroll events
 * @param {React.RefObject} ref - Ref to the element
 */
export const useScrollPrevention = (ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const preventScroll = (e) => {
      e.stopPropagation();
    };

    const preventTouchMove = (e) => {
      e.stopPropagation();
    };

    element.addEventListener('wheel', preventScroll, { passive: true });
    element.addEventListener('touchmove', preventTouchMove, { passive: true });

    return () => {
      element.removeEventListener('wheel', preventScroll);
      element.removeEventListener('touchmove', preventTouchMove);
    };
  }, [ref]);
};