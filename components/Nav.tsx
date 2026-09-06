"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/theme-context";
import { useLang } from "@/context/lang-context";
import type { Lang } from "@/context/lang-context";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      {open ? (
        <path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          d="M6 6l12 12M18 6L6 18"
        />
      ) : (
        <path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          d="M4 7h16M4 12h16M4 17h16"
        />
      )}
    </svg>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-900/5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
    >
      <span
        className={`inline-block transition-transform duration-500 ${
          theme === "dark" ? "rotate-180" : "rotate-0"
        }`}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}

function LangSwitch() {
  const { lang, setLang } = useLang();
  const options: { value: Lang; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "zh-TW", label: "中" },
  ];

  return (
    <div className="flex items-center rounded-full bg-zinc-900/5 p-0.5 text-xs font-medium dark:bg-white/10">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => setLang(opt.value)}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            lang === opt.value
              ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-shadow duration-300 ${
        scrolled
          ? "border-zinc-900/10 bg-white/80 shadow-md shadow-zinc-900/5 dark:border-white/10 dark:bg-black/80 dark:shadow-black/40"
          : "border-transparent bg-white/70 dark:bg-black/70"
      }`}
    >
      <div className="h-0.5 w-full animate-gradient-x bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500" />
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="animate-gradient-x bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 bg-clip-text text-lg font-bold tracking-tight text-transparent transition-transform hover:scale-105"
          onClick={() => setOpen(false)}
        >
          {t("nav.brand")}
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/"
            className="group relative text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            {t("nav.home")}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <div className="mx-1 h-5 w-px bg-zinc-900/10 dark:bg-white/10" />
          <LangSwitch />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-900/5 dark:text-zinc-300 dark:hover:bg-white/10"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-slide-down border-t border-zinc-900/10 bg-white/95 px-4 pb-4 pt-2 backdrop-blur-md md:hidden dark:border-white/10 dark:bg-black/95">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-900/5 dark:text-zinc-200 dark:hover:bg-white/10"
          >
            {t("nav.home")}
          </Link>
          <div className="mt-2 flex items-center justify-between px-3">
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              Language
            </span>
            <LangSwitch />
          </div>
        </div>
      )}
    </header>
  );
}
