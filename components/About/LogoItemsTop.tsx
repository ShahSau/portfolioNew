import {
  SiJavascript,
  SiGo,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiNextui,
  SiNextdotjs,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiGin,
  SiTypescript,
  SiPython, 
  SiGraphql
} from "react-icons/si";
import LogoItem from "./LogoItem";
import { FC } from "react";

const LogoItemsTop: FC = () => (
  <>
    <LogoItem Icon={SiJavascript} />
    <LogoItem Icon={SiPython} />
    <LogoItem Icon={SiTypescript} />
    <LogoItem Icon={SiGo} />
    <LogoItem Icon={SiReact} />
    <LogoItem Icon={SiAngular} />
    <LogoItem Icon={SiNodedotjs} />
    <LogoItem Icon={SiExpress} />
    <LogoItem Icon={SiNestjs} />
    <LogoItem Icon={SiNextdotjs} />
    <LogoItem Icon={SiDjango} />
    <LogoItem Icon={SiMongodb} />
    <LogoItem Icon={SiPostgresql} />
    <LogoItem Icon={SiGin} />
    <LogoItem Icon={SiGraphql} />
  </>
);

export default LogoItemsTop;
