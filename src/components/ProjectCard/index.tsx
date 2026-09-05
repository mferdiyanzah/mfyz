interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  technologies: string[];
}

function ProjectCard({ index, title, description, technologies }: ProjectCardProps) {
  return (
    <article className="project-row">
      <div className="project-number">
        {String(index).padStart(2, "0")}
      </div>
      <div className="project-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-tags">
        {technologies.map((tech, i) => (
          <span key={i}>
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
