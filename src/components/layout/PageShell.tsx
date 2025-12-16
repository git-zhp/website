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
    <div className="flex flex-1 flex-col gap-8 py-8 md:py-10">
      <div className="space-y-2 border-b border-border pb-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {t(titleKey)}
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          {t("layout.page.subtitle")}
        </p>
      </div>
      <div className="flex flex-1 flex-col">
        {children}
      </div>
    </div>
  );
}

