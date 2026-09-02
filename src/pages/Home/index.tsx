import { FC, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
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
      <nav className="w-full z-50 fixed top-0 bg-paper/90 backdrop-blur-md border-b border-ink/10">
        <div className="container mx-auto px-6 flex justify-between flex-row text-[16px] items-center h-16">
          <div className={`font-display font-semibold text-[22px] tracking-tight ${style.nav_logo}`}>
            mfyz<em className="not-italic text-rust">.</em>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size="24px" /> : <FiMenu size="24px" />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <NavLinks scrollToSection={scrollToSection} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-paper/95 backdrop-blur-md py-4 px-6 border-b border-ink/10">
            <div className="flex flex-col gap-4">
              <NavLinks scrollToSection={scrollToSection} />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen w-full flex items-center pt-16">
        <div className="container mx-auto px-6">
          <div className="overline">Software Engineer — South Tangerang, ID</div>
          <h1 className="font-display font-normal text-[clamp(52px,8vw,92px)] leading-[0.98] tracking-[-0.03em] my-2">
            Hallo, I&apos;m
            <br />
            Mohammad <em className="text-rust">Ferdiyanzah</em>
          </h1>
          <p className="max-w-[560px] text-lg text-ink-soft mt-7">
            I build web and mobile applications that people actually use. Three
            years of <strong className="text-ink border-b-2 border-rust">React</strong>,{" "}
            <strong className="text-ink border-b-2 border-rust">React Native</strong>,{" "}
            <strong className="text-ink border-b-2 border-rust">Python</strong> and{" "}
            <strong className="text-ink border-b-2 border-rust">Java</strong> — and right
            now I&apos;m diving into{" "}
            <strong className="text-ink border-b-2 border-rust">Golang</strong>.
          </p>
          <div className="flex gap-6 mt-11 flex-wrap">
            <a
              href="mailto:mferdiyanzah@gmail.com"
              className="text-sm font-medium tracking-[0.06em] uppercase border border-ink/10 rounded-full px-5 py-3 hover:border-rust hover:text-rust transition-all"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/mferdiyanzah/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium tracking-[0.06em] uppercase border border-ink/10 rounded-full px-5 py-3 hover:border-rust hover:text-rust transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mferdiyanzah"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium tracking-[0.06em] uppercase border border-ink/10 rounded-full px-5 py-3 hover:border-rust hover:text-rust transition-all"
            >
              GitHub
            </a>
          </div>
          <div className="font-display italic text-ink-soft text-[15px] mt-4">
            — currently an IT Management Trainee at Dexa Group
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="w-full bg-[#faf9f6] border-t border-b border-[rgba(28,26,23,0.12)] py-7 overflow-hidden">
        <div className="marquee-track">
          {["REACT", "REACT NATIVE", "PYTHON", "JAVA", "GOLANG", "TAILWIND CSS", "NEXT.JS", "NODE.JS", "MYSQL", "ORACLE", "MICRO FRONTEND", "DOCKER"]
            .flatMap((t) => [t, t])
            .reduce<JSX.Element[]>((acc, tech, i) => {
              if (i > 0) acc.push(<span key={`d${i}`} className="text-[#c0562f] mx-4 text-[10px]">•</span>);
              acc.push(
                <span
                  key={`t${i}`}
                  className="whitespace-nowrap uppercase text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.18em] text-[#57534b]"
                >
                  {tech}
                </span>
              );
              return acc;
            }, [])}
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="bg-paper-alt py-28 md:py-32">
        <div className="container mx-auto px-6">
          <div className="overline">01 — Experience</div>
          <h2 className="section-title">A journey of learning and growth.</h2>

          <div className="mt-10 max-w-5xl">
            {/* Dexa Group */}
            <div className="grid grid-cols-12 gap-4 py-9 border-t border-ink/10">
              <div className="col-span-12 md:col-span-3 font-display italic text-ink-soft text-[15px]">
                Feb 2024 — Present
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-display font-semibold text-[26px] tracking-tight">
                  IT Management Trainee
                </h3>
                <p className="text-sm font-semibold text-rust mt-0.5 mb-3">
                  Dexa Group
                </p>
                <ul className="flex flex-col gap-2 text-[15px] text-ink-soft">
                  <li className="pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-rust">
                    Building a web platform that helps the Marketing and
                    Sales teams win more clients.
                  </li>
                  <li className="pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-rust">
                    Working with MySQL and Oracle as the project&apos;s primary
                    databases.
                  </li>
                  <li className="pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-rust">
                    Introduced Micro Frontend architecture to the company for the
                    first time — cutting deployment time by 60%.
                  </li>
                </ul>
              </div>
            </div>

            {/* Sinarmas Quantum Engine */}
            <div className="grid grid-cols-12 gap-4 py-9 border-t border-ink/10">
              <div className="col-span-12 md:col-span-3 font-display italic text-ink-soft text-[15px]">
                Mar 2023 — Jan 2024
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-display font-semibold text-[26px] tracking-tight">
                  Junior Frontend Engineer
                </h3>
                <p className="text-sm font-semibold text-rust mt-0.5 mb-3">
                  Sinarmas Quantum Engine
                </p>
                <ul className="flex flex-col gap-2 text-[15px] text-ink-soft">
                  <li className="pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-rust">
                    Built dashboards for HR, business teams, and clients using
                    React.js and Tailwind CSS.
                  </li>
                  <li className="pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-rust">
                    Created a live chat feature with WebSocket, connecting
                    customers and support in real time.
                  </li>
                  <li className="pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-rust">
                    Wrote unit tests covering more than 90% of the codebase.
                  </li>
                </ul>
              </div>
            </div>

            {/* Danamas */}
            <div className="grid grid-cols-12 gap-4 py-9 border-t border-b border-ink/10">
              <div className="col-span-12 md:col-span-3 font-display italic text-ink-soft text-[15px]">
                Sep 2022 — Feb 2023
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-display font-semibold text-[26px] tracking-tight">
                  Frontend Engineer Internship
                </h3>
                <p className="text-sm font-semibold text-rust mt-0.5 mb-3">
                  Danamas — Pasar Dana Pinjaman
                </p>
                <ul className="flex flex-col gap-2 text-[15px] text-ink-soft">
                  <li className="pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-rust">
                    Built a back-office website that manages loans, customers,
                    and sales — making operations 40% more efficient.
                  </li>
                  <li className="pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-rust">
                    Migrated a module from a monolith to Micro Frontend
                    architecture.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      {/* About Section */}
      <section id="about" className="py-28 md:py-32">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-16">
          <div>
            <div className="overline">03 — About</div>
            <h2 className="section-title">From internet cafes to engineering.</h2>
            <p className="text-[19px] text-ink mt-8 mb-4">
              I&apos;ve been hooked on software engineering since 2015, when I was
              in 9th grade. My first project was a guessing game written in C++ —
              at an internet cafe, because my family didn&apos;t have a computer.
            </p>
            <p className="text-ink-soft mb-4">
              I went to a vocational high school to study Software Engineering.
              Then I applied to ITS for the same major — but my grades sent me to
              Physics instead. It turned out to be a gift: I learned to think
              differently, and I never stopped coding.
            </p>
            <p className="text-ink-soft">
              Today I&apos;m a software engineer who believes great products come
              from curiosity and craft.
            </p>
          </div>
          <div className="md:border-l border-ink/10 md:pl-8">
            <h4 className="font-display italic text-rust text-[15px] mb-3">
              Currently exploring
            </h4>
            <ul className="flex flex-wrap gap-2">
              <li className="text-[13px] text-ink-soft border border-ink/10 rounded-full px-3 py-1">
                Golang
              </li>
              <li className="text-[13px] text-ink-soft border border-ink/10 rounded-full px-3 py-1">
                Micro Frontend
              </li>
              <li className="text-[13px] text-ink-soft border border-ink/10 rounded-full px-3 py-1">
                System Design
              </li>
              <li className="text-[13px] text-ink-soft border border-ink/10 rounded-full px-3 py-1">
                DevOps
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-ink text-paper text-center py-28 md:py-32">
        <div className="container mx-auto px-6">
          <div className="overline">04 — Contact</div>
          <h2 className="section-title text-paper">Let&apos;s connect!</h2>
          <p className="text-paper/70 max-w-[440px] mx-auto mt-4 mb-10">
            Open to new projects, opportunities, or just a friendly chat about
            technology.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:mferdiyanzah@gmail.com"
              className="text-sm font-medium border border-paper/30 rounded-full px-6 py-3 hover:bg-rust hover:border-rust transition-all"
            >
              ✉ mferdiyanzah@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/mferdiyanzah/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium border border-paper/30 rounded-full px-6 py-3 hover:bg-rust hover:border-rust transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mferdiyanzah"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium border border-paper/30 rounded-full px-6 py-3 hover:bg-rust hover:border-rust transition-all"
            >
              GitHub
            </a>
          </div>
          <div className="mt-12 text-[13px] text-paper/50">
            South Tangerang, Banten, Indonesia · +62 882-2778-5167
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-7 text-center text-[13px] text-ink-soft border-t border-ink/10">
        © {new Date().getFullYear()} Mohammad Ferdiyanzah. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
