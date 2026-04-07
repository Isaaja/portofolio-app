/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const ProjectCard = ({ porto, index, onOpen }) => {
   const [hovered, setHovered] = useState(false);

   return (
      <div
         className="group border border-black p-3 overflow-auto rounded-lg shadow hover:shadow-lg transition-[transform,shadow] dark:border-white hover:-translate-y-1 duration-200 ease-in cursor-pointer"
         onClick={() => onOpen(porto)}
      >
         <div
            style={{
               position: "relative",
               width: "100%",
               paddingBottom: "56.25%",
            }}
         >
            <div
               className="overflow-hidden rounded-[0.60rem] bg-accent ring-1 ring-black dark:ring-white/40"
               style={{ position: "absolute", inset: "0px" }}
            >
               <img
                  alt={porto.alt}
                  src={porto.thubmnail}
                  className="w-full h-52 object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
               />
            </div>
         </div>
         <div className="mt-4 rounded-lg">
            <div className="line-clamp-1 dark:text-white">
               <span className="transition duration-300 ease-in-out">
                  {porto.title}
               </span>
            </div>
            <div className="mb-4 mt-2 line-clamp-2 text-sm text-slate-400">
               {porto.excerpt}
            </div>
            <div className="flex flex-wrap items-center gap-2">
               {porto.techs?.map((tech, idx) => (
                  <div
                     key={idx}
                     className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-2.5 py-0.5 text-xs font-medium tracking-tight text-orange-500 transition-colors hover:bg-orange-500/20 focus:outline-none cursor-default"
                  >
                     {tech}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProjectCard;
