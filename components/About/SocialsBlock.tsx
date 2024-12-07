import { Github,Linkedin } from "lucide-react";
import { FC } from "react";
import Block from "./Block";

const SocialsBlock: FC = () => (
    <>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6  md:col-span-2 grid grid-flow-col gap-4"
      >
        <a
          href="#"
          className="grid place-content-center text-3xl text-white hover:text-[#0077b5]"
        >
          <Linkedin />
        </a>
        
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6  md:col-span-2 grid grid-flow-col gap-4"
      >
          <a
              href="#"
              className="grid place-content-center text-3xl text-white hover:text-gray-900"
          >
              <Github />
          </a>
      </Block>
      
    </>
  );

export default SocialsBlock;