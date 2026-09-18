import type { ReactNode } from "react";

type BadgeTone =
  | "success"
  | "warning"
  | "danger"
  | "neutral";

interface BadgeProps {
  children: ReactNode;

  tone?: BadgeTone;
}

export function Badge({
  children,
  tone = "neutral",
}: BadgeProps) {
  const styles = {
    success:
      "bg-emerald-50 text-[#168B70]",

    warning:
      "bg-amber-50 text-[#B98222]",

    danger:
      "bg-red-50 text-[#C94A4A]",

    neutral:
      "bg-slate-100 text-[#526273]",
  };

  return (
    <span
      className={`
        inline-flex
        rounded-full
        px-2.5
        py-1
        text-xs
        font-semibold
        ${styles[tone]}
      `}
    >
      {children}
    </span>
  );
}