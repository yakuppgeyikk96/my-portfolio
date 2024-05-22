import ProjectCard from "./ProjectCard";
import { recentProjects } from "./constants";

export default function RecentProjects() {
  return (
    <section className="container mx-auto px-6 py-48">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-dark dark:text-light mb-2">
          Recent Projects
        </h3>
        <div className="flex justify-center mt-4">
          <div className="w-40 h-1 bg-gradient-to-l -mr-1 from-primary to-secondary rounded"></div>
          <div className="w-40 h-1 bg-gradient-to-r from-primary to-secondary rounded"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentProjects.map((recentProject) => (
          <ProjectCard
            key={recentProject.id}
            title={recentProject.title}
            description={recentProject.description}
            tags={recentProject.tags}
            githubLink={recentProject.githubLink}
            demoLink={recentProject.demoLink}
          />
        ))}
      </div>
    </section>
  );
}
