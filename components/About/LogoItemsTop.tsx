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
  SiGraphql,
} from "react-icons/si";
import LogoItem, { IconToTextMap } from "./LogoItem";
import { FC } from "react";

const LogoItemsTop: FC = () => (
  <>
    {[
      SiJavascript,
      SiPython,
      SiTypescript,
      SiGo,
      SiReact,
      SiAngular,
      SiNodedotjs,
      SiExpress,
      SiNestjs,
      SiNextdotjs,
      SiDjango,
      SiMongodb,
      SiPostgresql,
      SiGin,
      SiGraphql,
    ].map((Icon, index) => (
      <LogoItem key={index} Icon={Icon} Text={IconToTextMap(Icon)} />
    ))}
  </>
);

export default LogoItemsTop;
