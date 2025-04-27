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

export function Sidebar(): JSX.Element {
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

  return (
    <>
      <aside className="hidden md:block w-64 p-4 h-screen fixed overflow-hidden">
        {/**name and profession */}
        <div className="mb-8">
          <div className="ml-4 p-6">
            <h2 className="text-[20px] font-bold ">Shahriar Saurov</h2>
            <p className="text-sm text-gray-600 pt-2 pl-2">
              Software Developer
            </p>
          </div>
          <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-25" />
        </div>

        {/**nav items */}
        <nav>
          <NavItems />
        </nav>

        {/**social links */}
        <div className="absolute bottom-6">
          <hr className="my-6 w-56 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-25" />
          <div className="flex space-x-12 justify-center items-center">
            <Link href="" passHref>
              <Github className="h-6 w-6 cursor-pointer hover:text-gray-900 text-gray-500" />
            </Link>
            <Link href="" passHref>
              <Linkedin className="h-6 w-6 cursor-pointer hover:text-[#0077b5] text-gray-500" />
            </Link>
          </div>
        </div>

        {/**vertical line */}
        <div className="fixed ml-60 -mt-[420px] h-[870px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-700 to-transparent opacity-25"></div>
      </aside>
    </>
  );
}
