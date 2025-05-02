"use client";

import { FC, useRef } from "react";
interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
}
const Tab: FC<TabProps> = ({ children, setPosition }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      href={`#${typeof children === "string" ? children.toLowerCase() : ""}`}
      className="relative z-10 block cursor-pointer px-1 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </a>
  );
};

export default Tab;
