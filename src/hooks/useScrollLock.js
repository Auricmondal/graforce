import { useEffect } from 'react';

export const useScrollLock = (isOpen) => {
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      
      const originalStyle = window.getComputedStyle(document.body);
      const originalOverflow = originalStyle.overflow;
      const originalPosition = originalStyle.position;
      const originalTop = originalStyle.top;
      const originalWidth = originalStyle.width;

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.top = originalTop;
        document.body.style.width = originalWidth;
        
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);
};

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