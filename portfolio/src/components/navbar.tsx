import code from "../icons/code.png"; 
import home from "../icons/home.png"; 
import contact from "../icons/contact.png"; 
import person from "../icons/person.png"; 
import skills from "../icons/skills.png"; 
import github from "../icons/github-sign.png"; 
import linkedin from "../icons/linkedin-logo.png"; 

function Navbar() {
    return (
      <>
        <div id="container" className="bg-[#181818] flex flex-col w-48 fixed left-0 top-0 bottom-0 scroll-smooth">
          <div id="topbit" className="h-56 bg-black">
            <p className="text-4xl h-40 flex justify-center items-center text-amber-300">Talip Tun</p>
            <p className="text-xl h-16 flex justify-center items-center text-[#9a9a9a]">CS undergraduate</p>
          </div>
          <div id="buttons" className="h-96 py-10">
            <ul id="item-container" className="m-0 p-0 h-full flex flex-col justify-between text-center text-[#9a9a9a]">
                <div className="flex flex-row justify-left pl-10 gap-2 items-center hover:brightness-150 transition duration-300">
                  <img src={home} className="h-7 w-7 brightness-500" />
                  <a className="text-[20px] mt-2 " href="#Home">Home</a>
                </div>
                <div className="flex flex-row justify-left pl-10 gap-2 brightness-60 items-center hover:brightness-125 transition duration-300">
                  <img src={code} className="h-7 w-7 invert" />
                  <a className="text-[20px] brightness-150" href="#Projects">Projects</a>
                </div>
                <div className="flex flex-row justify-left pl-10 gap-2 items-center hover:brightness-150 transition duration-300">
                  <img src={person} className="h-7 w-7 brightness-500" />
                  <a className="text-[20px]" href="#About">About</a>
                </div>
                <div className="flex flex-row justify-left pl-10 gap-2 brightness-70 items-center hover:brightness-125 transition duration-300">
                  <img src={skills} className="h-7 w-7 invert" />
                  <a className="text-[20px] brightness-150" href="#Skills">Skills</a>
                </div>
                <div className="flex flex-row justify-left pl-10 gap-2 brightness-70 items-center hover:brightness-125 transition duration-300">
                  <img src={contact} className="h-7 w-7 invert" />
                  <a className="text-[20px] brightness-150" href="#Contact">Contact</a>
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
      </>
    )
  }
  
  export default Navbar;