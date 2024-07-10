import React from "react"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Release from './components/ReleaseComp/Release'
import Newsletter from "./components/Newsletter/Newsletter"
import Contact from "./components/Contact/Contact"
import Marquee from "./components/Marquee/Marquee"
import Footer from "./components/Footer/Footer"


const App = () => {

  return (
    <>
     <Navbar />
     <Hero />
     <Release />
     <Newsletter />
     <Contact />
     <Marquee />
     <Footer />
    </>
  )
}

export default App
