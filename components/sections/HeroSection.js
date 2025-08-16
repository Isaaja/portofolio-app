/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import ReactTyped from "react-typed";

// Data untuk typed text
const typedStrings = [
  "Web Developer",
  "Backend Developer",
  "Data Analyst",
  "Data Science",
];

// Data untuk social links
const socialLinks = [
  {
    href: "https://www.linkedin.com/in/isaiantmaulana/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-linkedin"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "https://github.com/Isaaja",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-github-icon lucide-github"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    href: "mailto:isaiantmaulana2004@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-mail-icon lucide-mail"
      >
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
      </svg>
    ),
  },
];

// Komponen untuk background pattern
const BackgroundPattern = () => (
  <span className="absolute -inset-9 translate-y-14 xl:inset-5 md:translate-y-24 xl:translate-y-14 scale-125">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#FF6600"
        d="M45.4,-60.4C56.7,-54.3,62.2,-38.2,60.6,-24.2C59,-10.2,50.3,1.7,44.4,12.7C38.5,23.8,35.3,34.1,28.4,43.8C21.5,53.5,10.7,62.6,-2.9,66.6C-16.5,70.5,-32.9,69.2,-42,60.2C-51,51.2,-52.5,34.4,-55.2,19.5C-57.9,4.7,-61.6,-8.3,-58.5,-19.4C-55.4,-30.5,-45.5,-39.7,-34.6,-45.9C-23.7,-52.1,-11.9,-55.3,2.6,-58.9C17.1,-62.4,34.2,-66.5,45.4,-60.4Z"
        transform="translate(100 100)"
      />
    </svg>
  </span>
);

// Komponen untuk social button
const SocialButton = ({ href, icon }) => (
  <Link
    href={href}
    target="_blank"
    className="flex items-center justify-center rounded-2xl bg-dark w-10 h-10 text-white dark:bg-primary dark:text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
  >
    {icon}
  </Link>
);

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pb-14 pt-9 md:pt-12 lg:pt-20 xl:pt-28 lg:pb-36transition duration-300 ease-in-out dark:bg-dark"
    >
      <div className="container">
        <div className="flex sm:flex-row flex-col items-center">
          {/* Image Section */}
          <div className="w-56 md:w-80 xl:w-1/2 pb-5 justify-center px-4 ">
            <div className="relative mt-10 md:mt-0 ">
              <Image
                alt="Isa Iant Maulana"
                src="/me.webp"
                className="relative z-[1] mx-auto max-w-full"
                width={417}
                height={598}
              />
              <BackgroundPattern />
            </div>
          </div>
          {/* Content Section */}
          <div className="w-full md:w-1/2 self-center px-4">
            <div className="sm:ml-2 lg:ml-4 xl:ml-6 2xl:ml-10 lg:text-left">
              {/* Header */}
              <h1 className="text-base md:text-xl font-semibold text-primary">
                Hello everyone👋🏻, my name is
                <span className="mt-1 block text-2xl sm:text-3xl font-bold text-dark dark:text-white lg:text-5xl">
                  Isa Iant Maulana
                </span>
              </h1>

              {/* Typed Text */}
              <h2 className="mb-6 mt-2 text-sm sm:text-base md:text-xl font-medium text-accents-300 dark:text-white/80">
                I am a -{" "}
                <ReactTyped
                  strings={typedStrings}
                  typeSpeed={40}
                  loop
                  backSpeed={15}
                  className="font-bold text-dark dark:text-white"
                />
              </h2>

              {/* Description */}
              <p className="mb-8 font-medium leading-relaxed text-accents-300 dark:text-white/80 text-sm sm:text-base md:w-auto md:text-xl w-full sm:w-4/5 lg:w-3/4 mx-auto md:mx-0">
                I'm a fullstack developer passionate about building modern web
                applications. I enjoy learning new technologies and tackling
                innovative challenges.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap lg:justify-start gap-2 items-center">
                <Link
                  href="/Curriculum Vitae.pdf"
                  target="_blank"
                  className="rounded-2xl bg-primary md:w-40 text-white px-5 py-2 text-sm sm:text-base font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                >
                  Download CV
                </Link>

                {socialLinks.map((link, index) => (
                  <SocialButton key={index} href={link.href} icon={link.icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
