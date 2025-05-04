import { Github, Linkedin } from "lucide-react";
import { FC } from "react";
import Block from "./Block";
import Link from "next/link";

const SocialsBlock: FC = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-2 grid grid-flow-col gap-4"
    >
      <Link
        href="https://www.linkedin.com/in/shahriar-saurov/"
        passHref
        rel="noopener noreferrer"
        target="_blank"
        className="grid place-content-center text-3xl hover:text-[#0077b5]"
      >
        <Linkedin />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-2 grid grid-flow-col gap-4"
    >
      <Link
        href="https://github.com/ShahSau"
        passHref
        rel="noopener noreferrer"
        target="_blank"
        className="grid place-content-center text-3xl hover:text-gray-900"
      >
        <Github />
      </Link>
    </Block>
  </>
);

export default SocialsBlock;
