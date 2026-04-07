import { useState } from "react";
import { websitePorto, aiPorto } from "../utilities/data-portofolio";
import ModalComponent from "../ModalComponent";
import ProjectCard from "../ProjectCard";

const SECTIONS = [
   { title: "Website Projects", data: websitePorto },
   { title: "AI Projects", data: aiPorto },
];

const ProjectsSection = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedProject, setSelectedProject] = useState(null);

   const openModal = (project) => {
      setSelectedProject(project);
      setIsOpen(true);
   };

   return (
      <section className="pb-10 xl:pt-36 xl:pb-36 transition duration-300 ease-in-out dark:bg-dark">
         <div className="container">
            <div className="w-full px-4 text-center mx-auto mb-16">
               <h4
                  className="mb-2 text-lg font-semibold uppercase text-primary"
                  id="projects"
               >
                  Project
               </h4>
            </div>

            {SECTIONS.map(({ title, data }) => (
               <div key={title} className="mb-16">
                  <h2 className="mb-10 text-center text-2xl font-bold text-dark dark:text-white sm:text-3xl lg:text-5xl">
                     {title}
                  </h2>
                  <div className="grid justify-center items-center gap-y-12 sm:grid-cols-2 xl:grid-cols-3 sm:gap-10 lg:gap-y-24 px-4">
                     {data.map((porto, index) => (
                        <ProjectCard
                           key={index}
                           porto={porto}
                           index={index}
                           onOpen={openModal}
                        />
                     ))}
                  </div>
               </div>
            ))}

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
