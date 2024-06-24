import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Log from '../../Components/Login/Login'

import './Register.css'
const Register = () => {
    const Navigate = useNavigate ()

    const [values, setvValues] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState ({})

    const handleInput = (event) => {
        setvValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setErrors(Validation(values))
        // if (errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/Register', values)
            .then(res => {
                Navigate ('/Login')
            })
            .catch(err => console.log(err));
       // }
    }
    
  return (
    <div className='BodyR'>
        <div className="split-screen">
            <div className="left">
                <section className='copy'>
                    <p>Selamat Datang</p>
                    <h1>jelajahi pantai di jawa tengah</h1>
                    
                </section>
            </div>

            <div className="Right">
                <form action="" onSubmit={handleSubmit}>
                    <section className="copy">
                        <h2>Sign Up</h2>
                        <div className="login-containerR">
                            <p>Sudah punya akun?<a onClick={() => Navigate('../../Login')}><strong>Log In</strong></a></p>
                        </div>
                    </section>
                    <div className="input-containerR name">
                        <label htmlFor="uname">Username</label>
                        <input type="text" id='username' name='username' placeholder='Enter Username' onChange={handleInput}/>
                    </div>

                    <div className="input-containerR email">
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' name='email' placeholder='Enter Email' onChange={handleInput}/>
                    </div>

                    <div className="input-containerR password">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' placeholder='Enter Password' onChange={handleInput}/>
                    </div>

                    <div className="input-containerR cta">
                        <label className="checkbox-containerR" htmlFor="">
                            <input type="checkbox" /><span className='checkmark'>Sign Up</span>
                        </label>
                    </div>

                    <button className="signup-btn" type='submit' >Sign Up</button>
                    <section className='copy legal'></section>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register