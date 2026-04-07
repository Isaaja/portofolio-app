import {
   SiHtml5,
   SiCss3,
   SiJavascript,
   SiReact,
   SiPhp,
   SiLaravel,
   SiMysql,
   SiGit,
   SiGithub,
   SiTailwindcss,
   SiExpress,
   SiPostgresql,
   SiNodedotjs,
   SiPython,
   SiJsonwebtokens,
   SiRedis,
   SiRabbitmq,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const SkillsSection = () => {
   const baseItem =
      "skill-item group mx-4 max-w-[60px] py-4 grayscale  transition-all duration-700 hover:opacity-100 hover:grayscale-0 ease-in-out hover:scale-110";

   const baseIcon =
      "skill-icon w-16 h-16 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700";

   return (
      <section className="pt-36 pb-36 dark:bg-dark">
         <div className="container">
            <div className="w-full px-4">
               <div className="mx-auto mb-16 text-center">
                  <h4
                     className="mb-2 text-lg font-semibold uppercase text-primary"
                     id="skills"
                  >
                     Skills
                  </h4>
                  <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-3xl lg:text-5xl">
                     Essential Tools & Technologies
                  </h2>
               </div>
            </div>

            <div className="w-full pr-5">
               <div className="flex flex-wrap gap-4 items-center justify-center">
                  {/* HTML */}
                  <a
                     href="https://www.w3.org/html/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiHtml5 className={`${baseIcon} text-orange-500`} />
                     <span className="icon-skill absolute top-[5.5rem] right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        HTML5
                     </span>
                  </a>

                  {/* CSS */}
                  <a
                     href="https://www.w3schools.com/css/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiCss3 className={`${baseIcon} text-blue-500`} />
                     <span className="icon-skill absolute top-[5.5rem] right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        CSS3
                     </span>
                  </a>

                  {/* JavaScript */}
                  <a
                     href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiJavascript className={`${baseIcon} text-yellow-400`} />
                     <span className="icon-skill absolute top-[5.5rem] -right-[0.8rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        JavaScript
                     </span>
                  </a>

                  {/* React */}
                  <a
                     href="https://react.dev/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiReact className={`${baseIcon} text-cyan-400`} />
                     <span className="icon-skill absolute top-[5.5rem] -right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        React.js
                     </span>
                  </a>

                  {/* Next */}
                  <a
                     href="https://nextjs.org/"
                     target="_blank"
                     className={baseItem}
                  >
                     <TbBrandNextjs
                        className={`${baseIcon} text-black dark:text-white`}
                     />
                     <span className="icon-skill absolute top-[5.5rem] right-0 scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        Next.js
                     </span>
                  </a>

                  {/* PHP */}
                  <a
                     href="https://www.php.net/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiPhp className={`${baseIcon} text-indigo-500`} />
                     <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        PHP
                     </span>
                  </a>

                  {/* Laravel */}
                  <a
                     href="https://laravel.com/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiLaravel className={`${baseIcon} text-red-500`} />
                     <span className="icon-skill absolute top-[5.5rem] right-0 scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        Laravel
                     </span>
                  </a>

                  {/* MySQL */}
                  <a
                     href="https://www.mysql.com/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiMysql className={`${baseIcon} text-blue-600`} />
                     <span className="icon-skill absolute top-[5.5rem] right-0 scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        MySQL
                     </span>
                  </a>

                  {/* Git */}
                  <a
                     href="https://git-scm.com/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiGit className={`${baseIcon} text-orange-600`} />
                     <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        Git
                     </span>
                  </a>

                  {/* Github */}
                  <a
                     href="https://github.com/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiGithub
                        className={`${baseIcon} text-black dark:text-white`}
                     />
                     <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        Github
                     </span>
                  </a>

                  {/* Tailwind */}
                  <a
                     href="https://tailwindcss.com/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiTailwindcss className={`${baseIcon} text-sky-400`} />
                     <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        Tailwind
                     </span>
                  </a>

                  {/* Express */}
                  <a
                     href="https://expressjs.com/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiExpress className={`${baseIcon} text-gray-400`} />
                     <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        Express
                     </span>
                  </a>

                  {/* PostgreSQL */}
                  <a
                     href="https://www.postgresql.org/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiPostgresql className={`${baseIcon} text-blue-700`} />
                     <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        PostgreSQL
                     </span>
                  </a>

                  {/* Node */}
                  <a
                     href="https://nodejs.org/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiNodedotjs className={`${baseIcon} text-green-500`} />
                     <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        Node.js
                     </span>
                  </a>

                  {/* Python */}
                  <a
                     href="https://www.python.org/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiPython className={`${baseIcon} text-yellow-500`} />
                     <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        Python
                     </span>
                  </a>

                  {/* JWT */}
                  <a
                     href="https://jwt.io/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiJsonwebtokens className={`${baseIcon} text-pink-500`} />
                     <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        JWT
                     </span>
                  </a>

                  {/* Redis */}
                  <a
                     href="https://redis.io/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiRedis className={`${baseIcon} text-red-600`} />
                     <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        Redis
                     </span>
                  </a>

                  {/* RabbitMQ */}
                  <a
                     href="https://www.rabbitmq.com/"
                     target="_blank"
                     className={baseItem}
                  >
                     <SiRabbitmq className={`${baseIcon} text-orange-500`} />
                     <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 font-bold">
                        RabbitMQ
                     </span>
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SkillsSection;
