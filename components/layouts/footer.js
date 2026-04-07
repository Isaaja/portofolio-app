import React from "react";

const Footer = () => {
   const handleSmoothScroll = (sectionId) => {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
         targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
         });
      }
   };

   return (
      <footer className="relative w-full border-t border-dark/20 dark:border-white/20 pt-12 transition duration-300 ease-in-out dark:bg-dark dark:opacity-90 lg:pt-20">
         <div className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
            <div
               className="aspect-[1500/632] w-[69.25rem] flex-none bg-gradient-to-r from-orange-500 to-orange-800 opacity-25 dark:block"
               style={{
                  clipPath:
                     "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
               }}
            ></div>
         </div>
         <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
            <div className="sm:grid sm:grid-cols-2 xl:gap-8">
               <div className="space-y-2">
                  <span className="animate-gradient-pulse from-background to-background text-foreground inline-block 1 rounded-xl bg-gradient-to-r mb-3 via-primary/10 px-4 py-1.5 tracking-tight shadow-2xl shadow-primary/[0.25] ring-2 ring-dark/70 dark:ring-white/70 sm:px-4 sm:py-3 text-2xl sm:text-3xl lg:text-4xl">
                     <h1 className="font-bold text-dark dark:text-white">
                        Isa Iant Maulana
                     </h1>
                  </span>

                  <h2 className="flex shrink-0 items-center text-lg md:text-xl font-bold focus:outline-none dark:text-white mb-5">
                     Lets Connect
                  </h2>
                  <h3 className="mb-2 text-sm font-bold text-accents-300 dark:text-white/80">
                     Contact Me:
                  </h3>
                  <a
                     href="mailto:isaiantmaulana2004@gmail.com"
                     className="hover:text-primary text-accents-300 dark:text-white/80 dark:hover:text-primary"
                  >
                     <span>isaiantmaulana2004@gmail.com</span>
                  </a>
               </div>
               <div className="mt-5 md:mt-0 grid grid-cols-2 xl:mt-0">
                  <div>
                     <h3 className="leading text-lg font-bold dark:text-white">
                        Sitemap
                     </h3>
                     <ul role="list" className="mt-1 space-y-4">
                        <li>
                           <a
                              className={`text-base leading-6 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary cursor-pointer`}
                              onClick={(e) => {
                                 e.preventDefault();
                                 handleSmoothScroll("home");
                              }}
                           >
                              Home
                           </a>
                        </li>
                        <li>
                           <a
                              className={`text-base leading-6 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary cursor-pointer`}
                              onClick={(e) => {
                                 e.preventDefault();
                                 handleSmoothScroll("about");
                              }}
                           >
                              About Me
                           </a>
                        </li>
                        <li>
                           <a
                              className={`text-base leading-6 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary cursor-pointer`}
                              onClick={(e) => {
                                 e.preventDefault();
                                 handleSmoothScroll("skills");
                              }}
                           >
                              Skills
                           </a>
                        </li>
                        <li>
                           <a
                              className={`text-base leading-6 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary cursor-pointer`}
                              onClick={(e) => {
                                 e.preventDefault();
                                 handleSmoothScroll("projects");
                              }}
                           >
                              Projects
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h3 className="leading text-lg font-bold dark:text-white">
                        Social Media
                     </h3>
                     <ul role="list" className="mt-1 space-y-4">
                        <li>
                           <a
                              className={`text-base leading-6 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary cursor-pointer`}
                              href="https://www.linkedin.com/in/isaiantmaulana/"
                           >
                              Linkedin
                           </a>
                        </li>
                        <li>
                           <a
                              className={`text-base leading-6 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary cursor-pointer`}
                              href="https://github.com/Isaaja"
                           >
                              Github
                           </a>
                        </li>
                        <li>
                           <a
                              className={`text-base leading-6 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary cursor-pointer`}
                              href="https://wa.me/+6285150715156"
                           >
                              Whatsapp
                           </a>
                        </li>
                        <li>
                           <a
                              className={`text-base leading-6 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary cursor-pointer`}
                              href="https://www.instagram.com/isaiantmaulanaa/"
                           >
                              Instagram
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="mt-16 flex items-center justify-center border-t border-dark pt-8 dark:border-white/10 sm:mt-20 lg:mt-24">
               <p className="text-accents-300 dark:text-white/80 text-xs leading-5">
                  © Copyright {new Date().getFullYear()} - Isa Iant Maulana
               </p>
            </div>
            <p className="text-accents-300 dark:text-white/80 text-xs leading-5 text-center">
               made with ❤️‍🩹 and wholeheartedly
            </p>
         </div>
      </footer>
   );
};

export default Footer;
