/**
 * Root Layout
 */

// Types
import type { Metadata } from "next";

// Styles
import "./globals.css";

// Components
import { Header } from "@/components";
import { ThemeProvider } from "@/context/ThemeContext";

// Data
import { APP_NAME } from "@/data/aboutApp";

export const metadata: Metadata = {
  title: "Minimalist Journal",
  description: "It's a minimalist journal!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white/90 transition-colors duration-300 dark:bg-black/90 dark:text-white/90 text-black/90">
        <ThemeProvider>
          <Header appName={APP_NAME} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
