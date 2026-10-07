# portafolio

Portafolio personal con forma de escritorio Linux (estilo Fedora/GNOME) en el navegador: ventanas arrastrables, dock, terminal y vista móvil.

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

## Puesta en marcha

1. Instala dependencias:

   ```sh
   npm install
   ```

2. Inicia el servidor de desarrollo en `http://localhost:4321`:

   ```sh
   npm run dev
   ```

## Comandos

| Comando | Acción |
| :-- | :-- |
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Genera el sitio en `./dist/` |
| `npm run preview` | Previsualiza el build |
