// Projek — edit array ini untuk nambah project baru.
// Format: { title, description, technologies: string[] }

export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export const projectsData: Project[] = [
  {
    title: "Conversational Support Platform",
    description:
      "Client needed a WhatsApp-based support system that could handle AI conversations with human fallback. Built a production backend combining multi-provider AI routing, RAG-powered knowledge grounding, web search, and real-time dashboards for agent assignment and handoff.",
    technologies: ["TypeScript", "Fastify", "Prisma", "LangChain", "RAG", "Redis", "BullMQ", "Socket.IO"],
  },
  {
    title: "Sales & Marketing Platform",
    description:
      "Multiple product teams shared a single deployment pipeline. Introduced micro-frontend architecture that cut deployment time by 60% and let teams ship independently.",
    technologies: ["React", "NodeJS", "Micro FE"],
  },
  {
    title: "Financial Operations Platform",
    description:
      "Financial services team needed a modern full-stack platform to manage high-value asset workflows. Built with Next.js to support complex internal operations.",
    technologies: ["NextJS", "Full Stack", "FinTech"],
  },
  {
    title: "Financing Operations Platform",
    description:
      "Migrated a back-office module to micro-frontend architecture, making operations 40% more efficient for a national financial-services company.",
    technologies: ["AngularJS", "SCSS", "Webpack", "Micro FE"],
  },
  {
    title: "Real-Time Operations Dashboard",
    description:
      "Business managers needed daily visibility into operations and billing. Built a real-time monitoring dashboard with live analytics, billing insights, and exportable reports — the numbers they check every morning.",
    technologies: ["React.js", "Tailwind", "AntD", "Recharts"],
  },
  {
    title: "Academic Laboratory Platform",
    description:
      "Built a unified full-stack platform for 300+ students to manage scheduling, grading, and lab resources.",
    technologies: ["Next.js", "Prisma", "Supabase"],
  },
  {
    title: "Employee Dining & Ordering Platform",
    description:
      "Built a mobile ordering system with live order tracking and kitchen queue management, serving 800+ employees daily.",
    technologies: ["React Native", "Mobile"],
  },
];
