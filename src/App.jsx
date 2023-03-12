import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Hero, Navbar, Tech, Projects, Footer, StarsCanvas} from './components'
// import Projects from './components/Works'

const App = () => {
  return (
  <BrowserRouter>
    <div className="relative z-0 bg-[#121213]">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
        <About />
        <Experience />
        <Tech />
        <Projects/>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    <div className="bg-no-repeat bg-center">
        <Footer />
      </div>
  </BrowserRouter>
 
  )
}

export default App
