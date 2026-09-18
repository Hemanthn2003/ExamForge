import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;

  title: string;

  children: ReactNode;

  onClose: () => void;
}

export function Modal({
  open,
  title,
  children,
  onClose,
}: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-[#050F1A]/50
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-lg
          rounded-2xl
          bg-white
          p-6
          shadow-2xl
        "
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#081B2E]">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-[#687789]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="mt-5">
          {children}
        </div>
      </div>
    </div>
  );
}