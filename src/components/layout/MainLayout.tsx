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
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-neutral-50">
              EW
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight">
                Enterprise Website
              </span>
              <span className="text-xs text-neutral-500">
                Next.js Starter Framework
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-2 text-sm font-medium text-neutral-700 md:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-1 transition-colors ${
                    isActive
                      ? "bg-neutral-900 text-neutral-50"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  <span>{t(item.labelKey)}</span>
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
      <footer className="border-t border-neutral-200 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-neutral-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Enterprise Website Starter.</p>
          <p>Built with Next.js and React.</p>
        </div>
      </footer>
    </div>
  );
}
