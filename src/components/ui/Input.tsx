import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  const baseClasses =
    "block w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/40 disabled:cursor-not-allowed disabled:bg-neutral-100";

  const mergedClassName = [baseClasses, className].filter(Boolean).join(" ");

  return <input className={mergedClassName} {...props} />;
}

