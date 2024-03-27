import { HomeSection } from "@/sections/Home";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { PortfolioSection } from "@/sections/Portfolio";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";
import data from "@/data/data.json"

export default function Home() {

  return (
    <>
      <HomeSection data={data}/>
      <About />
      <Services />
      <PortfolioSection />
      <Contact />
      <Footer />
    </>
  );
}
