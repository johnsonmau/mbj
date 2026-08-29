# Portfolio Site

Personal portfolio for job hunting and contract work. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Develop

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Filling in your real content

Everything is placeholder-driven — no component edits needed:

1. **`content/site.ts`** — the single source of truth. Name, tagline, email, social URLs, skills, projects, home lab details, videos, and resume entries all live here. Search for `PLACEHOLDER` and replace.
2. **`public/headshot.svg`** — replace with your photo (e.g. `public/headshot.jpg`) and update `identity.headshot` in `content/site.ts`.
3. **`public/resume.pdf`** — replace with your real resume PDF (same filename, nothing else to change).

Project detail pages are generated automatically from the `projects` array — add an entry with a unique `slug` and it gets a page at `/projects/<slug>`.

## Structure

- `app/page.tsx` — single-page home: Hero → About → Projects → Home Lab → Content → Resume → Contact
- `app/projects/[slug]/page.tsx` — per-project case-study pages
- `components/` — one component per section, plus shared bits (Nav, theme toggle, icons, scroll reveal)
- Dark theme by default with a light-mode toggle (persisted in localStorage)

## Deploy

Designed for [Vercel](https://vercel.com): import the repo, framework auto-detects, done. Any Node host running `npm run build && npm start` also works.
