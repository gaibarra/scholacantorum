# Fotos (estáticas) — Schola Cantorum de México

Coloca aquí fotos que NO necesiten optimización de Astro.
Para fotos que sí quieras optimizar, usa `src/assets/images/galeria/`.

## Cuándo usar esta carpeta vs src/assets/images/galeria/

| Carpeta | Cuándo usar |
|---|---|
| `src/assets/images/galeria/` | Fotos del sitio web (Astro las optimiza automáticamente) |
| `public/media/fotos/` | Fotos para descarga directa, o que ya están optimizadas |

## Cómo referenciar

```html
<img src="/media/fotos/nombre-foto.jpg" alt="Descripción" />
```
