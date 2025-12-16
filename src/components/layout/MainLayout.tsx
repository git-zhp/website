"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useTranslation } from "@/i18n/useTranslation";

type NavItem = {
  href: string;
  labelKey: "nav.home" | "nav.about" | "nav.products" | "nav.news" | "nav.contact";
};

const navItems: NavItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/products", labelKey: "nav.products" },
  { href: "/news", labelKey: "nav.news" },
  { href: "/contact", labelKey: "nav.contact" },
];

export function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground shadow-sm">
              企
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-none tracking-tight">
                企业官网
              </span>
              <span className="text-xs text-muted-foreground">
                Enterprise Website
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 transition-colors ${
                    isActive
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <span suppressHydrationWarning>{t(item.labelKey)}</span>
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <footer className="border-t border-border bg-muted/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Enterprise Website Starter.</p>
          <p>Built with Next.js and React.</p>
        </div>
      </footer>
    </div>
  );
}
