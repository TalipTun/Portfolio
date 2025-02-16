
type ContactProps = {
    link: string;
    logo: string;
    text: string;
    name: string;
}

const props: ContactProps[] = [
  { 
    link: "mailto:taliptun62@gmail.com",
    logo: "skills.png",
    text: "taliptun62@gmail.com",
    name: "Email",
  },
  { 
    link: "https://www.linkedin.com/in/talip-tun-03820734b/",
    logo: "linkedin-logo.png",
    text: "Talip Tun",
    name: "LinkedIn",
  },
  { 
    link: "https://github.com/TalipTun",
    logo: "github-sign.png",
    text: "TalipTun",
    name: "Github",
  },
]

function Contact() {
    return (
      <>
        <div className="w-full text-center text-white">
          <h1 className="text-6xl bg-[#1c1d1e]">Contact Me</h1>
        </div>
        <div id="Contact" className="h-fit flex flex-row flex-wrap justify-center items-center gap-4 p-10 bg-[#1c1d1e]">
          {props.map((props) => (
            <div id="github" className="w-90 h-51 rounded-2xl bg-[#131313] flex flex-col justify-center items-center gap-4 p-4">
              <img src={props.logo} className="h-10 w-10 invert"></img>
              <p className="text-white text-3xl">{props.text}</p>
              <a href={props.link} target="_blank" rel="noopener noreferrer" className="w-full h-8">
                <button className="w-full h-12 text-2xl rounded-2xl text-center bg-white text-black">{props.name}</button>
              </a>
            </div>
          ))}
        </div>
      </>
    )
  }
  
  export default Contact