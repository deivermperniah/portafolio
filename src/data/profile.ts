// Fuente única de datos del portafolio, en español (es) e inglés (en).

export type Lang = "es" | "en";
export type L = Record<Lang, string>;

export const tr = (value: L | string, lang: Lang) => (typeof value === "string" ? value : value[lang]);

export interface Experience {
  role: L;
  company: L | string;
  period: L;
  highlights: L[];
  stack: (L | string)[];
}

export interface Project {
  slug: string;
  name: string;
  description: L;
  stack: string[];
  demo?: string;
  repo?: string;
  image?: string; // ruta en /public, p. ej. "/projects/diezmapp.webp"
}

export interface StackGroup {
  name: L;
  items: string[];
}

export interface Education {
  title: L;
  institution: string;
  period: L;
}

export interface Certification {
  title: L;
  institution: string;
  period: L;
  image: string;
}

export const profile = {
  name: "Deiver Pernia",
  firstName: "Deiver",
  role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" } as L,
  about: [
    {
      es: "Soy desarrollador de software Full Stack. Diseño y construyo aplicaciones multiplataforma con TypeScript, React, Vue, React Native, Node.js y Supabase, apoyándome en herramientas de IA para desarrollar de forma más rápida y eficiente.",
      en: "I'm a Full Stack software developer. I design and build cross-platform apps with TypeScript, React, Vue, React Native, Node.js and Supabase, using AI tools to develop faster and more efficiently.",
    },
    {
      es: "He participado en productos con usuarios reales, modernizado sistemas empresariales y desarrollado proyectos propios que tengo en producción. Actualmente curso Ingeniería en Informática.",
      en: "I've worked on products with real users, modernized business systems and built my own projects that are live in production. I'm currently studying Computer Engineering.",
    },
  ] as L[],
  location: { es: "Lima, Perú", en: "Lima, Peru" } as L,
  photo: "/foto.webp",
  cv: "/cv-deiver-pernia.pdf",
};

export const contact = {
  email: "deivermph@gmail.com",
  phone: "+51 927 494 171",
  whatsapp: "https://wa.me/51927494171",
  linkedin: "https://www.linkedin.com/in/deivermperniah/",
  github: "https://github.com/deivermperniah",
  instagram: "https://www.instagram.com/deivermperniah/",
  x: "https://x.com/deivermperniah",
};

export const stack: StackGroup[] = [
  {
    name: { es: "Frontend", en: "Frontend" },
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue.js", "React", "Astro", "Tailwind CSS"],
  },
  { name: { es: "Móvil", en: "Mobile" }, items: ["React Native", "Expo", "Flutter"] },
  { name: { es: "Backend", en: "Backend" }, items: ["Node.js", "Express", "Supabase"] },
  { name: { es: "IA", en: "AI" }, items: ["Python"] },
  { name: { es: "Bases de datos", en: "Databases" }, items: ["MySQL", "PostgreSQL"] },
  { name: { es: "Sistemas operativos", en: "Operating systems" }, items: ["Linux", "Windows"] },
  {
    name: { es: "Herramientas", en: "Tools" },
    items: ["Git", "GitHub", "Figma", "Vercel", "OpenCode", "Claude Code"],
  },
];

