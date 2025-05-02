"use client";

import React, { FC } from "react";
import SlideTabs from "./SlideTabs";

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
}

export const SlideTabsAll: FC = () => {
  return (
    <div className="block lg:hidden md:px-28 p-0 w-full backdrop-blur-md top-0 md:sticky py-2 z-40 ">
      <SlideTabs />
    </div>
  );
};
