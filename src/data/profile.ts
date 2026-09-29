// Fuente única de datos del portafolio. La usan las ventanas del escritorio y la terminal.

export interface Experience {
  role: string;
  company: string;
  period: string;
  start: string; // ISO (YYYY-MM) para ordenar y generar el "hash"
  highlights: string[];
  stack: string[];
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
  demo?: string;
  repo?: string;
  image?: string; // ruta en /public, p. ej. "/projects/biblia-chat.webp"
}

export interface StackGroup {
  name: string;
  items: string[];
}

export interface Education {
  title: string;
  institution: string;
  period: string;
}

export const profile = {
  name: "Deiver Pernia",
  user: "deivermperniah",
  role: "Full Stack Developer & IT Support",
  headline: "Desarrollador Full Stack que también entiende la infraestructura.",
  pitch:
    "Construyo interfaces con Vue y backends con Laravel y Supabase, y sé qué pasa por debajo: servidores, redes y bases de datos. Resuelvo el problema completo, no solo mi parte.",
  about: [
    "¡Hola! Soy Deiver, informático con 1 año de experiencia entre desarrollo frontend y soporte técnico. Trabajo con Frontend, Backend, Bases de Datos, Sistemas Operativos y Redes.",
    "Actualmente curso Ingeniería en Informática y en mi tiempo libre desarrollo proyectos personales para seguir creciendo profesionalmente.",
  ],
  location: "Lima, Perú",
  available: true,
  photo: "/foto.webp", // TODO: agregar public/foto.webp
  cv: "/cv-deiver-pernia.pdf", // TODO: agregar public/cv-deiver-pernia.pdf
};

export const contact = {
  email: "deivermph@gmail.com",
  phone: "+51 927 494 171",
  whatsapp: "https://wa.me/51927494171",
  linkedin: "", // TODO: URL de tu perfil de LinkedIn
  github: "", // TODO: URL de tu perfil de GitHub
};

export const stack: StackGroup[] = [
  { name: "Frontend", items: ["HTML", "CSS", "JavaScript", "Vue.js"] },
  { name: "Backend", items: ["Laravel", "Supabase"] },
  { name: "Bases de datos", items: ["MySQL", "PostgreSQL"] },
  {
    name: "Infraestructura y soporte",
    items: ["Linux", "Windows", "Redes LAN/WAN", "Hardware", "ERP"],
  },
];

export const tools = ["Git", "GitHub", "Figma"];

export const experience: Experience[] = [
  {
    role: "Técnico de Soporte Informático & Frontend",
    company: "Alimentos Venepan",
    period: "Jul 2024 – Oct 2024",
    start: "2024-07",
    highlights: [
      "Desarrollé y mantuve la intranet corporativa con Vue.js, mejorando la comunicación interna y el acceso a la información.",
      "Administré la infraestructura de redes LAN/WAN: routers, switches y firewalls, aplicando medidas de seguridad y monitoreo.",
      "Gestioné bases de datos MySQL y el ERP de la empresa, asegurando respaldos, integridad y rendimiento.",
      "Resolví incidencias de software y hardware para usuarios finales y documenté las soluciones.",
    ],
    stack: ["Vue.js", "JavaScript", "MySQL", "Redes"],
  },
  {
    role: "Desarrollador Frontend (Pasantías)",
    company: "Redmasiva",
    period: "Feb 2024 – Jun 2024",
    start: "2024-02",
    highlights: [
      "Participé en el frontend de Biblia.chat, Redmasiva AI y B1omed, productos con usuarios reales.",
      "Implementé funcionalidades interactivas y optimicé el rendimiento y la experiencia de usuario.",
    ],
    stack: ["Vue.js", "JavaScript", "HTML", "CSS"],
  },
  {
    role: "Técnico de Soporte Informático",
    company: "Instituto Universitario Adventista de Venezuela",
    period: "Ago 2023 – Dic 2023",
    start: "2023-08",
    highlights: [
      "Brindé soporte técnico a usuarios: diagnóstico y reparación de equipos, instalación de sistemas operativos y aplicaciones.",
      "Ejecuté mantenimiento preventivo y correctivo de redes (routers, switches, cableado estructurado), reduciendo el tiempo de inactividad.",
    ],
    stack: ["Hardware", "Redes", "Windows", "Linux"],
  },
];

// TODO: reemplazar/ampliar con tus proyectos reales (descripción, capturas, demo y repo).
export const projects: Project[] = [
  {
    slug: "biblia-chat",
    name: "Biblia.chat",
    summary: "App conversacional para explorar la Biblia.",
    description:
      "Plataforma de chat para consultar y estudiar la Biblia. Trabajé en el frontend durante mis pasantías en Redmasiva.",
    role: "Desarrollador Frontend",
    stack: ["Vue.js", "JavaScript", "CSS"],
    demo: "https://biblia.chat",
  },
  {
    slug: "redmasiva-ai",
    name: "Redmasiva AI",
    summary: "Producto de IA de Redmasiva.",
    description:
      "Interfaz web de la plataforma de inteligencia artificial de Redmasiva. Implementé componentes interactivos y mejoras de rendimiento.",
    role: "Desarrollador Frontend",
    stack: ["Vue.js", "JavaScript"],
  },
  {
    slug: "b1omed",
    name: "B1omed",
    summary: "Plataforma web del sector salud.",
    description:
      "Aplicación web desarrollada en Redmasiva. Colaboré en el frontend y en la experiencia de usuario.",
    role: "Desarrollador Frontend",
    stack: ["Vue.js", "HTML", "CSS"],
  },
  {
    slug: "intranet-venepan",
    name: "Intranet Venepan",
    summary: "Intranet corporativa de Alimentos Venepan.",
    description:
      "Intranet para mejorar la comunicación interna y el acceso a la información de los empleados. La desarrollé y mantuve de principio a fin.",
    role: "Desarrollador Full Stack",
    stack: ["Vue.js", "JavaScript", "MySQL"],
  },
];

export const education: Education[] = [
  {
    title: "Ingeniería en Informática",
    institution: "Universidad Politécnica Territorial de Yaracuy “Arístides Bastidas”",
    period: "Oct 2024 – Presente",
  },
  {
    title: "Técnico Superior Universitario en Informática",
    institution: "Instituto Universitario Adventista de Venezuela",
    period: "Ene 2021 – Jun 2024",
  },
];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "A2" },
];

// Aplicaciones del escritorio (orden = orden en el dock y en la cuadrícula móvil).
export const apps = [
  { id: "about", title: "Sobre mí", file: "Sobre_mi", icon: "user", color: "#3584e4" },
  { id: "cv", title: "CV", file: "CV.pdf", icon: "file", color: "#c01c28" },
  { id: "experience", title: "Experiencia", file: "Experiencia", icon: "briefcase", color: "#e66100" },
  { id: "projects", title: "Proyectos", file: "Proyectos", icon: "folder", color: "#1c71d8" },
  { id: "stack", title: "Stack", file: "Stack", icon: "cpu", color: "#9141ac" },
  { id: "education", title: "Educación", file: "Educación", icon: "graduation", color: "#26a269" },
  { id: "contact", title: "Contacto", file: "Contacto", icon: "mail", color: "#e5a50a" },
  { id: "terminal", title: "Terminal", file: "Terminal", icon: "terminal", color: "#241f31" },
] as const;

export type AppId = (typeof apps)[number]["id"];
