import * as LucideIcons from "lucide-react";
import React from "react";

type IconName = keyof typeof LucideIcons.icons;

interface Props {
  link: string;
  icon: IconName;
}

export const Button = ({ link, icon }: Props) => {
  const IconComponent: React.ComponentType<any> | null = LucideIcons.icons[icon] || null;

  if (!IconComponent) {
    console.error(`El ícono "${icon}" no existe.`);
    return null;
  }

  return (
    <a
      href={link}
      target="_blank"
      className="border-2 text-homeColor border-homeColor border-solid rounded-full px-2 py-2 mt-2 hover:shadow-homeColor hover:shadow-3xl"
      style={{ backgroundColor: "transparent", transition: ".5s ease" }}
    >
      <IconComponent />
    </a>
  );
};
