import { useState } from "react";
import { motion } from "motion/react";
import { FaPlus } from "react-icons/fa";
import CardWrapper from "@/wrappers/CardWrapper";

const questionVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CardWrapper className="overflow-hidden flex flex-col p-6" variant="custom">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full flex justify-between items-center pb-3 text-left transform ease-in-out cursor-pointer ${
          isOpen ? "" : "border-b border-black/30"
        }`}
      >
        {/* Animate only the question */}
        <motion.h4
          variants={questionVariants}
          className="text-2xl font-semibold"
        >
          {question}
        </motion.h4>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0, scale: isOpen ? 1.2 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaPlus />
        </motion.div>
      </button>

      <motion.div
        layout
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className={`text-[#181818] overflow-hidden transition-opacity duration-300 ${
          isOpen ? "pb-6" : "pb-0 h-0"
        }`}
      >
        {isOpen && <div>{answer}</div>}
      </motion.div>
    </CardWrapper>
  );
}
