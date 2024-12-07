"use client"

import React, { FC, useEffect, useState } from "react";
import OutlineButton from "@/components/Projects/OutlineButton";
import ProjectButton from "@/components/Projects/ProjectButton";
import projects from "@/components/Projects/ProjectsData";
import Project from "@/components/Projects/Project";


const Projects: FC =()=> {
  const [displayedProjects, setDisplayedProjects] = useState(projects.slice(0, 3));
  const [selected, setSelected] = useState("FullStack");
  useEffect(() => {
    return setDisplayedProjects(projects.filter((project) => project.type === "FullStack"));
  }, []);
  return (
    <section className="relative p-24 overflow-hidden md:p-[7.2rem_2.4rem]" id="projects">
        <ul role="list" className="mt-3 grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-4 mb-12">
          {
            ["FullStack", "Backend", "Frontend", "Mobile"].map((type) => (
              <li key={type} className="col-span-1 flex rounded-md shadow-sm">
                {
                  selected === type ? (
                    <ProjectButton onClick={() => {
                      setSelected(type);
                      setDisplayedProjects(projects.filter((project) => project.type === type));
                    }}
                    
                    >
                      {type}
                    </ProjectButton>
                  ) : (
                    <OutlineButton onClick={() => {
                      setSelected(type);
                      setDisplayedProjects(projects.filter((project) => project.type === type));
                    }}>
                      {type}
                    </OutlineButton>
                  )
                }
              </li>
            ))
          }
        </ul>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project,index) => <Project key={project.title} {...project} time={index}/>)}
      </div>
    </section>
  );
}

export default Projects;
