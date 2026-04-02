/* eslint-disable react/no-unescaped-entities */
const AboutSection = () => {
   const education = [
      {
         year: "2021 - Present",
         title: "Universitas Dian Nuswantoro",
         degree: "Bachelor of Computer Science",
         desc: "Teknik Informatika - GPA 3.75",
         achievements: ["Active in Programming Club", "Research Assistant"],
         status: "Current",
      },
      {
         year: "2019 - 2022",
         title: "SMAN 1 Pati",
         degree: "Natural Sciences (MIPA)",
         desc: "Mathematics and Natural Sciences - Grade 95",
         achievements: ["Active in Organizations"],
         status: "Graduated",
      },
   ];

   const experience = [
      {
         year: "Nov 2025 - Present",
         title: "Web Developer Intern",
         company: "Qiscus",
         desc: "I contributed to developing integrations such as WhatsApp Flow, WhatsApp Catalog, Qiscus Shop, LLM, and conversation flows. I used Go as an intermediary service to connect systems and ensure efficient, scalable integrations.",
         techStack: [
            "Golang",
            "Whatsapp Flow",
            "Whatsapp Catalog",
            "PostgreSQL",
            "LLM",
            "Chatbot AI",
            "Qicus Shop",
            "Conversation Flow",
         ],
      },
      {
         year: "Mar 2025 - Aug 2025",
         title: "Backend Developer Intern",
         company: "Kementerian Komunikasi dan Digital",
         desc: "Developed a comprehensive inventory and device lending management system with admin approval workflows, real-time tracking, and LLM-powered PDF data extraction capabilities.",
         techStack: [
            "Next.js",
            "Prisma ORM",
            "Supabase",
            "PostgreSQL",
            "LLM",
            "REST API",
         ],
      },
      {
         year: "Mar 2023 - Aug 2025",
         title: "Data Analyst",
         company: "Dian Nuswantoro Computer Club",
         desc: "Conducted data analysis and processing using Python and SQL, transforming raw data into actionable insights through statistical modeling and visualization techniques.",
         techStack: [
            "Python",
            "SQL",
            "Data Visualization",
            "Statistical Modeling",
            "Data Preprocessing",
         ],
      },
      {
         year: "Feb 2025 - Aug 2025",
         title: "Computer Vision Researcher",
         company: "Smart Society Project",
         desc: "Conducted research in computer vision under IDSS research group, focusing on object detection and classification algorithms for intelligent surveillance systems.",
         techStack: [
            "Python",
            "Computer Vision",
            "Object Detection",
            "Classification",
            "IoT Integration",
         ],
      },
      {
         year: "Jan 2023 - May 2025",
         title: "Laboratory Assistant",
         company: "Computer Science Faculty",
         desc: "Mentored students in Programming Algorithms (C++) and Advanced Web Development, guiding through complex concepts including OOP, MVC architecture, and database management.",
         techStack: [
            "C++",
            "CodeIgniter",
            "Laravel",
            "MySQL",
            "MVC Architecture",
            "OOP",
         ],
      },
   ];

   return (
      <section className="py-20 lg:py-32 dark:bg-dark bg-white" id="about">
         <div className="container mx-auto px-6 lg:px-8">
            {/* Header Section */}
            <div className="mx-auto mb-16 text-center">
               <h4
                  className="mb-2 text-lg font-semibold uppercase text-primary"
                  id="projects"
               >
                  About Me
               </h4>
               <h2 className="mb-2 text-2xl font-bold text-dark dark:text-white sm:text-3xl lg:text-5xl">
                  Get to know me better
               </h2>
            </div>

            {/* Content Sections */}
            <div className="max-w-6xl mx-auto space-y-16">
               {/* Education Section */}
               <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-8">
                     <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           fill="currentColor"
                           viewBox="0 0 256 256"
                           className="text-primary"
                        >
                           <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                        </svg>
                     </div>
                     <h3 className="text-2xl font-bold text-dark dark:text-white">
                        Education
                     </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {education.map((item, index) => (
                        <div key={index} className="group">
                           <div className="relative p-6 rounded-2xl bg-white dark:bg-accent border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full">
                              {/* Status Badge */}
                              <div className="flex items-start justify-between mb-4">
                                 <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                                    {item.year}
                                 </span>
                                 <span
                                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                       item.status === "Current"
                                          ? "bg-green-100 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                                          : "bg-blue-100 text-blue-700 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800"
                                    }`}
                                 >
                                    {item.status}
                                 </span>
                              </div>

                              {/* Institution Name */}
                              <h4 className="text-xl font-bold text-dark dark:text-white mb-1 group-hover:text-primary transition-colors">
                                 {item.title}
                              </h4>

                              {/* Degree */}
                              <p className="text-primary font-semibold text-sm mb-2">
                                 {item.degree}
                              </p>

                              {/* Description */}
                              <p className="text-secondary leading-relaxed mb-4">
                                 {item.desc}
                              </p>

                              {/* Achievements */}
                              <div className="space-y-2">
                                 <h5 className="text-sm font-semibold text-dark dark:text-white">
                                    Key Achievements:
                                 </h5>
                                 <div className="flex flex-wrap gap-2">
                                    {item.achievements.map(
                                       (achievement, achIndex) => (
                                          <span
                                             key={achIndex}
                                             className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-700 border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
                                          >
                                             <svg
                                                className="w-3 h-3 mr-1 text-primary"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                             >
                                                <path
                                                   fillRule="evenodd"
                                                   d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                   clipRule="evenodd"
                                                />
                                             </svg>
                                             {achievement}
                                          </span>
                                       ),
                                    )}
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Experience Section */}
               <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-8">
                     <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           fill="currentColor"
                           viewBox="0 0 256 256"
                           className="text-primary"
                        >
                           <path d="M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm88,168H40V80H216Z"></path>
                        </svg>
                     </div>
                     <h3 className="text-2xl font-bold text-dark dark:text-white">
                        Experience
                     </h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                     {experience.map((item, index) => (
                        <div key={index} className="group h-full">
                           {/* Tambah flex flex-col h-full agar tech stack bisa di-push ke bawah */}
                           <div className="flex flex-col p-6 rounded-2xl bg-white dark:bg-accent border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full">
                              <div className="flex items-start justify-between mb-3">
                                 <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                                    {item.year}
                                 </span>
                              </div>
                              <h4 className="text-lg font-bold text-dark dark:text-white mb-1 group-hover:text-primary transition-colors">
                                 {item.title}
                              </h4>
                              <p className="text-primary font-medium text-sm mb-3">
                                 {item.company}
                              </p>
                              {/* flex-1 agar deskripsi mengisi ruang yang tersisa, mendorong tech stack ke bawah */}
                              <p className="text-secondary leading-relaxed mb-4 flex-1">
                                 {item.desc}
                              </p>

                              {/* Tech Stack — selalu di paling bawah */}
                              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                                 {item.techStack.map((tech, techIndex) => (
                                    <span
                                       key={techIndex}
                                       className="px-3 py-1 text-xs font-medium rounded-lg bg-primary/5 text-primary border border-primary/20 hover:bg-primary/10 transition-colors"
                                    >
                                       {tech}
                                    </span>
                                 ))}
                              </div>
                           </div>
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
