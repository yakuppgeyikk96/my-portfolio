import Image from "next/image";
import Link from "next/link";

interface ProficientItemProps {
  name: string;
  iconSrc: string;
  url?: string;
}

export default function ProficientItem({
  name,
  iconSrc,
  url,
}: ProficientItemProps) {
  return (
    <div className="flex flex-col items-center">
      <Link href={url || ""} legacyBehavior target="_blank">
        <div className="w-24 h-24 bg-light shadow-lg border border-gray-200 dark:border-none  dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 cursor-pointer">
          <Image src={iconSrc} alt={`${name}-logo`} width={32} height={32} />
        </div>
      </Link>
      <span className="text-dark dark:text-light font-semibold text-lg">
        {name}
      </span>
    </div>
  );
}
