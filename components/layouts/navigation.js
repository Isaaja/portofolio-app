import React, { useState, useEffect } from "react";
import { Moon, Sun } from "../utilities/icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [menus, setMenus] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/menu`
      );
      const data = await response.json();
      setMenus(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDarkMode = () => {
    const currentTheme = !darkMode;
    setDarkMode(currentTheme);
    localStorage.setItem("dark-mode", currentTheme);
  };

  const hamburgerToggle = () => {
    setHamburger(!hamburger);
  };

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    if (isMobile) {
      setHamburger(false);
    }

    // Smooth scroll ke section yang dipilih
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Function to check if section is active
  const isSectionActive = (sectionId) => {
    return activeSection === sectionId;
  };

  // Function to get dynamic className based on active state
  const getNavLinkClassName = (sectionId) => {
    const baseClasses = `group mx-2 ${
      isMobile ? "my-2" : ""
    } flex cursor-pointer rounded-full px-4 py-2 text-base transition duration-300 relative`;

    const isActive = isSectionActive(sectionId);

    if (isActive) {
      return `${baseClasses} text-primary dark:text-primary`;
    } else {
      return `${baseClasses} hover:text-orange-400 hover:dark:bg-cyan-300/20 hover:dark:text-cyan-600 text-accents-300 dark:text-slate-400`;
    }
  };

  // Function to get active indicator className
  const getActiveIndicatorClassName = (sectionId) => {
    const isActive = isSectionActive(sectionId);
    if (isMobile) {
      return `absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-in-out ${
        isActive ? "w-full" : "w-0"
      }`;
    }
    return `absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
      isActive ? "w-full" : "w-0"
    }`;
  };

  useEffect(() => {
    const html = document.querySelector("html");
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

  useEffect(() => {
    fetchData();

    const storedTheme = localStorage.getItem("dark-mode");
    storedTheme !== null ? setDarkMode(storedTheme === "true") : "";

    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQuery = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaQuery);

    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      window.pageYOffset > fixedNav ? setNavbar(true) : setNavbar(false);
    };

    // Intersection Observer untuk mendeteksi section yang aktif
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe semua section dengan delay untuk memastikan DOM sudah siap
    setTimeout(() => {
      const sections = document.querySelectorAll(
        "#home, #about, #skills, #projects"
      );
      sections.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`absolute left-0 top-0 z-10 flex w-full items-center bg-transparent ${
        navbar ? "navbar-fixed" : ""
      } transition duration-300 ease-in-out`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between">
          {/* Kiri - Logo */}
          <div className="px-4">
            <Link
              href="/"
              className="block py-5 text-lg font-bold lowercase text-dark dark:text-white"
            >
              Isa
            </Link>
          </div>

          {/* Tengah - Menu */}
          <nav
            className={`${hamburger ? "mt-1" : "hidden"} ${
              isMobile
                ? "border dark:border-white/20 dark:bg-dark z-[9999]"
                : ""
            } transition duration-300 ease-in-out absolute right-0 top-full w-full max-w-full rounded-lg bg-white py-5 shadow-lg lg:static lg:flex lg:justify-center lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none`}
          >
            <ul className="block lg:flex">
              <a
                href="#home"
                onClick={() => handleNavLinkClick("home")}
                className={getNavLinkClassName("home")}
              >
                <li>Home</li>
                <div className={getActiveIndicatorClassName("home")}></div>
              </a>
              <a
                href="#about"
                onClick={() => handleNavLinkClick("about")}
                className={getNavLinkClassName("about")}
              >
                <li>About Me</li>
                <div className={getActiveIndicatorClassName("about")}></div>
              </a>
              <a
                href="#skills"
                onClick={() => handleNavLinkClick("skills")}
                className={getNavLinkClassName("skills")}
              >
                <li>Skills</li>
                <div className={getActiveIndicatorClassName("skills")}></div>
              </a>
              <a
                href="#projects"
                onClick={() => handleNavLinkClick("projects")}
                className={getNavLinkClassName("projects")}
              >
                <li>Project</li>
                <div className={getActiveIndicatorClassName("projects")}></div>
              </a>
            </ul>
          </nav>

          {/* Kanan - Dark Mode */}
          <div className="flex items-center gap-4">
            {!isMobile && (
              <label
                htmlFor="dark-toggle"
                className="cursor-pointer"
                onClick={handleDarkMode}
              >
                <div
                  className={`group toggle-icon rounded-full p-1 ${
                    darkMode
                      ? "hover:dark:bg-cyan-300/20"
                      : "hover:bg-blue-200/60"
                  }`}
                >
                  {darkMode ? (
                    <Sun className="transition duration-300 ease-in-out dark:text-white" />
                  ) : (
                    <Moon className="transition duration-300 ease-in-out text-dark" />
                  )}
                </div>
              </label>
            )}

            {/* Hamburger mobile */}
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block lg:hidden ${
                hamburger ? "hamburger-active" : ""
              }`}
              onClick={hamburgerToggle}
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
