# my-projects

A personal site / project hub built with Next.js (App Router). `/` is a
directory page listing every project; each project lives at its own
`/<slug>` route and shares one global shell — nav, theme, and language.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it.

## Projects

- `/profile` — personal introduction / resume

## Tech Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS (v4) for styling
- React Context for shared global state — no external state library

## Shared Context

Every route under `app/*` automatically gets:

- **Theme** (`context/theme-context.tsx`) — light/dark, persisted to
  `localStorage`, falls back to `prefers-color-scheme`. Applied via a
  `dark` class on `<html>`.
- **Language** (`context/lang-context.tsx`) — `en` / `zh-TW`, persisted to
  `localStorage`, with a simple `t(key)` translation helper backed by
  `lib/dictionaries.ts`.

Both can be set on first load via query params, e.g.
`http://localhost:3000/?theme=dark&lang=zh-TW` — this also becomes the new
persisted default for that browser.

## Adding a New Project

1. Create `app/<slug>/page.tsx`.
2. Add an entry to `lib/projects.ts` (`{ slug, titleKey, descriptionKey }`)
   and the matching translations in `lib/dictionaries.ts` — this is what
   makes it show up as a card on `/`.
3. Use `useTheme()` / `useLang()` from context instead of re-declaring
   per-project state.

## Commands

```bash
npm run dev       # local dev server
npm run build     # production build (check this passes before shipping)
npm run lint      # lint
```

See `CLAUDE.md` for the full project conventions.
