/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

const HomePage = () => {
   const [portos, setPortos] = useState([]);
   const [activeIndex, setActiveIndex] = useState(0);

   useEffect(() => {
      const items = document.querySelectorAll(".skill-item");

      const animateGrayscale = () => {
         if (items.length === 0) return;

         if (activeIndex < items.length) {
            const item = items[activeIndex];
            const icon = item.querySelector(".skill-icon");
            const tooltip = item.querySelector(".icon-skill");

            const isHover = item.matches(":hover");

            // 🔥 AKTIF (kalau TIDAK di-hover)
            if (!isHover) {
               item.classList.remove("grayscale-[0.6]", "opacity-90");
               item.classList.add("grayscale-0", "opacity-100", "scale-110");

               if (icon) {
                  icon.classList.remove("grayscale-[0.6]", "opacity-90");
                  icon.classList.add("grayscale-0", "opacity-100", "scale-110");
               }

               if (tooltip) {
                  tooltip.classList.remove("scale-0");
                  tooltip.classList.add("scale-110");
               }
            }

            setTimeout(() => {
               const isStillHover = item.matches(":hover");

               // 🔁 RESET (kalau TIDAK di-hover)
               if (!isStillHover) {
                  item.classList.remove(
                     "grayscale-0",
                     "opacity-100",
                     "scale-110",
                  );
                  item.classList.add("grayscale-[0.6]", "opacity-90");

                  if (icon) {
                     icon.classList.remove(
                        "grayscale-0",
                        "opacity-100",
                        "scale-110",
                     );
                     icon.classList.add("grayscale-[0.6]", "opacity-90");
                  }

                  if (tooltip) {
                     tooltip.classList.remove("scale-110");
                     tooltip.classList.add("scale-0");
                  }
               }

               setActiveIndex((prev) => prev + 1);
            }, 700);
         } else {
            setActiveIndex(0);
         }
      };

      animateGrayscale();
   }, [activeIndex]);

   return (
      <>
         <HeroSection />
         <AboutSection />
         <SkillsSection />
         <ProjectsSection portos={portos} />
      </>
   );
};

export default HomePage;
