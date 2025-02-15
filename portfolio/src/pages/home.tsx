import "tailwindcss";
import Navbar from "../components/navbar.tsx"
function Home() {
    return (
      <>
      <div className="h-screen w-screen pl-48 bg-black">
        <Navbar />
        <div id="Home" className="text-white text-7xl flex flex-col justify-center items-center h-screen font-extralight gap-4">
          <p>Hello, I'm <span className="text-amber-300">Talip</span>.</p>
          <p>I'm a CS year 1 undergraduate.</p>
          <div className="border-4 border-amber-300 text-amber-300 px-5 pt-2 flex flex-row items-center">
            <a className="h-full w-full" href="#Projects">View my work ↓</a>
          </div>
        </div>

        <div id="Projects" className="h-190 bg-amber-950">

        </div>

        <div id="About" className="h-190 bg-amber-500">

        </div>

        <div id="Skills" className="h-190 bg-amber-100">

        </div>

        <div id="Contact" className="h-190 bg-amber-800">

        </div>

      </div>
      </>
    )
  }
  
  export default Home;