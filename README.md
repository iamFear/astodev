# Astodev — sitio web

Sitio construido con [Astro](https://astro.build), listo para desplegar en Netlify.

## Estructura

```
src/
  layouts/Layout.astro       ← head, fuentes, nav + footer
  components/                ← Nav, Footer, tarjetas, señal de flujo animada, CTA
  pages/
    index.astro               Inicio
    servicios.astro           Servicios (web, software, automatización, e-commerce, integraciones, consultoría)
    precios.astro             Precios por línea de servicio + servicios recurrentes
    nosotros.astro            Misión, visión, diferenciadores, escalera comercial
    contacto.astro            Formulario (Netlify Forms, sin backend)
    gracias.astro             Página de confirmación tras enviar el formulario
    404.astro
public/
  favicon.svg
```

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build       # genera /dist
npm run preview     # previsualiza el build de producción
```

## Desplegar en Netlify

**Opción A — conectar el repositorio (recomendado):**
1. Sube este proyecto a GitHub/GitLab.
2. En Netlify: *Add new site → Import an existing project*.
3. Build command: `npm run build` · Publish directory: `dist` (ya configurado en `netlify.toml`).
4. Deploy.

**Opción B — arrastrar y soltar:**
1. Corre `npm run build` localmente.
2. Arrastra la carpeta `dist/` a [app.netlify.com/drop](https://app.netlify.com/drop).

## El formulario de contacto

`src/pages/contacto.astro` usa **Netlify Forms** (`data-netlify="true"`), así que no necesita backend ni API key: Netlify detecta el formulario en el build y las respuestas llegan al panel *Forms* de tu sitio en Netlify. Incluye un campo honeypot (`bot-field`) para filtrar spam.

Para recibir notificaciones por email de cada envío: en Netlify ve a *Site settings → Forms → Form notifications → Add notification → Email notification*.

## Personalización rápida

- **Colores / tipografía:** `src/styles/global.css` (sección `:root`).
- **WhatsApp y email:** buscar `wa.me/573000000000` y `hola@astodev.co` en `Nav.astro`, `Footer.astro` y `contacto.astro`, y reemplazar por los datos reales.
- **Dominio:** cambiar `site` en `astro.config.mjs`.
