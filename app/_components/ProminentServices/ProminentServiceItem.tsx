interface ProminentServiceItemProps {
  title: string;
  description: string;
  iconClass: string;
  cardBgClass: string;
}

export default function ProminentServiceItem({
  title,
  description,
  iconClass,
  cardBgClass,
}: ProminentServiceItemProps) {
  return (
    <div
      className={`${cardBgClass} py-8 px-6 rounded-lg shadow-lg border border-gray-200 dark:border-dark-500 dark:shadow-none`}
    >
      <div className="text-center mb-4">
        <i className={`${iconClass} text-4xl text-primary-400`}></i>
      </div>
      <h4 className="text-xl font-bold text-dark-500 dark:text-light text-center">
        {title}
      </h4>
      <p className="mt-2 text-gray-700 dark:text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
}
