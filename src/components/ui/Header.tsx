/**
 * Header Component
 */
import { ThemeToggleButton } from "@/components";

type HeaderProps = {
  appName: string;
};

export default function Header({ appName }: HeaderProps) {
  return (
    <header
      className={`px-4 py-6 shadow-sm flex justify-between bg-white/90 dark:bg-black/50`}
    >
      <p className={`text-xl`}>{appName}</p>
      <nav></nav>
      <ThemeToggleButton />
    </header>
  );
}
