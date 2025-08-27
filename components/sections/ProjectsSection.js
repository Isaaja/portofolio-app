/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { portos } from "../utilities/data-portofolio";
import ModalComponent from "../ModalComponent";

const ProjectsSection = () => {
  const [isHoveredIndex, setIsHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <section className="pb-10 xl:pt-36 xl:pb-36 transition duration-300 ease-in-out dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4
                className="mb-2 text-lg font-semibold uppercase text-primary"
                id="projects"
              >
                Project
              </h4>
              <h2 className="mb-2 text-2xl font-bold text-dark dark:text-white sm:text-3xl lg:text-5xl">
                All Projects
              </h2>
            </div>
          </div>
        </div>
        <div className="justify-items-center grid gap-y-12 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 sm:gap-10 lg:gap-y-24 px-4">
          {portos.map((porto, index) => (
            <div
              key={index}
              className="border border-black p-3 overflow-auto rounded-lg shadow hover:shadow-lg transition-[transform, shadow] hover:-translate-y-1 duration-200 ease-in cursor-pointer"
              onClick={() => openModal(porto)}
            >
              {/* Thumbnail */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%",
                }}
              >
                <div
                  className="ring-border/50 overflow-hidden rounded-[0.60rem] bg-accent font-mono text-sm ring-1 ring-black dark:ring-white"
                  style={{ position: "absolute", inset: "0px" }}
                >
                  <img
                    alt={porto.alt}
                    src={porto.thubmnail}
                    className={`transition w-full duration-300 ease-in-out hover:scale-110 h-52 object-cover object-center ${
                      isHoveredIndex === index ? "scale-110" : ""
                    }`}
                    onMouseEnter={() => setIsHoveredIndex(index)}
                    onMouseLeave={() => setIsHoveredIndex(null)}
                  />
                </div>
              </div>

              {/* Text */}
              <div className="mt-4 rounded-lg">
                <div className="line-clamp-1 dark:text-white">
                  <span
                    className={`hover:text-primary transition duration-300 ease-in-out ${
                      isHoveredIndex === index ? "text-primary" : ""
                    }`}
                  >
                    {porto.title}
                  </span>
                </div>
                <div className="mb-4 mt-2 line-clamp-2 text-sm text-slate-400">
                  {porto.excerpt}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {porto.techs?.map((tech, idx) => (
                    <div
                      className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-2.5 py-0.5 text-xs font-medium tracking-tight text-orange-500 transition-colors hover:bg-orange-500/20 focus:outline-none cursor-default"
                      key={idx}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
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
