# Arquitectura

Sitio estático: sin base de datos, sin autenticación y sin rutas API.

## Estructura
```
src/
  app/
    layout.jsx        fuentes, metadata global, Navbar y Footer
    page.jsx          CV (JSON-LD Person)
    cursos/page.jsx   galería de certificados
    not-found.jsx, error.jsx, loading.jsx
    sitemap.js, robots.js, manifest.js
    globals.css       reset, utilidades (.reveal, .fade-in, .no-print) y reglas de impresión
  components/         componentes con su .module.css
  lib/
    cv.js, cursos.js  contenido
    site.js           URL del sitio y helper de WhatsApp
  styles/variables.css  tokens de diseño
```

## Diseño
- Mobile-first con breakpoints 480, 768, 1024 y 1280px.
- Desde 1024px el CV pasa a dos columnas con una barra lateral fija (habilidades y datos).
- Impresión: A4 en dos columnas; Navbar, Footer y botones se ocultan (`.no-print`).
- Animaciones solo con CSS (`animation-timeline: view()`), desactivadas con `prefers-reduced-motion`.

## Seguridad
Headers en `next.config.mjs`: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy y Permissions-Policy.
