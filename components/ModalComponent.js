/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ModalComponent = ({ isOpen, onClose, project }) => {
   // Nonaktifkan scroll saat modal terbuka
   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "";
      }
      return () => {
         document.body.style.overflow = "";
      };
   }, [isOpen]);

   const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
         onClose();
      }
   };

   return (
      <AnimatePresence>
         {isOpen && project && (
            <motion.div
               className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
               onClick={handleBackdropClick}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
            >
               <motion.div
                  className="bg-white dark:bg-dark rounded-2xl shadow-lg max-w-2xl w-full overflow-hidden relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
               >
                  {/* Tombol Close */}
                  <button
                     onClick={onClose}
                     className="absolute top-4 right-4 bg-gray-800 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-900 transition"
                  >
                     ✕
                  </button>

                  {/* Gambar */}
                  <img
                     src={project.thubmnail}
                     alt={project.alt}
                     className="w-full h-64 object-cover"
                  />

                  {/* Konten */}
                  <div className="p-6">
                     {/* Title + Icons */}
                     <div className="flex items-center justify-between mb-3 gap-2">
                        <div className="text-xl font-bold">{project.title}</div>
                        <div className="flex items-center gap-2 text-xs">
                           {project.website && (
                              <a
                                 href={project.website}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-1 px-3 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                              >
                                 <FaGlobe className="w-4" />
                                 <span>Website</span>
                              </a>
                           )}
                           {project.link && (
                              <a
                                 href={project.link}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-1 px-3 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                              >
                                 <FaGithub className="w-4" />
                                 <span>GitHub</span>
                              </a>
                           )}
                        </div>
                     </div>

                     {/* Description */}
                     <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-justify">
                        {project.excerpt}
                     </p>

                     {/* Tech Stack */}
                     <h3 className="mb-2 text-sm font-bold text-accents-300 dark:text-white/80">
                        Technologies:
                     </h3>
                     <div className="flex flex-wrap gap-2 mb-4">
                        {project.techs.map((tech, index) => (
                           <span
                              key={index}
                              className="px-3 py-1 border border-orange-500/40 bg-orange-500/10  text-orange-500 transition-colors hover:bg-orange-500/20 text-xs rounded-full"
                           >
                              {tech}
                           </span>
                        ))}
                     </div>
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default ModalComponent;
