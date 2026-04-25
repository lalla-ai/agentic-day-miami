# Agentic Day Miami — Next.js

The official landing page for Agentic Day Miami, May 4, 2026. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

**Live event:** [Luma](https://luma.com/event/evt-CPHbpuc52PLWqp0)

---

## Quick start (5 minutes to live URL)

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you should see the full landing page.

### 3. Deploy to Vercel

**Easiest path — drag and drop:**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag this entire folder onto the page
3. Vercel auto-detects Next.js and deploys
4. You'll get a `*.vercel.app` URL in ~60 seconds

**Proper path — via GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create agentic-day-miami --public --source=. --push
```

Then go to [vercel.com/new](https://vercel.com/new), import the GitHub repo, and click Deploy.

### 4. Connect your custom domain

In Vercel dashboard → Settings → Domains → add `helloagentic.ai` (or whatever you own).

---

## Project structure

```
/
├── app/
│   ├── layout.tsx          # Root layout, metadata, Manrope font
│   ├── page.tsx            # Main page importing all sections
│   └── globals.css         # All custom styles
├── components/
│   ├── Nav.tsx             # Floating glassmorphic nav with logo
│   ├── Hero.tsx            # "Where AI meets capital" headline
│   ├── MeshWave.tsx        # Animated green dotted-mesh canvas (client)
│   ├── Stats.tsx           # 300 / 450+ / 3
│   ├── About.tsx           # About section
│   ├── Speakers.tsx        # 17 speaker grid
│   ├── Marquee.tsx         # Auto-scrolling phrase strip
│   ├── Agenda.tsx          # Full timeline + dark Tickets card
│   ├── EventsSeries.tsx    # 3 themed event cards
│   ├── Partners.tsx        # Sponsors / Community / Media + Get Involved
│   ├── Charity.tsx         # St. Jude callout
│   ├── FinalCTA.tsx        # "Don't miss the next one"
│   ├── Footer.tsx          # Dark Consensus-style footer
│   └── RevealOnScroll.tsx  # IntersectionObserver animation helper
├── public/
│   └── images/
│       ├── agentic-day-logo.jpg
│       ├── speakers/       # 17 speaker portraits
│       └── sponsors/       # WEEX, Cayman Finance, Verdant, Shore Labs
└── tailwind.config.js      # Brand colors as Tailwind tokens
```

---

## Editing content

### Update speaker list

Edit `components/Speakers.tsx` — the `speakers` array at the top.

### Update agenda

Edit `components/Agenda.tsx` — each `<div className="agenda-row">` block is one slot.

### Update sponsor logos

Drop new files into `public/images/sponsors/` and update `components/Partners.tsx`.

### Update the Luma URL

Search the codebase for `luma.com/event/evt-CPHbpuc52PLWqp0` and replace.

---

## Brand tokens

Defined in `tailwind.config.js` and `app/globals.css`:

| Token | Value |
|---|---|
| `bg` | `#f5f3ee` (warm off-white) |
| `ink` | `#0e1117` (near-black) |
| `accent` | `#7c5cff` (purple, UI accent) |
| `brand-green` | `#7CC242` (logo green) |
| `nvidia-green` | `#76b900` (agenda timestamps) |

Font: Manrope (loaded from Google Fonts in `app/layout.tsx`).

---

## License

All content © 2026 Agentic Day. Code is private.
