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
    style: { color: "#02521f" },
  },
  error: {
    icon: <IoMdCloseCircle className="text-2xl" />,
    style: { color: "#d93232" },
  },
  info: {
    icon: <IoCloudCircleSharp className="text-2xl" />,
    style: { color: "var(--color-primary)" },
  },
  warning: {
    icon: <TiWarning className="text-2xl" />,
    style: { color: "#a1710a" },
  },
  loading: {
    icon: <LuLoaderCircle className="text-2xl animate-spin" />,
    duration: 10000,
    style: { color: "var(--color-dark)" },
  },
  default: {
    background: "var(--secondary-light)",
    color: "var(--color-cst-neutral-5)",
  },
};
