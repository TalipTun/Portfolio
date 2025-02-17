import image from "../assets/image.jpg"
import certificate from "../assets/certificate.png"
import scrimba from "../assets/scrimba.png"
import harvard from "../assets/harvard.png"

type Project = {
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Http Server with C",
    description: "•	This project is a basic multi-process HTTP server implemented in C using sockets. It listens for client connections, processes HTTP requests, and responds accordingly. The server supports simple routes like /echo/, /user-agent, and /files, allowing users to retrieve or store files when a directory is specified. It also uses fork() to handle multiple clients simultaneously, making it a lightweight web server for basic file and request handling.",
    image: image,
  },
  {
    title: "Harvard University CS50 Final Project",
    description: "•	I created a 2D fighting game built using HTML, CSS, and JavaScript with the Canvas API for rendering animations. It features two characters that can move, jump, and attack, with health bars and a timer determining the winner. The game logic includes collision detection, sprite animations, and a game loop that updates character movements, attacks, and win conditions dynamically.",
    image: certificate,
  },
  {
    title: "Scrimba's Frontend Career Path Courses",
    description: "•	I learned essential CSS concepts, JavaScript concepts, responsive design, code reviews, working with APIs, learn UI design, React Basis, Advanced React by creating projects each step of the course.",
    image: scrimba,
  },
  {
    title: "Harvard University CS50 Introduction to Computer Science",
    description: "•	I mainly used C, Python, and HTML and I created projects using abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Problem sets inspired by real-world domains of biology, cryptography, finance, forensics, and gaming",
    image: harvard,
  },
];

export default function Projects() {
  return (
    <>
    <div id="Projects" className="bg-[#1c1d1e] min-h-screen flex flex-col w-full justify-center items-center">
      <div className="w-full mb-10 text-center">
            <h1 className="text-6xl text-white">Portfolio</h1>
      </div>
      <div className=" pb-10 flex flex-row flex-wrap content-start gap-4 justify-center items-center bg-[#1c1d1e]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group cursor-pointer w-80 h-80 m-0 p-0"
          >
            <div className="w-full h-full bg-[#131313] text-white flex flex-col justify-start transition duration-300 group-hover:bg-amber-400 text-center">
              <h3 className="text-xl font-bold mt-5">{project.title}</h3>
              <div className="flex justify-center items-center h-full w-full">
                <img src={project.image} alt={project.title} className="max-h-60 max-w-60"/>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-70 text-white p-4 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-sm text-center">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
