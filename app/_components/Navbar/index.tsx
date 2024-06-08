"use client";

import Link from "next/link";
import NavItems from "./NavItems";
import NavbarActions from "./NavbarActions";

export default function Navbar() {
  return (
    <nav className="bg-light fixed top-0 z-50 w-full dark:bg-dark-500 border-b border-gray-200 dark:border-dark-400 flex justify-between items-center px-6 py-8">
      <div className="flex w-full container mx-auto items-center justify-between">
        <ul className="flex space-x-8">
          <NavItems />
        </ul>
        <NavbarActions />
      </div>
    </nav>
  );
}
