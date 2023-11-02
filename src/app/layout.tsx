"use client";

import "./globals.css";
import { Menu } from "./components/Menu";
import { Header } from "./components/Header";
 
export const metadata = {
  title: "Alejandro Urrea's Portfolio",
  description: "Alejandro Urrea's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="select-none bg-gray-800">
        <Menu />
        <Header />
        {children}
      </body>
    </html>
  );
}
