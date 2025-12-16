"use client";

import type { ReactNode } from "react";
import { AppSettingsProvider } from "@/contexts/AppSettingsContext";

export function Providers({ children }: { children: ReactNode }) {
  return <AppSettingsProvider>{children}</AppSettingsProvider>;
}

