type AboutProps = {
  title: string;
  role: string;
  description: string;
  location: string,
  date: string,
}

const props: AboutProps[] = [
  {
    title: "Lab2023",
    role: "Junior Web Developer",
    description: "Acquired knowledge in web design and development, specialising in front-end website development. Gained comprehensive understanding in various web technologies and tools, including: CSS, Tailwind CSS, JavaScript, HTML, Figma, Ruby on Rails, and I was able to experience work environment weekly and learned how to work in a team",
    location: "C, 20070, Kınıklı, Hüseyin Yılmaz Cd. No:67, 20160, Denizli, Türkiye",
    date: "June 2022 - September 2022",
  },
  {
    title: "KCL-Enactus-Hackathon",
    role: "Team Member",
    description: "This project is a React-based web application built with TypeScript, Bootstrap, and Tailwind CSS for styling. It incorporates React Router DOM for navigation across multiple pages, including a landing page, shopping page, sign-in/sign-up functionality, a disease identification page, a weather forecast API page, and a soil ideal pH calculator page. Each page is designed to provide specific features, such as user authentication, product browsing, weather updates, and soil analysis.",
    location: "The Strands, Milnthorpe WC2R 2LS, London, United Kingdom",
    date: "February 2025",
  },
]

function About() {
    return (
      <>
        <div id="About" className="pt-30 w-full h-screen bg-[#1c1d1e] text-white">
          <div className="w-full  text-center">
              <h1 className="text-6xl mb-10">About Me</h1>
          </div>
          <div id="about" className="w-full flex flex-col justify-center items-center">
              <p className="px-20 max-w-3xl mb-10 text-1xl">I am a friendly, reliable, and focused students who tries to be kind, friendly, and helpful to those around him as much as possible. I like coding, computer science, and hands-on projects where I can show my potential at creating useful software. In the future, I would like to become a software engineer. My hobbies include programming, watching fun videos, playing with nun-chucks, and ,especially, spending time with family and friends. </p>
          </div>
          <div className="w-full text-center">
              <h1 className="text-5xl mb-10">Work Experience</h1>
          </div>
          <div id="Experience" className="flex flex-row flex-wrap content-start justify-center gap-5 w-full bg-[#1c1d1e] h-screen">
            {props.map((props) => (
                <div className="w-130 min-h-80 bg-[#131313] rounded-2xl flex flex-col justify-between p-4 gap-4">
                  <div className="flex flex-row justify-between">
                    <p className="text-2xl">{props.title}</p>
                    <p className="text-[#5e5b5b]">{props.role}</p>
                  </div>
                  <div className="">
                    <p>{props.description}</p>
                  </div>
                  <div className="flex flex-col justify-items-start text-[#5e5b5b]">
                    <p>{props.location}</p>
                    <p>{props.date}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </>
    )
  }
  
  export default About