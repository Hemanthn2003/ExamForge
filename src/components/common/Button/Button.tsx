import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "ghost";

  children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const styles = {
    primary:
      "bg-[#D4A843] text-[#081B2E] hover:bg-[#E6C66A]",

    secondary:
      "border border-[#D4A843] text-[#081B2E] hover:bg-[#F1EEE5]",

    danger:
      "bg-[#C94A4A] text-white hover:bg-[#A93D3D]",

    ghost:
      "text-[#334255] hover:bg-[#F1EEE5]",
  };

  return (
    <button
      className={`
        rounded-lg
        px-4
        py-2.5
        font-medium
        transition
        duration-200
        ${styles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}