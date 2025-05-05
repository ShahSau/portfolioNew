"use client";

import {
  LuSquareKanban,
  LuUser,
  LuBriefcase,
  LuMailOpen,
} from "react-icons/lu";
import { GoHomeFill } from "react-icons/go";
import LinkButton from "./LinkButton";

const NavItems = (): JSX.Element => (
  <ul>
    <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
      <LinkButton linkname="Home" icon={GoHomeFill} />
    </li>

    <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
      <LinkButton linkname="About" icon={LuUser} />
    </li>

    <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
      <LinkButton linkname="Experience" icon={LuBriefcase} />
    </li>

    <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
      <LinkButton linkname="Projects" icon={LuSquareKanban} />
    </li>

    {/* <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
        <LinkButton 
          linkname="Stack"
          icon={Layers}
        />
      </li> */}

    <li className="flex items-center  h-12 text-gray-500 hover:bg-gray-300 hover:text-gray-700 rounded-full cursor-pointer">
      <LinkButton linkname="Contact" icon={LuMailOpen} />
    </li>
  </ul>
);

export default NavItems;
