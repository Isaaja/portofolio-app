/* eslint-disable react/no-unescaped-entities */
const AboutSection = () => {
  return (
    <section id="about" className="pt-36 pb-36 dark:bg-dark">
      <div className="container bg-orange-200 rounded-xl px-6 py-10 h-screen">
        <div className="w-full">
          {/* Header Section */}
          <div className="mx-auto mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-black dark:text-white">
              About Me
            </h1>
            <p className="mx-auto max-w-2xl text-medium font-medium text-secondary md:text-lg">
              I'm a fullstack developer passionate about building modern web
              applications. I enjoy learning new technologies and tackling
              innovative challenges.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-center text-dark dark:text-white lg:text-3xl">
                Education
              </h3>
              <p className="text-medium font-medium text-secondary md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis dicta pariatur voluptatibus inventore, ipsa maxime
                mollitia vel rerum repellat obcaecati quidem beatae enim
                quaerat, odio fugit tempore distinctio. Earum, maxime!
              </p>
            </div>

            {/* Experience Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-center text-dark dark:text-white lg:text-3xl">
                Experience
              </h3>
              <p className="text-medium font-medium text-secondary md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis dicta pariatur voluptatibus inventore, ipsa maxime
                mollitia vel rerum repellat obcaecati quidem beatae enim
                quaerat, odio fugit tempore distinctio. Earum, maxime!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
