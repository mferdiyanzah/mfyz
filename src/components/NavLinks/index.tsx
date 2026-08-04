import style from "../../pages/Home/Home.module.css";

const NavLinks = ({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) => (
  <>
    <div
      className={`${style.nav_link} cursor-pointer hover:text-rust text-ink-soft text-sm font-medium`}
      onClick={() => scrollToSection("experiences")}
    >
      Experience
    </div>
    <div
      className={`${style.nav_link} cursor-pointer hover:text-rust text-ink-soft text-sm font-medium`}
      onClick={() => scrollToSection("projects")}
    >
      Work
    </div>
    <div
      className={`${style.nav_link} cursor-pointer hover:text-rust text-ink-soft text-sm font-medium`}
      onClick={() => scrollToSection("about")}
    >
      About
    </div>
    <div
      className={`${style.nav_link} cursor-pointer hover:text-rust text-ink-soft text-sm font-medium`}
      onClick={() => scrollToSection("contact")}
    >
      Contact
    </div>
  </>
);

export default NavLinks;
