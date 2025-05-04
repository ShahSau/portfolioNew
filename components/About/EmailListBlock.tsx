import { Mail, Smartphone, Download } from "lucide-react";
import { FC } from "react";
import Block from "./Block";

const EmailListBlock: FC = () => (
  <>
    <Block className="group col-span-12 flex flex-col items-center gap-4 md:col-span-4 text-zinc-600">
      <Smartphone className="text-5xl relative top-4 transition-all duration-300 ease-in-out group-hover:-translate-y-12 group-hover:opacity-0" />
      <p className="text-center transition-all duration-200  opacity-0 text-lg text-zinc-700 group-hover:-translate-y-4 group-hover:opacity-100">
        +491782189734
      </p>
    </Block>
    <Block className="group col-span-12 flex flex-col items-center gap-4 md:col-span-4 text-zinc-600">
      <Mail className="text-5xl relative top-4 transition-all duration-300 ease-in-out group-hover:-translate-y-12 group-hover:opacity-0" />
      <p className="text-center transition-all duration-200  opacity-0 text-lg text-zinc-700 group-hover:-translate-y-4 group-hover:opacity-100">
        shahriarksaurov@gmail.com
      </p>
    </Block>
    <Block className="group col-span-12 flex flex-col items-center gap-4 md:col-span-4 text-zinc-600">
      <Download className="text-3xl relative top-4 transition-all duration-300 ease-in-out group-hover:-translate-y-12 group-hover:opacity-0" />
      <a 
      className="text-center transition-all duration-200  opacity-0 text-lg text-zinc-700 group-hover:-translate-y-4 group-hover:opacity-100"
      href="https://drive.google.com/file/d/1YQ-dfn-74pm_37ZPk9gFD5GriOIz0Pe9/view?usp=download"
      target="_blank"
      rel="noopener noreferrer"
      download="Shahriar_Saurov_Resume.pdf"
      >
        Download CV
      </a>
    </Block>
  </>
);

export default EmailListBlock;


//"https://drive.google.com/file/d/1v0X2g3q4r7x5z6f8e5f8e5f8e5f8e5f/view?usp=sharing"