// Create: src/hooks/useElementHeight.js
'use client';
import { useRef, useEffect } from 'react';

const useElementHeight = (callback) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current || !callback) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        callback(entry.contentRect.height);
      }
    });

    resizeObserver.observe(elementRef.current);
    return () => resizeObserver.disconnect();
  }, [callback]);

  return elementRef;
};

export default useElementHeight;