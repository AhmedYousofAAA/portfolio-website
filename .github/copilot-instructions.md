import type { NextConfig } from "next";

const nextConfig: NextConfig = {

output: "export",

images: { unoptimized: true },

trailingSlash: true,

};

export default nextConfig;

```

### Referencing public assets

Use plain root-relative paths. Files in `/public` are served from the site root.

```

// ✅ Correct

<img src="/me.png" alt="Ahmed" />

// ✅ Also correct (preferred)

import Image from "next/image";

<Image src="/me.png" width={400} height={400} alt="Ahmed" />

// ❌ Never do this

const basePath = process.env.NODE_ENV === "production" ? "/repo-name" : "";

<img src={`${basePath}/me.png`} />

```

### CNAME

The `public/CNAME` file must contain `www.ahmedyousof.dev` so GitHub Pages preserves the custom domain on each deploy.

### Required files in deploy output
- `CNAME` (copied automatically from `public/`)
- `.nojekyll` (added by the workflow to prevent Jekyll from ignoring `_next/`)

## Design System

### Color Palette (Tailwind classes)
| Color | Primary Use | Tailwind Classes |
|-------|-------------|------------------|
| Stone | Page background, cards, primary + secondary text | `stone-100`, `stone-50`, `stone-200`, `stone-600`, `stone-900` |
| Black | CTAs, dark CTA band, key emphasis | `stone-900`, `black` |
| Pastel accents | Project preview tiles + skill icon blocks ONLY | `amber-100`, `emerald-100`, `sky-100`, `rose-100`, `violet-100` |
| WhatsApp green | The post-submit WhatsApp CTA only | `bg-[#25D366]` / `hover:bg-[#1ebe5d]` |

### Shadows & Borders
- Cards: `bg-white rounded-2xl border border-stone-200/60`
- Hover: `hover:border-stone-300 hover:-translate-y-0.5 transition-all`
- **NO neon glows**, **NO drop-shadow-[0_0_...] effects**, **NO gradient backgrounds**
- Subtle, editorial calm only.

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
- Mobile nav: React `useState` for `isMenuOpen`, `absolute top-full left-0 right-0 bg-stone-900 border-b border-stone-800`

## Sections

1. **Nav** — Sticky, blur backdrop, logo, links, CTA, mobile hamburger.
2. **Hero** — Asymmetric 60/40 desktop, stacked mobile, headline + subhead + 2 CTAs + trust bar.
3. **Services** — 4 cards (n8n, Python/API, AI Agents, Process Optimization).
4. **Projects** — 6 ProjectCards (TE Quote Manager, B.Tech Scraper, Secure n8n, AI Guide Hub, Puter Dashboard, Monarch Wealth).
5. **Stats** — 4 numbers (50+ workflows, 1000+ hours, 6+ projects, 100% satisfaction).
6. **About** — Story + skills tags + LinkedIn/Resume CTAs.
7. **Contact** — Email, social links, form (see **Contact Form Spec** below).
8. **Footer** — Copyright, quick links, tech stack badges.

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

## Contact Form Spec

The contact form is a fully client-side React component (the site is statically exported, so there is no API route).

### Webhook configuration
At the top of the contact-form component:

```

const WEBHOOK_PROD = "https://hooks.ahmedyousof.dev/webhook/ae722c8c-3dfb-4f25-b293-ba1e535666fa";

const WEBHOOK_TEST = "https://hooks.ahmedyousof.dev/webhook-test/ae722c8c-3dfb-4f25-b293-ba1e535666fa";

// ✅ Production is the default. Only switch to WEBHOOK_TEST when you are

//    actively re-testing the n8n workflow ("Listen for test event" mode).

const WEBHOOK_URL: string = WEBHOOK_PROD;

const WHATSAPP_NUMBER = "201281664609";

```

### Payload type
```

type SubmissionPayload = {

id: string;             // unique 8-digit numeric string

name: string;

email: string;

phone: string;          // E.164, e.g. "+201234567890"

country: string | null; // ISO2, e.g. "EG"

dialCode: string | null;// e.g. "+20"

message: string;

submittedAt: string;    // ISO timestamp

};

```

### Phone field
- Use `react-phone-number-input`:
```

npm i react-phone-number-input

```
- Add the stylesheet **once** in `app/layout.tsx`:
```

import "react-phone-number-input/style.css";

```
- Component config: `defaultCountry="EG"`, `international`, `countryCallingCodeEditable={false}`.
- Validate with `isValidPhoneNumber(value)` from the same package.
- Extract `country` + `countryCallingCode` with `parsePhoneNumber(value)` to populate the payload.

### Unique 8-digit ID
- Generated client-side per submission, range `10000000`–`99999999`.
- Persist already-used IDs in `localStorage` under key `submittedIds` and regenerate on collision.

### Submission
- `POST` to `WEBHOOK_URL` with `Content-Type: application/json` and the `SubmissionPayload` body.
- Disable the button and show "Sending…" while the request is in flight.
- On `2xx`, replace the form with the success card. On error, keep field values and show inline error text.

### Success card
- Matches the design system (`rounded-2xl border border-stone-200/60 bg-white`).
- Heading: "Message sent successfully" in serif.
- Shows: `Your reference ID: <id>` — `id` styled with `font-mono font-semibold text-stone-900`.
- WhatsApp CTA pill, brand green `#25D366`, opens in a new tab:
```

const whatsappText = `ID: ${id}, I have a request`;

const whatsappHref = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(whatsappText)}`;

```
- Wrap the card in `role="status"` `aria-live="polite"`.

### Backend (n8n) — what the webhook expects
The webhook endpoint is hosted on `hooks.ahmedyousof.dev` and routes into an n8n workflow that:
1. Receives the JSON payload.
2. Verifies `id` is 8 digits (regenerates if missing).
3. Appends a row to the Google Sheet titled **Clients** with columns: A=ID, B=Name, C=Email, D=Phone (E.164), E=Message. Optional: F=Country, G=DialCode, H=SubmittedAt.
4. Responds with `{ ok: true, id }`.

The production endpoint (`/webhook/...`) is the default and is active whenever the workflow is activated in n8n. The test endpoint (`/webhook-test/...`) is only live while the workflow editor is in "Listen for test event" mode — switch `WEBHOOK_URL` to `WEBHOOK_TEST` only during active re-testing, then switch back.

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | All content + components |
| `app/contact-form.tsx` | (Optional) extracted contact form client component |
| `app/layout.tsx` | Metadata, fonts (Geist), title/description, `react-phone-number-input` CSS import |
| `app/globals.css` | Tailwind imports only |
| `next.config.ts` | Static export config |
| `.github/workflows/deploy.yml` | GitHub Pages CI/CD |
| `public/me.png` | Profile image |
| `public/CNAME` | `www.ahmedyousof.dev` |

## Commands
```

npm run dev    # Local development at [localhost:3000](http://localhost:3000)

npm run build  # Production build (static export to /out)

npm run lint   # ESLint check