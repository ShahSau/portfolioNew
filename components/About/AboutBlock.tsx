import { FC } from "react";
import Block from "./Block";
import LogoItems from "./LogoItems";

const AboutBlock: FC = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <div className="w-full px-8 flex flex-col items-center">
      <h1 className="text-center text-2xl max-w-xl font-semibold">
        My tech stack
      </h1>
    </div>
    <LogoItems />
  </Block>
);

export default AboutBlock;
