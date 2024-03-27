import "@/globals.css";
import { Nunito } from "next/font/google";
import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Alejandro Urrea's Portfolio",
  description:
    "I'm a React expert fullstack developer with experience creating efficient and user-friendly web applications for e-commerce and social media platforms. Let's talk about how I can contribute to your team's goals.",
};

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--nunito-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </head>
      <body className={`${nunito.className} select-none  bg-gray-800`}>
        <Menu />
        <Header />
        {children}
      </body>
    </html>
  );
}
