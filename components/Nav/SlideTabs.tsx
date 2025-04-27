"use client";

import { FC, useState } from "react";
import Tab from "./Tab";
import Cursor from "./Cursor";

const SlideTabs: FC = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-2"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>About</Tab>
      <Tab setPosition={setPosition}>Experience</Tab>
      <Tab setPosition={setPosition}>Projects</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>

      <Cursor position={position} />
    </ul>
  );
};

export default SlideTabs;
