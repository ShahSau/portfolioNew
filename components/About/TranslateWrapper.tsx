import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

const TranslateWrapper: FC<{ reverse?: boolean; children?: ReactNode }> = ({
  children,
  reverse,
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};
export default TranslateWrapper;
