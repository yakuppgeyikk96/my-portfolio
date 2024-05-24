import SocialMediaLinks from "../SocialMediaLinks";

export default function Header() {
  return (
    <header className="container mx-auto pt-48 pb-64 flex items-center justify-between relative">
      <div className="w-1/2">
        <h1 className="text-5xl font-extrabold text-primary">
          Hello, I am John Doe
        </h1>
        <h2 className="text-3xl text-primary-light dark:text-gray-300 my-8">
          A Passionate Web Designer
        </h2>
        <p className="text-lg text-dark dark:text-light my-8 max-w-xl">
          Welcome to my portfolio! I specialize in creating beautiful and
          functional websites. Below you can find some of my recent work.
        </p>
        <SocialMediaLinks />
        <button className="bg-primary text-white my-8 py-2 px-4 rounded-md hover:bg-primary-light transition duration-300">
          Learn More
        </button>
      </div>
      <div className="w-1/2">
        <img
          className="w-full h-auto rounded-lg shadow-none"
          src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Web designer working on a laptop"
        />
      </div>
    </header>
  );
}
