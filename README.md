# mauricejohnson — Portfolio

Personal portfolio site for Maurice Johnson, Senior Software Engineer.

A single-page, dark-themed portfolio covering who I am, where I've worked, the products I've shipped (including [Offrrd](https://offrrd.com) and [nullpointerbro.com](https://nullpointerbro.com)), the home lab that powers my self-hosted infrastructure, and the content I create as [@nullpointerbro](https://www.tiktok.com/@nullpointerbro).

## Stack

- **Next.js 16** (App Router, fully static output) + **TypeScript**
- **Tailwind CSS v4** with a token-based dark/light theme
- **Framer Motion** scroll animations
- All site content lives in one typed data file (`content/site.ts`); project detail pages are statically generated from it

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
