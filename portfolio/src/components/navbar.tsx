import icon from "../icons/icon.png" ; 

function Navbar() {
    return (
      <>
        <div id="container" className="bg-amber-400 flex flex-col w-48 fixed left-0 top-0 bottom-0">
          <div id="topbit" className="h-56 bg-amber-800">
            <p className="text-4xl h-40 flex justify-center items-center text-white">Talip Tun</p>
            <p className="text-xl h-16 flex justify-center items-center text-white">CS undergraduate</p>
          </div>
          <div id="buttons" className="h-96 py-10">
            <ul id="item-container" className="m-0 p-0 h-full flex flex-col justify-between text-center text-white">
                <div className="flex flex-row justify-center gap-2">
                  <img src={icon} className="h-10 w-10" />
                  <li className="text-2xl">Home</li>
                </div>
                <div className="flex flex-row justify-center gap-2">
                  <img src={icon} className="h-10 w-10" />
                  <li className="text-2xl">Projects</li>
                </div>
                <div className="flex flex-row justify-center gap-2">
                  <img src={icon} className="h-10 w-10" />
                  <li className="text-2xl">Experience</li>
                </div>
                <div className="flex flex-row justify-center gap-2">
                  <img src={icon} className="h-10 w-10" />
                  <li className="text-2xl">Skills</li>
                </div>
                <div className="flex flex-row justify-center gap-2">
                  <img src={icon} className="h-10 w-10" />
                  <li className="text-2xl">Contact</li>
                </div>
              </ul>
          </div>
          <div id="symbols" className="h-15 flex flex-row justify-center gap-3 items-center">
            <img src={icon} className="h-10 w-10" />
            <img src={icon} className="h-10 w-10" />
            <img src={icon} className="h-10 w-10" />
          </div>
        </div>
      </>
    )
  }
  
  export default Navbar