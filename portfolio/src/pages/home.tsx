function Home() {
  const handleScrollToProjects = () => {
    const element = document.getElementById("Projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
  return (
    <>
      <div id="Home" className="text-white text-7xl flex flex-col justify-center items-center text-center h-screen font-extralight gap-4">
          <p>Hello, I'm <span className="text-amber-300">Talip</span>.</p>
          <p>I'm a CS year 1 undergraduate.</p>
          <div className="border-4 border-amber-300 text-amber-300 px-5 pt-2 flex flex-row items-center">
            <button className="h-full w-full" onClick={handleScrollToProjects}>View my work ↓</button>
          </div>
        </div>
    </>
  )
}

export default Home