import style from "../../pages/Home/Home.module.css";

const NavLinks = ({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) => (
  <>
    <div
      className={`${style.nav_link} cursor-pointer hover:text-gray-600`}
      onClick={() => scrollToSection("experiences")}
    >
      experiences
    </div>
    <div
      className={`${style.nav_link} cursor-pointer hover:text-gray-600`}
      onClick={() => scrollToSection("projects")}
    >
      projects
    </div>
    <div
      className={`${style.nav_link} cursor-pointer hover:text-gray-600`}
      onClick={() => scrollToSection("about")}
    >
      about
    </div>
    <div
      className={`${style.nav_link} cursor-pointer hover:text-gray-600`}
      onClick={() => scrollToSection("contact")}
    >
      contact
    </div>
  </>
);

export default NavLinks;
