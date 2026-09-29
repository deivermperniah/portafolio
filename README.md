# Deiver OS — Portafolio de Deiver Pernia

Portafolio con forma de escritorio Linux (estilo Fedora/GNOME) en el navegador, hecho con [Astro](https://astro.build) sin frameworks de UI.

- **Escritorio**: iconos y dock que abren ventanas (Sobre mí, CV, Experiencia, Proyectos, Stack, Educación, Contacto y Terminal). Se pueden arrastrar, minimizar, maximizar y cerrar; `Esc` cierra la ventana activa.
- **Actividades**: vista general con buscador de apps.
- **Móvil**: pantalla de inicio tipo teléfono con apps a pantalla completa.
- **Terminal**: `help`, `neofetch`, `open <app>`, `sudo hire-me`…
- **Deep links**: `/#projects`, `/#cv`, `/#contact`, etc. abren esa ventana directamente.

## Editar contenido

Todo el contenido está en [`src/data/profile.ts`](src/data/profile.ts) (perfil, experiencia, proyectos, stack, educación, contacto). Lo usan tanto las ventanas como la terminal.

Recursos opcionales en `public/` (se muestran automáticamente si existen):

| Archivo | Uso |
| --- | --- |
| `cv-deiver-pernia.pdf` | Botón "Descargar CV" |
| `foto.webp` | Foto en "Sobre mí" |
| `projects/<slug>.webp` | Captura del proyecto (ruta en `image` de cada proyecto) |
| `og.png` (1200×630) | Vista previa al compartir el link (requiere `site` en `astro.config.mjs`) |

## Estructura

```text
src/
├── components/
│   ├── os/        # Escritorio: TopBar, Dock, Window, Overview, BootScreen…
│   ├── apps/      # Contenido de cada ventana
│   └── Terminal.astro
├── data/profile.ts
├── scripts/window-manager.ts
└── styles/        # os.css (escritorio) y terminal.css
```

## Comandos

| Comando | Acción |
| :-- | :-- |
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Genera el sitio en `./dist/` |
| `npm run preview` | Previsualiza el build |
