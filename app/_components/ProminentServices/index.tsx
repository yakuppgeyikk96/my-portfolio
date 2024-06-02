import ProminentServiceItem from "./ProminentServiceItem";
import { prominentServices } from "./constants";

export default function ProminentServices() {
  return (
    <section className="py-36">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-dark-500 dark:text-light mb-8">
            Prominent Services
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prominentServices.map((service) => (
            <ProminentServiceItem
              key={service.id}
              title={service.title}
              description={service.description}
              iconClass={service.iconClass}
              cardBgClass={service.cardBgClass}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-primary-400 text-white my-8 py-2 px-4 rounded-md hover:bg-primary-300 transition duration-300">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
