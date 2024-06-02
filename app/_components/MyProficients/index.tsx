import ProficientItem from "./ProficientItem";
import { myProficients } from "./constants";

export default function MyProficients() {
  return (
    <section className="mx-auto px-16 py-36 rounded-lg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl text-dark-500 dark:text-light font-semibold mb-8">
            My Proficients
          </h3>
          {/* <div className="flex justify-center mt-4">
          <div className="w-1/2 h-1 bg-gradient-to-l from-primary opacity-50 to-secondary rounded"></div>
          <div className="w-1/2 h-1 bg-gradient-to-r from-primary opacity-50 to-secondary rounded"></div>
        </div> */}
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
      </div>
    </section>
  );
}
