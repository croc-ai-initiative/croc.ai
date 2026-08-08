import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "white";
  size?: "sm" | "md";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold font-body transition-all duration-200 whitespace-nowrap",
    size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-[15px]",
    variant === "primary" &&
      "bg-indigo text-white hover:bg-periwinkle hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_var(--indigo)]",
    variant === "ghost" &&
      "bg-transparent text-text-hi border border-graphite-line hover:border-periwinkle/40 hover:bg-indigo-dim",
    variant === "white" &&
      "bg-white text-indigo hover:bg-mist",
    className
  );

  if (href) {
    // Any href starting with http(s):// is treated as external (e.g. a
    // Google Form link) — opens in a new tab with the standard safe-link
    // attributes, automatically, so this never has to be remembered
    // per-use when adding new events/programs.
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
