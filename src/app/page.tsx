import { HomeSection } from "./sections/Home";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { PortfolioSection } from "./sections/Portfolio";
import { Contact } from "./sections/Contact";
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
