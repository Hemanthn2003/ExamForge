import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;

  description?: string;

  action?: ReactNode;
}

export function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-dashed
        border-[#D9D4C8]
        bg-[#FCFBF7]
        p-10
        text-center
      "
    >
      <h3 className="font-semibold text-[#081B2E]">
        {title}
      </h3>

      {description && (
        <p className="mt-2 text-sm text-[#687789]">
          {description}
        </p>
      )}

      {action && (
        <div className="mt-4">
          {action}
        </div>
      )}
    </div>
  );
}