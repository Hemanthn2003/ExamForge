import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;

  title?: string;

  description?: string;

  className?: string;
}

export function Card({
  children,
  title,
  description,
  className = "",
}: CardProps) {
  return (
    <section
      className={`
        rounded-2xl
        border
        border-[#E4DED0]
        bg-white
        p-5
        shadow-sm
        ${className}
      `}
    >
      {title && (
        <h2 className="text-lg font-semibold text-[#081B2E]">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-1 text-sm text-[#687789]">
          {description}
        </p>
      )}

      <div
        className={
          title || description
            ? "mt-4"
            : ""
        }
      >
        {children}
      </div>
    </section>
  );
}