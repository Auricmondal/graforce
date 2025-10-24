"use client";

import { IoMdClose } from "react-icons/io";
import { toast } from "react-hot-toast";

export default function ToastMessage({ t, icon, title, description, style }) {
  return (
    <div className="overflow-hidden rounded-md" style={style}>
      <div className="flex items-start gap-3  bg-cst-neutral-1 p-4">
        {icon && <div className="mt-1">{icon}</div>}

        <div className="flex-1">
          {title && <div className="font-semibold">{title}</div>}
          {description && (
            <div className="text-sm opacity-90">{description}</div>
          )}
        </div>

        <button
          onClick={() => toast.dismiss(t.id)}
          className="text-lg opacity-70 hover:opacity-100 transition-opacity"
        >
          <IoMdClose />
        </button>
      </div>

      <div
        style={{
          backgroundColor: style.color,
          height: "4px",
          width: "100%",
        }}
      ></div>
    </div>
  );
}
