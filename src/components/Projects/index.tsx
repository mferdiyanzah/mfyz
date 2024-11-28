import ProjectCard from "../ProjectCard";

const projectsData = [
  {
    title: "Back Office of Danamas",
    description:
      "Led the development of a sophisticated micro-frontend platform that streamlined operations for Back Office teams, resulting in a 40% increase in task management efficiency.",
    technologies: ["AngularJS", "SCSS", "Webpack", "Micro Frontend"],
  },
  {
    title: "SQE Portal",
    description:
      "Engineered a dynamic service monitoring dashboard that provides real-time analytics and billing insights, enabling business managers to make data-driven decisions.",
    technologies: ["React.js", "Tailwind", "AntD", "Recharts"],
  },
  {
    title: "iFocus NG",
    description:
      "Revolutionized sales automation at Dexa Group by implementing a scalable micro-frontend architecture, reducing deployment time by 60% while enhancing maintainability.",
    technologies: ["React", "NodeJS", "Micro Frontend"],
  },
  {
    title: "Dining Hall Portal",
    description:
      "Designed an intuitive mobile ordering system that serves 800+ employees daily, featuring real-time order tracking and a seamless checkout experience.",
    technologies: ["React Native", "Mobile Development"],
  },
  {
    title: "Treasury Management System",
    description:
      "Spearheaded Dexa Group's first NextJS implementation, creating a comprehensive financial management platform that handles millions in assets with enhanced security.",
    technologies: ["NextJS", "Full Stack", "Financial Tech"],
  },
  {
    title: "Laboratory Management System",
    description:
      "Built a modern academic platform that transformed laboratory operations, serving 300+ students with automated scheduling, grading, and resource management.",
    technologies: ["Next.js", "Bootstrap", "Prisma", "Supabase"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 tracking-wide">Projects</h2>
        <p className="text-gray-600 mb-12 text-lg tracking-wide max-w-3xl">
          Here's a showcase of my key projects, demonstrating my expertise in
          building scalable and user-centric solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
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
