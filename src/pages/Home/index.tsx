import { FC, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import style from "./Home.module.css";
import Projects from "../../components/Projects";
import NavLinks from "../../components/NavLinks";

const technologies = ["REACT", "REACT NATIVE", "PYTHON", "JAVA", "GOLANG", "TYPESCRIPT", "NEXT.JS", "NODE.JS", "MYSQL", "POSTGRESQL", "MICRO FRONTEND", "DOCKER"];

const Home: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className={style.page}>
      <div className={style.wrap}>
        <header className={style.header}>
          <a className={style.logo} href="#top" aria-label="MFYZ home">mfyz<span>.</span></a>
          <nav className={style.desktopNav} aria-label="Primary navigation"><NavLinks scrollToSection={scrollToSection} /><a className={style.navCta} href="mailto:mferdiyanzah@gmail.com">Let&apos;s talk <span aria-hidden="true">↗</span></a></nav>
          <button className={style.menuButton} type="button" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} onClick={() => setIsMenuOpen((open) => !open)}>{isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}</button>
          {isMenuOpen && <nav id="mobile-navigation" className={style.mobileNav} aria-label="Mobile navigation"><NavLinks scrollToSection={scrollToSection} /><a className={style.navCta} href="mailto:mferdiyanzah@gmail.com">Let&apos;s talk <span aria-hidden="true">↗</span></a></nav>}
        </header>

        <main id="top">
          <section className={style.hero} aria-labelledby="hero-title">
            <div className={style.eyebrow}>Software Engineer · Available for freelance</div>
            <h1 id="hero-title">I make <span className={style.pink}>complex</span> things feel <span className={style.blue}>simple.</span></h1>
            <p className={style.intro}>Mohammad Ferdiyanzah builds production web and mobile software for teams that want to move from messy workflow to useful product.</p>
            <div className={style.actions}><a className={style.button} href="mailto:mferdiyanzah@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a><button className={`${style.button} ${style.buttonAlt}`} type="button" onClick={() => scrollToSection("projects")}>See the work <span aria-hidden="true">↓</span></button></div>
            <p className={style.currentRole}>Currently an IT Management Trainee at Dexa Group.</p>
          </section>

          <div className={style.strip} aria-label="Technologies and specialties"><div className={style.stripTrack}>{[...technologies, ...technologies].map((technology, index) => <span key={`${technology}-${index}`}>{technology} <b aria-hidden="true">✳</b></span>)}</div></div>

          <section className={style.section} aria-labelledby="services-title"><div className={style.label}>What I bring</div><h2 id="services-title">Less noise.<br />More shipped.</h2><div className={style.services}>
            <article className={style.service}><h3>Web applications</h3><p>Full-stack React and Next.js apps — dashboards, internal tools, SaaS products, and customer-facing platforms.</p></article>
            <article className={style.service}><h3>Mobile products</h3><p>Cross-platform React Native development — from prototype to production-ready apps with real-time features.</p></article>
            <article className={style.service}><h3>APIs &amp; integrations</h3><p>Backend services, third-party integrations, and micro-frontend architectures that scale with your team.</p></article>
          </div></section>

          <Projects />

          <section id="experiences" className={`${style.section} ${style.experience}`} aria-labelledby="experience-title"><div className={style.label}>Experience</div><h2 id="experience-title">Where I&apos;ve<br />learned to ship.</h2><div className={style.experienceList}>
            <article className={style.experienceItem}><time>Feb 2024 — Present</time><div><h3>IT Management Trainee · Dexa Group</h3><ul><li>Building a web platform that helps the Marketing and Sales teams win more clients.</li><li>Working with MySQL and Oracle as the project&apos;s primary databases.</li><li>Introduced Micro Frontend architecture to the company for the first time — cutting deployment time by 60%.</li></ul></div></article>
            <article className={style.experienceItem}><time>Mar 2023 — Jan 2024</time><div><h3>Junior Frontend Engineer · Sinarmas Quantum Engine</h3><ul><li>Built dashboards for HR, business teams, and clients using React.js and Tailwind CSS.</li><li>Created a live chat feature with WebSocket, connecting customers and support in real time.</li><li>Wrote unit tests covering more than 90% of the codebase.</li></ul></div></article>
            <article className={style.experienceItem}><time>Sep 2022 — Feb 2023</time><div><h3>Frontend Engineer Internship · Danamas — Pasar Dana Pinjaman</h3><ul><li>Built a back-office website that manages loans, customers, and sales — making operations 40% more efficient.</li><li>Migrated a module from a monolith to Micro Frontend architecture.</li></ul></div></article>
          </div></section>

          <section id="about" className={`${style.section} ${style.about}`} aria-labelledby="about-title"><div><div className={style.label}>About</div><h2 id="about-title">From internet cafes<br />to engineering.</h2><p className={style.aboutLead}>I&apos;ve been hooked on software engineering since 2015, when I was in 9th grade. My first project was a guessing game written in C++ — at an internet cafe, because my family didn&apos;t have a computer.</p><p>I went to a vocational high school to study Software Engineering. Then I applied to ITS for the same major — but my grades sent me to Physics instead. It turned out to be a gift: I learned to think differently, and I never stopped coding.</p><p>Today I&apos;m a software engineer who believes great products come from curiosity and craft.</p></div><aside className={style.notes}><h3>Currently exploring</h3><ul><li>Golang</li><li>Micro Frontend</li><li>System Design</li><li>DevOps</li></ul><h3>Based in</h3><p>South Tangerang, Banten, Indonesia<br />UTC+7</p></aside></section>

          <section id="contact" className={style.contact} aria-labelledby="contact-title"><div className={style.label}>Available for selected projects</div><h2 id="contact-title">Let&apos;s build something.</h2><p>Tell me about your project — timeline, goals, and budget. I&apos;ll get back within 24 hours with a clear plan.</p><a className={style.button} href="mailto:mferdiyanzah@gmail.com">mferdiyanzah@gmail.com <span aria-hidden="true">↗</span></a></section>
        </main>

        <footer className={style.footer}><span>© {new Date().getFullYear()} Mohammad Ferdiyanzah</span><span><a href="https://www.linkedin.com/in/mferdiyanzah/" target="_blank" rel="noreferrer noopener">LinkedIn</a> · <a href="https://github.com/mferdiyanzah" target="_blank" rel="noreferrer noopener">GitHub</a> · Open to freelance</span></footer>
      </div>
    </div>
  );
};

export default Home;
