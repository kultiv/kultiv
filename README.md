# KULTIV — Shopify Dawn Theme

> *Tend the ground. Live longer in it.*

Custom Shopify theme built on Dawn, configured for the KULTIV complete longevity nutrition brand.

---

## Setup: GitHub → Shopify

### 1. Connect GitHub to Shopify

1. In your Shopify admin, go to **Online Store → Themes**
2. Click **Add theme → Connect from GitHub**
3. Authorize Shopify to access your GitHub account
4. Select this repository and the `main` branch
5. Click **Connect**

### 2. Install Dawn as the base

This theme customizes Dawn. You need Dawn installed first:

```bash
# Using Shopify CLI
shopify theme init --clone-url https://github.com/Shopify/dawn

# Then copy all KULTIV files into the dawn directory
cp -r kultiv-theme/* dawn/
```

Or manually: download Dawn from [github.com/Shopify/dawn](https://github.com/Shopify/dawn), then copy all files from this repo into it (they will override Dawn defaults).

### 3. Deploy

Push to `main` and Shopify will auto-sync:

```bash
git add .
git commit -m "feat: KULTIV theme customizations"
git push origin main
```

---

## File Structure

```
/assets
  kultiv-custom.css        ← All brand styles, fonts, color system
  kultiv-animations.js     ← Scroll reveals, micro-interactions

/config
  settings_data.json       ← Dawn theme settings (colors, typography)

/sections
  kultiv-hero.liquid            ← Full-screen homepage hero
  kultiv-science-bar.liquid     ← Science credential strip
  kultiv-product-spotlight.liquid ← Hero SKU feature section
  kultiv-how-it-works.liquid    ← 3-step subscription explainer
  kultiv-testimonials.liquid    ← Social proof carousel
  kultiv-about-strip.liquid     ← Brand story callout
  kultiv-ingredients.liquid     ← Ingredient/science deep dive

/snippets
  kultiv-product-card.liquid    ← Custom product card component

/templates
  index.json             ← Homepage section order
  product.kultiv.json    ← Product page template
  page.about.json        ← About page template
  page.science.json      ← Science page template
```

---

## Brand Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--k-earth` | `#1E1A0E` | Page background |
| `--k-surface` | `#2C2614` | Card/section backgrounds |
| `--k-forest` | `#1F3D2A` | Accent sections, buttons |
| `--k-gold` | `#C8A96E` | Highlights, borders, accents |
| `--k-cream` | `#F0E8D8` | Primary text |
| `--k-muted` | `#9A917E` | Secondary text |
| `--k-white` | `#FAF7F2` | High-contrast text |

---

## Fonts

- **Display**: Cormorant Garamond (loaded via Google Fonts)
- **Body**: Jost (loaded via Google Fonts)

Both are loaded in `layout/theme.liquid` — ensure that file includes the `<link>` tag in `<head>`.

---

## Pages to Create in Shopify Admin

| Handle | Template |
|--------|----------|
| `/` | `index` (homepage) |
| `/products/kultiv-daily` | `product.kultiv` |
| `/pages/about` | `page.about` |
| `/pages/science` | `page.science` |
| `/pages/how-it-works` | `page` (standard) |

---

## Key Shopify Settings

- **Currency**: GBP (£) primary, EUR secondary
- **Subscription app**: ReCharge or Seal Subscriptions (required for Y1 model)
- **Analytics**: GA4 + Meta Pixel via Shopify integrations
- **Reviews**: Judge.me (free tier sufficient for Y1)
