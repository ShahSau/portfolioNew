"use client"
import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Github, Twitter,Linkedin,Mail,MapPin,Smartphone,Download } from "lucide-react";


export const About = () => {
  return (
    <div className=" bg-zinc-900 px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>

    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
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
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-8">
    <h1 className="mb-12 text-xl font-medium leading-tight">
      Welcome to my digital realm! I am an experienced Full Stack Developer with a robust background in both frontend and backend development, I thrive in crafting seamless, user-centric applications, troubleshooting simple/complex issues. I have a versatile skill set, ranging from crafting pixel-perfect user interfaces to architecting resilient server-side systems. I believe in the power of clean code, agile methodologies, and collaborative development practices.
    </h1>
    
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        // rotate: "0.5deg",
        scale: 1.1,
      }}
      className="col-span-12  md:col-span-4 grid grid-flow-col gap-4"
    >
      <a
        href="#"
        className="grid place-content-center text-3xl text-white hover:text-[#0077b5]"
      >
        <Linkedin />
      </a>
      <a
        href="#"
        className="grid  place-content-center text-3xl text-white hover:text-gray-900"
      >
        <Github />
      </a>
      <a
        href="#"
        className="grid  place-content-center text-3xl text-white hover:text-[#1DA1F2]"
      >
        <Twitter />
      </a>
    </Block>
    
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I&apos;ve made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-4">
    <MapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Helsinki, Finland</p>
  </Block>
);

const EmailListBlock = () => (
  <>
    <Block className="group col-span-12 flex flex-col items-center gap-4 md:col-span-4">
        <Smartphone className="text-5xl relative top-4 transition-all duration-300 ease-in-out group-hover:-translate-y-12 group-hover:opacity-0" />
        <p className="text-center transition-all duration-200  opacity-0 text-lg text-zinc-400 group-hover:-translate-y-4 group-hover:opacity-100">+358452249949</p>
    </Block>
    <Block className="group col-span-12 flex flex-col items-center gap-4 md:col-span-4">
        <Mail className="text-5xl relative top-4 transition-all duration-300 ease-in-out group-hover:-translate-y-12 group-hover:opacity-0" />
        <p className="text-center transition-all duration-200  opacity-0 text-lg text-zinc-400 group-hover:-translate-y-4 group-hover:opacity-100">shahriarksaurov@gmail.com</p>
    </Block>
    <Block className="group col-span-12 flex flex-col items-center gap-4 md:col-span-4">
        <Download className="text-3xl relative top-4 transition-all duration-300 ease-in-out group-hover:-translate-y-12 group-hover:opacity-0" />
        <button className="text-center transition-all duration-200  opacity-0 text-lg text-zinc-400 group-hover:-translate-y-4 group-hover:opacity-100">Download CV</button>
    </Block>
  </>
);


