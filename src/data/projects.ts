// Projek — edit array ini untuk nambah project baru.
// Format: { title, description, technologies: string[] }

export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export const projectsData: Project[] = [
  {
    title: "Wagmi — WhatsApp Customer-Service Platform",
    description:
      "Production backend (TS/Fastify/Prisma) powering automated WhatsApp customer service — webhooks, queues, and live dashboards for the operations team.",
    technologies: ["TypeScript", "Fastify", "Prisma", "WebSocket"],
  },
  {
    title: "iFocus NG",
    description:
      "Micro-frontend architecture at Dexa Group that cut deployment time by 60% and keeps multiple product teams shipping independently.",
    technologies: ["React", "NodeJS", "Micro FE"],
  },
  {
    title: "Treasury Management System",
    description:
      "Dexa Group's first Next.js project — a financial platform handling millions in assets, built full-stack end to end.",
    technologies: ["NextJS", "Full Stack", "FinTech"],
  },
  {
    title: "Back Office of Danamas",
    description:
      "Micro-frontend platform that made back-office operations 40% more efficient for a national financing company.",
    technologies: ["AngularJS", "SCSS", "Webpack", "Micro FE"],
  },
  {
    title: "SQE Portal",
    description:
      "Real-time monitoring dashboard with analytics and billing insights — the numbers business managers check every morning.",
    technologies: ["React.js", "Tailwind", "AntD", "Recharts"],
  },
  {
    title: "Laboratory Management System",
    description:
      "Academic platform serving 300+ students with scheduling, grading, and resources — my first full-stack Prisma project.",
    technologies: ["Next.js", "Prisma", "Supabase"],
  },
  {
    title: "Dining Hall Portal",
    description:
      "Mobile ordering system used by 800+ employees daily, with live order tracking and kitchen queue management.",
    technologies: ["React Native", "Mobile"],
  },
];
