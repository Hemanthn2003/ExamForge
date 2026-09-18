import type {
  InputHTMLAttributes,
} from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  error?: string;
}

export function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-sm font-medium text-[#334255]">
          {label}
        </span>
      )}

      <input
        className={`
          w-full
          rounded-lg
          border
          border-[#D9D4C8]
          bg-[#FCFBF7]
          px-3.5
          py-2.5
          text-[#081B2E]
          outline-none
          transition
          focus:border-[#D4A843]
          focus:ring-2
          focus:ring-[#D4A843]/20
          ${className}
        `}
        {...props}
      />

      {error && (
        <span className="mt-1 block text-sm text-[#C94A4A]">
          {error}
        </span>
      )}
    </label>
  );
}