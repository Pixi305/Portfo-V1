# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev       # Start dev server at http://localhost:3000
yarn build     # Production build
yarn start     # Start production server
```

No test runner or linter is configured.

## Architecture

Next.js 13 portfolio site (Pages Router) for Lateef Akinyemi — a Technical + Product Designer.

**Two component directories exist — prefer `newComponent/`:**
- `newComponent/` — active components used by `pages/index.tsx` (Navbar, NewHeroSection, Projects, Footer)
- `components/` — older/legacy components; only `Experience` is still imported into the main page

**Pages:**
- `pages/index.tsx` — home page, composes from `newComponent/` + `components/Experience`
- `pages/projects/` — individual case study pages: `veedez`, `faramove`, `jeetar`, `about-me`

**Styling:**
- Tailwind for utility classes; config in `tailwind.config.js`
- SCSS for global styles and custom font loading (`styles/globals.scss`, `styles/fonts.scss`)
- Custom fonts: Regola Pro and Roobert, loaded via SCSS `@font-face` in `styles/Regola/` and `styles/Roobert/`
- Tailwind custom color tokens (e.g. `la-gray4`, `la-bdgray`, `lpBg`) are defined in `tailwind.config.js`

**Constants:**
- `constants/index.ts` exports a `Constants` object with external links (resume, Dribbble, LinkedIn)

**Deployment:** Netlify (see badge in README)
