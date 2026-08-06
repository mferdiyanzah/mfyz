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
      "Production backend (TS/Fastify/Prisma) powering automated WhatsApp CS for hundreds of thousands of conversations — webhooks, queues, and live dashboards.",
    technologies: ["TypeScript", "Fastify", "Prisma", "WebSocket"],
  },
  {
    title: "iFocus NG",
    description:
      "Scalable micro-frontend architecture at Dexa Group that cut deployment time by 60% and keeps eight product teams shipping independently.",
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
  {
    title: "Homelab & Automation",
    description:
      "26 self-hosted Docker services at home — including an Obsidian LiveSync setup (CouchDB + E2E) that keeps notes in sync across three devices, and automated stock alerts running twice daily.",
    technologies: ["Docker", "CouchDB", "Python", "Systemd"],
  },
  {
    title: "Stock Analysis Pipeline",
    description:
      "Automated IDX trading pipeline: price alerts on 13+ tickers, candidate screening, and weekly chart reports — all cron-driven, no babysitting.",
    technologies: ["Python", "yfinance", "Cron", "Matplotlib"],
  },
  {
    title: "This Portfolio",
    description:
      "The site you're reading — React + Vite + TypeScript, deployed through a Cloudflare tunnel with zero-downtime PM2 restarts.",
    technologies: ["React", "Vite", "TypeScript", "PM2"],
  },
];
