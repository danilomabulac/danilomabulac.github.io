import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type BadgeProps = {
  children: ReactNode;
  tone?: "default" | "accent" | "quiet";
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tone === "default" && "border-slate-200 bg-white text-slate-700",
        tone === "accent" && "border-teal-200 bg-teal-50 text-teal-800",
        tone === "quiet" && "border-slate-200 bg-slate-50 text-slate-600",
      )}
    >
      {children}
    </span>
  );
}
