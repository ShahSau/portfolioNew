import React from "react";
import Typewrite from "./TypeWrite";

const Header = ({
  tag,
  title,
  desc0,
  desc1,
  desc2,
}: {
  tag: string;
  title: string;
  desc0: string;
  desc1: string;
  desc2: string;
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-center">
        <p className="uppercase text-xl font-semibold tracking-widest bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
          {tag}
        </p>
      </div>

      <h2 className="font-serif text-3xl text-center mt-6">{title}</h2>
      <div className="text-center text-lg text-black/60 mt-4">
        <Typewrite lines={[desc0, desc1, desc2]} />
      </div>
    </div>
  );
};

export default Header;
