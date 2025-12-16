"use client";

import { useAppSettings } from "@/contexts/AppSettingsContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useAppSettings();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-xs text-neutral-700 shadow-sm transition-colors hover:bg-neutral-100"
    >
      {isDark ? "☾" : "☀︎"}
    </button>
  );
}

