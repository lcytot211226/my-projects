"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dictionaries, type Dictionary } from "@/lib/dictionaries";

export type Lang = "en" | "zh-TW";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  dict: Dictionary;
};

const LangContext = createContext<LangContextValue | undefined>(undefined);

const STORAGE_KEY = "lang";

function resolve(dict: Dictionary, key: string): string {
  const value = key
    .split(".")
    .reduce<unknown>(
      (acc, part) =>
        acc && typeof acc === "object" ? (acc as Record<string, unknown>)[part] : undefined,
      dict,
    );
  return typeof value === "string" ? value : key;
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    // Persisted preference (and any ?lang= override) only exists
    // client-side, so it can't be read during the initial (server) render —
    // sync it once on mount instead.
    const isLang = (v: string | null): v is Lang => !!v && v in dictionaries;
    const fromQuery = new URLSearchParams(window.location.search).get("lang");
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initial = isLang(fromQuery) ? fromQuery : isLang(stored) ? stored : null;
    if (initial) {
      if (isLang(fromQuery)) {
        window.localStorage.setItem(STORAGE_KEY, initial);
      }
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(initial);
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const dict = dictionaries[lang];

  const t = useCallback((key: string) => resolve(dict, key), [dict]);

  const value = useMemo(
    () => ({ lang, setLang, t, dict }),
    [lang, setLang, t, dict],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}
