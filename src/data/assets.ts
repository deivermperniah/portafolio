import { existsSync } from "node:fs";
import { join } from "node:path";

// Se evalúa en build: permite mostrar la foto o el PDF solo cuando existen en /public.
export const hasPublicFile = (path: string) =>
  existsSync(join(process.cwd(), "public", path));

export const techIcon = (name: string) =>
  `/icons/stack/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.svg`;
