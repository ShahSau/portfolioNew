"use client";

import {
  Github,
  Linkedin,
  SquareKanban,
  Home,
  User,
  Briefcase,
  Layers,
  MailOpen,
} from "lucide-react";
import Link from "next/link";
import LinkButton from "./LinkButton";

const NavItems = (): JSX.Element => (
  <ul>
    <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
      <LinkButton linkname="Home" icon={Home} />
    </li>

    <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
      <LinkButton linkname="About" icon={User} />
    </li>

    <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
      <LinkButton linkname="Experience" icon={Briefcase} />
    </li>

    <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
      <LinkButton linkname="Projects" icon={SquareKanban} />
    </li>

    {/* <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
        <LinkButton 
          linkname="Stack"
          icon={Layers}
        />
      </li> */}

    <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
      <LinkButton linkname="Contact" icon={MailOpen} />
    </li>
  </ul>
);

export default NavItems;
