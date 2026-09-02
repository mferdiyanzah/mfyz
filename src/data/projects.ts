// Projek — edit array ini untuk nambah project baru.
// Format: { title, description, technologies: string[] }

export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export const projectsData: Project[] = [
  {
    title: "Enterprise Customer-Service Platform",
    description:
      "Production backend powering automated WhatsApp customer service — webhooks, queues, and live dashboards for the operations team.",
    technologies: ["TypeScript", "Fastify", "Prisma", "WebSocket"],
  },
  {
    title: "Sales & Marketing Platform",
    description:
      "Sales and marketing platform built with micro-frontend architecture — cutting deployment time by 60% and enabling multiple product teams to ship independently.",
    technologies: ["React", "NodeJS", "Micro FE"],
  },
  {
    title: "Financial Operations Platform",
    description:
      "A full-stack financial platform built with Next.js, designed to support high-value asset operations and internal workflows.",
    technologies: ["NextJS", "Full Stack", "FinTech"],
  },
  {
    title: "Financing Operations Platform",
    description:
      "Micro-frontend platform that made back-office operations 40% more efficient for a national financial-services company.",
    technologies: ["AngularJS", "SCSS", "Webpack", "Micro FE"],
  },
  {
    title: "Real-Time Operations Dashboard",
    description:
      "Real-time monitoring dashboard with analytics and billing insights — the numbers business managers check every morning.",
    technologies: ["React.js", "Tailwind", "AntD", "Recharts"],
  },
  {
    title: "Academic Laboratory Platform",
    description:
      "Academic platform serving 300+ students with scheduling, grading, and resources — my first full-stack Prisma project.",
    technologies: ["Next.js", "Prisma", "Supabase"],
  },
  {
    title: "Employee Dining & Ordering Platform",
    description:
      "Mobile ordering system used by 800+ employees daily, with live order tracking and kitchen queue management.",
    technologies: ["React Native", "Mobile"],
  },
];
