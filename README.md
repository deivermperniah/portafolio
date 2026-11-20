# portafolio

Portafolio personal de una sola página, con estética neón/ciberpunk, modo claro y oscuro, y versión en español e inglés.

🔗 Demo: https://deivermperniah.vercel.app/

## Qué se puede hacer

- **Recorrer las secciones**: sobre mí, experiencia, proyectos, stack, educación, CV y contacto.
- **Cambiar de tema** (claro/oscuro) y de **idioma** (`/` en español, `/en/` en inglés).
- **Contactar** copiando el correo o con el formulario (enviado con FormSubmit).
- **Editar todo el contenido** desde un solo archivo (`src/data/profile.ts`).

## Stack

- Astro 7 con salida estática.
- Componentes `.astro` y TypeScript del lado del cliente.
- CSS propio (sin framework de estilos).

## Estructura

```text
src/
├── pages/
│   ├── index.astro         # Español
│   └── en/index.astro      # Inglés
├── layouts/BaseLayout.astro
├── components/             # Una sección por componente + Nav, Footer, Background
├── data/
│   ├── profile.ts          # Todo el contenido editable (es/en)
│   └── assets.ts           # Detección de archivos opcionales en public/
├── scripts/site.ts         # Tema, menú, copiar correo, formulario
└── styles/site.css
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
