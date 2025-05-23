"use client";
import { MotionProps, motion } from "framer-motion";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

type BlockProps = {
  className?: string;
} & MotionProps;

const Block: FC<BlockProps> = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-200 bg-zinc-100 p-6",
        className
      )}
      {...rest}
    />
  );
};

export default Block;
