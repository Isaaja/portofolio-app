import { useState } from "react";
import { websitePorto, aiPorto } from "../../data/portfolio";
// import { journalPorto } from "../utilities/data-portofolio";

import ModalComponent from "../ModalComponent";
import ProjectCard from "../ProjectCard";

const ProjectsSection = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedProject, setSelectedProject] = useState(null);
   const [activeCategory, setActiveCategory] = useState("All");

   const openModal = (project) => {
      setSelectedProject(project);
      setIsOpen(true);
   };

   // 🔥 Gabungkan semua project + category
   const ALL_PROJECTS = [
      ...websitePorto.map((item) => ({
         ...item,
         category: "Website",
      })),
      ...aiPorto.map((item) => ({
         ...item,
         category: "AI",
      })),
      // kalau ada journal
      // ...journalPorto.map((item) => ({
      //    ...item,
      //    category: "Journal",
      // })),
   ];

   // 🔍 Filter
   const filteredProjects =
      activeCategory === "All"
         ? ALL_PROJECTS
         : ALL_PROJECTS.filter(
              (project) => project.category === activeCategory,
           );

   return (
      <section className="pb-10 xl:pt-36 xl:pb-24 transition duration-300 ease-in-out dark:bg-dark">
         <div className="container">
            {/* 🔥 Title */}
            <div className="w-full px-4 text-center mx-auto">
               <h4
                  className="text-lg font-semibold uppercase text-primary"
                  id="projects"
               >
                  Featured Work
               </h4>
               <h1
                  className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-3xl lg:text-5xl"
                  id="projects"
               >
                  Projects
               </h1>
            </div>

            {/* 🔥 Tabs */}
            <div className="flex justify-center gap-4 mb-10 flex-wrap mt-6">
               {["All", "Website", "AI"].map((category) => (
                  <button
                     key={category}
                     onClick={() => setActiveCategory(category)}
                     className={`px-5 py-2 rounded-full border transition duration-300
                        ${
                           activeCategory === category
                              ? "bg-primary text-white shadow-md scale-105"
                              : "bg-transparent text-dark dark:text-white border-gray-400 hover:bg-primary hover:text-white hover:scale-105"
                        }
                     `}
                  >
                     {category}
                  </button>
               ))}
            </div>

            {/* 🔥 Grid */}
            <div className="grid justify-center items-center gap-y-12 sm:grid-cols-2 xl:grid-cols-3 sm:gap-10 lg:gap-y-24 px-4">
               {filteredProjects.length > 0 ? (
                  filteredProjects.map((porto, index) => (
                     <ProjectCard
                        key={index}
                        porto={porto}
                        index={index}
                        onOpen={openModal}
                     />
                  ))
               ) : (
                  <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
                     No projects found.
                  </p>
               )}
            </div>

            {/* 🔥 Modal */}
            <ModalComponent
               isOpen={isOpen}
               onClose={() => setIsOpen(false)}
               project={selectedProject}
            />
         </div>
      </section>
   );
};

export default ProjectsSection;
