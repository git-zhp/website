"use client";

import { useAppSettings } from "@/contexts/AppSettingsContext";
import { Button } from "@/components/ui/Button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useAppSettings();

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="h-9 w-9 rounded-md px-0"
    >
      <span className="text-lg leading-none">{isDark ? "☾" : "☀︎"}</span>
    </Button>
  );
}

