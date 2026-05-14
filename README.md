# KONEKTOPIA — Website

A static, multilingual marketing site for KONEKTOPIA (psychotherapy, couples therapy, premarital courses, relationship workshops). Pure HTML + CSS + vanilla JavaScript. No frameworks, no build step, no backend.

---

## File structure

```
konektopia-site/
├── index.html       Markup, SEO, schema.org
├── style.css        Design tokens, layout, components, responsive, motion
├── script.js        i18n (ES/EN/PL), mobile menu, smooth scroll, reveals, tabs
├── assets/          Placeholders for OG image, photos, etc.
└── README.md
```

## How to run locally

It is a fully static site. Pick one:

**Option A — Open in browser.**
Double-click `index.html`. Works for visual review.

**Option B — Tiny local server (recommended).**
This avoids CORS warnings and makes language URL params behave like in production.

```bash
# Python 3
cd konektopia-site
python3 -m http.server 8080
# then visit http://localhost:8080
```

```bash
# Node
npx serve konektopia-site
```

---

## Editing translations

All visible text lives in **one place**: the `TRANSLATIONS` object at the top of [`script.js`](script.js).

Structure:

```js
const TRANSLATIONS = {
  es: { /* Spanish — default */ },
  en: { /* English */ },
  pl: { /* Polish */ }
};
```

Text on the page is bound via `data-i18n="path.to.key"` attributes in `index.html`. The script walks the path on the current language and replaces `textContent`.

Examples:

| HTML attribute | Lives in `TRANSLATIONS.<lang>` |
|---|---|
| `data-i18n="hero.motto"` | `hero.motto` |
| `data-i18n="help.items.3"` | `help.items[3]` (array index) |
| `data-i18n="services.items.2.t"` | `services.items[2].t` |

**To change wording**, edit the matching value in all three language blocks (`es`, `en`, `pl`). Keep the keys identical across languages — that's how the structure stays in sync.

**Meta tags** (page title, description, Open Graph) are bound via `data-i18n-meta="…"` and live under `TRANSLATIONS.<lang>.meta`.

## Adding a new language

1. Add a new key in `TRANSLATIONS` (e.g. `fr: { ... }`) mirroring the same structure as `es`.
2. Add a new button in the language switcher (`index.html`, inside `.lang-switch`):
   ```html
   <button type="button" class="lang-btn" data-lang="fr" aria-pressed="false">FR</button>
   ```
3. Optionally add an `og:locale:alternate` and `<link rel="alternate" hreflang="fr">` tag in `<head>`.

The sliding indicator and switching logic adapt automatically.

---

## Editing services & prices

All seven service cards are in the **Services** section in `index.html` (`#services`). Each card has:

```html
<article class="service-card">
  <h3 data-i18n="services.items.0.t">...</h3>      ← title (in TRANSLATIONS)
  <p  data-i18n="services.items.0.d">...</p>       ← description (in TRANSLATIONS)
  <p class="service-price" data-price="indiv"
     data-i18n="services.priceTBA">Precio disponible bajo consulta</p>
  <a class="service-link" href="#contact"
     data-i18n="services.cta">Solicitar información</a>
</article>
```

**To add a real price**, the cleanest path:

1. Remove the `data-i18n="services.priceTBA"` attribute from the `<p class="service-price">` (otherwise the i18n loop will overwrite it).
2. Replace the inner text directly with the price, e.g. `<p class="service-price" data-price="indiv">75&nbsp;€ / sesión</p>`.

Or, keep i18n-friendly prices by adding per-service price keys inside `TRANSLATIONS.<lang>.services.prices.indiv` and changing the attribute to `data-i18n="services.prices.indiv"`.

The `data-price="…"` attribute is a stable hook you can use later for a backend or CMS sync.

---

## Phone number / WhatsApp / addresses

Update in three places in `index.html`:

