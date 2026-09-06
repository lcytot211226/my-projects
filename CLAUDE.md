# CLAUDE.md

This file guides Claude Code when working in this repository.

## Project Overview

This is a **Next.js (App Router)** project that acts as a personal site / hub.

- `/` — Home page. This is the **directory/index page**: a short intro plus a card/list for **every project**, each with a short description and a link into that project. Whenever a new project is added, `/` must be updated to include it.
- `/<project-name>` — Each sub-route under root is an independent "project" (e.g. `/profile`, `/destination`, etc.). Each project is self-contained in its own folder, but all projects **share the same global context**: `theme` (light/dark) and `lang` (i18n locale).
- New projects will keep being added over time as sibling routes under `/`.

Think of this repo as a **mono-app with multiple mini apps/pages ("projects") mounted under one root**, all sharing the same shell (nav, theme, language) but each with its own page content and possibly its own components/logic.

## Tech Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS for styling (mobile-first, use `sm: md: lg:` breakpoints — do not write separate mobile/desktop components)
- React Context for global state (`theme`, `lang`) — no external state library needed unless the project grows significantly
- Keep dependencies minimal; ask before adding new libraries for things Context/Tailwind can already handle

## Folder Structure

```
app/
  layout.tsx              # Root layout — wraps everything with <Providers>, renders <Nav /> above {children} so it appears on every route including every project
  page.tsx                # "/" — home page = directory of all projects (intro + list of project cards/links)
  providers.tsx           # Client component: ThemeProvider + LangProvider wrapper
  globals.css

  profile/
    page.tsx              # "/profile" — personal introduction project

  (future project folders go here, same pattern as profile/)

components/
  Nav.tsx                 # Top nav — links to all projects, theme toggle, lang switch
  ...                     # shared UI components

context/
  theme-context.tsx       # ThemeContext + useTheme() hook (light/dark, persisted to localStorage)
  lang-context.tsx        # LangContext + useLang() hook (current locale + translation lookup)

lib/
  ...                     # utilities (e.g. i18n dictionary loader)

public/
  ...
```

## Shared Context Requirements

### Theme (`context/theme-context.tsx`)
- Values: `"light" | "dark"`
- Expose: `theme`, `setTheme(theme)`, `toggleTheme()`
- Persist choice to `localStorage`; on load, respect saved value, otherwise fall back to `prefers-color-scheme`
- Apply theme by toggling a `dark` class on `<html>` (so Tailwind's `dark:` variant works project-wide)

### Language (`context/lang-context.tsx`)
- Values: start with `"en" | "zh-TW"` (extendable later)
- Expose: `lang`, `setLang(lang)`
- Persist choice to `localStorage`
- Simple `t(key)` translation helper is fine for now (a small dictionary object per language); don't over-engineer with a full i18n library unless asked

### Wiring
- `Providers` (in `app/providers.tsx`, marked `"use client"`) wraps `<ThemeProvider><LangProvider>{children}</LangProvider></ThemeProvider>`
- `app/layout.tsx` (server component) imports `Providers` and wraps `{children}` with it
- Every route/project under `app/*` automatically gets access to `useTheme()` and `useLang()` without re-declaring context — do not create per-project theme/lang state

## Nav (shared across every project)

- `components/Nav.tsx` is rendered **once, in `app/layout.tsx`**, above `{children}` — not re-imported per project. This makes it appear on `/`, `/profile`, and every future project automatically.
- Contains: site logo/name (links back to `/`), theme toggle, language switch. Optionally links to a few top-level projects if the list is short; full project list/descriptions live on the `/` directory page itself, not crammed into the Nav.
- Responsive: collapse into a hamburger menu on mobile (`md:hidden` trigger, `hidden md:flex` for the desktop inline version), per the mobile-first Tailwind rules above.
- Uses `useTheme()` / `useLang()` from context — must be a client component (or contain a small client sub-component for the interactive parts).

## Project Registry (for the home directory page)

- Maintain a single source of truth list of projects (e.g. `lib/projects.ts`) with `{ slug, title, description }` for each project (starting with `profile`).
- `app/page.tsx` reads this list and renders a card/link per project (title + short description + link to `/​<slug>`).
- When a new project route is added under `app/`, also add an entry here so it shows up on `/` — this list is what keeps the home page in sync with actual routes.

## Current Task: `profile` project

Create `/profile` as the first project:

- Route: `app/profile/page.tsx`
- Content: personal introduction (name, short bio, skills/interests, contact/social links — use placeholder content for now, structured so it's easy to edit later)
- Must respect the shared `theme` (light/dark Tailwind classes) and `lang` (pull text through `t()` rather than hardcoding strings) contexts
- Responsive: mobile-first Tailwind, should look reasonable from small phone widths up to desktop
- Keep it as a single page for now (no sub-routes under `/profile` yet)

## Conventions

- TypeScript everywhere (`.tsx`/`.ts`), strict mode on
- Functional components only
- Prefer server components by default; only mark `"use client"` where you actually need hooks/state/browser APIs (context providers, theme toggle button, etc.)
- Co-locate small project-specific components inside that project's folder (e.g. `app/profile/_components/`); only promote to `components/` if reused across projects
- Keep each project route independently readable — someone should be able to open `app/profile/page.tsx` and understand it without hunting through unrelated project folders

## Commands

```bash
npm run dev       # local dev server
npm run build     # production build (check this passes before considering a task done)
npm run lint      # lint
```

## Definition of Done (for this task)

- [ ] `app/layout.tsx`, `app/providers.tsx` set up with Theme + Lang providers
- [ ] `context/theme-context.tsx` and `context/lang-context.tsx` implemented and working
- [ ] `components/Nav.tsx` rendered from `app/layout.tsx` (so it shows on every project route), responsive with mobile hamburger
- [ ] `lib/projects.ts` registry created, containing at least the `profile` entry
- [ ] Root `/` renders as a directory page: intro + a card/link with description for every project in the registry
- [ ] `/profile` page exists, uses shared theme/lang, responsive, placeholder content
- [ ] `npm run build` succeeds with no type errors