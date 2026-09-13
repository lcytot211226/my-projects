"use client";

import Link from "next/link";
import { useLang } from "@/context/lang-context";
import { projects } from "@/lib/projects";
import { GITHUB_URL } from "@/lib/links";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export default function Home() {
  const { t } = useLang();

  return (
    <main className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <section className="mx-auto w-full max-w-5xl px-4 pb-10 pt-14 sm:px-6 sm:pt-20">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          {t("home.heroTitle")}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
          {t("home.heroSubtitle")}
        </p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-zinc-900/10 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-all hover:-translate-y-0.5 hover:bg-zinc-900/5 hover:shadow-sm dark:border-white/10 dark:text-zinc-300 dark:hover:bg-white/10"
        >
          <GitHubIcon /> GitHub
        </a>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
          {t("home.projectsHeading")}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/${project.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-zinc-900/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-900"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <span className="text-xl" aria-hidden="true">
                  {project.icon}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {t(project.titleKey)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {t(project.descriptionKey)}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Open
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
