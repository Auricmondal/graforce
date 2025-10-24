"use client";

import { toast } from "react-hot-toast";
import { variantConfig } from "@/utils/toastConfig";
import ToastMessage from "@/components/shared/toast/ToastMsg";

export const useToast = () => {
  const show = ({ title, description }, options = {}) => {
    const { variant = "default", ...rest } = options;
    const config = variantConfig[variant] || variantConfig.default;

    const icon = config.icon;
    const mergedStyle = { ...config.style, ...rest.style };

    return toast.custom(
      (t) => (
        <ToastMessage
          t={t}
          icon={icon}
          title={title}
          description={description}
          style={mergedStyle}
        />
      ),
      {
        duration: config.duration || 4000,
        position: rest.position || "top-right",
        id: rest.id,
      }
    );
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
