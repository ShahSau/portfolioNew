import { FC } from "react";
import { IconType } from "react-icons";

interface LogoItemProps {
  Icon: IconType;
}

const LogoItem: FC<LogoItemProps> = ({ Icon }) => {
  return (
    <span className="w-full  h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-black transition-colors">
      <Icon className="text-4xl md:text-5xl" />
    </span>
  );
};

export default LogoItem;
