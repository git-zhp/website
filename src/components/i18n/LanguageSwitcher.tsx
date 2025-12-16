"use client";

import { useAppSettings } from "@/contexts/AppSettingsContext";

const languages = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
] as const;

export function LanguageSwitcher() {
  const { language, setLanguage } = useAppSettings();

  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-neutral-100 p-1 text-xs text-neutral-700">
      {languages.map((item) => {
        const isActive = language === item.code;

        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            className={`rounded-full px-2 py-0.5 transition-colors ${
              isActive
                ? "bg-neutral-900 text-neutral-50"
                : "text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

