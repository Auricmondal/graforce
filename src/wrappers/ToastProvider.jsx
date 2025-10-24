"use client";

import { Toaster, ToastBar } from "react-hot-toast";
import { AnimatePresence, motion } from "motion/react";
import { defaultToastOptions } from "@/utils/toastConfig";

const ToastProvider = () => (
  <Toaster toastOptions={defaultToastOptions} gutter={12}>
    {(t) => (
      <AnimatePresence mode="wait">
        <motion.div
          key={t.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25 }}
        >
          <ToastBar toast={t} />
        </motion.div>
      </AnimatePresence>
    )}
  </Toaster>
);

export default ToastProvider;
