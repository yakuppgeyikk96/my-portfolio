export default function SocialMediaLinks() {
  return (
    <div className="flex gap-4 items-center">
      <a
        href="https://twitter.com"
        target="_blank"
        className="text-twitter hover:text-gray-300 transition duration-300"
      >
        <i className="fab fa-twitter text-2xl"></i>
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="text-linkedin dark:text-light hover:text-gray-300 transition duration-300"
      >
        <i className="fab fa-linkedin text-2xl"></i>
      </a>
      <a
        href="https://github.com"
        target="_blank"
        className="text-github dark:text-light hover:text-gray-300 transition duration-300"
      >
        <i className="fab fa-github text-2xl"></i>
      </a>
    </div>
  );
}
