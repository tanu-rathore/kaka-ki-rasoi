import Navbar from "./components/layout/navbar"
import Hero from "./components/sections/Hero"
import About from './components/sections/About'
import Menu from  "./components/sections/Menu"
import Banquet from "./components/sections/Banquet"
import Location from "./components/sections/Location"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Banquet />
      <Location />
    </>
  )
}

export default App
