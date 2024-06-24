import React, {useState} from 'react'
import './Hero.css'
import { Navigate, useNavigate } from 'react-router-dom'

const Hero = () => {
  const [alertVisible, setAlertvisible] = useState(false)

  const showAlert = () => {
    setAlertvisible(true);
  }

  const closeAlert = () => {
    setAlertvisible(false)
  }

  const Navigate = useNavigate ()

  return (
    <div className='hero container'>
        <div className="hero-text">
            <h4>Selamat Datang Di Sangha</h4>
            {/* <h1>Temukan <span className='warna-hitam'>Pantai Di</span> Jawa Tengah</h1> */}
            <h1>Temukan Pantai Di Jawa Tengah</h1>
            <p>Biarkan panggilan lautan membawa Anda ke petualangan baru.</p>
            <p>Dengan Sangha Tourism, setiap pantai menjanjikan kegembiraan dan ketenangan</p>
            {/* <button onClick={() => Navigate('../../Eksplore')} className='btn'>Explore</button> */}
            <button onClick={showAlert} className='btn'>Jelajahi</button>
            {alertVisible && (
                <div id="customAlert" className="alert">
                 <span className="closebtn" onClick={closeAlert}>&times;</span>
                  <p>Register atau Login untuk Menemukan destinasi lainnya</p>
                </div>
            )}   
        </div>
    </div>
  )
}

export default Hero