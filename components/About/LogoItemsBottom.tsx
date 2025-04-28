import {
  SiPrisma,
  SiRedis,
  SiApachekafka,
  SiTerraform,
  SiKubernetes,
  SiCypress,
  SiJest,
  SiAmazonwebservices,
  SiGooglecloud,
  SiRedux,
  SiNgrx,
  SiTailwindcss,
  SiMaterialdesignicons,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FC } from "react";
import { TbBrandReactNative } from "react-icons/tb";
import LogoItem, { IconToTextMap } from "./LogoItem";

const LogoItemsBottom: FC = () => (
  <>
    {[
      SiPrisma,
      SiRedis,
      SiApachekafka,
      SiTerraform,
      SiKubernetes,
      SiCypress,
      SiJest,
      SiAmazonwebservices,
      SiGooglecloud,
      SiRedux,
      SiNgrx,
      SiTailwindcss,
      SiMaterialdesignicons,
      SiHtml5,
      TbBrandReactNative,
      SiCss3,
    ].map((Icon, index) => (
      <LogoItem key={index} Icon={Icon} Text={IconToTextMap(Icon)} />
    ))}
  </>
);

export default LogoItemsBottom;
