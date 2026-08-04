import ProjectCard from "../ProjectCard";

const projectsData = [
  {
    title: "Back Office of Danamas",
    description:
      "Micro-frontend platform that made back-office operations 40% more efficient.",
    technologies: ["AngularJS", "SCSS", "Webpack", "Micro FE"],
  },
  {
    title: "SQE Portal",
    description:
      "Real-time monitoring dashboard with analytics and billing insights for business managers.",
    technologies: ["React.js", "Tailwind", "AntD", "Recharts"],
  },
  {
    title: "iFocus NG",
    description:
      "Scalable micro-frontend architecture that cut deployment time by 60%.",
    technologies: ["React", "NodeJS", "Micro FE"],
  },
  {
    title: "Dining Hall Portal",
    description:
      "Mobile ordering system used by 800+ employees daily, with live order tracking.",
    technologies: ["React Native", "Mobile"],
  },
  {
    title: "Treasury Management System",
    description:
      "Dexa Group's first NextJS project — a financial platform handling millions in assets.",
    technologies: ["NextJS", "Full Stack", "FinTech"],
  },
  {
    title: "Laboratory Management System",
    description:
      "Academic platform serving 300+ students with scheduling, grading, and resources.",
    technologies: ["Next.js", "Prisma", "Supabase"],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-28 md:py-32">
      <div className="container mx-auto px-6">
        <div className="overline">02 — Selected Work</div>
        <h2 className="section-title">Things I&apos;ve built.</h2>
        <div className="mt-10 border-b border-ink/10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              index={index + 1}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
