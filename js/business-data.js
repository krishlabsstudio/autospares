/* ==========================================================
   SS AUTO SPARES – CENTRAL BUSINESS DATA  (edit this file only)
   • Items with placeholder:true show a visible "EDIT" badge. Replace them with
     real data and delete the placeholder flag.
   • Empty arrays hide their section/menu link automatically.
   • Text marked VERIFIED was taken from the live site's meta description.
   ========================================================== */
window.BUSINESS = {
  name: "SS Auto Spares",
  // VERIFIED (live site meta description): OEM + aftermarket parts, expert support, competitive prices, fast delivery
  tagline: "Genuine automotive parts, delivered fast.",
  intro: "Quality OEM and aftermarket spare parts, expert support, competitive prices and fast delivery.",
  about: [
    "SS Auto Spares supplies genuine OEM and aftermarket automotive spare parts.",
    "EDIT: add your company story here (year started, location, who you serve)."
  ],
  aboutIsPlaceholder: true,
  // VERIFIED claims from the live site. Add more only if true.
  strengths: [
    { title: "OEM & aftermarket", text: "Genuine OEM and aftermarket spare parts." },
    { title: "Expert support", text: "Talk to people who know parts." },
    { title: "Competitive prices", text: "Fair pricing on quality parts." },
    { title: "Fast delivery", text: "Parts shipped without delay." }
  ],
  /* CONTACT – the live site only shows template numbers, so these are blank. */
  contact: {
    phone: "",        // e.g. "+91 90000 00000"
    whatsapp: "",     // digits only with country code, e.g. "919000000000"
    email: "",        // e.g. "sales@example.com"
    address: "",
    hours: "",
    mapUrl: ""
  },
  social: { /* facebook:"", instagram:"" */ },
  categories: [
    { name: "[EDIT] Category one", desc: "Describe this category.", placeholder: true },
    { name: "[EDIT] Category two", desc: "Describe this category.", placeholder: true },
    { name: "[EDIT] Category three", desc: "Describe this category.", placeholder: true },
    { name: "[EDIT] Category four", desc: "Describe this category.", placeholder: true }
  ],
  /* image: "assets/products/name.jpg" (optional). specs: ["Fits: ...", "Part no: ..."] – only verified specs. */
  products: [
    { name: "[EDIT] Product name", category: "[EDIT] Category one", image: "", specs: ["EDIT: verified spec"], placeholder: true },
    { name: "[EDIT] Product name", category: "[EDIT] Category two", image: "", specs: ["EDIT: verified spec"], placeholder: true },
    { name: "[EDIT] Product name", category: "[EDIT] Category three", image: "", specs: ["EDIT: verified spec"], placeholder: true }
  ],
  brands: [
    { name: "[EDIT] Brand", placeholder: true }, { name: "[EDIT] Brand", placeholder: true },
    { name: "[EDIT] Brand", placeholder: true }, { name: "[EDIT] Brand", placeholder: true }
  ],
  stats: [ /* only verified numbers: { value: 20, suffix: "+", label: "Years in business" } */ ],
  gallery: [
    { src: "", alt: "Business photo", placeholder: true }, { src: "", alt: "Business photo", placeholder: true },
    { src: "", alt: "Business photo", placeholder: true }, { src: "", alt: "Business photo", placeholder: true }
  ]
};
