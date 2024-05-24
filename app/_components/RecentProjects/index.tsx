import ProjectCard from "./ProjectCard";
import { recentProjects } from "./constants";

export default function RecentProjects() {
  return (
    <section className="container mx-auto px-6 py-64">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-dark dark:text-light mb-8">
          Recent Projects
        </h3>
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
