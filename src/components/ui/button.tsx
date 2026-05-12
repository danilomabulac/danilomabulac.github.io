import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ children, className, variant = "primary", ...props }: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600",
        variant === "primary" && "bg-slate-950 text-white shadow-soft hover:bg-slate-800",
        variant === "secondary" && "border border-slate-200 bg-white text-slate-900 hover:border-slate-300",
        variant === "ghost" && "text-slate-700 hover:bg-slate-100",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
