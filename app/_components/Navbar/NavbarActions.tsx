import { Button } from "@/components/ui/button";

export default function NavbarActions() {
  return (
    <div className="flex gap-8 ml-8">
      <button
        id="theme-toggle"
        className=" text-black hover:text-primary-400 dark:text-gray-100 transition duration-300"
        onClick={() => {
          const htmlEl = document.querySelector("html");
          if (htmlEl) {
            htmlEl.classList.toggle("dark");
          }
        }}
      >
        <i id="theme-icon" className="fas fa-moon text-2xl"></i>
      </button>
      <button
        id="theme-toggle"
        className=" text-black hover:text-primary-400 dark:text-gray-100 transition duration-300"
        onClick={() => console.log("Language")}
      >
        <i id="theme-icon" className="fas fa-globe text-2xl"></i>
      </button>
      <Button size="lg" onClick={() => console.log("Language")}>
        Login
      </Button>
    </div>
  );
}
