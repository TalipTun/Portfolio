import Navbar from './components/navbar'
import Home from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'
import Skills from './pages/skills'
import Contact from './pages/contact'

function App() {
  return (
    <>
      <div className="h-screen w-[screen-48] ml-48 bg-black">
        <Navbar />
        <Home />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </div>
    </>
  )
}

export default App
