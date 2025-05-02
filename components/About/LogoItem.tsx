import { FC, useState } from "react";
import { IconType } from "react-icons";

export const IconToTextMap = (Icon: IconType) => {
  return Icon.name
    .replace("Si", "")
    .replace(/([A-Z])/g, " $1")
    .trim();
};

interface LogoItemProps {
  Icon: IconType;
  Text: string;
}

const LogoItem: FC<LogoItemProps> = ({ Icon, Text }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <span
      className="w-full  h-16 md:h-24 flex justify-center items-center text-black transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className="text-4xl md:text-5xl" />
      {isHovered && (
        <p className="hidden md:block absolute mt-16 text-sm">{Text}</p>
      )}
    </span>
  );
};

export default LogoItem;
