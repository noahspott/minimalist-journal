"use client";

import { LuMoonStar, LuSun } from "react-icons/lu";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  const iconStyles = `size-8 transition-colors duration-300 dark:text-white/90 text-black/90`;

  function handleThemeToggle(currentTheme: string) {
    const newTheme = currentTheme === "light" ? "dark" : "light";

    setTheme(newTheme);
  }

  return (
    <button
      onClick={() => handleThemeToggle(theme)}
      className="hover:cursor-pointer"
    >
      {theme === "light" ? (
        <LuMoonStar className={iconStyles} />
      ) : (
        <LuSun className={iconStyles} />
      )}
    </button>
  );
}
