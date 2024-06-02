"use client";

import Link from "next/link";
import { navbarItems } from "./Navbar.constant";
import { usePathname } from "next/navigation";

export default function NavItems() {
  const pathname = usePathname();

  return navbarItems.map((item, index) => (
    <Link key={item.href} href={item.href} legacyBehavior>
      <li>
        <a
          key={index}
          href={item.href}
          className={`
            flex flex-col items-center gap-2 
            text-lg text-dark-500 dark:text-light hover:text-primary-400 
            transition duration-300
            ${
              pathname === item.href
                ? "text-primary-400 dark:text-primary-400"
                : ""
            }
          `}
        >
          <i className={item.icon}></i>
          <span>{item.name}</span>
        </a>
      </li>
    </Link>
  ));
}
