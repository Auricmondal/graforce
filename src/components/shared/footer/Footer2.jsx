"use client";

import React from 'react';
import Link from 'next/link';
import FitText from '@/hooks/FitText';
import ScrollReveal from '@/wrappers/ScrollReveal';
import { useFooterHeight } from '@/contexts/FooterContext';
import useElementHeight from '@/hooks/useElementHeight';

const Footer2 = () => {
  const { setFooterHeight } = useFooterHeight();
  const footerRef = useElementHeight(setFooterHeight);

  return (
      <footer ref={footerRef} className="bg-primary-900 text-white  relative overflow-hidden">
        <div className="max-w-[2000px] mx-auto">

              <ScrollReveal>
            <FitText minFont={16} maxFont={500} className="w-full text-center font-extrabold text-white leading-none overflow-hidden">
                Graforce
            </FitText>
              </ScrollReveal>


          <div className="pb-4 px-2 md:px-4">
            <div className="flex flex-col-reverse md:flex-row md:justify-between justify-center items-center text-[#7B7B7B] text-sm border-t-[1.5px] border-[rgba(255,255,255,0.15)] pt-4">

              {/* Left copyright text */}
              <span className="md:pl-12 text-center">
                © 2025 Graforce. All rights reserved.
              </span>

              <Link href="/privacy" className='md:block hidden'>Privacy</Link>

              {/* Right links (always side by side) */}
              <div className="flex gap-6 mt-2 md:mt-0 md:pr-12">
                <Link href="/privacy" className='md:hidden block'>Privacy</Link>
                <Link href="/tnc">Terms and Conditions</Link>
              </div>

            </div>
          </div>

        </div>
      </footer>

  );
};

export default Footer2;