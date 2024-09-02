import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import Services from './Components/Services'
import Works from './Components/Works'
import Contact from './Components/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Services/>
      <Works/>
      <Contact/>
    </>
  )
}

export default App