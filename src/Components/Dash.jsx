import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero';
import Service from './Programs/Service';
import Destination from './Destination/Destination';

import Slider from './Testimoni/Slider';
import About from './About/About';
import Footer from './Footer/Footer';

const Dash = () => {
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

export default Dash