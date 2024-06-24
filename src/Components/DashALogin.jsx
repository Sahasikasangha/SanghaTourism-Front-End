import React from 'react'
import Navbar from './NavbarALogin/NavbarALogin'
import Hero from './HeroALogin/HeroALogin';
import Service from './Programs/Service';
import Destination from './DestinationLogin/DestinationLogin';

import Slider from './Testimoni/Slider';
import About from './About/About';
import Footer from './Footer/Footer';

const DashALogin = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <Service />
    <Destination />
    <Slider />
    <About />
    <Footer />
  </div>
  )
}

export default DashALogin