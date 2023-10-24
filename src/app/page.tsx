"use client";

import { HomeSection } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { PortfolioSection } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {

  return (
    <>
      <HomeSection />
      <About />
      <Services />
      <PortfolioSection />
      <Contact />
      <Footer />
    </>
  );
}
