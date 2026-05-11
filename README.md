# La Caracola — Restaurant Website

Beachfront Mediterranean fine dining in Fuengirola, Málaga. Next.js 15 (App Router) + TypeScript + Tailwind v4 + next-intl.

## Quick start

```bash
npm install
npm run dev     # http://localhost:3101
```

## Stack

- **Framework**: Next.js 15 App Router, React 19
- **Styling**: Tailwind CSS v4 with custom design tokens
- **i18n**: next-intl, 6 locales (`es` default, `en`, `fr`, `de`, `nl`, `ru`)
- **Fonts**: Fraunces (variable serif) + Inter Tight via `next/font`
- **Icons**: Lucide React
- **Images**: `next/image` with optimized AVIF/WebP output

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server on port 3101 |
| `npm run build` | Production build |
| `npm run start` | Serve production build on port 3101 |
| `npm run convert-logo` | Regenerate `public/assets/logo.png` from source `.webp` (requires source in parent dir) |
| `npm run download-premium-photos` | Re-fetch curated Unsplash photography into `public/assets/photos/premium/` |
| `npm run download-dish-photos` | Re-fetch the restaurant's dish photos from the live site URLs |

## Routes

ES is served at the root with no prefix. Other locales prefix the same paths.

- `/` — Inicio
- `/el-sabor` — About / story
- `/el-menu` — Menu hub
- `/el-menu/carta` — Full carta (124 dishes, allergen indicators)
- `/el-menu/postres` — Desserts
- `/el-menu/cocteles` — Cocktails / smoothies
- `/el-menu/vinos` — Wines + bar program
- `/reservas` — Reservation form (CoverManager-style flow)
- `/contacto` — Contact + Google Maps embed + suggestion form
- `/galeria` — Filterable photo gallery

## Structure

```
src/
  app/[locale]/         # Localized routes
  components/
    layout/             # Header, Footer, MobileMenu, CustomCursor, LanguageSwitcher, FloatingActions
    sections/           # Page sections (Hero, Welcome, DishCarousel, Timeline, CellarBlock, ...)
    menu/               # MenuRow, AllergenLegend, CategoryNav, WineTable, ...
    ui/                 # Primitives (Reveal, Counter, SeashellGlyph, ...)
  i18n/                 # routing.ts, request.ts (next-intl)
  lib/                  # menu-data, wine-data, cocktails-data, dish-photos, premium-photos, ...
messages/               # ES populated; EN/FR/DE/NL/RU fall back to ES via i18n/request.ts merge
public/assets/          # Logo, EU FEDER logos, photos
scripts/                # Logo conversion + photo downloaders
```

## Deployment

Configured for Vercel. The Next.js app sits at the repo root.

## Forms

Reservation and contact forms are wired up to a local success state. Connect a backend (Resend recommended) by adding API routes at `app/api/reservation/route.ts` and `app/api/contact/route.ts`, plus a `RESEND_API_KEY` env var.