1. **Header**: `tel:+34684003237` on `.phone-cta`
2. **Floating WhatsApp**: `https://wa.me/34684003237` on `.wa-float`
3. **Contact section**: `tel:` and `wa.me` links inside `.contact-list`, plus the two `<address>` blocks
4. **Footer**: contact column
5. **Schema.org** JSON-LD (inside `<head>`): `"telephone"` and the two `PostalAddress` blocks

If the number changes, search/replace `684003237` and `+34 684 00 32 37` site-wide.

---

## Connecting the contact form

The form in the Contact section is **visual only** — it does not send anything by default. To wire it up:

### Easiest: Formspree

1. Create a Formspree form, get your endpoint URL.
2. In `index.html`, change:
   ```html
   <form class="contact-form" id="contactForm" novalidate>
   ```
   to:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/XXXXXXXX" method="POST">
   ```
3. Remove or simplify the JS handler in `script.js → initContactForm()` — or let it stay for visual feedback and let the browser POST normally (drop the `e.preventDefault()`).

### Netlify Forms

If hosted on Netlify, add `netlify` and a hidden `form-name`:

```html
<form class="contact-form" id="contactForm" name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  ...
</form>
```

### Email (mailto)

For a no-backend stopgap:

```html
<form action="mailto:hola@konektopia.com" method="POST" enctype="text/plain">
```

(Note: opens the user's mail client — not recommended for real production use.)

---

## Reviews / testimonials

Currently three placeholder cards in the Reviews section. To add real ones (after written consent):

1. Replace the placeholder `<blockquote>` text in `index.html` directly, or move the strings into `TRANSLATIONS.<lang>.reviews.q1 / q2 / q3` and update there.
2. To add **more** review cards, duplicate the `<article class="review-card">` block and add new keys `reviews.q4`, `reviews.q5`, etc. across all three language objects.

> Do not invent testimonials. The site is configured with a confidential placeholder until real reviews are approved.

---

## Legal pages

`#privacy`, `#legal`, `#cookies` anchors in the footer are placeholders. Before launch:

- Have a lawyer (or an LSSI / GDPR-aware service) draft the three policies.
- Either turn them into separate pages (`privacy.html`, `legal.html`, `cookies.html`) and update the footer hrefs, or replace the anchors with full sections in `index.html`.

A small reminder note appears in the footer (`footer.legalNote`) — remove it once content is finalised.

---

## SEO checklist before launch

- [ ] Replace `https://konektopia.com/assets/og-image.jpg` (in `<head>` and schema) with a real OG image (1200×630).
- [ ] Add a real favicon (replace the inline SVG `K` mark).
- [ ] Verify the JSON-LD via Google Rich Results Test.
- [ ] Submit `sitemap.xml` and `robots.txt` once hosted.
- [ ] Add Google Search Console + Google Business Profile (Barcelona).
- [ ] Configure analytics (e.g. Plausible, Fathom, or GA4 with consent banner).

---

## Design notes

- **Type system**: Fraunces (serif, editorial) for headings + Inter for body.
- **Palette**: warm cream `#FAF7F2`, terracotta `#C97B5F`, sage `#6E8B7A`, ink `#2A2724`.
- **Layout**: 1180px max-width, 24/32px card radii, generous vertical rhythm (`section` padding 96px desktop, 64px mobile).
- **Motion**: 150–300ms easings; scroll-reveal via IntersectionObserver; respects `prefers-reduced-motion`.
- **Accessibility**: skip link, ARIA labels on icon-only buttons, keyboard-friendly focus rings, semantic landmarks, language attribute updates on switch.
- **Performance**: no JS frameworks, no images bundled (decorative gradients only), fonts loaded with `display=swap`.

---

## Mental-health content guidelines (already applied)

- No guarantees of outcomes.
- No fake reviews.
- Crisis disclaimer included in the Contact section (refers users to 112 in Spain).
- Therapist name (Sonia Foder) mentioned subtly in the About section and structured data, not throughout the site.

If you change copy, please keep these principles intact.
