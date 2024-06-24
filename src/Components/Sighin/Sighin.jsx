import React, { useState } from 'react'
// import React, { useState } from 'react';
import bck from '../../assets/background-login.jpg'
import pwd from '../../assets/lock-fill.png'
import email from '../../assets/mail-fill.png'
import user from '../../assets/user-fill.png'
import axios  from 'axios'
import './Login.css'
import { useNavigate } from 'react-router-dom'




const Sighin = () => {
  const navigate = useNavigate ();
  const [isActive, setIsActive] = useState(false);
//Animate
  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };
//animate backend
  return (
    <div className="body">
    <div className={`containerL ${isActive ? 'active' : ''}`} id='containerL'>
      <div className="form-containerL sign-up">
        <form action=''>
          <h1>Create Account</h1>
        <input type="text" placeholder='Nama'/>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <button type='submit'>Sign Up</button>
        </form>
      </div>

      <div className="form-containerL sign-in">
        <form>
          <h1>Sign In</h1>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <a href="#">Lupa Password? Klik disini!</a>
        <button>Sign in</button>
        </form>
      </div>

      <div className="toggle-containerL">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Selamat Datang</h1>
            <p>Masukan nama personal</p>
            <button className="hidden" id="login" onClick={handleLoginClick}>Sign In</button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Hallo</h1>
            <p>Register dan Masukan nama personal</p>
            <button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Sighin