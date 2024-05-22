import Link from "next/link";
import { navbarItems } from "./Navbar.constant";

export default function NavItems() {
  return navbarItems.map((item, index) => (
    <Link key={item.href} href={item.href} legacyBehavior>
      <li>
        <a
          key={index}
          href={item.href}
          className="flex flex-col items-center gap-2 text-lg text-dark dark:text-light hover:text-primary transition duration-300"
        >
          <i className={item.icon}></i>
          <span>{item.name}</span>
        </a>
      </li>
    </Link>
  ));
}
