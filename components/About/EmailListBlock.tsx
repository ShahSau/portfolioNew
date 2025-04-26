import { Mail, Smartphone, Download } from "lucide-react";
import { FC } from "react";
import Block from "./Block";

const EmailListBlock: FC = () => (
  <>
    <Block className="group col-span-12 flex flex-col items-center gap-4 md:col-span-4 text-zinc-600">
      <Smartphone className="text-5xl relative top-4 transition-all duration-300 ease-in-out group-hover:-translate-y-12 group-hover:opacity-0" />
      <p className="text-center transition-all duration-200  opacity-0 text-lg text-zinc-700 group-hover:-translate-y-4 group-hover:opacity-100">
        +358452249949
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
      <button className="text-center transition-all duration-200  opacity-0 text-lg text-zinc-700 group-hover:-translate-y-4 group-hover:opacity-100">
        Download CV
      </button>
    </Block>
  </>
);

export default EmailListBlock;
