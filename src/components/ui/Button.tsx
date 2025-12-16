import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-neutral-900 text-neutral-50 hover:bg-neutral-800 focus-visible:ring-neutral-900",
    secondary:
      "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-400",
    ghost:
      "bg-transparent text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-400",
  };

  const mergedClassName = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return <button className={mergedClassName} type="button" {...props} />;
}

