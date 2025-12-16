"use client";

import { useAppSettings } from "@/contexts/AppSettingsContext";

const languages = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
] as const;

export function LanguageSwitcher() {
  const { language, setLanguage } = useAppSettings();

  return (
    <div className="inline-flex items-center gap-1 rounded-md border border-input p-1">
      {languages.map((item) => {
        const isActive = language === item.code;

        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            className={`rounded-sm px-2.5 py-1 text-xs font-medium transition-colors ${
              isActive
                ? "bg-secondary text-secondary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

