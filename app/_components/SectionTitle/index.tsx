import { SectionTitleProps } from "./models";

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h3 className="text-4xl font-bold text-dark-500 dark:text-light mb-8">
        {title}
      </h3>
    </div>
  );
}
