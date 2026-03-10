# Videos — Schola Cantorum de México

Coloca aquí los archivos de video MP4 para la galería.
Estos se sirven directamente sin procesamiento.

## Nombres sugeridos

- `video-oficial-scm.mp4`
- `concierto-bellas-artes.mp4`
- `gira-europa-2025.mp4`
- `fundacion-sebastian.mp4`
- `audiciones-que-esperar.mp4`
- `ensayo-coro-infantil.mp4`

## Formato recomendado

- **Formato**: MP4 (H.264) — máxima compatibilidad
- **Resolución**: 720p o 1080p
- **Tamaño máximo**: 100 MB por video (para carga rápida)

## Cómo referenciar en el código

```html
<video src="/media/videos/video-oficial-scm.mp4" controls></video>
```

## Para videos de YouTube

Si prefieres no subir videos pesados, simplemente usa el embed de YouTube
actualizando los `embedUrl` en `src/pages/galeria.astro`:

```
embedUrl: 'https://www.youtube.com/embed/TU_VIDEO_ID'
```
