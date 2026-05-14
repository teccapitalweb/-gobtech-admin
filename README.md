# GobTech MX — Landing comercial

Sitio comercial estático para vender la plataforma GobTech MX a presidencias municipales.

## Stack
- HTML / CSS / JS vanilla
- Fuentes Google Fonts (Fraunces + Geist)
- Sin dependencias de build · listo para GitHub Pages

## Estructura

```
gobtech-landing/
├── index.html       ← Hero + propuesta de valor + módulos preview + planes + CTA
├── modulos.html     ← 12 módulos detallados
├── planes.html      ← 3 planes + tabla comparativa + FAQ
├── contacto.html    ← Formulario de demo
└── assets/
    ├── css/styles.css
    └── js/main.js
```

## Cómo desplegar

### Opción A — GitHub Pages
1. Crear repo `teccapitalweb/gobtech-landing`
2. Subir contenido de esta carpeta a la raíz
3. Settings → Pages → Source: `main` / `/` (root)
4. URL pública: `https://teccapitalweb.github.io/gobtech-landing/`

### Opción B — Dominio propio
Subir los archivos a cualquier hosting estático (Vercel, Netlify, Cloudflare Pages, hosting tradicional).

## Personalización rápida

- **Nombre/marca**: buscar y reemplazar `GobTech MX` por la marca final
- **Contacto**: actualizar `ipcilinstituto@ipcil.org` y `5212361074058` en footers y WhatsApp flotante
- **Logo**: la marca actual usa una letra "G" en gradiente. Para logo real, reemplazar `<span class="brand__mark">G</span>` por `<img src="...">`
- **Colores**: editar variables CSS en `assets/css/styles.css` (líneas 1-30)

## Notas
- El formulario de contacto está en modo mock — usa setTimeout para simular envío. Para producción conectarlo a EmailJS, Formspree o un endpoint propio.
- Los enlaces a "Demo panel" apuntan a `../gobtech-admin/index.html` (debe quedar como carpeta hermana al desplegar, o ajustar las rutas).

---
TEC CAPITAL Group · Tehuacán, Puebla · 2026
