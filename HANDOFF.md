# The Model Body Club — Website Handoff

A complete, static, deploy-anywhere marketing site for **The Model Body Club by @KassyAlicee**.
No build step, no framework. Plain HTML + CSS + a little vanilla JS. Open any `.html` file
and it works.

---

## 1. What's in the box

```
site/
├── index.html            Homepage (hero, 3 offers, free-plan band, about, reviews, CTA)
├── club.html             The Club sales page  → Gumroad membership
├── coaching.html         1:1 coaching page    → Google Form application
├── guides.html           Lean Season shop     → Gumroad one-off products + bundle
├── free-meal-plan.html   Free plan landing    → email capture (Brevo)
├── site.css              All shared component styles
├── colors_and_type.css   Brand design tokens (colors, type, spacing) — do not rewrite
├── partials.js           Injects the shared header + footer into every page
└── assets/               Photos, logo, cherry mark, meal images
```

Header & footer live in **`partials.js`** only. Edit nav links, login URL, socials and
footer copy there once and every page updates.

---

## 2. The ONLY thing left to do: wire up 5 integrations

Everything is built and styled. Each live service is a clearly-labelled placeholder.
Search the codebase for **`data-integration=`** and **`INTEGRATION:`** comments to find every spot.

| # | What | Where | Placeholder to replace |
|---|------|-------|------------------------|
| 1 | **Club membership** (Gumroad, recurring) | `club.html` ×3, `index.html` ×1 | `https://kassyalicee.gumroad.com/l/modelbodyclub` |
| 2 | **Guides + bundle** (Gumroad, one-off) | `guides.html` ×5 | `.../l/lean-season-gym`, `-home`, `-meal`, `-complete`, `-bundle` |
| 3 | **Coaching application** (Google Form) | `coaching.html` ×2 | `https://forms.gle/YOUR_FORM_ID` |
| 4 | **Free meal plan** (Brevo email capture) | `free-meal-plan.html` ×1 | the `<form data-mock-success>` block |
| 5 | **Member login** (Gumroad library) | `partials.js` ×2 | `https://customers.gumroad.com/` |

### 1 & 2 — Gumroad (easiest)
Create each product in Gumroad (set the Club one to a **monthly membership**). Copy each
product's share URL and paste it over the matching placeholder `href`. Confirm the prices
in the page match Gumroad ($10/mo Club; $19 guides; $29 complete; $59 bundle). Optionally
add Gumroad's overlay script for in-page checkout, but a plain link works fine.

### 3 — Coaching Google Form
Build the application form in Google Forms, hit **Send → link**, copy the `forms.gle/...`
URL, paste over `YOUR_FORM_ID` in both spots in `coaching.html`.

### 4 — Brevo email capture
In Brevo: create a list + a double-opt-in form. Either (a) paste Brevo's embed code in
place of the `<form>` in `free-meal-plan.html`, or (b) keep the existing markup and set
`action="https://<subdomain>.sibforms.com/serve/<form-id>"` with `method="POST"` — the
email field is already named `EMAIL` (Brevo's default). Then remove the `data-mock-success`
attribute so it submits for real. Set the automation to email the meal-plan PDF on signup.
> The current form just flips to a "Check your inbox" success state (demo). That handler
> lives at the bottom of `partials.js`.

### 5 — Login
If Kassy sells via Gumroad, `https://customers.gumroad.com/` is the member library — already
set. Change in `partials.js` if she uses a different members area (e.g. Everfit).

---

## 3. Deploy

It's a static folder. Any of these work with zero config:
- **Netlify / Vercel / Cloudflare Pages** — drag-drop the `site/` folder, or connect a repo.
- **GitHub Pages** — push `site/` contents to a repo, enable Pages.
- Point the domain (themodelbody.com) at the host. Done.

Set `index.html` as the entry. No server, database or env vars needed.

---

## 4. Content still to swap before launch

- **Reviews** on `index.html` are honest placeholder quotes labelled "Member placeholder".
  Replace with real testimonials (and remove the grey "Placeholder testimonials" note).
- **Photos** are from the supplied library. Swap any you'd prefer in `assets/` (keep the
  same filenames to avoid editing HTML). Recommended fresh, clean, healthy/Instagram-style.
- **Prices** — confirm every price (Club, guides, coaching) matches what's set up in Gumroad.
- **Social + email** links live in `partials.js` (Instagram, TikTok, `hello@themodelbody.com`).
- **Terms / Privacy** footer links are `#` stubs — add pages or link to existing policies.

---

## 5. Copy-paste prompt for a developer / Claude Code

> This is a static HTML/CSS/JS marketing site (no framework, no build) for "The Model Body
> Club". Please wire up the live integrations without changing the design. Find every
> `data-integration=` attribute and `INTEGRATION:` comment and replace the placeholder with
> the real service:
> 1. Gumroad: Club membership (`data-integration="gumroad-club"`) and the five guide/bundle
>    products in `guides.html` — paste each product's Gumroad URL over the placeholder href.
> 2. Coaching: replace `https://forms.gle/YOUR_FORM_ID` in `coaching.html` with the real
>    Google Form link.
> 3. Brevo: in `free-meal-plan.html`, wire the `<form>` to the Brevo list/form endpoint
>    (or paste Brevo's embed), then remove `data-mock-success` so it submits for real.
> 4. Login: confirm/replace the Gumroad library URL in `partials.js`.
> 5. Then deploy the `site/` folder to Netlify (or our host) and point themodelbody.com at it.
> Do not restyle anything; only swap URLs/endpoints and verify each link works. Keep the
> brand rule: no em dashes in copy.

---

🍒 Built on the existing Model Body design tokens (`colors_and_type.css`). Brand voice:
warm, confident, "train with intention, eat without restriction."