export const experience: Experience[] = [
  {
    role: { es: "Desarrollador Full Stack y Soporte Técnico", en: "Full Stack Developer and IT Support" },
    company: { es: "Independiente", en: "Freelance" },
    period: { es: "Ene 2025 - Actualmente", en: "Jan 2025 - Present" },
    highlights: [
      {
        es: "Desarrollo de páginas y aplicaciones web a medida para clientes.",
        en: "Built custom websites and web apps for clients.",
      },
      {
        es: "Diagnóstico, reparación y mantenimiento de computadoras y laptops para clientes.",
        en: "Diagnosed, repaired and maintained desktops and laptops for clients.",
      },
      {
        es: "Instalación y configuración de sistemas operativos, software y copias de seguridad.",
        en: "Installed and configured operating systems, software and backups.",
      },
      {
        es: "Instalación y configuración de redes, routers y Wi-Fi para hogares y negocios.",
        en: "Set up and configured networks, routers and Wi-Fi for homes and businesses.",
      },
    ],
    stack: ["Hardware", { es: "Redes", en: "Networking" }, "Windows", "Linux"],
  },
  {
    role: { es: "Desarrollador Full Stack y Soporte Técnico", en: "Full Stack Developer and IT Support" },
    company: "Alimentos Venepan",
    period: { es: "Jul 2024 - Dic 2024", en: "Jul 2024 - Dec 2024" },
    highlights: [
      {
        es: "Desarrollé y mantuve la intranet corporativa, integrando frontend, backend y bases de datos.",
        en: "Built and maintained the corporate intranet, integrating frontend, backend and databases.",
      },
      {
        es: "Renové por completo su interfaz, construida con código de los años 2000 y usada por ~30 empleados del área administrativa.",
        en: "Fully redesigned its interface, built on 2000s-era code and used by ~30 administrative employees.",
      },
      {
        es: "Automaticé procesos de inventario y la generación de planillas.",
        en: "Automated inventory processes and payroll generation.",
      },
      {
        es: "Gestioné bases de datos MySQL y el ERP de la empresa, con copias de seguridad y optimización del rendimiento.",
        en: "Managed MySQL databases and the company ERP, including backups and performance tuning.",
      },
      {
        es: "Brindé soporte técnico de software, hardware y redes LAN/WAN.",
        en: "Provided technical support for software, hardware and LAN/WAN networks.",
      },
    ],
    stack: ["Vue.js", "JavaScript", "MySQL", { es: "Redes", en: "Networking" }],
  },
  {
    role: { es: "Desarrollador Frontend (Prácticas Profesionales)", en: "Frontend Developer (Professional Internship)" },
    company: "Redmasiva",
    period: { es: "Feb 2024 - Jun 2024", en: "Feb 2024 - Jun 2024" },
    highlights: [
      {
        es: "Desarrollo frontend de Biblia.chat (~100.000 descargas), Redmasiva AI y B1omed.",
        en: "Frontend development for Biblia.chat (~100,000 downloads), Redmasiva AI and B1omed.",
      },
      {
        es: "Construí interfaces responsivas y accesibles e implementé nuevas funcionalidades.",
        en: "Built responsive, accessible interfaces and shipped new features.",
      },
      {
        es: "Optimicé la velocidad de carga e integré APIs y servicios backend.",
        en: "Improved load speed and integrated APIs and backend services.",
      },
    ],
    stack: ["Vue.js", "JavaScript", "HTML", "CSS"],
  },
  {
    role: { es: "Técnico de Soporte Informático", en: "IT Support Technician" },
    company: "Instituto Universitario Adventista de Venezuela",
    period: { es: "Ago 2023 - Dic 2023", en: "Aug 2023 - Dec 2023" },
    highlights: [
      {
        es: "Brindé soporte técnico a usuarios: diagnóstico y reparación de equipos, e instalación y configuración de sistemas operativos y aplicaciones.",
        en: "Provided user support: hardware diagnosis and repair, plus installation and setup of operating systems and applications.",
      },
      {
        es: "Ejecuté mantenimiento preventivo y correctivo de redes (routers, switches y cableado estructurado), reduciendo el tiempo de inactividad.",
        en: "Performed preventive and corrective network maintenance (routers, switches and structured cabling), reducing downtime.",
      },
    ],
    stack: ["Hardware", { es: "Redes", en: "Networking" }, "Windows", "Linux"],
  },
];

