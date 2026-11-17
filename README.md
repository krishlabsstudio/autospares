# SS Auto Spares – Futuristic Website

Pure HTML5 + CSS3 + vanilla JavaScript. No build step, no dependencies, no backend.

## Run locally
- Quickest: double-click `index.html`.
- Or serve the folder: `python3 -m http.server 8000` then open http://localhost:8000

## Edit your business information
Everything lives in **`js/business-data.js`**: contact details, about text, categories, products, brands, gallery, verified stats.
- Items showing an **EDIT** badge are placeholders. Replace them and remove `placeholder: true`.
- Add product photos to `assets/products/` and set `image: "assets/products/file.jpg"`. Same for the gallery.
- Empty `brands`, `products`, `gallery` or `stats` arrays hide that section automatically.
- Add only verified facts (no invented prices, specs or statistics).
- Enquiry form: sends via your email (mailto) or WhatsApp number once set in `contact`.

## Notes
- Built from the live site's only genuine content (its meta description). The live site is an unedited electrician template, so its address, phone numbers and emails were NOT reused.
- Animations use native browser APIs (IntersectionObserver, requestAnimationFrame, canvas) instead of GSAP/Lenis, so the site works offline and stays light. `prefers-reduced-motion` is respected.
- Fonts (Barlow Condensed, Hanken Grotesk) load from Google Fonts with system fallbacks.
- Deploy by uploading the folder contents to any static host.
