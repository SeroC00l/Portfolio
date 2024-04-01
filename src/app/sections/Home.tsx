import Image from "next/image";
import HomeImg from "/public/img/Home.png"
import { Button } from "@/components/ui/Button";
import { Email } from "@/components/ui/Email";

interface HomeData {
  HomeSection: {
    id: string;
    name: string;
    mail: string;
    description: string;
    linkedinLink: string;
    githubLink: string;
    twitchlink: string;
    cvLink: string;
    image: {
      alt: string;
      priority: boolean;
    };
  };
}

interface Props {
  data: HomeData;
}

export const HomeSection = ({ data }: Props) => {
  const {
    id,
    name,
    mail,
    description,
    linkedinLink,
    githubLink,
    twitchlink,
    cvLink,
    image,
  } = data.HomeSection;

  return (
    <section
      className="flex lg:flex-row flex-col justify-center items-center bg-gray-800 lg:gap-16 pb-36 lg:pt-32 pt-40 h-screen"
      id={id}
    >
      <div className="text-white text-left lg:mt-0 md:mt-40 sm:mt-10">
        <h3 className="md:text-4xl md:mx-0 ml-8 text-2xl mb-2">
          Hello, It's Me
        </h3>
        <h1 className="md:text-7xl md:mx-0 ml-8 text-4xl mb-2 font-bold">
          {name}
        </h1>
        <h3 className="md:text-4xl md:mx-0 ml-8 text-2xl mb-2">
          And I am a{" "}
          <span className="inline-block text-homeColor font-bold">
            FullStack Developer
          </span>
        </h3>
        <p className="md:w-128 text-left md:mx-0 mx-7 mb-3 md:text-lg text-sm ">
          {description}
        </p>
        <div className="gap-5 flex lg:justify-start justify-center mb-8">
          <Button link={linkedinLink} icon="Linkedin" />
          <Button link={githubLink} icon="Github" />
          <Button link={twitchlink} icon="Twitch"/>
          <Email mail={mail} />
        </div>
        <div className="flex justify-center md:justify-start">
          <a
            href={cvLink}
            target="_blank"
            className="inline-block px-4 py-2 bg-homeColor rounded-3xl shadow-3xl text-lg font-bold text-gray-800 hover:shadow-none hover:bg-gray-800 hover:text-homeColor border-homeColor border-2"
          >
            Download CV
          </a>
        </div>
      </div>
      <div>
        <Image
          alt={image.alt}
          priority={image.priority}
          src={HomeImg}
        />
      </div>
    </section>
  );
};
