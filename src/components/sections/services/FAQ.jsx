"use client";

import { motion } from "framer-motion";
import FAQItem from "./FAQItem";
import SectionWrapper from "@/wrappers/SectionWrapper";
import GradientBadge from "@/components/utils/badges/GradientBadge";
import { TbSquareRotatedFilled } from "react-icons/tb";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const faqs = [
  {
    question: "Question",
    answer: "Answer",
  },
  {
    question: "Question",
    answer: "Answer",
  },
  {
    question: "Question",
    answer: "Answer",
  },
];

export default function FAQSection() {
  return (
    <div className ="bg-white">
    <SectionWrapper className="max-w-[2000px] mx-auto">
      <div className="mb-[10px] text-center">
        <GradientBadge text="FAQs" icon={<TbSquareRotatedFilled />}/>
        <h2 className="text-[32px] md:text-[64px] w-fit mx-auto">
          Let&apos;s Answer Your Queries
        </h2>
      </div>

      {/* Wrap only the questions in motion.div for stagger */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-[10px]"
      >
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </motion.div>
    </SectionWrapper>
      </div>
  );
}
