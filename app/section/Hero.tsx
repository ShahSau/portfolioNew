"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, FC } from "react";
import VerticalCarousel from "../../components/Hero/VerticalCarousel";
import ScrollIndicator from "../../components/Hero/ScrollIndicator";

const Hero: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const heartbeatVariants = {
    idle: { scale: 1 },
    heartbeat: {
      scale: [1, 1.2, 1, 1.2, 1],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };
  return (
    <div
      id="home"
      className="min-h-[100vh] w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6"
    >
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              <span className="font-normal">I&apos;m </span>
              <span className="italic text-gray-500">Shahriar</span>
            </h1>
            <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden group">
              <span className="">
                <Image
                  src="/images/image.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </span>
              <span className="absolute inset-0 border-4 border-transparent rounded-full group-hover:border-t-[#0eb7da] group-hover:border-r-[#0eb7da] group-hover:border-b-[#0eb7da] transition-[border-color] duration-[0.15s] ease-linear group-hover:delay-[0s,0.1s,0.2s]"></span>
              <span className="absolute inset-0 border-4 border-transparent rounded-full group-hover:border-t-[#0eb7da] group-hover:border-l-2 group-hover:border-r-2 group-hover:rotate-[260deg] transition-transform duration-[0.4s] ease-linear group-hover:delay-[0s,0.35s,0s]"></span>
            </div>
            <span className="text-4xl md:text-5xl lg:text-6xl">,</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
            <span className="text-4xl md:text-5xl lg:text-6xl">a Software</span>
            <div className="relative w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-xl md:rounded-2xl overflow-hidden">
              <VerticalCarousel />
            </div>
            <span className="text-4xl md:text-5xl lg:text-6xl italic text-gray-500">
              Developer
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
            <span className="text-4xl md:text-5xl lg:text-6xl">
              based in Germany
            </span>
            <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden">
              <motion.div
                className="p-4 w-full h-full shadow-lg cursor-pointer"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                animate={isHovered ? "heartbeat" : "idle"}
                variants={heartbeatVariants}
                aria-label={isHovered ? "Animated beating heart" : " icon"}
              >
                <Image
                  src="/images/germany.png"
                  alt="Germany"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2">
            <p className="text-gray-600 text-xl mt-8 md:mt-12 w-3/4 mx-4">
              Innovative, task-driven experienced fullstack developer with a
              passion for turning complex challenges into elegant solutions.
            </p>
          </div>
          <ScrollIndicator />
        </div>
      </div>
    </div>
  );
};

export default Hero;
