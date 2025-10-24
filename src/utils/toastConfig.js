import { IoIosCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";
import { IoCloudCircleSharp } from "react-icons/io5";
import { TiWarning } from "react-icons/ti";
import { LuLoaderCircle } from "react-icons/lu";


export const defaultToastOptions = {
  position: "top-right",
  duration: 4000,
  className: "shadow-lg rounded-md",
  style: {
    background: "var(--secondary-light)",
    color: "var(--color-cst-neutral-5)",
    padding: "0.75rem 1rem",
  },
};

export const variantConfig = {
  success: {
    icon: <IoIosCheckmarkCircle className="text-2xl" />,
    style: { background: "var(--color-success)" },
  },
  error: {
    icon: <IoMdCloseCircle className="text-2xl" />,
    style: { background: "var(--color-error)" },
  },
  info: {
    icon: <IoCloudCircleSharp className="text-2xl" />,
    style: { background: "var(--color-info)", color: "var(--color-dark)" },
  },
  warning: {
    icon: <TiWarning className="text-2xl" />,
    style: { background: "var(--color-warning)" },
  },
  loading: {
    icon: <LuLoaderCircle className="text-2xl animate-spin" />,
    duration: 100, // Loading toasts stay until dismissed
    style: { background: "var(--color-cst-neutral-2)" },
  },
  default: {
    background: "var(--secondary-light)",
    color: "var(--color-cst-neutral-5)",
  },
};
