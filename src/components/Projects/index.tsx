import ProjectCard from "../ProjectCard";
import { projectsData } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="section dark-section" aria-labelledby="projects-title">
      <div className="container">
        <div className="label">Selected work</div>
        <h2 id="projects-title">Real systems.<br />Real constraints.</h2>
        <div className="project-list">
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
