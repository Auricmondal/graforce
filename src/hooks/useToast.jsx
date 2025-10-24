"use client";

import { toast } from "react-hot-toast";
import { variantConfig } from "@/utils/toastConfig";

export const useToast = () => {
  const show = (message, options = {}) => {
    const { variant = "default", ...rest } = options;
    const config = variantConfig[variant] || variantConfig.default;

    return toast(message, {
      ...config,
      ...rest,
      style: { ...config.style, ...rest.style },
    });
  };

  const success = (msg, opts = {}) =>
    show(msg, { ...opts, variant: "success" });

  const error = (msg, opts = {}) => show(msg, { ...opts, variant: "error" });
  const info = (msg, opts = {}) => show(msg, { ...opts, variant: "info" });

  const warning = (msg, opts = {}) =>
    show(msg, { ...opts, variant: "warning" });

  const loading = (msg, opts = {}) =>
    show(msg, { ...opts, variant: "loading" });

  const custom = (msg, opts = {}) => show(msg, { ...opts, variant: "default" });

  const promise = (promise, messages = {}, options = {}) => {
    const {
      loading: loadingMsg,
      success: successMsg,
      error: errorMsg,
    } = messages;

    return toast.promise(
      promise,
      {
        loading: loadingMsg || "Loading...",
        success: successMsg || "Success!",
        error: errorMsg || "Something went wrong!",
      },
      {
        ...options,
        // Merge variantConfig defaults if provided
        style: { ...variantConfig.default.style, ...options.style },
      }
    );
  };

  return { show, success, error, info, warning, loading, custom, promise };
};
