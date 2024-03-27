import { Github } from "lucide-react";

interface Props {
  link: string;
}

export const GithubButton = ({ link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="border-2 text-homeColor border-homeColor border-solid rounded-full px-2 py-2 mt-2 hover:shadow-homeColor hover:shadow-3xl"
      style={{ backgroundColor: "transparent", transition: ".5s ease" }}
    >
     <Github />
    </a>
  );
};
