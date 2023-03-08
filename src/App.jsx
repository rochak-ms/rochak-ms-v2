import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Projects, StarsCanvas } from './components'
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
  </BrowserRouter>
  )
}

export default App
