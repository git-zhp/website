import { useAppSettings } from "@/contexts/AppSettingsContext";
import {
  defaultLocale,
  messages,
  type Locale,
  type TranslationKey,
} from "./locales";

export function useTranslation() {
  const { language } = useAppSettings();

  const activeLocale: Locale =
    language in messages ? language : defaultLocale;

  function t(key: TranslationKey): string {
    const localeMessages = messages[activeLocale];
    const fallbackMessages = messages[defaultLocale];

    return localeMessages[key] ?? fallbackMessages[key] ?? key;
  }

  return {
    t,
    language: activeLocale,
  };
}

export type { TranslationKey };

