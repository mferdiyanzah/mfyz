interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:shadow-xl group">
      <h3 className="text-2xl font-bold mb-4 tracking-wide">{title}</h3>
      <p className="text-gray-600 mb-6 min-h-[100px] leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm 
                     transition-all duration-300 hover:bg-black hover:text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
