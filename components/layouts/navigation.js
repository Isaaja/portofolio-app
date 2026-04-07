// Navigation.jsx
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "../utilities/icon";
import Link from "next/link";

import {
   HiOutlineHome,
   HiOutlineUser,
   HiOutlineLightningBolt,
   HiOutlineCode,
} from "react-icons/hi";

const NAV_ITEMS = [
   { id: "home", label: "Home", icon: HiOutlineHome },
   { id: "about", label: "About Me", icon: HiOutlineUser },
   { id: "skills", label: "Skills", icon: HiOutlineLightningBolt },
   { id: "projects", label: "Project", icon: HiOutlineCode },
];

const Navigation = () => {
   const [isMobile, setIsMobile] = useState(false);
   const [darkMode, setDarkMode] = useState(false);
   const [hamburger, setHamburger] = useState(false);
   const [navbar, setNavbar] = useState(false);
   const [activeSection, setActiveSection] = useState("home");

   const handleDarkMode = () => {
      const next = !darkMode;
      setDarkMode(next);
      localStorage.setItem("dark-mode", next);
   };

   const handleNavLinkClick = (sectionId) => {
      setActiveSection(sectionId);
      if (isMobile) setHamburger(false);
      document
         .getElementById(sectionId)
         ?.scrollIntoView({ behavior: "smooth", block: "start" });
   };

   const getLinkClass = (id) => {
      if (isMobile) {
         const base = `relative flex cursor-pointer rounded-full px-4 py-2 text-base transition duration-300 group`;
         return activeSection === id
            ? `${base} text-primary dark:text-primary`
            : `${base} text-accents-300 dark:text-slate-400 hover:text-primary dark:hover:text-primary`;
      }

      const base = `group relative mx-2 flex cursor-pointer px-4 py-2 text-base transition duration-300`;

      return activeSection === id
         ? `${base} text-primary dark:text-primary`
         : `${base} text-accents-300 dark:text-slate-400 hover:text-primary dark:hover:text-primary`;
   };

 const getIndicatorClass = (id) => {
    if (isMobile) {
       return `absolute inset-0 rounded-full transition-all duration-300 ease-in-out ${
          activeSection === id
             ? "bg-primary/10 dark:bg-primary/15 opacity-100"
             : "bg-primary/10 dark:bg-primary/15 opacity-0 group-hover:opacity-60"
       }`;
    }

    // Desktop - aktif + hover underline
    return `absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ease-in-out ${
       activeSection === id
          ? "w-full" // selalu tampil kalau aktif
          : "w-0 group-hover:w-full" // muncul saat hover
    }`;
 };
   useEffect(() => {
      document.querySelector("html").classList.toggle("dark", darkMode);
   }, [darkMode]);

   useEffect(() => {
      const storedTheme = localStorage.getItem("dark-mode");
      if (storedTheme !== null) setDarkMode(storedTheme === "true");

      const mq = window.matchMedia("(max-width: 640px)");
      setIsMobile(mq.matches);
      const handleMq = (e) => setIsMobile(e.matches);
      mq.addEventListener("change", handleMq);

      const handleScroll = () => {
         const header = document.querySelector("header");
         setNavbar(window.pageYOffset > header.offsetTop);
      };
      window.addEventListener("scroll", handleScroll);

      const observer = new IntersectionObserver(
         (entries) =>
            entries.forEach(
               (e) => e.isIntersecting && setActiveSection(e.target.id),
            ),
         { root: null, rootMargin: "-10% 0px -70% 0px", threshold: 0 },
      );
      setTimeout(() => {
         document
            .querySelectorAll("#home, #about, #skills, #projects")
            .forEach((s) => s && observer.observe(s));
      }, 100);

      return () => {
         mq.removeEventListener("change", handleMq);
         window.removeEventListener("scroll", handleScroll);
         observer.disconnect();
      };
   }, []);

   return (
      <header
         className={`absolute left-0 top-0 z-10 flex w-full items-center bg-transparent ${navbar ? "navbar-fixed" : ""} transition duration-300 ease-in-out`}
      >
         <div className="container">
            <div className="relative flex items-center justify-between">
               {/* Logo */}
               <div className="px-4">
                  <Link
                     href="/"
                     className="flex items-center gap-2 py-5 text-lg font-bold tracking-wide text-dark dark:text-white transition duration-300"
                  >
                     <HiOutlineCode className="w-6 h-6 text-primary" />
                     <span className="relative group">
                        Isa Iant Maulana
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                     </span>
                  </Link>
               </div>

               {/* Desktop menu - tengah */}
               <nav className="hidden sm:flex absolute sm:left-1/3 xl:left-1/2 xl:-translate-x-1/2">
                  <ul className="flex">
                     {NAV_ITEMS.map(({ id, label }) => (
                        <a
                           key={id}
                           onClick={(e) => {
                              e.preventDefault();
                              handleNavLinkClick(id);
                           }}
                           className={getLinkClass(id)}
                        >
                           <li>{label}</li>
                           <div className={getIndicatorClass(id)} />
                        </a>
                     ))}
                  </ul>
               </nav>

               {/* Kanan - dark mode + hamburger */}
               <div className="flex items-center gap-4 px-4">
                  <label
                     htmlFor="dark-toggle"
                     className="cursor-pointer"
                     onClick={handleDarkMode}
                  >
                     <div
                        className={`toggle-icon rounded-full p-1 w-10 justify-items-center hover:bg-primary/20 `}
                     >
                        {darkMode ? (
                           <Sun className="transition duration-300 ease-in-out dark:text-white" />
                        ) : (
                           <Moon className="transition duration-300 ease-in-out text-dark" />
                        )}
                     </div>
                  </label>

                  <button
                     id="hamburger"
                     name="hamburger"
                     type="button"
                     className={`block md:hidden ${hamburger ? "hamburger-active" : ""}`}
                     onClick={() => setHamburger(!hamburger)}
                  >
                     <span className="hamburger-line origin-top-left transition duration-300 ease-in-out" />
                     <span className="hamburger-line transition duration-300 ease-in-out" />
                     <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out" />
                  </button>
               </div>

               {/* Mobile dropdown - muncul di kanan bawah tombol hamburger */}
               {hamburger && (
                  <nav className="absolute right-4 top-full z-[9999] min-w-[220px] rounded-2xl border border-black/10 bg-white/90 py-3 px-2 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-gray-900/90 md:hidden">
                     <ul className="flex flex-col gap-1">
                        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                           <a
                              key={id}
                              onClick={(e) => {
                                 e.preventDefault();
                                 handleNavLinkClick(id);
                              }}
                              className={`group relative flex items-center gap-3 cursor-pointer rounded-xl px-4 py-3 text-base transition duration-300 ${
                                 activeSection === id
                                    ? "text-primary dark:text-primary"
                                    : "text-accents-300 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
                              }`}
                           >
                              <div
                                 className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                                    activeSection === id
                                       ? "bg-primary/10 dark:bg-primary/15 opacity-100"
                                       : "opacity-0 bg-primary/10 dark:bg-primary/15 group-hover:opacity-60"
                                 }`}
                              />
                              <Icon className="relative z-10 w-6 h-6 shrink-0" />
                              <span className="relative z-10 font-medium">
                                 {label}
                              </span>
                           </a>
                        ))}
                     </ul>
                  </nav>
               )}
            </div>
         </div>
      </header>
   );
};

export default Navigation;