export const projects: Project[] = [
  {
    slug: "cocbase-app",
    name: "cocbase-app",
    description: {
      es: "Aplicación móvil para descubrir, guardar y compartir bases de Clash of Clans.",
      en: "Mobile app to discover, save and share Clash of Clans bases.",
    },
    stack: ["React Native", "Expo", "Supabase"],
    demo: "https://cocbase.vercel.app/descargar",
    repo: "https://github.com/deivermperniah/cocbase-app",
    image: "/projects/cocbase-app.webp",
  },
  {
    slug: "cocbase-web",
    name: "cocbase-web",
    description: {
      es: "Plataforma web para explorar, filtrar y compartir bases de Clash of Clans.",
      en: "Web platform to explore, filter and share Clash of Clans bases.",
    },
    stack: ["Astro", "Vue.js", "Tailwind CSS", "Supabase"],
    demo: "https://cocbase.vercel.app/",
    repo: "https://github.com/deivermperniah/cocbase-web",
    image: "/projects/cocbase-web.webp",
  },
  {
    slug: "inge",
    name: "inge",
    description: {
      es: "Gestor de tareas académicas organizadas por asignatura y trimestre, con progreso y panel de administración.",
      en: "Academic task manager organized by subject and term, with progress tracking and an admin panel.",
    },
    stack: ["Astro", "React", "Tailwind CSS", "Supabase"],
    demo: "https://inge-iunav.vercel.app/",
    repo: "https://github.com/deivermperniah/inge",
    image: "/projects/inge.webp",
  },
  {
    slug: "diezmapp",
    name: "diezmapp",
    description: {
      es: "Proyecto académico: aplicación web para administrar diezmos, ofrendas, transferencias y reportes por iglesia.",
      en: "Academic project: web app to manage tithes, offerings, transfers and reports per church.",
    },
    stack: ["Vue.js", "Vite", "PrimeVue", "Node.js", "Express", "PostgreSQL"],
    demo: "https://diezmapp.vercel.app/",
    repo: "https://github.com/deivermperniah/diezmapp",
    image: "/projects/diezmapp.webp",
  },
  {
    slug: "cyberguard",
    name: "cyberguard",
    description: {
      es: "Proyecto académico en equipo: juego narrativo sobre la respuesta a un ransomware en IUNAV, con decisiones, evidencias y laboratorio de phishing.",
      en: "Academic team project: narrative game about responding to a ransomware attack at IUNAV, with decisions, evidence and a phishing lab.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://cyberguard-iunav.vercel.app/",
    repo: "https://github.com/deivermperniah/cyberguard",
    image: "/projects/cyberguard.webp",
  },
  {
    slug: "asistente-hipotesis",
    name: "asistente-hipotesis",
    description: {
      es: "Proyecto académico: asistente de pruebas de hipótesis (z y t de Student, media y proporción) con decisión explicada y gráfico de la región de rechazo.",
      en: "Academic project: hypothesis testing assistant (z and Student's t, mean and proportion) with a plain-language decision and a rejection-region chart.",
    },
    stack: ["R", "Shiny"],
    demo: "https://deivermperniah.shinyapps.io/asistente-hipotesis/",
    repo: "https://github.com/deivermperniah/asistente-hipotesis",
    image: "/projects/asistente-hipotesis.webp",
  },
];

export const education: Education[] = [
  {
    title: { es: "Ingeniería en Informática", en: "Computer Engineering" },
    institution: "Universidad Politécnica Territorial de Yaracuy “Arístides Bastidas”",
    period: { es: "Oct 2024 - Presente", en: "Oct 2024 - Present" },
  },
  {
    title: {
      es: "Técnico Superior Universitario en Informática",
      en: "Associate Degree in Computer Science",
    },
    institution: "Instituto Universitario Adventista de Venezuela",
    period: { es: "Ene 2021 - Jun 2024", en: "Jan 2021 - Jun 2024" },
  },
];

export const certifications: Certification[] = [
  {
    title: {
      es: "Curso de Introducción a la Inteligencia Artificial",
      en: "Introduction to Artificial Intelligence Course",
    },
    institution: "Platzi",
    period: { es: "May 2026", en: "May 2026" },
    image: "/certificates/intro-ai-platzi.webp",
  },
];

export const languages: { name: L; level: L }[] = [
  { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
  { name: { es: "Inglés", en: "English" }, level: { es: "A2", en: "A2" } },
];

// Textos de la interfaz.
export const ui = {
  es: {
    title: "Deiver Pernia — Desarrollador Full Stack",
    description: "Portafolio de Deiver Pernia, Desarrollador Full Stack: experiencia, proyectos, stack y contacto.",
    nav: {
      main: "Principal",
      mobile: "Menú móvil",
      open: "Abrir menú",
      close: "Cerrar menú",
      toLight: "Cambiar a modo claro",
      toDark: "Cambiar a modo oscuro",
      language: "Idioma",
    },
    sections: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      stack: "Stack",
      education: "Educación",
      cv: "CV",
      contact: "Contacto",
    },
    hero: { greeting: "Hola, soy", projects: "Ver proyectos", cv: "Descargar CV" },
    about: { title: "Quién soy", photo: "Foto de" },
    experience: { title: "Dónde he trabajado" },
    projects: { title: "Lo que he construido", demo: "Ver demo", repo: "Código", shot: "Captura de" },
    stack: { title: "Herramientas con las que trabajo" },
    education: { title: "Formación", certifications: "Certificaciones", languages: "Idiomas" },
    cv: { title: "¿Prefieres todo en una página?", text: "Descarga mi CV en PDF.", button: "Descargar CV (PDF)" },
    contact: {
      title: "¿Tienes un proyecto o una vacante? Hablemos.",
      copy: "Copiar",
      copied: "Correo copiado",
      copiedText: "Pégalo donde quieras.",
      copyError: "No se pudo copiar el correo.",
      name: "Nombre",
      namePh: "Tu nombre",
      email: "Correo",
      emailPh: "tu@correo.com",
      message: "Mensaje",
      messagePh: "Cuéntame de tu proyecto o vacante…",
      send: "Enviar mensaje",
      sending: "Enviando…",
      sent: "Mensaje enviado",
      sentText: "Te responderé pronto.",
      error: "No se pudo enviar",
      errorText: "Inténtalo de nuevo o escríbeme al correo.",
      subject: "Nuevo mensaje desde el portafolio",
    },
  },
  en: {
    title: "Deiver Pernia — Full Stack Developer",
    description: "Portfolio of Deiver Pernia, Full Stack Developer: experience, projects, stack and contact.",
    nav: {
      main: "Main",
      mobile: "Mobile menu",
      open: "Open menu",
      close: "Close menu",
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
      language: "Language",
    },
    sections: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      stack: "Stack",
      education: "Education",
      cv: "CV",
      contact: "Contact",
    },
    hero: { greeting: "Hi, I'm", projects: "View projects", cv: "Download CV" },
    about: { title: "Who I am", photo: "Photo of" },
    experience: { title: "Where I've worked" },
    projects: { title: "What I've built", demo: "View demo", repo: "Code", shot: "Screenshot of" },
    stack: { title: "Tools I work with" },
    education: { title: "Education", certifications: "Certifications", languages: "Languages" },
    cv: { title: "Prefer it all on one page?", text: "Download my CV as a PDF.", button: "Download CV (PDF)" },
    contact: {
      title: "Have a project or an opening? Let's talk.",
      copy: "Copy",
      copied: "Email copied",
      copiedText: "Paste it wherever you like.",
      copyError: "Couldn't copy the email.",
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@email.com",
      message: "Message",
      messagePh: "Tell me about your project or opening…",
      send: "Send message",
      sending: "Sending…",
      sent: "Message sent",
      sentText: "I'll get back to you soon.",
      error: "Couldn't send",
      errorText: "Try again or email me directly.",
      subject: "New message from the portfolio",
    },
  },
};

// Anclas de las secciones (iguales en ambos idiomas).
export const sections = ["about", "experience", "projects", "stack", "education", "cv", "contact"] as const;
export type SectionId = (typeof sections)[number];
export const anchors: Record<SectionId, string> = {
  about: "sobre-mi",
  experience: "experiencia",
  projects: "proyectos",
  stack: "stack",
  education: "educacion",
  cv: "cv",
  contact: "contacto",
};
