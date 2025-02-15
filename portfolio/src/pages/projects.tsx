
type Project = {
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Project 1",
    description: "This is the description for Project 1. It involves React and TypeScript.",
  },
  {
    title: "Project 2",
    description: "This project focuses on building scalable web applications with Node.js.",
  },
  {
    title: "Project 3",
    description: "A project on data analysis using Python and various machine learning techniques.",
  },
  {
    title: "Project 4",
    description: "A full-stack application built using the MERN stack (MongoDB, Express, React, Node.js).",
  },
];

export default function Projects() {
  return (
    <div id="Projects" className="min-h-screen pb-10 flex flex-row flex-wrap gap-4 justify-center items-center bg-[#1c1d1e]">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative group cursor-pointer w-80 h-80 m-0 p-0" // Fixed width and height
        >
          {/* Title Box */}
          <div className="w-full h-full bg-[#131313] text-white flex items-center justify-center transition duration-300 group-hover:bg-amber-400">
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>

          {/* Description Box (Hidden by default, shows on hover) */}
          <div className="absolute inset-0 bg-black bg-opacity-70 text-white p-4 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <p className="text-sm text-center">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
