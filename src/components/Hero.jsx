import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-20`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* <div className="w-5 h-5 rounded-full bg-[#915eff]"/> */}
            <div className="w-6 blur-sm sm:h-50 h-20 green-pink-gradient"/>
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'am <span className='blue-text-gradient'> Rochak</span></h1>
              <p className={`{${styles.heroSubText} mt-2 text-secondary}`}>
                I am a Full Stack Web Developer
              </p>

            <nav className="social-nav mt-12">
              <h4 className="sm-header text-[1rem] uppercase cursor-pointer">Follow me on</h4>
                <div className="line"></div>
                  <ul className="soc-list">
                    <li className="nav-item">
                      <a href="https://www.facebook.com/x.bitzz" className="nav-link"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li className="nav-item">
                      <a href="https://twitter.com/rochakms" className="nav-link"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="nav-item">
                      <a href="https://github.com/rochak-ms" className="nav-link"><i className="fab fa-github"></i></a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.linkedin.com/in/rochak-shrestha-697a98179" className="nav-link"><i className="fab fa-linkedin-in"></i></a>
                    </li>
                    </ul>
            </nav>
            
            </div>

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <a href="#about">
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items p-2'>
                <motion.div 
                  animate={{
                    y: [0, 24, 0]
                  }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'loop'
                    }}
                    className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div>

            
            
          </div>
          
          <ComputersCanvas />
    </section>
  )
}

export default Hero