"use client";

import React, { FC } from "react";
import Link from "next/link";

const SocialLink: FC<{ link: string, Icon: any, arialabel: string }> = ({ link, Icon, arialabel }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300  hover:shadow-zinc-400 dark:hover:shadow-zinc-600"
      aria-label={arialabel}
    >
      <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
    </Link>
  );
};

export default SocialLink;
