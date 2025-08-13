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
  SiHashicorp,
  SiJsonwebtokens,
  SiRedis,
  SiRabbitmq,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const SkillsSection = () => {
  return (
    <section id="skills" className="pt-36 pb-36 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
              Skills
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Essensial Tools & Technologies
            </h2>
          </div>
        </div>

        <div className="w-full pr-5">
          <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-4 items-center justify-center">
            {/* HTML */}
            <a
              href="https://www.w3.org/html/"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiHtml5 className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] -right-[0.1rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                HTML5
              </span>
            </a>

            {/* CSS */}
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiCss3 className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                CSS3
              </span>
            </a>

            {/* JavaScript */}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiJavascript className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] -right-[0.9rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                JavaScript
              </span>
            </a>

            {/* ReactJS */}
            <a
              href="https://react.dev/"
              target="_blank"
              className="group mx-4 max-w-[80px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiReact className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] -right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                React.js
              </span>
            </a>

            {/* Next JS */}
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="group mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <TbBrandNextjs className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] -right-[0.1rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                Next.js
              </span>
            </a>

            {/* PHP */}
            <a
              href="https://www.php.net/"
              target="_blank"
              className="group mx-4 max-w-[80px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiPhp className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                PHP
              </span>
            </a>

            {/* Laravel */}
            <a
              href="https://laravel.com/"
              target="_blank"
              className="group mx-4 max-w-[70px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiLaravel className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] -right-[0rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                Laravel
              </span>
            </a>

            {/* MySQL */}
            <a
              href="https://www.mysql.com/"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiMysql className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] -right-[0.1rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                MySQL
              </span>
            </a>

            {/* Git */}
            <a
              href="https://git-scm.com/"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiGit className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                Git
              </span>
            </a>

            {/* Github */}
            <a
              href="https://github.com/"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiGithub className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                Github
              </span>
            </a>

            {/* Tailwind CSS */}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiTailwindcss className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                Tailwind CSS
              </span>
            </a>

            {/* Express JS */}
            <a
              href="https://expressjs.com/"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiExpress className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                Express JS
              </span>
            </a>

            {/* PostgreSQL */}
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiPostgresql className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                PostgreSQL
              </span>
            </a>

            {/* Node JS */}
            <a
              href="https://nodejs.org/"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiNodedotjs className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                Node JS
              </span>
            </a>

            {/* Python */}
            <a
              href="https://www.python.org/"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiPython className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                Python
              </span>
            </a>

            {/* Json Web Token */}
            <a
              href="https://jwt.io/"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiJsonwebtokens className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                Json Web Token
              </span>
            </a>

            {/* Json Web Token */}
            <a
              href="https://jwt.io/"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiJsonwebtokens className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                Json Web Token
              </span>
            </a>

            {/* Redis */}
            <a
              href="https://redis.io/"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiRedis className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                Redis
              </span>
            </a>
            
            {/* RabbitMQ */}
            <a
              href="https://www.rabbitmq.com/"
              target="_blank"
              className="group mx-4 max-w-[60px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8 ease-in-out hover:scale-110"
            >
              <SiRabbitmq className="w-16 h-16" />
              <span className="icon-skill absolute top-[5.5rem] right-[0.5rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
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
