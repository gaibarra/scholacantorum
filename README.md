# Schola Cantorum de México — Sitio Oficial

Sitio web en Astro con SSR, islands de React para interactividad, Tailwind CSS, PWA y PostgreSQL para inscripciones y agenda de conciertos.

## Requisitos

- Node.js 20+
- npm
- PostgreSQL 14+

## Configuración rápida

```bash
npm install
npm run dev
```

## Variables de entorno

Crea un archivo `.env` en la raíz:

```bash
DATABASE_URL=postgres://user:password@host:5432/scholacantorum
PUBLIC_GTM_ID=GTM-XXXXXXX
```

## PostgreSQL (tablas sugeridas)

Ejecuta `scripts/postgres.sql` para crear las tablas `eventos` e `inscripciones`.

## Estructura

- `src/pages/` rutas principales: `/`, `/conciertos`, `/inscripciones`, `/multimedia`
- `src/islands/` React islands (formularios, timeline, lightbox, calendario, toggle)
- `src/components/` componentes Astro

## Deploy en VPS Ubuntu + nginx

1) Build SSR con Node adapter:

```bash
npm run build
```

2) Iniciar el servidor Node (ejemplo con PM2):

```bash
npx pm2 start ./dist/server/entry.mjs --name scholacantorum
```

3) Configura nginx con el archivo en `scripts/nginx.conf`.

## Notas

- Astro 5 usa `astro:assets` para optimización de imágenes. El paquete `@astrojs/image` fue reemplazado por la solución nativa.
- La internacionalización se configuró con `i18n` nativo de Astro para compatibilidad con Astro 5.
- Tailwind v4 se integra con `@tailwindcss/vite` (recomendado para Astro 5).
- PWA configurada en `astro.config.mjs` con manifest e íconos placeholder en `public/icons`.

## Comandos útiles

```bash
npm run dev
npm run build
npm run preview
```
# scholacantorum
