import React from 'react';
import { LuPhoneCall, LuMapPin, LuMail } from "react-icons/lu";
import Link from 'next/link';

import FloatupButton from '@/components/utils/buttons/FloatupButton';
import FitText from '@/hooks/FitText';
import AnimatedText from '@/components/utils/Animation/AnimatedText';

const Footer = () => {
  return (
      <footer className="bg-primary-900 text-white  relative overflow-hidden">
        <div className="max-w-[1460px] mx-auto">
          <div className='pt-12 px-6 md:px-16'>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Creating a Co2 free World</h2>
            <p className="text-gray-300 mb-6 max-w-xl">
              Graforce develops cutting-edge plasma technologies to produce CO<sub>2</sub>-free hydrogen and drive industrial decarbonization.
            </p>
            <form className="flex flex-row flex-wrap md:flex-nowrap gap-2 md:gap-4 justify-center sm:justify-start">
              <input
                type="email"
                placeholder="Subscribe for Updates"
                className="min-w-[20ch] max-w-full md:max-w-1/2 bg-[#3B3B3B] text-gray-200 rounded-xl px-4 py-2 flex-1 border-1 border-[rgba(255,255,255,0.15)] placeholder-[rgba(197,197,197,0.6)]"
              />
              <FloatupButton
                type="submit"
                variant="Footer"
                className=" min-w-[10ch] max-w-full sm:!w-fit bg-primary-500 text-primary-50 rounded-xl py-3 px-4 flex gap-2 items-center justify-center font-medium text-center border-[0.5px] border-[rgba(255,255,255,0.15)]"
              >
                Subscribe
              </FloatupButton>
            </form>
          </div>

        <div className="hidden md:block">
          {/* Headings row */}
          <div className="w-full flex flex-row justify-between text-xl font-semibold gap-8 border-b border-[#7B7B7B] pb-2 mb-4">
            <h3 className=" text-white w-1/2">Contacts</h3>
            <h3 className=" text-cst-neutral-500 text-right">Quick Links</h3>
            <h3 className="text-white text-right">Important Links</h3>
          </div>
          
          <div className="w-full flex flex-row justify-between gap-8 text-base ">
          {/* Contact Info */}
          <div className="space-y-6 md:w-1/2 text-left text-white">
            <p className="flex justify-start items-center gap-2">
              <LuMapPin size={18} />Graforce GmbH, Berlin, Germany
            </p>
            <p className="flex justify-start items-center gap-2">
              <LuMail size={18} />info@graforce.com
            </p>
            <p className="flex justify-start items-center gap-2">
              <LuPhoneCall size={18} />+49 (0)30 915 409 000
            </p>
          </div>

            {/* Quick Links Column */}
            <div className="flex flex-col text-cst-neutral-500 ">
              <Link href="#" >
                <AnimatedText className="text-right" variant={"Footer"}>About Us</AnimatedText>
              </Link>
              <Link href="#">
                <AnimatedText className="text-right" variant={"Footer"}>Jobs</AnimatedText>
              </Link>
              <Link href="#" >
                <AnimatedText className="text-right" variant={"Footer"}>News</AnimatedText>
              </Link>
              <Link href="#" >
                <AnimatedText className="text-right" variant={"Footer"}>Investors</AnimatedText>
              </Link>
            </div>

            {/* Important Links Column */}
            <div className="flex flex-col">
              <Link href="#" >
                <AnimatedText className="text-right" variant={"Footer"}>Home</AnimatedText>
              </Link>
              <Link href="#" >
                <AnimatedText className="text-right" variant={"Footer"}>Achievements</AnimatedText>
              </Link>
              <Link href="#" >
                <AnimatedText className="text-right" variant={"Footer"}>Products</AnimatedText>
              </Link>
              <Link href="#" >
                <AnimatedText className="text-right" variant={"Footer"}>Industries</AnimatedText>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}

        <div className="md:hidden max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contacts */}
        <div>
          <h3 className="text-lg font-semibold pb-2 border-b border-[#7B7B7B] mb-4">
            Contacts
          </h3>
          <ul className="space-y-3 text-white">
            <li className="flex items-center gap-3">
              <LuMapPin size={18}  />
              <span>Graforce GmbH, Berlin, Germany</span>
            </li>
            <li className="flex items-center gap-3">
              <LuPhoneCall size={18} />
              <span>+49 (0)30 915 409 000</span>
            </li>
            <li className="flex items-center gap-3">
              <LuMail size={18} />
              <span>info@graforce.com</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#7B7B7B] pb-2 border-b border-[#7B7B7B] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[#7B7B7B]">
            <li><Link href="#" >
              <AnimatedText>About Us</AnimatedText>
            </Link></li>
            <li><Link href="#" >
              <AnimatedText>Jobs</AnimatedText>
            </Link></li>
            <li><Link href="#" >
              <AnimatedText>News</AnimatedText>
            </Link></li>
            <li><Link href="#" >
              <AnimatedText>Investors</AnimatedText>
            </Link></li>
          </ul>
        </div>

        {/* Important Links */}
        <div className='pb-2'>
          <h3 className="text-lg font-semibold pb-2 border-b border-[#7B7B7B] mb-4">
            Important Links
          </h3>
          <ul className="space-y-2 text-white">
            <li><Link href="#" >
              <AnimatedText>Home</AnimatedText>
            </Link></li>
            <li><Link href="#" >
              <AnimatedText>Achievements</AnimatedText>
            </Link></li>
            <li><Link href="#" >
              <AnimatedText>Products</AnimatedText>
            </Link></li>
            <li><Link href="#" >
              <AnimatedText>Industries</AnimatedText>
            </Link></li>
          </ul>
        </div>
      </div>
      </div>

          <FitText minFont={16} maxFont={300} className="w-full text-center font-extrabold text-white leading-none overflow-hidden">
            Graforce
          </FitText>
          
          <div className="pb-4 px-2 md:px-4">
            <div className="flex flex-col-reverse md:flex-row md:justify-between justify-center items-center text-[#7B7B7B] text-sm border-t-[1.5px] border-[rgba(255,255,255,0.15)] pt-4">
              
              {/* Left copyright text */}
              <span className="md:pl-12 text-center">
                © 2025 Graforce. All rights reserved.
              </span>

              <Link href="#" className='md:block hidden'>Privacy</Link>

              {/* Right links (always side by side) */}
              <div className="flex gap-6 mt-2 md:mt-0 md:pr-12">
                <Link href="#" className='md:hidden block'>Privacy</Link>
                <Link href="#">Terms and Conditions</Link>
              </div>
              
            </div>
          </div>

        </div>
      </footer>
      
  );
};

export default Footer;