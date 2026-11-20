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
- Estilos en CSS propio (`src/styles/site.css`).
- Gestor de paquetes: npm.

## Estructura

- `src/pages/index.astro` (español) y `src/pages/en/index.astro` (inglés): montan `Portfolio.astro` con su idioma.
- `src/layouts/BaseLayout.astro`: layout base (head, metadatos, tema inicial).
- `src/components/`: una sección por componente (Hero, About, Experience, Projects, Stack, Education, CvCta, Contact), más Nav, Footer, Background (efectos de fondo), SectionHeader e Icon.
- `src/data/profile.ts`: todo el contenido editable en español e inglés, y los textos de la interfaz (`ui`).
- `src/data/assets.ts`: detección en build de archivos opcionales en `public/` e iconos del stack.
- `src/scripts/site.ts`: tema claro/oscuro, menú móvil, efecto de escritura, copiar correo y formulario de contacto.
- `src/styles/site.css`: estilos y tokens de color de ambos temas.

## Convenciones

- Todo el contenido va en `src/data/profile.ts`. Los textos traducibles son `{ es, en }` y se leen con `tr(valor, lang)`. No duplicar datos.
- Los recursos opcionales de `public/` se detectan con `hasPublicFile` (`src/data/assets.ts`) y se muestran solo si existen.
- Página única con anclas por sección (`#sobre-mi`, `#experiencia`, `#proyectos`, `#stack`, `#educacion`, `#cv`, `#contacto`), iguales en ambos idiomas.
- El formulario de contacto envía con FormSubmit (`formsubmit.co`); no hay backend propio.
- Mantener el diseño responsivo (escritorio y móvil) y los efectos desactivados con `prefers-reduced-motion`.
- Textos de la interfaz en español e inglés; código (nombres, variables, slugs) en inglés.

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
