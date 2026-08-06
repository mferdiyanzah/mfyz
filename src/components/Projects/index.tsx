import ProjectCard from "../ProjectCard";
import { projectsData } from "../../data/projects";

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
