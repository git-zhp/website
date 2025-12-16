import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode;
  description?: ReactNode;
};

export function Card({
  className,
  title,
  description,
  children,
  ...props
}: CardProps) {
  const baseClasses =
    "flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white/80 p-4 shadow-sm";

  const mergedClassName = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <section className={mergedClassName} {...props}>
      {(title || description) && (
        <header className="space-y-1">
          {title && <h2 className="text-base font-semibold">{title}</h2>}
          {description && (
            <p className="text-xs text-neutral-500">{description}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}

