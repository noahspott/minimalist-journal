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
import { navRoutes } from "@/data/navRoutes";

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
      <body className="bg-gray-100 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-50 text-gray-950">
        <ThemeProvider>
          <Header appName={APP_NAME} navRoutes={navRoutes} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
