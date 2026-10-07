## Reglas de comportamiento (obligatorias)

- Haz SOLO el cambio mínimo necesario para resolver lo que se pide. Nada de "mientras estaba aquí, también...".
- No generes código, componentes, archivos ni carpetas que no se hayan pedido, salvo que sean indispensables para el cambio.
- No refactorices, reorganices ni "mejores" código que no forme parte de la tarea.
- No modifiques estilos, layout ni estructura visual si no se pidió.
- No agregues comentarios ni documentación dentro del código salvo que se pida.
- Si hay dudas sobre el alcance, pregunta antes de tocar código adicional.
- No repitas código: antes de crear algo, busca si ya existe en `src/components/` y reutilízalo.
- Nada de lógica compleja: prefiere la solución más simple que funcione.

## Stack

- Astro 7 con salida estática (sin adapter ni SSR).
- Sin frameworks de UI: solo componentes `.astro` y JavaScript/TypeScript del lado del cliente.
- Estilos en CSS propio (`src/styles/os.css` y `src/styles/terminal.css`).
- Gestor de paquetes: npm.

## Estructura

- `src/pages/index.astro`: única ruta; monta el escritorio.
- `src/layouts/BaseLayout.astro`: layout base (head, metadatos).
- `src/components/os/`: escritorio (TopBar, Dock, Window, Overview, BootScreen, AppIcon, ContextMenu, Notification, Icon).
- `src/components/apps/`: contenido de cada ventana (About, Cv, Experience, Projects, Stack, Education, Contact).
- `src/components/Terminal.astro` y `CommandInput.astro`: terminal interactiva.
- `src/data/profile.ts`: todo el contenido editable (perfil, experiencia, proyectos, stack, educación, contacto).
- `src/data/assets.ts`: detección en build de archivos opcionales en `public/`.
- `src/scripts/window-manager.ts`: gestión de ventanas (abrir, arrastrar, minimizar, maximizar, cerrar).
- `src/styles/`: `os.css` (escritorio) y `terminal.css`.

## Convenciones

- Todo el contenido va en `src/data/profile.ts`; lo usan tanto las ventanas como la terminal. No duplicar datos.
- Los recursos opcionales de `public/` se detectan con `hasPublicFile` (`src/data/assets.ts`) y se muestran solo si existen.
- La navegación es por deep links (`/#projects`, `/#cv`, `/#contact`, etc.) que abren la ventana correspondiente; no hay router.
- Mantener el comportamiento responsivo: escritorio en pantallas grandes y pantalla de inicio tipo teléfono en móvil.
- Textos de la interfaz en español; código (nombres, variables, slugs) en inglés.

## Fuera de alcance por ahora

No agregar frameworks de UI, linters, tests, SSR ni nuevas dependencias salvo que se pida explícitamente.

## Verificación

- Antes de cada commit: `npm run build` sin errores.
- Si el cambio es visual o interactivo, comprobarlo en el navegador (escritorio y móvil).

## Git y commits

- Commits pequeños, uno por cambio, solo cuando el usuario lo pida.
- Nunca hacer push, crear ramas ni reescribir el historial sin que se pida.
- Formato: `<tipo>: <descripción breve en inglés, minúsculas, imperativo>`.
- Tipos permitidos: feat, fix, style, refactor, chore, docs.
- Máximo ~60 caracteres, sin punto final.

## Development

Iniciar el servidor de desarrollo:

```
npm run dev
```

Servidor local en `http://localhost:4321`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding styles](https://docs.astro.build/en/guides/styling/)
- [Using client-side scripts](https://docs.astro.build/en/guides/client-side-scripts/)
- [Adding images and assets](https://docs.astro.build/en/guides/images/)
