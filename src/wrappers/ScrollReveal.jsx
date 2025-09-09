"use client";
import React, { useEffect, useRef } from 'react';

const ScrollReveal = ({
  as: Tag = 'div',
  className = '',
  children,
  delay = 0,
  duration = 450,
  y = 16,
  threshold = 0.12,
  once = true,
  ...rest
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add('opacity-0');
    el.style.transform = `translateY(${y}px)`;
    el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    el.style.willChange = 'opacity, transform';

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = setTimeout(() => {
              el.classList.remove('opacity-0');
              el.style.transform = 'translateY(0)';
            }, delay);
            if (once) io.unobserve(el);
            return () => clearTimeout(id);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, duration, y, threshold, once]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
};

export default ScrollReveal;