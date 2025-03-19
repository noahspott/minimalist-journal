/**
 * Header Component
 */

// Components
import Link from "next/link";
import { ThemeToggleButton } from "@/components";

// Types
import type { NavRoute } from "@/types/types";

type HeaderProps = {
  appName: string;
  navRoutes: NavRoute[];
};

export default function Header({ appName, navRoutes }: HeaderProps) {
  return (
    <header
      className={`px-4 py-6 shadow-sm flex justify-between bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:shadow-gray-700`}
    >
      <p className={`text-xl`}>{appName}</p>
      <nav>
        <ul className="flex gap-4">
          {navRoutes.map((route) => {
            return (
              <li key={route.href}>
                <Link href={route.href}>{route.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <ThemeToggleButton />
    </header>
  );
}
