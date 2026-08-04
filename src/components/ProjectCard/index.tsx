interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  technologies: string[];
}

function ProjectCard({ index, title, description, technologies }: ProjectCardProps) {
  return (
    <div className="grid grid-cols-12 gap-4 items-baseline py-8 border-t border-ink/10 px-4 -mx-4 hover:bg-rust-soft transition-colors">
      <div className="col-span-12 md:col-span-2 font-display italic text-ink-soft text-[15px]">
        ({String(index).padStart(2, "0")})
      </div>
      <div className="col-span-12 md:col-span-6">
        <h3 className="font-display font-medium text-2xl tracking-tight">{title}</h3>
        <p className="text-ink-soft text-[15px] mt-1.5">{description}</p>
      </div>
      <div className="col-span-12 md:col-span-4 flex flex-wrap gap-2 justify-start md:justify-end">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="text-xs font-medium text-ink-soft border border-ink/10 rounded-full px-3 py-1 bg-paper"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
