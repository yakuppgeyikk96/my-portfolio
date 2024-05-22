import Image from "next/image";

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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-light shadow-lg border border-gray-200 dark:border-none  dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <i className="fab fa-js-square text-4xl text-yellow-500"></i>
          </div>
          <span className="text-dark dark:text-light font-semibold text-lg">
            JavaScript
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-light shadow-lg border border-gray-200 dark:border-none dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <i className="fab fa-react text-4xl text-blue-500"></i>
          </div>
          <span className="text-dark dark:text-light font-semibold text-lg">
            React
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-light shadow-lg border border-gray-200 dark:border-none  dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <i className="fab fa-node-js text-4xl text-green-500"></i>
          </div>
          <span className="text-dark dark:text-light font-semibold text-lg">
            Node.js
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-light shadow-lg border border-gray-200 dark:border-none dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <Image
              src="/icons/typescript-logo.svg"
              alt="Typescript"
              width={48}
              height={48}
              className="rounded-sm"
              style={{ background: "inherit" }}
            />
          </div>
          <span className="text-dark dark:text-light text-lg">TypeScript</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-light shadow-lg border border-gray-200 dark:border-none dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <Image
              src="/icons/nextjs-logo.svg"
              alt="Next.js"
              width={48}
              height={48}
              className="rounded-sm"
              style={{ background: "inherit" }}
            />
          </div>
          <span className="text-dark dark:text-light text-lg">Next.js</span>
        </div>
      </div>
    </section>
  );
}
