# VisoNext 2.0.0

Modern marketing site for VisoNext Corporation built with Nuxt 3, Tailwind CSS, and a polished gradient design system. This release focuses on a refreshed Vue-based stack, better performance, and production-ready SEO defaults.

---

## 🚀 Highlights
- Nuxt 3 + Vue 3 application shell with page transitions and layout support
- Tailwind CSS theme with glassmorphism utilities, gradient helpers, and scrollbar styling
- Fully responsive sections (hero, features, services, testimonials, CTA, stats)
- Contact form with validation-ready inputs and UX-friendly loading states
- Automated SEO via `@nuxtjs/seo`, structured data, and social meta tags

---

## 🆕 What's New in 2.0.0
1. **Rebuilt Frontend:** Migrated from the previous Next.js/React app to Nuxt 3 for better DX, hybrid rendering, and Vue-specific tooling.
2. **Componentized Sections:** Home, About, Services, and Contact pages now share reusable UI primitives (`Button`, `Card`) and layout components (`Header`, `Footer`).
3. **Design System Refresh:** Custom Tailwind theme tied to CSS variables, gradient helpers, and motion presets powered by VueUse Motion.
4. **Performance + Media:** Switched to `@nuxt/image` for responsive image optimization and updated asset pipeline.
5. **SEO & Metadata:** Centralized site metadata in `nuxt.config.ts`, richer Open Graph/Twitter cards, Schema.org definitions, and robots.txt defaults.

---

## 🧱 Project Structure

```
VisoNext/
├── app.vue                 # Root app entry
├── nuxt.config.ts         # Nuxt + module config
├── tailwind.config.ts     # Tailwind theme extensions
├── assets/css/main.css    # Global styles + utilities
├── components/
│   ├── layout/            # Header, Footer
│   ├── home/              # Landing sections
│   └── ui/                # Button, Card, etc.
├── layouts/default.vue    # Global layout
├── pages/                 # index, about, services, contact
└── public/                # Favicons + optimized images
```

---

## 🛠️ Tech Stack

| Layer      | Tooling |
|------------|---------|
| Framework  | [Nuxt 3.15](https://nuxt.com) |
| Language   | TypeScript + Vue 3 |
| Styling    | [Tailwind CSS](https://tailwindcss.com) + custom CSS vars |
| Animations | [VueUse Motion](https://motion.vueuse.org/) |
| Media      | `@nuxt/image`, `@nuxt/icon` |
| SEO        | `@nuxtjs/seo` with Schema.org helpers |

---

## 🧑‍💻 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview built output
npm run preview
```

Runs at `http://localhost:3000` by default.

---

## 📄 Content Overview

- **Home (`pages/index.vue`)** – Hero, animated stats, services preview, testimonials, CTA.
- **About (`pages/about.vue`)** – Mission, values grid, and team spotlights.
- **Services (`pages/services.vue`)** – Detailed service cards with benefits list and process timeline.
- **Contact (`pages/contact.vue`)** – Glass-style contact form, info cards, and business hours.

All sections leverage the shared design system and motion directives for cohesive UX.

---

## 🎨 Design & Theming

- **Typography:** Inter (300–900 weights)
- **Color System:** Purple/blue gradients with accent pink highlight
- **Utilities:** `.glass`, `.gradient-text`, `.hover-lift`, `.gradient-purple-blue`, `.gradient-animated`
- **Dark Mode:** Class-based toggles with CSS variables for both themes
- **Motion:** Default fade/slide animations + floating hero card

---

## 🔍 SEO & Metadata

- Page-level `useSeoMeta` definitions and Schema.org JSON-LD presets
- Social previews for Open Graph and Twitter
- Nuxt Image for optimized assets + lazy loading
- Robots.txt scaffolded in `public/_robots.txt`

---

## 🧩 Customization Tips

- **Company data:** Update `components/layout/Footer.vue`, `pages/contact.vue`, and `nuxt.config.ts`.
- **Color palette:** Adjust `tailwind.config.ts` and `assets/css/main.css` CSS variables.
- **New pages:** Add `.vue` files inside `pages/` and provide `useSeoMeta` metadata blocks.
- **Icons/media:** Drop optimized assets inside `public/images` and reference them via `/images/...`.

---

## 📦 Deployment

Nuxt’s Nitro output supports Node hosts, serverless providers, or static export:

1. `npm run build`
2. Deploy `.output/` to your target platform (Vercel, Netlify, Render, traditional VPS, etc.).

---

## 📜 License

MIT — use, adapt, or extend for your own client work. Contributions via PRs/issues are welcome. 

## 👨‍💻 Author

Built with ❤️ by [Farouk Chebaiki](https://farouk.uk/)

---

**Note:** This is Version 2 of VisoNext, a complete redesign and migration from Next.js to Nuxt.js 3.
