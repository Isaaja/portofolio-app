/* eslint-disable react/no-unescaped-entities */
const AboutSection = () => {
  const education = [
    {
      year: "2021 - Present",
      title: "Universitas Dian Nuswantoro",
      desc: "Teknik Informatika - GPA 4.0",
    },
    {
      year: "2019 - 2022",
      title: "SMAN 1 Pati",
      desc: "MIPA - Grade 95",
    },
  ];

  const experience = [
    {
      year: "2024 - Present",
      title: "Frontend Developer (Freelance)",
      desc: "ReactJS, NextJS, TailwindCSS Projects",
    },
    {
      year: "2023",
      title: "Backend Developer (Internship)",
      desc: "Node.js, PostgreSQL",
    },
    {
      year: "2022",
      title: "Web Development Bootcamp",
      desc: "HTML, CSS, JavaScript, Git",
    },
  ];

  return (
    <section id="about" className="xl:pt-36 xl:pb-36 dark:bg-dark bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto text-center mb-12">
          <h2 className="text-lg md:text-xl font-semibold uppercase text-primary">
            About Me
          </h2>
          <h3 className="mt-2 text-2xl font-bold text-dark dark:text-white sm:text-3xl lg:text-5xl">
            Get to know me better
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 sm:mx-14 xl:mx-72">
          {/* Education Timeline */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-semibold text-dark dark:text-white mb-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="text-primary"
              >
                <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
              </svg>
              Education
            </h4>
            <div className="relative border-l-2 border-primary pl-6 space-y-8 justify-end ">
              {education.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-9 w-5 h-5 bg-primary rounded-full"></div>
                  <p className="text-sm text-secondary">{item.year}</p>
                  <h5 className="font-bold text-dark dark:text-white">
                    {item.title}
                  </h5>
                  <p className="text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-semibold text-dark dark:text-white mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="text-primary"
              >
                <path d="M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm88,168H40V80H216Z"></path>
              </svg>
              Experience
            </h4>
            <div className="relative border-l-2 border-primary pl-6 space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-9 w-5 h-5 bg-primary rounded-full"></div>
                  <p className="text-sm text-secondary">{item.year}</p>
                  <h5 className="font-bold text-dark dark:text-white">
                    {item.title}
                  </h5>
                  <p className="text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
