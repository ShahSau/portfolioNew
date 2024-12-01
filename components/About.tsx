"use client"
import React from "react";
import {  motion } from "framer-motion";
import HeaderBlock from "./About/HeaderBlock";
import SocialsBlock from "./About/SocialsBlock";
import AboutBlock from "./About/AboutBlock";
import LocationBlock from "./About/LocationBlock";
import EmailListBlock from "./About/EmailListBlock";

export const About = () => {
  return (
    <div className=" bg-zinc-100 px-4 py-12 text-zinc-50">
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





