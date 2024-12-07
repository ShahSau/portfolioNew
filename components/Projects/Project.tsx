
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  useAnimation, useInView, motion
} from "framer-motion";
import { Github,SquareArrowUpRight,Youtube } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState, Dispatch, ReactNode, SetStateAction,  } from "react";
import useMeasure from "react-use-measure";
import DragCloseDrawerExample from "./try";
import ProjectDetails from "./ProjectDetails";
//import ProjectModal from './ProjectModal';


interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
    time: number;
}

const Project=({
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
  time
}: Props): JSX.Element => {
  const [hovered, setHovered] = useState(false);

  const [open, setOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        transition={{ duration: 0.75+ time }}
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
        <div className="my-4" onClick={()=>setOpen(true)}>  
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-md flex-shrink-0 max-w-[calc(100%-150px)]">{title}</h4>
              <div  className="w-full h-px bg-gray-700 opacity-30"/>

              <Link href={code} target="_blank" rel="nofollow" className="opacity-75 transition-opacity duration-200 hover:opacity-100 hover:text-gray-900">
                <Github size="1.4rem" />
              </Link>

              {projectLink !== "" && (
              <Link href={projectLink} target="_blank" rel="nofollow" className="opacity-75 transition-opacity duration-200 hover:opacity-100 hover:text-blue-500">
                <SquareArrowUpRight size="1.4rem" />
              </Link>
              )}

              <Link href={""} target="_blank" rel="nofollow" className="opacity-75 transition-opacity duration-200 hover:opacity-100 hover:text-red-500">
                <Youtube size="1.4rem" />
               </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600 my-2">
                {tech.join(" - ")}
            </div>
            <p className="font-medium inline-block text-sm text-brand cursor-pointer">
              {description}
              {" "}
              <span onClick={() => setOpen(true)} className=" text-blue-500 ml-2">
                Learn more {" "}
                {">"}
              </span>
            </p>
            
        </div>
      </motion.div>


      <ProjectDetails open={open} setOpen={setOpen} >
                <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        Drag the handle at the top of this modal downwards 100px to close it
                    </h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                        laboriosam quos deleniti veniam est culpa quis nihil enim suscipit
                        nulla aliquid iure optio quaerat deserunt, molestias quasi facere
                        aut quidem reprehenderit maiores.
                    </p>
                    <p>
                        Laudantium corrupti neque rerum labore tempore sapiente. Quos, nobis
                        dolores. Esse fuga, cupiditate rerum soluta magni numquam nemo
                        aliquid voluptate similique deserunt!
                    </p>
                    <p>
                        Rerum inventore provident laboriosam quo facilis nisi voluptatem
                        quam maxime pariatur. Velit reiciendis quasi sit magni numquam quos
                        itaque ratione, fugit adipisci atque est, tenetur officiis explicabo
                        id molestiae aperiam? Expedita quidem inventore magni? Doloremque
                        architecto mollitia, dicta, fugit minima velit explicabo sapiente
                        beatae fugiat accusamus voluptatum, error voluptatem ab asperiores
                        quo modi possimus.
                    </p>
                    <p>
                        Sit laborum molestias ex quisquam molestiae cum fugiat praesentium!
                        Consequatur excepturi quod nemo harum laudantium accusantium nisi
                        odio?
                    </p>
                    <p>
                        Deleniti, animi maiores officiis quos eaque neque voluptas omnis
                        quia error a dolores, pariatur ad obcaecati, vitae nisi perspiciatis
                        fugiat sapiente accusantium. Magnam, a nihil soluta eos vero illo ab
                        sequi, dolores culpa, quia hic?
                    </p>
                    <p>
                        Eos in saepe dignissimos tempore. Laudantium cumque eius, et
                        distinctio illum magnam molestiae doloribus. Fugiat voluptatum
                        necessitatibus vero eligendi quae, similique non debitis qui veniam
                        praesentium rerum labore libero architecto tempore nesciunt est
                        atque animi voluptatibus. Aliquam repellendus provident tempora
                        sequi officia sint voluptates eaque minima suscipit, cum maiores
                        quos possimus. Vero ex porro asperiores voluptas voluptatibus?
                    </p>
                    <p>
                        Debitis eos aut ullam odit fuga. Numquam deleniti libero quas sunt?
                        Exercitationem earum odio aliquam necessitatibus est accusamus
                        consequuntur nisi natus dolore libero voluptatibus odit doloribus
                        laudantium iure, dicta placeat molestias porro quasi amet? Sint,
                        reiciendis tenetur distinctio eaque delectus, maiores, nihil
                        voluptas dolorem necessitatibus consequatur aliquid?
                    </p>
                    <p>
                        Sunt ex, cum culpa vel odio dicta expedita omnis amet debitis
                        inventore necessitatibus quaerat est molestias delectus. Dolorem,
                        eius? Quae, itaque ipsa incidunt nobis repellendus, sunt dolorum
                        aliquam ad culpa repudiandae impedit omnis, expedita illum voluptas
                        delectus similique ducimus saepe pariatur. Molestias similique quam
                        dolore provident doloremque maiores autem ab blanditiis voluptatum
                        dignissimos culpa sed nesciunt laboriosam, in dicta consectetur.
                    </p>
                    <p>
                        Voluptates ea, aspernatur possimus, iusto temporibus non laudantium
                        neque molestias rem tempore eligendi earum nisi dolorum asperiores
                        at rerum!
                    </p>
                    <p>
                        Eaque totam error quia, ut eius perspiciatis unde velit temporibus
                        mollitia. Aperiam ad tempora aliquam est molestias commodi
                        cupiditate quos impedit nostrum accusantium quo fugit eveniet
                        temporibus quam cumque autem porro, id ut debitis itaque et nemo
                        exercitationem voluptatibus? Aspernatur corrupti quas iusto dolores
                        nemo pariatur debitis quae dolorem! Nemo, eius? Dolorem quam nemo
                        magnam ratione deserunt aperiam. Voluptatum ipsa, molestias
                        aspernatur quas distinctio numquam qui laboriosam id ab totam
                        commodi laborum tempora error natus vitae eligendi reiciendis
                        maiores ex illo? Tempore at animi earum vitae enim sunt,
                        dignissimos, mollitia corrupti officia obcaecati error iure vero
                        repudiandae nihil magni molestias quibusdam dolorem aperiam modi.
                        Harum, fugit.
                    </p>
                </div>
      </ProjectDetails>
    </>
  );
}

export default Project;
