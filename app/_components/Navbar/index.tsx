"use client";

import Link from "next/link";
import NavItems from "./NavItems";
import NavbarActions from "./NavbarActions";

export default function Navbar() {
  return (
    <nav className="bg-light fixed top-0 z-50 w-full dark:bg-dark shadow-lg flex justify-between items-center px-6 py-8">
      <div className="flex w-full container mx-auto items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold hover:text-primary transition duration-300">
            <div className="bg-primary p-4 rounded-full tracking-widest">
              YG
            </div>
          </a>
        </Link>
        <ul className="flex space-x-8">
          <NavItems />
        </ul>
        <NavbarActions />
      </div>
    </nav>
  );
}
