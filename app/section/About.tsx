"use client";

import { motion } from "framer-motion";
import React, { FC } from "react";
import AboutBlock from "../../components/About/AboutBlock";
import EmailListBlock from "../../components/About/EmailListBlock";
import HeaderBlock from "../../components/About/HeaderBlock";
import LocationBlock from "../../components/About/LocationBlock";
import SocialsBlock from "../../components/About/SocialsBlock";
import Header from "@/components/Header";

const About: FC = () => {
  return (
    <div
      className="bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12 text-zinc-500"
      id="about"
    >
      <Header
        tag="About Me"
        title="A Glimpse Into My World"
        desc0="Learn more about who I am, What I do and what inspires me."
        desc1="Let's connect and explore the possibilities together!"
        desc2="I am always open to new opportunities and collaborations."
      />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.3,
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

export default About;
