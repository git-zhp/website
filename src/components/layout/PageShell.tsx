"use client";

import type { ReactNode } from "react";
import type { TranslationKey } from "@/i18n/locales";
import { useTranslation } from "@/i18n/useTranslation";

type PageShellProps = {
  titleKey: TranslationKey;
  children?: ReactNode;
};

export function PageShell({ titleKey, children }: PageShellProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-1 flex-col gap-6 py-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t(titleKey)}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-neutral-500 sm:text-base">
          {t("layout.page.subtitle")}
        </p>
      </div>
      <div className="flex flex-1 flex-col rounded-2xl border border-dashed border-neutral-200 bg-white/60 p-6 shadow-sm">
        {children}
      </div>
    </div>
  );
}

