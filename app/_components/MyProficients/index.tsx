import Image from "next/image";
import ProficientItem from "./ProficientItem";
import { myProficients } from "./constants";

export default function MyProficients() {
  return (
    <section className="container mx-auto px-6 py-48">
      <div className="text-center mb-12">
        <h3 className="text-4xl text-dark dark:text-light font-semibold mb-2">
          My Proficients
        </h3>
        <div className="flex justify-center mt-4">
          <div className="w-40 h-1 bg-gradient-to-l -mr-1 from-primary to-secondary rounded"></div>
          <div className="w-40 h-1 bg-gradient-to-r from-primary to-secondary rounded"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-9 gap-6">
        {myProficients.map((proficient) => (
          <ProficientItem
            key={proficient.id}
            name={proficient.name}
            iconSrc={proficient.iconSrc}
            url={proficient.url}
          />
        ))}
      </div>
    </section>
  );
}
