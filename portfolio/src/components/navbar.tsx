import React, { useState, useEffect } from "react";
import code from "../icons/code.png";
import home from "../icons/home.png";
import contact from "../icons/contact.png";
import person from "../icons/person.png";
import github from "../icons/github-sign.png";
import linkedin from "../icons/linkedin-logo.png";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle the intersection logic (section in view)
  useEffect(() => {
    const sections = ["Home", "Projects", "About", "Contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the section is in view, update active section
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // When 50% of the section is in view
      }
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="container" className="bg-[#181818] flex flex-col w-48 fixed left-0 top-0 bottom-0 scroll-smooth">
      <div id="topbit" className="h-56 bg-black">
        <p className="text-4xl h-40 flex justify-center items-center text-amber-300">Talip Tun</p>
        <p className="text-xl h-16 flex justify-center items-center text-[#9a9a9a]">CS undergraduate</p>
      </div>
      <div id="buttons" className="h-96 py-10">
        <ul id="item-container" className="m-0 p-0 h-full flex flex-col justify-between text-center text-[#9a9a9a]">
          <div
            className={`flex flex-row justify-left pl-10 gap-2 items-center transition duration-300 ${
              activeSection === "Home" ? "brightness-150" : "hover:brightness-150"
            }`}
          >
            <img src={home} className="h-7 w-7 brightness-500" />
            <button
              className="text-[20px] mt-2"
              onClick={() => handleScroll("Home")}
            >
              Home
            </button>
          </div>
          <div
            className={`brightness-70 flex flex-row justify-left pl-10 gap-2 items-center transition duration-300 ${
              activeSection === "Projects" ? "brightness-150" : "hover:brightness-125"
            }`}
          >
            <img src={code} className="h-7 w-7 invert" />
            <button
              className="text-[20px] brightness-150"
              onClick={() => handleScroll("Projects")}
            >
              Works
            </button>
          </div>
          <div
            className={`flex flex-row justify-left pl-10 gap-2 items-center transition duration-300 ${
              activeSection === "About" ? "brightness-150" : "hover:brightness-150"
            }`}
          >
            <img src={person} className="h-7 w-7 brightness-500" />
            <button
              className="text-[20px]"
              onClick={() => handleScroll("About")}
            >
              About
            </button>
          </div>
          <div
            className={`brightness-70 flex flex-row justify-left pl-10 gap-2 items-center transition duration-300 ${
              activeSection === "Contact" ? "brightness-200" : "hover:brightness-125"
            }`}
          >
            <img src={contact} className="h-7 w-7 invert " />
            <button
              className="text-[20px] brightness-110"
              onClick={() => handleScroll("Contact")}
            >
              Contact
            </button>
          </div>
        </ul>
      </div>
      <div id="symbols" className="h-15 flex flex-row justify-center gap-5 items-center brightness-65">
        <div className="h-10 w-10 brightness-65 hover:brightness-500 transition duration-300">
          <a href="https://github.com/TalipTun" target="_blank" rel="noopener noreferrer">
            <img src={github} className="h-10 w-10 invert" />
          </a>
        </div>
        <div className="h-10 w-10 brightness-65 hover:brightness-500 transition duration-300">
          <a href="https://www.linkedin.com/in/talip-tun-03820734b/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} className="h-10 w-10 invert" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
