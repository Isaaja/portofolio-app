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
  const pathName = usePathname();

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

  const handleNavLinkClick = () => {
    if (isMobile) {
      setHamburger(false);
    }
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
      window.removeEventListener("scroll", handleScroll);
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
                className={`group mx-2 ${
                  isMobile ? "my-2" : ""
                } flex cursor-pointer rounded-full px-4 py-2 text-base transition duration-300 hover:text-orange-400 hover:dark:bg-cyan-300/20 hover:dark:text-cyan-600 text-accents-300 dark:text-slate-400`}
              >
                <li>Home</li>
              </a>
              <a
                href="#about"
                className={`group mx-2 ${
                  isMobile ? "my-2" : ""
                } flex cursor-pointer rounded-full px-4 py-2 text-base transition duration-300 hover:text-orange-400 hover:dark:bg-cyan-300/20 hover:dark:text-cyan-600 text-accents-300 dark:text-slate-400`}
              >
                <li>Tentang Saya</li>
              </a>
              <a
                href="#skills"
                className={`group mx-2 ${
                  isMobile ? "my-2" : ""
                } flex cursor-pointer rounded-full px-4 py-2 text-base transition duration-300 hover:text-orange-400 hover:dark:bg-cyan-300/20 hover:dark:text-cyan-600 text-accents-300 dark:text-slate-400`}
              >
                <li>Skills</li>
              </a>
              <a
                href="#portfolio"
                className={`group mx-2 ${
                  isMobile ? "my-2" : ""
                } flex cursor-pointer rounded-full px-4 py-2 text-base transition duration-300 hover:text-orange-400 hover:dark:bg-cyan-300/20 hover:dark:text-cyan-600 text-accents-300 dark:text-slate-400`}
              >
                <li>Portofolio</li>
              </a>
              <a
                href="#experience"
                className={`group mx-2 ${
                  isMobile ? "my-2" : ""
                } flex cursor-pointer rounded-full px-4 py-2 text-base transition duration-300 hover:text-orange-400 hover:dark:bg-cyan-300/20 hover:dark:text-cyan-600 text-accents-300 dark:text-slate-400`}
              >
                <li>Pengalaman</li>
              </a>
              <a
                href="#education"
                className={`group mx-2 ${
                  isMobile ? "my-2" : ""
                } flex cursor-pointer rounded-full px-4 py-2 text-base transition duration-300 hover:text-orange-400 hover:dark:bg-cyan-300/20 hover:dark:text-cyan-600 text-accents-300 dark:text-slate-400`}
              >
                <li>Pendidikan</li>
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
