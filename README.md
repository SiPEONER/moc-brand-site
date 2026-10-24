# MOC Brand Guidelines: Site

A minimal Next.js app that serves the MOC Products Brand & Style Guide (`MOC-BSM-001`) at a
standalone URL, with a downloads page for the approved logo lockups (SVG / PNG / PDF).

- `/`: the Brand Guidelines (`components/MOCBrandGuidelines.jsx`)
- `/downloads`: logo assets + typography links

The site is set to **not be indexed by search engines** (`robots: noindex` in `app/layout.js`),
since this is meant to be reached only by a direct link, not discovered publicly. Remove that if
you later want it indexed.

## Deploy

One process for every MOC site: push to `main` on GitHub (`SiPEONER/moc-brand-site`) and Vercel
deploys it automatically (project `moc-brand-site`, team `bnd-fish`). No CLI or upload deploys.

```bash
git add .
git commit -m "Describe the change"
git push origin main
```

Commit as `SiPEONER <SiPEONER@users.noreply.github.com>` so Vercel matches the author to the team.

### Custom domain / subdomain

Once deployed, add a subdomain (e.g. `brand.mocproducts.com`) under the Vercel project's
**Settings → Domains**; no need to touch your main site's DNS beyond adding one CNAME record.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Updating the guide

To ship a new revision of the guide itself, replace `components/MOCBrandGuidelines.jsx` with the
latest version from the project, commit, and push; the rest of the site
doesn't need to change.

## Fonts

- **Proxima Nova** is licensed to MOC creatives only and is intentionally **not** included in this
  repo or served from `/downloads`; see Section 03 of the guide.
- **Montserrat** is the approved substitute for partners/vendors without a Proxima Nova license.
  It's linked to Google Fonts on `/downloads` rather than hosted here, since it's free at the
  source.

## Logo assets

`public/assets/logo/` contains the four approved lockups from Section 01, each in SVG, PNG
(transparent, 2048px), and PDF (vector):

- `moc-linear-*`: the linear mark (black ink transparent / white ink transparent)
- `moc-box-*`: the box logo (primary black field / knockout white field)

The restricted curve device (Section 01, item 1E) is intentionally not included; it requires
design-team approval per the guide.
