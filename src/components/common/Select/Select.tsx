import type {
  ReactNode,
  SelectHTMLAttributes,
} from "react";

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;

  children: ReactNode;
}

export function Select({
  label,
  children,
  ...props
}: SelectProps) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-sm font-medium text-[#334255]">
          {label}
        </span>
      )}

      <select
        className="
          w-full
          rounded-lg
          border
          border-[#D9D4C8]
          bg-[#FCFBF7]
          px-3.5
          py-2.5
          text-[#081B2E]
          outline-none
          focus:border-[#D4A843]
          focus:ring-2
          focus:ring-[#D4A843]/20
        "
        {...props}
      >
        {children}
      </select>
    </label>
  );
}