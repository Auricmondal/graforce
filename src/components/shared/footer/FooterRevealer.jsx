"use client";
import React from 'react';
import { useFooterHeight } from '@/contexts/FooterContext';

const FooterRevealer = () => {
  const { footerHeight } = useFooterHeight();

  return (
    <div 
      className="pointer-events-none bg-transparent"
      style={{ height: `calc(${footerHeight}px)` }}
    >
    </div>
  );
};

export default FooterRevealer;