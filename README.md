# Deiver OS — Portafolio de Deiver Pernia

Portafolio con forma de escritorio Linux (estilo Fedora/GNOME) en el navegador, hecho con [Astro](https://astro.build) sin frameworks de UI.

## Stack

- Astro 7 con salida estática.
- Componentes `.astro` y TypeScript del lado del cliente.
- CSS propio (sin framework de estilos).

## Estructura

```text
src/
├── pages/index.astro       # Única ruta; monta el escritorio
├── layouts/BaseLayout.astro
├── components/
│   ├── os/                 # Escritorio: TopBar, Dock, Window, Overview…
│   ├── apps/               # Contenido de cada ventana
│   └── Terminal.astro
├── data/
│   ├── profile.ts          # Todo el contenido editable
│   └── assets.ts           # Detección de archivos opcionales en public/
├── scripts/window-manager.ts
└── styles/                 # os.css y terminal.css
```

## Editar contenido

Todo el contenido está en `src/data/profile.ts` y lo usan las ventanas y la terminal. Los recursos opcionales de `public/` (`cv-deiver-pernia.pdf`, `foto.webp`, `projects/<slug>.webp`, `og.png`) se muestran solo si existen.

## Comandos

| Comando | Acción |
| :-- | :-- |
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Genera el sitio en `./dist/` |
| `npm run preview` | Previsualiza el build |
