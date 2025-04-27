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
    <div className="lg:hidden px-28 w-full backdrop-blur-md sticky top-0 py-2 z-40 ">
      <SlideTabs />
    </div>
  );
};
