"use client";

import React from "react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import Link from "next/link";
import NavItems from "./NavItems";

export function Sidebar(): JSX.Element {
  return (
    <>
      <aside className="hidden lg:block w-52 p-4 h-screen fixed overflow-hidden">
        {/* Name and profession */}
        <div className="mb-8">
          <div className="ml-4 p-6">
            <h2 className="text-[20px] font-bold">Shahriar Saurov</h2>
            <p className="text-sm text-gray-600 pt-2 pl-2">
              Software Developer
            </p>
          </div>
          <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-25" />
        </div>

        {/* Nav items */}
        <nav>
          <NavItems />
        </nav>

        {/* Social links */}
        <div className="absolute bottom-6">
          <hr className="my-6 w-56 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-25" />
          <div className="flex space-x-12 justify-center items-center">
            <Link
              href="https://github.com/ShahSau"
              passHref
              rel="noopener noreferrer"
              target="_blank"
            >
              <LuGithub className="h-6 w-6 cursor-pointer hover:text-gray-900 text-gray-500" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shahriar-saurov/"
              passHref
              rel="noopener noreferrer"
              target="_blank"
            >
              <LuLinkedin className="h-6 w-6 cursor-pointer hover:text-[#0077b5] text-gray-500" />
            </Link>
          </div>
        </div>
      </aside>
      {/* Vertical Line */}
      <div className="hidden lg:block fixed left-56 top-0 h-screen w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent opacity-25" />
    </>
  );
}
