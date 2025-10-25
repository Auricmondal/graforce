import React from "react";
import { LuPhoneCall, LuMapPin, LuMail } from "react-icons/lu";
import Link from "next/link";
import FloatupButton from "@/components/utils/buttons/FloatupButton";
import AnimatedText from "@/components/utils/animations/AnimatedText";

const Footer = () => {
  return (
    <footer className="bg-cst-neutral-5 text-white  relative overflow-hidden">
      {/* <div className="max-w-[2000px] mx-auto"> */}
      <div className="pt-12 px-6 md:px-16">
        <div className="mb-8 flex flex-col lg:flex-row items-center gap-4 lg:gap-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Creating a Co2 free World
          </h2>

          <form className="flex flex-row flex-wrap md:flex-nowrap gap-2 md:gap-4 justify-center sm:justify-start grow">
            <input
              type="email"
              placeholder="Subscribe for Updates"
              className="min-w-[20ch] w-full bg-[#3B3B3B] text-gray-200 rounded-xl px-4 py-2 flex-1 border-1 border-[rgba(255,255,255,0.15)] placeholder-[rgba(197,197,197,0.6)] lg:grow"
            />
            <FloatupButton
              type="submit"
              variant="Footer"
              className=" min-w-[10ch] max-w-full sm:!w-fit bg-primary-500 text-primary-50 rounded-xl py-3 px-4 flex gap-2 items-center justify-center font-medium border-[0.5px] border-[rgba(255,255,255,0.15)]"
            >
              Subscribe
            </FloatupButton>
          </form>
        </div>

        <div className="hidden md:block">
          {/* Headings row */}
          <div className="w-full flex flex-row justify-between text-xl font-semibold gap-8 border-b border-[#7B7B7B] pb-2 mb-4">
            <h3 className=" text-white w-1/2">Contacts</h3>
            <h3 className="text-cst-neutral-3 text-right">Quick Links</h3>
            <h3 className="text-white text-right">Important Links</h3>
          </div>

          <div className="w-full flex flex-row justify-between gap-8 text-base ">
            {/* Contact Info */}
            <div className="space-y-6 md:w-1/2 text-left text-white">
              <p className="flex justify-start items-center gap-2">
                <LuMapPin size={18} />
                Graforce GmbH, Berlin, Germany
              </p>
              <p className="flex justify-start items-center gap-2">
                <a
                  href="mailto:info@graforce.com"
                  className="flex justify-start items-center gap-2"
                >
                  <LuMail size={18} />
                  info@graforce.com
                </a>
              </p>
              <p className="flex justify-start items-center gap-2">
                <a
                  href="tel:+49030915409000"
                  className="flex justify-start items-center gap-2"
                >
                  <LuPhoneCall size={18} />
                  +49 (0)30 915 409 000
                </a>
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col text-cst-neutral-3 font-medium">
              <Link href="/about">
                <AnimatedText className="text-right" variant={"Footer"}>
                  About Us
                </AnimatedText>
              </Link>
              <Link href="/jobs">
                <AnimatedText className="text-right" variant={"Footer"}>
                  Jobs
                </AnimatedText>
              </Link>
              <Link href="/news">
                <AnimatedText className="text-right" variant={"Footer"}>
                  News
                </AnimatedText>
              </Link>
              <Link href="/investors">
                <AnimatedText className="text-right" variant={"Footer"}>
                  Investors
                </AnimatedText>
              </Link>
            </div>

            {/* Important Links Column */}
            <div className="flex flex-col">
              <Link href="/">
                <AnimatedText className="text-right" variant={"Footer"}>
                  Home
                </AnimatedText>
              </Link>
              <Link href="/services/methane-plasmalyzer">
                <AnimatedText className="text-right" variant={"Footer"}>
                  Achievements
                </AnimatedText>
              </Link>
              <Link href="/products">
                <AnimatedText className="text-right" variant={"Footer"}>
                  Products
                </AnimatedText>
              </Link>
              <Link href="/industries">
                <AnimatedText className="text-right" variant={"Footer"}>
                  Industries
                </AnimatedText>
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
                <LuMapPin size={18} />
                <span>Graforce GmbH, Berlin, Germany</span>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="tel:+49030915409000"
                  className="flex justify-start items-center gap-2"
                >
                  <LuPhoneCall size={18} />
                  <span>+49 (0)30 915 409 000</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="mailto:info@graforce.com"
                  className="flex justify-start items-center gap-2"
                >
                  <LuMail size={18} />
                  <span>info@graforce.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#7B7B7B] pb-2 border-b border-[#7B7B7B] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[#7B7B7B">
              <li>
                <Link href="/about">
                  <AnimatedText>About Us</AnimatedText>
                </Link>
              </li>
              <li>
                <Link href="/jobs">
                  <AnimatedText>Jobs</AnimatedText>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <AnimatedText>News</AnimatedText>
                </Link>
              </li>
              <li>
                <Link href="/investors">
                  <AnimatedText>Investors</AnimatedText>
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="pb-2">
            <h3 className="text-lg font-semibold pb-2 border-b border-[#7B7B7B] mb-4">
              Important Links
            </h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/">
                  <AnimatedText>Home</AnimatedText>
                </Link>
              </li>
              <li>
                <Link href="/services/methane-plasmalyzer">
                  <AnimatedText>Achievements</AnimatedText>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <AnimatedText>Products</AnimatedText>
                </Link>
              </li>
              <li>
                <Link href="/industries">
                  <AnimatedText>Industries</AnimatedText>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* </div> */}
    </footer>
  );
};

export default Footer;
