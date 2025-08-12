/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Metadata from "@/components/utilities/metadata";
import ReactTyped from "react-typed";
import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaGitlab,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiHtml5,
  SiMarkdown,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiLinux,
  SiGnubash,
  SiApache,
  SiProxmox,
  SiMikrotik,
  SiUbiquiti,
  SiFigma,
  SiPostman,
  SiArduino,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiCpanel,
  SiFirebase,
  SiMongodb,
  SiGithubactions,
  SiJenkins,
  SiMinio,
  SiCeph,
  SiApachehadoop,
  SiTrino,
  SiApachehive,
  SiApacheparquet,
  SiApachenifi,
  SiGrafana,
  SiPrometheus,
  SiThanos,
  SiVmware,
  SiTypescript,
  SiJsonwebtokens,
  SiCisco,
  SiTerraform,
  SiNotion,
  SiTrello,
  SiGooglecolab,
  SiJupyter,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs, DiNginx } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";

const HomePage = () => {
  const [portos, setPortos] = useState([]);
  const [isHoveredIndex, setIsHoveredIndex] = useState(null);
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
      <Metadata
        title="Portofolio"
        description="Website Portofolio Dibuat Menggunakan NextJS dan TailwindCSS"
        image="/metadata/home.png"
        url=""
      />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-36 pb-36 transition duration-300 ease-in-out dark:bg-dark"
      >
        <div className="container">
          <div className="flex flex-wrap ">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Hello everyone👋🏻, my name is
                <span className="mt-1 block text-3xl font-bold text-dark dark:text-white lg:text-5xl">
                  Isa Iant Maulana
                </span>
              </h1>

              <h2 className="mb-8 mt-2 text-md md:text-lg font-medium text-accents-300 dark:text-white/80 lg:mt-3 lg:text-xl ">
                I am a -{" "}
                <ReactTyped
                  strings={[
                    "Web Developer",
                    "Backend Developer",
                    "Data Analyst",
                    "Data Science",
                  ]}
                  typeSpeed={40}
                  loop
                  backSpeed={15}
                  className="font-bold text-dark dark:text-white"
                />
              </h2>

              <p className="mb-10 font-medium leading-relaxed text-accents-300 dark:text-white/80">
                I'm passionate about building software that solves real-world
                problems.
              </p>
              <div className="flex flex-wrap lg:justify-start gap-2 items-center ">
                {/* Tombol Download CV */}
                <Link
                  href="/Curriculum Vitae.pdf"
                  target="_blank"
                  className="rounded-2xl w-30 bg-primary text-white dark:bg-white dark:text-dark px-5 py-2.5 text-base font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg md:px-8 md:py-3"
                >
                  Download CV
                </Link>
                {/* Tombol LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/isaiantmaulana/"
                  target="_blank"
                  className="flex items-center justify-center rounded-2xl bg-black w-10 h-10 text-white dark:bg-white dark:text-dark transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                >
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
                </Link>

                {/* Tombol Github */}
                <Link
                  href="https://github.com/Isaaja"
                  target="_blank"
                  className="flex items-center justify-center rounded-2xl bg-black w-10 h-10 text-white dark:bg-white dark:text-dark transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-github-icon lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>

                {/* Tombol Email */}
                <Link
                  href="mailto:isaiantmaulana2004@gmail.com"
                  target="_blank"
                  className="flex items-center justify-center rounded-2xl bg-black w-10 h-10 text-white dark:bg-white dark:text-dark transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-mail-icon lucide-mail"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:right-0 lg:mt-0">
                <Image
                  alt="Isa Iant Maulana"
                  src="/me.png"
                  className="relative z-[1] mx-auto max-w-full"
                  width={417}
                  height={598}
                />
                <span className="absolute bottom-20 left-72 -translate-x-1/2 md:scale-125">
                  <svg
                    width={400}
                    height={400}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="translate(100 100) scale(1.1)" fill="#FF6600">
                      {/* Horizontal tengah */}
                      <rect x="-100" y="-12" width="200" height="24" rx="3" />
                      {/* Garis miring ke kanan bawah */}
                      <rect
                        x="-100"
                        y="-12"
                        width="200"
                        height="24"
                        rx="3"
                        transform="rotate(45)"
                      />
                      {/* Garis miring ke kiri bawah */}
                      <rect
                        x="-100"
                        y="-12"
                        width="200"
                        height="24"
                        rx="3"
                        transform="rotate(-45)"
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="pb-32 pt-32 transition duration-300 ease-in-out dark:bg-dark lg:pt-44"
      >
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full px-4 lg:w-1/2">
              <h4 className="mb-3 text-lg font-bold uppercase text-primary">
                Tentang Saya
              </h4>

              <h2 className="mb-5 max-w-lg text-3xl font-bold text-dark dark:text-white lg:text-4xl">
                Menghubungkan Kreativitas Dengan{" "}
                <span className="ml-1 inline-block -rotate-1 rounded-xl bg-gradient-to-r via-primary/20 px-4 py-1.5 text-lg tracking-tight shadow-2xl shadow-primary/[0.50] ring-2 ring-dark/70 dark:ring-white/70 sm:px-4 sm:py-3 sm:text-3xl lg:text-4xl">
                  Kode.
                </span>
              </h2>

              <p className="max-w-xl text-base font-medium text-secondary lg:text-lg">
                Saya seorang Junior Web Developer yang bersemangat dalam hal
                mempelajari teknologi yang dibutuhkan agar masalah dapat
                terselesaikan, Saya berusaha memberikan pengalaman pengguna yang
                menarik dan fungsional.
                <br />
                <br />
                Sebagai seorang Network Technician, Saya berusaha menjaga
                konektivitas yang andal dan efisien. Saya senang menganalisis
                masalah jaringan dan mengoptimalkan performa, menjadikan
                komunikasi yang lancar sebagai prioritas utama.
                <br />
                <br />
                Dalam peran System Administrator, Saya menyatukan pengetahuan
                tentang jaringan dan programming dengan kecakapan teknis dalam
                merancang dan mengelola infrastruktur yang handal. Saya
                berdedikasi untuk menjaga operasi yang lancar dan efisien.
              </p>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white lg:pt-10 lg:text-4xl">
                Mari Berteman
              </h2>

              <p className="mb-6 text-base font-medium text-secondary lg:mt-14 lg:text-lg">
                Saya senang dapat berbagi perjalanan dan pencapaian saya di
                dunia digital dengan Anda. Setiap langkah yang Saya ambil dalam
                mengembangkan proyek-proyek kreatif, menyelesaikan tantangan
                teknis atau memperkuat konektivitas jaringan, Saya rasa adalah
                bagian dari cerita yang lebih besar. Cerita tentang inovasi,
                kerja keras dan semangat untuk terus belajar dan tumbuh.
                <br />
                <br />
                Jangan ragu untuk mengituki Saya di berbagai akun media sosial
                yang ada di bawah ini. Saya sangat berharap dapat terhubung
                dengan Anda dan menjalin persahabatan yang lebih dekat. Terima
                kasih atas kunjungannya, dan mari bersama-sama menginspirasi dan
                memajukan dunia teknologi!
              </p>

              <div className="flex items-center">
                {/* Github */}
                <a
                  href="https://github.com/armandwipangestu"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaGithub className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    GitHub
                  </span>
                </a>

                {/* GitLab */}
                <a
                  href="https://gitlab.com/armandwipangestu"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaGitlab className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    GitLab
                  </span>
                </a>

                {/* Youtube */}
                <a
                  href="https://www.youtube.com/channel/UCqo9Q_EpEJWGJLB2xmm_g3A"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaYoutube className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    YouTube
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/devvnnull/"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaInstagram className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    Instagram
                  </span>
                </a>

                {/* Linkedin */}
                <a
                  href="https://www.linkedin.com/in/arman-dwi-pangestu"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaLinkedin className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-36 pb-36 dark:bg-dark">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Skills
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Penguasaan Teknologi, Programming Language dan Tools
              </h2>
              <p className="text-medium font-medium text-secondary md:text-lg mt-10">
                Ketika berbicara tentang penguasaan teknologi, pemahaman
                mendalam tentang berbagai bahasa pemrograman dan alat-alat yang
                kritis adalah kunci dalam menghadapi tantangan dunia teknologi
                yang terus berkembang. Saya telah mengembangkan keahlian yang
                cukup dalam berbagai bidang, yang memungkinkan saya untuk
                merangkai solusi yang tangguh dan efektif. <br />
                <br />
                Berikut adalah list Teknologi, Programming Language dan Tools
                yang saya kuasai.
              </p>
            </div>
          </div>

          <div className="w-full pr-5">
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4 items-center justify-center">
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
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="pt-36 pb-36 transition duration-300 ease-in-out dark:bg-dark"
      >
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-16 text-center">
                <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                  Portofolio
                </h4>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                  Project Terbaru
                </h2>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 mb-5">
              <p className="text-medium font-medium text-secondary md:text-lg">
                Saya dengan senang hati membagikan perjalanan dan pencapaian
                terbaru saya dalam dunia teknologi. Setiap project yang saya
                bagikan dibawah ini mewakili komitmen saya dalam mempelajari
                suatu teknologi sehingga dapat menciptakan suatu solusi yang
                inovatif dan berdampak.
              </p>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <p className="text-medium font-medium text-secondary md:text-lg">
                Dalam setiap proyek, saya selalu berusaha untuk menggabungkan
                kreativitas dengan pemahaman teknis yang mendalam. Saya percaya
                bahwa teknologi adalah sarana untuk mewujudkan ide-ide luar
                biasa dan mengatasi tantangan yang kompleks. Proyek-proyek ini
                tidak hanya merupakan hasil dari kerja keras saya, tetapi juga
                kolaborasi dengan rekan tim yang luar biasa.
              </p>
            </div>
          </div>

          <div className="grid gap-y-12 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 lg:gap-x-20 lg:gap-y-24 mt-20 px-4">
            {portos.map((porto, index) => (
              <div key={index}>
                <Link href={porto.link} target="_blank">
                  <div
                    data-radix-aspect-ratio-wrapper=""
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "56.25%",
                    }}
                  >
                    <div
                      className="ring-border/50 text-accent-foreground grid place-content-center overflow-hidden rounded-[0.60rem] bg-accent font-mono text-sm ring-1 ring-black dark:ring-white"
                      style={{
                        position: "absolute",
                        inset: "0px",
                      }}
                    >
                      <img
                        alt=""
                        height="360"
                        width="640"
                        src={porto.thubmnail}
                        className={`transition duration-300 ease-in-out hover:scale-110 ${
                          isHoveredIndex === index ? "scale-110" : ""
                        }`}
                        onMouseEnter={() => setIsHoveredIndex(index)}
                        onMouseLeave={() => setIsHoveredIndex(null)}
                      />
                    </div>
                  </div>
                </Link>
                <div className="mt-4 rounded-lg">
                  <div className="line-clamp-1 dark:text-white">
                    <Link href={porto.link} target="_blank">
                      <span
                        onMouseEnter={() => setIsHoveredIndex(index)}
                        onMouseLeave={() => setIsHoveredIndex(null)}
                        className={`hover:text-primary transition duration-300 ease-in-out ${
                          isHoveredIndex === index ? "text-primary" : ""
                        }`}
                      >
                        {porto.title}
                      </span>
                    </Link>
                  </div>
                  <div className="mb-4 mt-2 line-clamp-2 text-sm text-slate-400">
                    {porto.excerpt}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-1">
                      {porto.techs?.map((tech, index) => (
                        <div
                          className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none cursor-default"
                          key={index}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="pb-32 pt-36 transition-all duration-300 dark:bg-dark"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Pengalaman
              </h4>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <ol className="border-l border-dark dark:border-white">
                {/* First Item */}
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      November 2024 - Sekarang
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      Sovware Data Mandiri
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      Junior System Administrator - Full Time
                    </p>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Mendesain arsitektur Big Data agar mendukung Scalable,
                        High Availability, Fault Tolerant, dan Load Balancing.
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Melakukan deployment Big Data teknologi di server
                        On-Premise yang berjalan di atas Hypervisor Proxmox
                        menggunakan MinIO, Ceph, Dremio, Trino, Apache Hue,
                        Zookeeper, Nessie, MariaDB, Galera Cluster, HAProxy,
                        Keepalived, Apache NiFi, Nginx, beserta monitoring
                        system menggunakan Prometheus, Grafana, Thanos, Loki,
                        dan Alloy.
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="pb-32 pt-36 transition-all duration-300 dark:bg-dark"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Pendidikan
              </h4>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <ol className="border-l border-dark dark:border-white">
                {/* First Item */}
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      September 2021 - Sekarang
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      STMIK Bandung, Grade 3.70 / 4
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      S1 Teknik Informatika
                    </p>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Mempelajari Software Engineering - Web dengan PHP,
                        Mobile dengan Java, Desktop dengan Visual Basic
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Mempelajari RDBMS atau Relationship Database Management
                        System menggunakan MySQL / MariaDB, dan PostgreSQL
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Mempelajari Microcontroller dan Internet of Things
                        menggunakan Arduino Uno dengan Pemrograman C++
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
