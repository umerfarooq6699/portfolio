import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import Services from './Components/Services'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Services/>
    </>
  )
}

export default App