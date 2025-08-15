/* eslint-disable react/no-unescaped-entities */
import Metadata from "@/components/utilities/metadata";
import React, { useEffect, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

const HomePage = () => {
  const [portos, setPortos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/portofolio`
      );
      const data = await response.json();
      setPortos(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const grayscales = document.querySelectorAll(".grayscale");
    const iconSkills = document.querySelectorAll(".icon-skill");

    const animateGrayscale = () => {
      if (activeIndex < grayscales.length) {
        grayscales[activeIndex].classList.remove("grayscale", "opacity-60");
        grayscales[activeIndex].classList.add(
          "grayscale-0",
          "opacity-100",
          "scale-110"
        );

        iconSkills[activeIndex].classList.remove("scale-0");
        iconSkills[activeIndex].classList.add("scale-110");

        setTimeout(() => {
          grayscales[activeIndex].classList.remove(
            "grayscale-0",
            "opacity-100",
            "scale-110"
          );

          iconSkills[activeIndex].classList.remove("scale-110");

          grayscales[activeIndex].classList.add("grayscale", "opacity-60");
          iconSkills[activeIndex].classList.add("scale-0");
          setActiveIndex(activeIndex + 1);
        }, 500);
      } else {
        setActiveIndex(0);
      }
    };

    animateGrayscale();
  }, [activeIndex]);

  return (
    <>
      {/* <Metadata
        title="Portofolio"
        description="Website Portofolio Dibuat Menggunakan NextJS dan TailwindCSS"
        image="/metadata/home.png"
        url=""
      /> */}
      
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection portos={portos} />
    </>
  );
};

export default HomePage;
