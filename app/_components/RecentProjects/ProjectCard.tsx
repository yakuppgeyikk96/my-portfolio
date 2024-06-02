interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <div className="bg-light dark:bg-dark-700 border border-gray-300 dark:border-dark-500 p-6 rounded-lg">
      <img
        className="w-full h-48 rounded-lg mb-4"
        src="https://source.unsplash.com/random/800x600/?project1"
        alt="Project 1"
      />
      <h4 className="text-xl font-bold text-dark-500 dark:text-light pt-2">
        {title}
      </h4>
      <p className="mt-2 text-dark-500 dark:text-light py-2">{description}</p>
      {tags && tags.length && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary-400 text-white text-xs font-semibold px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-8 flex space-x-4">
        <a
          href={githubLink}
          target="_blank"
          className="text-dark-500 hover:text-primary-400 dark:text-light dark:hover:text-primary-400 transition duration-300"
        >
          <i className="fab fa-github text-2xl"></i>
        </a>
        <a
          href={demoLink}
          target="_blank"
          className="text-dark-500 hover:text-primary-400 dark:text-light dark:hover:text-primary-400 transition duration-300"
        >
          <i className="fas fa-external-link-alt text-2xl"></i>
        </a>
      </div>
    </div>
  );
}
