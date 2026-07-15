# Pineflux

The website for [Pineflux](https://pineflux.com), the software studio of Travis Hayes: business applications, systems integrations, ecommerce, and websites for small businesses and entrepreneurs.

Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and MDX, based on the Tailwind Plus "Studio" template (commercial license).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

- **Service pages** live in `src/app/work/*/page.mdx`. Each exports a `caseStudy` object (title, description, summary, service, fit, timeline) plus MDX body content.
- **Blog posts** live in `src/app/blog/*/page.mdx`. Each exports an `article` object with date, title, description, and author.
- **Shared copy** (contact CTA, footer, location) lives in `src/components`.

## Forms (Netlify)

The contact and newsletter forms POST to `/__forms.html`, a hidden static file that lets Netlify's build bots detect the forms. This only works when the site is deployed on Netlify with form detection enabled (Site settings → Forms). Submissions appear in the Netlify dashboard; configure email notifications there.

## Deploy checklist

- [ ] Deploy to Netlify, enable form detection, add a form notification to your email
- [ ] Confirm `hello@pineflux.com` routes to your inbox (Cloudflare Email Routing)
- [ ] Submit `https://pineflux.com/sitemap.xml` in Google Search Console
- [ ] Create a Google Business Profile (helps local "software developer Seattle" searches)
