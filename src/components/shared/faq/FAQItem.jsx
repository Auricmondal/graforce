import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

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
    <div className="border-b border-[#0000004D] overflow-hidden flex flex-col my-[64px]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center mb-3 text-left cursor-pointer"
      >
        {/* Animate only the question */}
        <motion.h4
          variants={questionVariants}
          className="text-xl md:text-2xl lg:text-4xl font-semibold"
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
        className={`text-gray-700 overflow-hidden transition-opacity duration-300 ${
          isOpen ? "pb-8" : "pb-0 h-0"
        }`}
      >
        {isOpen && <div>{answer}</div>}
      </motion.div>
    </div>
  );
}
