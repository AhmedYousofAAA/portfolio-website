```markdown
# Copilot Instructions — Pro Automation Portfolio

## Project Overview
Portfolio single-page portfolio for Ahmed Yousof, an AI Automation Expert & n8n specialist. All user-customizable content lives in `app/page.tsx`. This is a beginner-friendly template—keep changes simple and well-commented.

## Architecture

### Single-File Content Model
- **`app/page.tsx`** — Contains ALL portfolio content and components (nav, hero, services, projects, stats, about, testimonials, contact, footer)
- Components defined at bottom: ProjectCard, ServiceCard, StatCard, TestimonialCard, MobileMenu, ArrowRightIcon, ArrowUpRightIcon
- No separate component files—intentionally flat for beginner accessibility

### GitHub Pages Deployment Pattern
Dual-environment basePath for local dev + GitHub Pages:

```

// In page.tsx — for images

const basePath = process.env.NODE_ENV === "production" ? "/gfbs3-portfolio-demo" : "";

src={`${basePath}/me.png`}

```

```

// In next.config.ts — for routing

basePath: isProd ? "/gfbs3-portfolio-demo" : "",

```jsx

**Critical**: When forking, update repo name in BOTH files.

## Design System

### Color Palette (Tailwind classes)
| Color | Primary Use | Tailwind Classes |
|-------|-------------|------------------|
| Stone | Page background, cards, primary + secondary text | `stone-100`, `stone-50`, `stone-200`, `stone-600`, `stone-900` |
| Black | CTAs, dark CTA band, key emphasis | `stone-900`, `black` |
| Pastel accents | Project preview tiles + skill icon blocks ONLY | `amber-100`, `emerald-100`, `sky-100`, `rose-100`, `violet-100` |

### Shadows & Borders
- Cards: `bg-white rounded-2xl border border-stone-200/60`
- Hover: `hover:border-stone-300 hover:-translate-y-0.5 transition-all`
- **NO neon glows**, **NO drop-shadow-[0_0_...] effects**, **NO gradient backgrounds**
- Subtle, editorial calm only

### Typography
- Display + section headings: serif (`font-serif`) via `Instrument Serif` or `Playfair Display`, weight 400, `tracking-tight text-stone-900`
- Body: `font-sans text-stone-600 leading-relaxed`
- Section labels: `text-xs font-medium uppercase tracking-[0.25em] text-stone-500` prefixed with an em-dash glyph "—"
- CTAs (pills): `bg-stone-900 text-white rounded-full px-6 py-3 hover:bg-stone-800`

## Responsive Breakpoints
- **Mobile (default)**: Single column, stacked layout, hamburger nav, `px-4`, `py-16`
- **Tablet (md: 768px+)**: `md:grid-cols-2`, `md:px-6`, `md:py-20`
- **Laptop (lg: 1024px+)**: `lg:grid-cols-3`, `lg:flex-row`, `lg:px-8`, `lg:py-24`
- **Desktop (xl: 1280px+)**: `xl:max-w-7xl`, `xl:grid-cols-4` where appropriate

### Responsive Component Patterns
- Section wrapper: `<section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"><div className="max-w-7xl mx-auto">...</div></section>`
- Grids: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Flex rows: `flex flex-col lg:flex-row gap-8 lg:gap-12 items-center`
- Mobile nav: React useState for `isMenuOpen`, `absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800`

## Sections

1. **Nav**: Sticky, blur backdrop, logo, links, CTA, mobile hamburger
2. **Hero**: Asymmetric 60/40 desktop, stacked mobile, headline + subhead + 2 CTAs + trust bar
3. **Services**: 4 cards (n8n, Python/API, AI Agents, Process Optimization)
4. **Projects**: 6 ProjectCards (TE Quote Manager, B.Tech Scraper, Secure n8n, AI Guide Hub, Puter Dashboard, Monarch Wealth)
5. **Stats**: 4 numbers (50+ workflows, 1000+ hours, 6+ projects, 100% satisfaction)
6. **About**: Story + skills tags + LinkedIn/Resume CTAs
7. **Contact**: Email, social links, simple form
8. **Footer**: Copyright, quick links, tech stack badges

## Component Patterns

### ProjectCard
```

<ProjectCard 

title="Project Name"

description="One-line description."

tags={["N8N", "PYTHON", "API"]}

color="blue" // blue | cyan | emerald | slate

href="https://..."

github="https://github.com/..."

/>

```

### ServiceCard
```

<ServiceCard

icon={Workflow} // Lucide icon

title="n8n Workflow Automation"

description="Custom workflow design..."

/>

```

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | All content + components |
| `app/layout.tsx` | Metadata, fonts (Geist), title/description |
| `app/globals.css` | Tailwind imports only |
| `next.config.ts` | Static export + basePath |
| `.github/workflows/deploy.yml` | GitHub Pages CI/CD |
| `public/me.png` | Profile image |

## Commands
```

npm run dev    # Local development at [localhost:3000](http://localhost:3000)

npm run build  # Production build (static export to /out)

npm run lint   # ESLint check

```jsx

## When Helping Users

1. **Content changes** → Edit `app/page.tsx` only
2. **Adding images** → Place in `/public`, use `${basePath}/filename` pattern
3. **Deployment issues** → Check basePath matches repo name in both config files
4. **Styling** → Use the stone + black + pastel palette; maintain the editorial minimal aesthetic (cream background, serif headings, black pill CTAs, numbered cards)
5. **New sections** → Follow existing section pattern with `id` for nav linking
6. **Responsiveness** → Always test mobile-first; never break single-column flow below md breakpoint
7. **Icons** → Use Lucide React icons only. Import from `lucide-react`
8. **Animations** → Optional subtle fade-ins. No flashy neon animations.
```