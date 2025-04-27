import { motion } from "framer-motion";
import { Icon } from "lucide-react";
import React, { useRef, useState } from "react";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "abcdefghijklmnopqrstuvwxyz";

const LinkButton: React.FC<{ icon: typeof Icon; linkname: string }> = ({
  icon,
  linkname,
}) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const TARGET_TEXT = linkname;
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = (): void => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = (): void => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

  return (
    <motion.a
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      href={`#${linkname.toLowerCase()}`}
      className="group relative overflow-hidden rounded-lg px-4 py-2 transition-colors hover:text-indigo-500"
    >
      <div className="relative z-10 flex items-center gap-2 cursor-pointer">
        <span className="ml-3 mr-2">{React.createElement(icon)}</span>
        <span>{text}</span>
      </div>
    </motion.a>
  );
};

export default LinkButton;
