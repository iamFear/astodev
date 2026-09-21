# Repository Guidelines

## Project Structure & Module Organization

This repository contains Astodev’s Spanish-language marketing site, built with Astro and deployed through Netlify.

- `src/pages/` defines file-based routes such as `index.astro`, `servicios.astro`, `precios.astro`, and `contacto.astro`.
- `src/components/` contains reusable UI, including navigation, footers, service cards, pricing cards, process steps, and calls to action.
- `src/layouts/Layout.astro` owns the shared document shell, metadata, navigation, and footer.
- `src/styles/global.css` contains design tokens, shared typography, buttons, cards, and layout utilities.
- `public/` stores static assets such as `favicon.svg`.
- `astro.config.mjs` and `netlify.toml` configure the site URL, build, and deployment environment.

Keep route-specific markup and styles in the relevant page. Promote styles or behavior to shared files only when multiple routes use them.

## Build, Test, and Development Commands

Use Node.js 22, matching `netlify.toml`, and npm with the committed lockfile.

- `npm install`: install exact dependency versions from `package-lock.json`.
- `npm run dev`: start Astro’s local server, normally at `http://localhost:4321`.
- `npm run build`: generate the production site in `dist/` and catch Astro compilation errors.
- `npm run preview`: serve the generated production build locally.

## Coding Style & Naming Conventions

Use two-space indentation, single-quoted JavaScript strings, and semicolons in Astro frontmatter. Name components in PascalCase (`ServiceCard.astro`), routes in lowercase Spanish (`nosotros.astro`), and CSS classes in kebab-case (`contact-form`). Define typed `Props` interfaces for reusable components.

Preserve the established graphite, parchment, brass, and teal visual system and its Fraunces, Inter, and IBM Plex Mono typography. Keep visitor-facing copy concise and in Spanish. No formatter or linter is currently configured, so match neighboring code closely.

## Testing Guidelines

There is no automated test suite or coverage requirement. Every change must pass `npm run build`. For UI changes, manually inspect affected routes at desktop and mobile widths. Verify keyboard focus, navigation, responsive layout, animation preferences, links, form validation, and success/error states. Netlify form delivery must be verified in a deployed environment.

## Commit & Pull Request Guidelines

Recent commits use short descriptive subjects, for example `partners section implemented`. Keep each commit focused and use an imperative, specific subject. Pull requests should explain the user-visible result, identify affected routes, list validation performed, link relevant issues, and include desktop and mobile screenshots for visual changes.

## Security & Generated Files

Do not commit secrets or API credentials. Preserve Netlify form names, honeypots, and confirmation routes. Do not edit or commit generated content in `dist/`, `.astro/`, or `node_modules/`.
