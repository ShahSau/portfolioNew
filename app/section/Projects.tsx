"use client";

import React, { FC, useEffect, useState } from "react";
import OutlineButton from "@/components/Projects/OutlineButton";
import ProjectButton from "@/components/Projects/ProjectButton";
import projects from "@/components/Projects/ProjectsData";
import Project from "@/components/Projects/Project";
import Header from "@/components/Header";

const Projects: FC = () => {
  const [displayedProjects, setDisplayedProjects] = useState(
    projects.slice(0, 3)
  );
  const [selected, setSelected] = useState("FullStack");
  useEffect(() => {
    return setDisplayedProjects(
      projects.filter((project) => project.type === "FullStack")
    );
  }, []);
  return (
    <section
      className="relative p-24 overflow-hidden md:p-[7.2rem_2.4rem] bg-gradient-to-br from-gray-50 to-gray-100"
      id="projects"
    >
      <Header
        tag="My Projects"
        title="A Showcase of My Work"
        desc0="Explore my projects and the technologies I love."
        desc1="Each project reflects my skills and passion for coding."
        desc2="From web applications to mobile apps, I enjoy building solutions."
      />
      <ul
        role="list"
        className="mt-3 grid grid-cols-2 gap-5 md:grid-cols-4 mb-12"
      >
        {["FullStack", "Frontend", "Backend", "Mobile"].map((type) => (
          <li key={type} className="col-span-1 flex rounded-md shadow-sm">
            {selected === type ? (
              <ProjectButton>{type}</ProjectButton>
            ) : (
              <OutlineButton
                onClick={() => {
                  setSelected(type);
                  setDisplayedProjects(
                    projects.filter((project) => project.type === type)
                  );
                }}
              >
                {type}
              </OutlineButton>
            )}
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <Project key={project.title} {...project} time={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
