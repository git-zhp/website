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
    "flex flex-col gap-3 rounded-lg border border-border bg-card text-card-foreground p-6 shadow-sm transition-all hover:shadow-md";

  const mergedClassName = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <section className={mergedClassName} {...props}>
      {(title || description) && (
        <header className="space-y-1.5">
          {title && <h2 className="text-lg font-semibold leading-none tracking-tight">{title}</h2>}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}

