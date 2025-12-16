"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "@/i18n/locales";

type Theme = "light" | "dark";

type AppSettingsContextValue = {
  theme: Theme;
  language: Locale;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setLanguage: (language: Locale) => void;
};

const THEME_STORAGE_KEY = "app-theme";
const LANGUAGE_STORAGE_KEY = "app-language";

const AppSettingsContext = createContext<AppSettingsContextValue | undefined>(
  undefined,
);

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

export function AppSettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => getInitialTheme());
  const [language, setLanguageState] = useState<Locale>("en");

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "en" || stored === "zh") {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      theme,
      language,
      setTheme: setThemeState,
      toggleTheme: () =>
        setThemeState((previous) =>
          previous === "light" ? "dark" : "light",
        ),
      setLanguage: setLanguageState,
    }),
    [theme, language],
  );

  return (
    <AppSettingsContext.Provider value={value}>
      {children}
    </AppSettingsContext.Provider>
  );
}

export function useAppSettings() {
  const context = useContext(AppSettingsContext);

  if (!context) {
    throw new Error("useAppSettings must be used within AppSettingsProvider");
  }

  return context;
}

export type { Theme };
