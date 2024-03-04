"use client";
import { useEffect, useState, type FC } from "react";
import fira_code from "@/lib/fonts";
import { type SectionType } from "@/types";

const Nav: FC = () => {
  // const hash = window.location.hash.substring(1);
  // const sectionId = hash !== "" ? (hash as SectionType) : "about";

  // const [activeSection, setActiveSection] = useState<SectionType>(sectionId);
  const [activeSection, setActiveSection] = useState<SectionType>("about");

  useEffect(() => {
    // const handleLoad = () => {
    //   if (!!hash) {
    //     const element = document.querySelector(`section#${sectionId}`);
    //     if (element) {
    //       element.scrollIntoView({ behavior: "smooth" });
    //     }
    //   }
    // };

    const scrollHandler = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;
      if (
        sections[0] &&
        (window.scrollY === 0 || sections[0].offsetTop === window.scrollY)
      ) {
        setActiveSection(sections[0].id as SectionType);
        return;
      }
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveSection(section.id as SectionType);
        }
      });
    };

    // window.addEventListener("load", handleLoad);
    window.addEventListener("scroll", scrollHandler);
    return () => {
      // window.removeEventListener("load", handleLoad);
      window.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="hidden lg:block uppercase mt-14 max-w-xs">
      <ul>
        <li>
          <a
            href="#about"
            className={`${fira_code.className} ${activeSection === "about" ? "active" : ""} text-xs font-medium tracking-wider nav-link`}
          >
            <span className="nav-link-line" />
            about
          </a>
        </li>
        <li>
          <a
            href="#experiences"
            className={`${fira_code.className} ${activeSection === "experiences" ? "active" : ""} text-xs font-medium tracking-wider nav-link outline-none`}
          >
            <span className="nav-link-line" />
            experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`${fira_code.className} ${activeSection === "projects" ? "active" : ""} text-xs font-medium tracking-wider nav-link outline-none`}
          >
            <span className="nav-link-line" />
            projects
          </a>
        </li>
        <li>
          <a
            href="#reach-out"
            className={`${fira_code.className} ${activeSection === "reach-out" ? "active" : ""} text-xs font-medium tracking-wider nav-link outline-none`}
          >
            <span className="nav-link-line" />
            Reach out
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
