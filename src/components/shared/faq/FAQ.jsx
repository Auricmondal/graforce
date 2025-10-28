"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { motion } from "motion/react";
import FAQItem from "./FAQItem";
import SectionWrapper from "@/wrappers/SectionWrapper";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionLabel from "@/components/utils/badges/SectionLabel";

import client from "@/lib/sanityClient";
import { faqSectionQuery } from "@/Queries/services/Faq";
import defaultShapeImg from "@/assets/shape.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

export default function FAQSection() {
  const imageRef = useRef(null);
  const faqContainerRef = useRef(null);

  const [faqs, setFaqs] = useState([]);
  const [sectionLabel, setSectionLabel] = useState("FAQs");
  const [heading, setHeading] = useState("Let's Answer Your Queries");
  const [backgroundImage, setBackgroundImage] = useState(defaultShapeImg.src);

  // Fetch FAQ data from Sanity
  useEffect(() => {
    async function fetchFaqs() {
      try {
        const res = await client.fetch(faqSectionQuery);
        const faqSection = res?.faqSection || {};
        setFaqs(faqSection.faqs || []);
        setSectionLabel(faqSection.sectionLabel || "FAQs");
        setHeading(faqSection.heading || "Let's Answer Your Queries");
        setBackgroundImage(faqSection.backgroundImage?.asset?.url || defaultShapeImg.src);
      } catch (error) {
        console.error("Error fetching FAQ section:", error);
      }
    }
    fetchFaqs();
  }, []);

  // GSAP animation for image height
  useGSAP(() => {
    if (!imageRef.current || !faqContainerRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      const newHeight = faqContainerRef.current?.offsetHeight ?? 0;
      gsap.to(imageRef.current, {
        height: newHeight,
        duration: 0.4,
        ease: "power2.out",
      });
    });
    resizeObserver.observe(faqContainerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <SectionWrapper sectionStyle={{ background: "var(--cst-neutral-1)" }}>
      <motion.div layout>
        <CardWrapper className="rounded-lg gap-2 bg-white py-8 px-4 md:px-6" variant="custom">
          <div className="md:max-w-[400px] flex flex-col gap-2">
            <SectionLabel text={sectionLabel} />
            <motion.div layout>
              <h2 className="text-xl md:text-[32px]">{heading}</h2>
            </motion.div>
          </div>
        </CardWrapper>

        <motion.div layout className="flex flex-col md:flex-row w-full h-fit gap-2 py-2" transition={{ duration: 5, type: "tween" }}>
          <div ref={imageRef} className="hidden md:block md:flex-[1] lg:flex-[2] bg-primary rounded-lg">
            <Image
              src={backgroundImage}
              alt="FAQ Background"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div layout className="flex-1 md:flex-[4] lg:flex-[3]">
            <motion.div
              layout
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              className="flex flex-col gap-2"
              ref={faqContainerRef}
            >
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
