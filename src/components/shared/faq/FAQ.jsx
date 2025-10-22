"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { motion } from "motion/react";
import FAQItem from "./FAQItem";
import SectionWrapper from "@/wrappers/SectionWrapper";
import shapeImg from "@/assets/shape.webp";

import CardWrapper from "@/wrappers/CardWrapper";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";

import faqData from "@/data/faq.json";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export default function FAQSection({ faqs = faqData }) {
  const imageRef = useRef(null);
  const faqContainerRef = useRef(null);

  // GSAP animation function using hook
  const { context: gsapCtx } = useGSAP(() => {
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
    <SectionWrapper
      className=""
      sectionStyle={{
        background: "var(--cst-neutral-1)",
      }}
    >
      <motion.div layout>
        <CardWrapper
          className="rounded-lg gap-2 bg-white py-8 px-4 md:px-6"
          variant="custom"
        >
          <div className="md:max-w-[400px] flex flex-col gap-2">
            <SectionLabel text={"FAQs"} />
            <AnimatedHeader>
              <h2 className="text-xl md:text-[32px]">
                Let&apos;s Answer Your Queries
              </h2>
            </AnimatedHeader>
          </div>
        </CardWrapper>

        <motion.div
          layout
          className="flex flex-col md:flex-row w-full h-fit gap-2 py-2"
          transition={{ duration: 5, type: "tween" }}
        >
          <div
            style={{ height: "auto" }}
            ref={imageRef}
            className="hidden md:block md:flex-[1] lg:flex-[2] bg-primary rounded-lg"
          >
            <Image
              src={shapeImg.src}
              alt="Blue Image"
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
                <FAQItem
                  key={idx}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
