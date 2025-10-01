# Portfolio

Personal portfolio built with Next.js 15, React 19, Tailwind CSS 4, and Framer Motion. The project renders statically and ships via Netlify.

## Prerequisites
- Node.js 20.x (`.nvmrc` provided)
- npm 10+ (bundled with Node 20)

## Getting started
```bash
npm install
npm run dev
```
Visit http://localhost:3000/ to preview changes. Turbopack handles hot reloads.

## Useful scripts
- `npm run dev` – start local dev server
- `npm run build` – create a production build
- `npm run start` – serve the production build locally
- `npm run lint` – run lint rules from `eslint.config.mjs`

## Deployment
Netlify builds succeed with Node 20. Ensure the site configuration includes:
- Build command: `npm run build`
- Publish directory: `.next`
- Environment variable: `NODE_VERSION=20`

## Tech stack
- Next.js 15 app router with Turbopack
- React 19 with server components
- Tailwind CSS 4 pipeline via `@tailwindcss/postcss`
- Typescript strict mode and path aliases (`@/*`)
- Framer Motion for interaction choreography
