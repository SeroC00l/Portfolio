import Image from "next/image";
import Homeimg from "../img/home.png";

export default function Home() {
  return (
    <section className="flex justify-center items-center">
      <div className="text-white">
        <h3 className="text-5xl">Hello, It's Me</h3>
        <h1 className="text-8xl">Alejandro Urrea</h1>
        <h3 className="text-5xl">
          And I am a <span>FullStack Developer</span>
        </h3>
      </div>
      <div className="">
        <Image alt="home" src={Homeimg} className="drop-shadow-3xl" />
      </div>
    </section>
  );
}
