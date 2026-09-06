"use client";

import { ThemeProvider } from "@/context/theme-context";
import { LangProvider } from "@/context/lang-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LangProvider>{children}</LangProvider>
    </ThemeProvider>
  );
}
