import style from "../../pages/Home/Home.module.css";

const NavLinks = ({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) => (
  <>
    <button
      type="button"
      className={`${style.nav_link} cursor-pointer hover:text-rust text-ink-soft text-sm font-medium`}
      onClick={() => scrollToSection("experiences")}
    >
      Experience
    </button>
    <button
      type="button"
      className={`${style.nav_link} cursor-pointer hover:text-rust text-ink-soft text-sm font-medium`}
      onClick={() => scrollToSection("projects")}
    >
      Work
    </button>
    <button
      type="button"
      className={`${style.nav_link} cursor-pointer hover:text-rust text-ink-soft text-sm font-medium`}
      onClick={() => scrollToSection("about")}
    >
      About
    </button>
    <button
      type="button"
      className={`${style.nav_link} cursor-pointer hover:text-rust text-ink-soft text-sm font-medium`}
      onClick={() => scrollToSection("contact")}
    >
      Contact
    </button>
  </>
);

export default NavLinks;
