import React from 'react'
import './HeroALogin.css'
import { Navigate, useNavigate } from 'react-router-dom'

const Hero = () => {

  const Navigate = useNavigate ()
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h4>Selamat Datang Di Sangha</h4>
            <h1>Temukan <span className='warna-hitam'>Pantai Di</span> Jawa Tengah</h1>
            <p>Biarkan panggilan lautan membawa Anda ke petualangan baru.</p>
            <p>Dengan Sangha Tourism, setiap pantai menjanjikan kegembiraan dan ketenangan</p>
            <button onClick={() => Navigate('../../EksploreALogin')} className='btn'>Jelajahi</button>
        </div>
    </div>
  )
}

export default Hero