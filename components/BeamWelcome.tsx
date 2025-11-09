import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import React, { useEffect } from "react";

const BeamWelcome = ({ text }: { text: string }) => {
  const turn = useMotionValue(0);

  useEffect(() => {
    animate(turn, 1, {
      ease: "linear",
      duration: 5,
      repeat: Infinity,
    });
  });

  const backgroundImage = useMotionTemplate`conic-gradient(from ${turn}turn, transparent 75%, var(--beam-color) 100%)`;

  return (
    <div className="flex items-center justify-center px-6 pt-4 pb-8">
      <div className="relative flex w-full max-w-md items-center justify-center gap-2 rounded-full border border-black/20 dark:border-white/20 py-4 px-6">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {text}
        </span>

        <div className="pointer-events-none absolute inset-0 z-10 rounded-full">
          <motion.div
            style={{
              backgroundImage,
            }}
            className="mask-with-browser-support absolute -inset-[1px] rounded-full border border-transparent bg-origin-border [--beam-color:theme(colors.blue.500)] dark:[--beam-color:#a78bfa]"
          />
        </div>
      </div>
    </div>
  );
};

export default BeamWelcome;
