"use client";

import Image from "next/image"
import VerticalCarousel  from "../../components/VerticalCarousel";
import { useState } from "react";
import { motion } from "framer-motion";



export default function Hero() {
    const [isHovered, setIsHovered] = useState(false)

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
    }
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="font-normal">I&apos;m </span>
              <span className="italic text-gray-500">Shahriar</span>
            </h1>
            <div className="relative w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden group">
                <span className="">
                    <Image
                        src="/images/image.jpg"
                        alt="Profile"
                        fill
                        className="object-cover"
                    />
                </span>
                <span className="absolute inset-0 border-4 border-transparent rounded-full group-hover:border-t-[#0eb7da] group-hover:border-r-[#0eb7da] group-hover:border-b-[#0eb7da] transition-[border-color] duration-[0.15s] ease-linear group-hover:delay-[0s,0.1s,0.2s]"></span>
                <span className="absolute inset-0 border-4 border-transparent rounded-full group-hover:border-t-[#0eb7da] group-hover:border-l-2 group-hover:border-r-2 group-hover:rotate-[261deg] transition-transform duration-[0.4s] ease-linear group-hover:delay-[0s,0.35s,0s]"></span>
            </div>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">,</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">a Software</span>
            <div className="relative w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-xl sm:rounded-2xl overflow-hidden">
              <VerticalCarousel  />
            </div>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-gray-500">Developer</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">based in Finland</span>
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-xl sm:rounded-2xl overflow-hidden">
                <motion.div
                    className="p-4 w-full h-full shadow-lg cursor-pointer"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    animate={isHovered ? "heartbeat" : "idle"}
                    variants={heartbeatVariants}
                    aria-label={isHovered ? "Animated beating heart" : " icon"}
                >
                    <Image
                        src="/images/finland.png"
                        alt="Finland"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
          </div>


          <p className="text-gray-600 text-base sm:text-md md:text-lg mt-6 sm:mt-8 md:mt-12 w-3/4 mx-4">
            Innovative, task-driven experienced fullstack developer with a passion for turning complex challenges into elegant solutions.
          </p>

        </div>
      </div>
    </div>
  )
}

