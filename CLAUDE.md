# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing site for Pineflux (pineflux.com), a founder-led software studio run by Travis Hayes. Its job is lead generation: turning small-business owners and entrepreneurs into project inquiries. Copy is the product here, so content changes deserve the same care as code changes.

## Commands

```bash
npm run dev     # dev server on :3000
npm run build   # production build
npm run lint    # eslint
```

The `--webpack` flag on `dev` and `build` is deliberate. The MDX pipeline in `next.config.mjs` depends on webpack, so do not "modernize" these to Turbopack.

There is no test suite.

## Architecture

### The template's names lie: `/work` holds services, not case studies

This site is built on the Tailwind Plus "Studio" template (commercial license, keep the repo private). The template's case-study machinery was repurposed to present **services**, because Pineflux has no client case studies yet. The old names survive throughout:

- `loadCaseStudies()` in `src/lib/mdx.ts` loads the four **service** pages in `src/app/work/*/page.mdx`.
- Each service MDX exports a `caseStudy` object whose `client` field holds a **service name** ("Integrations & Automation") and whose `logo` field holds a **service icon** from `src/images/services/`, not a client logo.
- `date` on a service is **ordering only**, never displayed. `loadEntries` sorts descending, so a later date sorts first. Renumber dates to reorder the services.
- `fit` and `timeline` were added to the `CaseStudy` type and render where the template showed Client/Year. `testimonial` was made optional and is currently unused everywhere.

If real case studies ever get added, they need a separate route rather than reusing `/work`.

### MDX pages get their layout injected by config, not by imports

`next.config.mjs` uses `unifiedConditional` + a custom `remarkMDXLayout` remark plugin to wrap MDX by file path, and to pass the page's named export into that wrapper as a prop:

- `src/app/blog/**/page.mdx` → wrapped by `src/app/blog/wrapper.tsx`, receives its `article` export as the `article` prop.
- `src/app/work/**/page.mdx` → wrapped by `src/app/work/wrapper.tsx`, receives its `caseStudy` export as the `caseStudy` prop.

So an MDX page never imports its own layout. Exporting an object with the right name (`article` or `caseStudy`) is what makes the page render. Getting the export name wrong fails in confusing ways. Components used inside MDX bodies (`TagList`, `Blockquote`, `StatList`) are globally available via `mdx-components.tsx` and need no import.

### `RootLayout` is per-page, not in `app/layout.tsx`

`src/app/layout.tsx` only renders `<html>`/`<body>` and the JSON-LD. Every page component imports and wraps itself in `RootLayout` instead. This is intentional: `RootLayout` keys its inner tree on `usePathname()` to drive the page transition animation, which only works if it remounts per route. New pages must import it themselves or they render without header, nav, and footer. (`not-found.tsx` deliberately skips it.)

### Forms are Netlify Forms, wired through a static decoy

`public/__forms.html` contains hidden static form definitions that Netlify's build bots scrape at deploy time. The real React forms (`src/components/ContactForm.tsx`, the newsletter form in `Footer.tsx`) POST url-encoded data to `/__forms.html` at runtime. Both halves must agree: adding a field to a real form means adding it to `__forms.html`, or the submission is silently dropped. Forms do nothing on localhost; they only work once deployed to Netlify with form detection enabled.

Contact email is `hello@pineflux.com` (Cloudflare Email Routing).

## Content rules

These are positioning constraints, not style preferences. Violating them damages the business.

**Never invent proof.** No fake clients, testimonials, logos, review counts, or statistics. The studio is new and has none. Credibility comes from Travis's real decade of experience (order management, ERP/API integrations, billing automation, ecommerce), described as capability rather than as invented client stories. The only stats on the site are honest ones: 10+ years, 1 person, 0 hand-offs.

**Never mention Travis's employer.** He has a full-time job and is building this on the side. His name and face are on the site; his employer is not, anywhere, ever.

**Never sound like he needs work.** No "available for hire", "currently seeking clients", or job-hunting language. The framing is a small studio that takes on a limited number of projects.

**Audience is small businesses and entrepreneurs, not enterprise.** Plain English, owner's-eye view of cost and time. Budget ranges are SMB-sized (under $5K through $50K).

## Writing the copy

Travis rejects AI-sounding prose. Beyond the global no-em-dash rule, watch for these specific tells that have already been cleaned out once and should not creep back:

- "quietly" as an intensifier ("quietly becomes expensive")
- negative parallelism: "it's not X, it's Y", "not just X but Y"
- stacked negation openers: "No account managers, no black box, no big reveal"
- clipped tailing negations: "no guessing", "no spam"
- aphoristic closers that sound like a lesson

Prefer plain, specific statements in a normal speaking voice. The `humanizer` skill is the reference.

## Commits

Plain messages describing what changed in the code, never the process or motivation behind it. Do not reference AI, AI-generated content, or AI cleanup in commit messages, PR bodies, or code comments. Conventional-commit prefixes (`chore:`, `feat:`, `fix:`) match the existing history.

## Deploying

See README.md for the deploy checklist. Netlify form detection must be enabled in site settings or every lead silently vanishes.
