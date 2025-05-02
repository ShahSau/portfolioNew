import { useAnimation, useInView, motion } from "framer-motion";
import { Github, SquareArrowUpRight, Youtube } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import ProjectDetails from "./ProjectDetails";
import Details from "./Details";
import { IProject } from "../../app/types/project";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
  time: number;
  youtubeLink: string;
}

const Project = ({
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
  time,
  modalContent,
  youtubeLink,
}: Props): JSX.Element => {
  const [hovered, setHovered] = useState(false);

  const [open, setOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectData: IProject = {
    id: title,
    title: title,
    description: modalContent,
    imageUrl: imgSrc,
    links: [
      {
        type: "github",
        url: code,
      },
      {
        type: "youtube",
        url: youtubeLink,
      },
      {
        type: "demo",
        url: projectLink,
      },
    ],
    technologies: tech.map((tech) => ({ name: tech, color: getRandomColor() })),
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 + time }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setOpen(true)}
          className="w-full aspect-[16/9] bg-background-light cursor-pointer relative rounded-lg overflow-hidden"
        >
          <img
            src={imgSrc}
            alt={`${title} project.`}
            width={hovered ? 100 : 85}
            height={hovered ? 100 : 85}
            className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] transition-all duration-200 rounded"
            style={{
              width: hovered ? "100%" : "85%",
              height: hovered ? "100%" : "90%",
              rotate: hovered ? "0.5deg" : "0deg",
            }}
          />
        </div>
        <div className="my-4">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-md flex-shrink-0 max-w-[calc(100%-150px)]">
              {title}
            </h4>
            <div className="w-full h-px bg-gray-700 opacity-30" />

            <Link
              href={code}
              target="_blank"
              rel="nofollow"
              className="opacity-75 transition-opacity duration-200 hover:opacity-100 hover:text-gray-900"
            >
              <Github size="1.4rem" />
            </Link>

            {projectLink !== "" && (
              <Link
                href={projectLink}
                target="_blank"
                rel="nofollow"
                className="opacity-75 transition-opacity duration-200 hover:opacity-100 hover:text-blue-500"
              >
                <SquareArrowUpRight size="1.4rem" />
              </Link>
            )}

            {youtubeLink !== "" && (
              <Link
                href={""}
                target="_blank"
                rel="nofollow"
                className="opacity-75 transition-opacity duration-200 hover:opacity-100 hover:text-red-500"
              >
                <Youtube size="1.4rem" />
              </Link>
            )}
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600 my-2">
            {tech.join(" - ")}
          </div>
          <p className="font-medium inline-block text-sm text-brand cursor-pointer">
            {description}{" "}
            <span onClick={() => setOpen(true)} className=" text-blue-500 ml-2">
              Details {">"}
            </span>
          </p>
        </div>
      </motion.div>

      <ProjectDetails open={open} setOpen={setOpen}>
        <Details project={projectData} />
      </ProjectDetails>
    </>
  );
};

export default Project;
