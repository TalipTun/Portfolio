import "tailwindcss";
import Navbar from "../components/navbar.tsx"
import photo from "../assets/image.jpg"
function Home() {
    return (
      <>
      <div className="h-screen w-screen pl-48 bg-black">
        <Navbar />
        <div>
          <div id="project1" className="group relative w-80 h-80 bg-amber-50 flex flex-col justify-center items-center">
            <p>Http Server with C</p>
            <img src={photo} alt="Project Image" />

            {/* Hidden description */}
            <div className="absolute inset-0 bg-black bg-opacity-80 text-red-500 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-center">This is a simple HTTP server implemented in C using sockets.</p>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Home