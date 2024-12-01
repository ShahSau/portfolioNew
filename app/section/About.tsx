"use client"
import React from "react";
import {  motion } from "framer-motion";
import HeaderBlock from "../../components/About/HeaderBlock";
import SocialsBlock from "../../components/About/SocialsBlock";
import AboutBlock from "../../components/About/AboutBlock";
import LocationBlock from "../../components/About/LocationBlock";
import EmailListBlock from "../../components/About/EmailListBlock";

const About = () => {
  return (
    <div className=" bg-zinc-100 px-4 py-12 text-zinc-50">
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




