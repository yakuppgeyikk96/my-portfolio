import ProminentServiceItem from "./ProminentServiceItem";
import { prominentServices } from "./constants";

export default function ProminentServices() {
  return (
    <section className="container mx-auto px-6 pb-48">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-100 mb-8">
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
    </section>
  );
}
