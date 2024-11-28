import { FC, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import style from "./Home.module.css";
import Projects from "../../components/Projects";
import NavLinks from "../../components/NavLinks";

const Home: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const offset = 80;
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full relative min-h-screen flex flex-col">
      <nav className="w-full right-0 z-50 bg-white/80 backdrop-blur-sm py-4 fixed top-0">
        <div className="container mx-auto px-6 flex justify-between flex-row text-[16px] items-center">
          <div
            className={`font-bold text-[32px] md:text-[40px] ${style.nav_logo}`}
          >
            mfyz.
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size="24px" /> : <FiMenu size="24px" />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-3 items-center sm:gap-8">
            <NavLinks scrollToSection={scrollToSection} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm py-4 px-6">
            <div className="flex flex-col gap-4">
              <NavLinks scrollToSection={scrollToSection} />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-8 px-4 pt-20 md:pt-0">
        <div className="flex justify-center w-full md:w-1/2 px-4 md:px-8">
          <img
            src="/main.png"
            alt="main image"
            className="w-auto max-w-full h-auto max-h-[400px] md:max-h-none"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center px-4 md:px-8">
          <div className="max-w-2xl">
            <div className="font-bold text-3xl md:text-4xl text-center sm:my-2 my-6 tracking-wide">
              Hallo, I&apos;m Ferdiyanzah
            </div>
            <div className="tracking-wide text-center text-sm md:text-base">
              A software developer with years of experience. My expertise lies
              in Web applications, and the main languages in my technology suite
              are <span className="border-b-2 border-black">React</span>,{" "}
              <span className="border-b-2 border-black">React Native</span>,{" "}
              <span className="border-b-2 border-black">Python</span>, and{" "}
              <span className="border-b-2 border-black">Java</span>. I have been
              working with Web App and Mobile App for 3 years. I&apos;m a
              lifelong learner, currently exploring{" "}
              <span className="border-b-2 border-black">Golang</span>.
            </div>
            <div className="flex gap-6 justify-center my-4">
              <a
                href="mailto:mferdiyanzah@gmail.com"
                className="hover:opacity-100 opacity-70"
              >
                <FiMail size="1.75em" />
              </a>
              <a
                href="https://www.linkedin.com/in/mferdiyanzah/"
                className="hover:opacity-100 opacity-70"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FiLinkedin size="1.75em" />
              </a>
              <a
                href="https://github.com/mferdiyanzah"
                className="hover:opacity-100 opacity-70"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FiGithub size="1.75em" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section
        id="experiences"
        className="min-h-screen flex items-center bg-gray-50 py-12 md:py-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
            Experiences
          </h2>
          My experiences has been a journey of learning and growth, from
          interning to a full-time employee.
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Dexa Group */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    IT Management Trainee
                  </h3>
                  <p className="text-gray-600">Dexa Group</p>
                </div>
                <span className="text-gray-500 text-sm">
                  February 2024 - Present
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Assigned on iFocus Project, a website for the needs of
                  Marketing and Sales team to boost the revenue of company and
                  to get more clients
                </li>
                <li>
                  Use MySQL and Oracle as a primary database of the project
                </li>
                <li>
                  Being a pioneer of Micro Frontend Architecture in this company
                </li>
              </ul>
            </div>

            {/* Sinarmas Quantum Engine */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Junior Frontend Engineer
                  </h3>
                  <p className="text-gray-600">Sinarmas Quantum Engine</p>
                </div>
                <span className="text-gray-500 text-sm">
                  March 2023 - January 2024
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Fostered effective collaboration with other Frontend
                  Engineers, utilizing React.js and Tailwind CSS frameworks
                </li>
                <li>
                  Leveraged WebSocket technology to create a dynamic Live Chat
                  feature, enabling seamless communication between two entities
                </li>
                <li>
                  Create Dashboard for HR and Business Team and also client to
                  see and bill client's usage of our services
                </li>
                <li>Create Unit Testing to cover more than 90% of codebase</li>
              </ul>
            </div>

            {/* Danamas */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Frontend Engineer Internship
                  </h3>
                  <p className="text-gray-600">Danamas (Pasar Dana Pinjaman)</p>
                </div>
                <span className="text-gray-500 text-sm">
                  September 2022 - February 2023
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Successfully contributed to the development of a comprehensive
                  BackOffice Website, catering to the management of loans,
                  customers, and sales
                </li>
                <li>
                  Demonstrated expertise in migrating a module from a monolithic
                  system to a Micro Frontend architecture, optimizing
                  scalability and maintainability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      {/* About Section */}
      <section id="about" className="min-h-screen flex py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <p className="text-lg mb-4">
            My journey as a software developer has been a fascinating one,
            filled with countless challenges and opportunities for growth. I was
            introduced with software engineering since 2015, when I was in 9th
            grade. I started with C++ with my first project was a simple
            guessing game. My family didn't have a computer at that time, so I
            learned programming by doing it at internet cafe.
          </p>
          <p className="text-lg mb-4">
            Because I was bored about school, I went to Vocational High School
            and learned about Software Engineering. I learned mainly C++ and Web
            Development.
          </p>
          <p className="text-lg mb-4">
            After I graduated, I went to ITS (Institut Teknologi Sepuluh
            Nopember) and studied Physics. Why? Because my grades didn't let me
            to study Software Engineering at ITS. So, I studied Physics, and I
            learned a lot of things that not related to software engineering.
            But, I still keep learning about software engineering, and now I'm a
            software engineer.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex items-center bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Let's Connect!
          </h2>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg mb-8 text-gray-700">
              I'm always open to discussing new projects, opportunities, or just
              having a friendly chat about technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
              <a
                href="mailto:mferdiyanzah@gmail.com"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <FiMail size="2em" className="mb-3 text-gray-700" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-gray-600">mferdiyanzah@gmail.com</p>
              </a>

              <a
                href="https://www.linkedin.com/in/mferdiyanzah/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <FiLinkedin size="2em" className="mb-3 text-gray-700" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-gray-600">Connect with me</p>
              </a>

              <a
                href="https://github.com/mferdiyanzah"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <FiGithub size="2em" className="mb-3 text-gray-700" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-gray-600">Check out my work</p>
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-700">
                South Tangerang, Banten, Indonesia
              </p>
              <p className="text-gray-700 mt-2">Phone: +62 882-2778-5167</p>
            </div>
          </div>
        </div>
      </section>

      {/* Separate Footer Section */}
      <footer className="w-full bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} Mohammad Ferdiyanzah. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
