"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";
const themes = ["light", "dark"];

type ThemeContext = { theme: Theme; setTheme: Dispatch<SetStateAction<Theme>> };
type ThemeProviderProps = { children: React.ReactNode };

// 1. Create your context
const ThemeContext = createContext<ThemeContext | undefined>(undefined);

// 3. Create your Custom Context Provider
function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.classList.remove(...themes);
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Create your custom hook for consumers
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
