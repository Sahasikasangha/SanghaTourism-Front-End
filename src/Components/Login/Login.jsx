import React, {useState} from 'react'
import './Login.css'
import axios from 'axios';
//import Validation from './LoginValidation'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate ()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    //const validationErrors = Validation(values);

    //const [errors, setErrors] = useState ({});

    const handleSubmit = (event) => {
        event.preventDefault();
        //setErrors(validationErrors);
        axios.post('http://localhost:8081/Login', values)
            .then(res => {
                if(res.data === 'sukses'){
                    navigate('/HomeALogin');
                }
                else {
                    alert ("No respone");
                }
                // navigate ('/Eksplore')
            })
            .catch(err => console.log(err));
            
            // .catch (alert ("PASWORRD ATAU EMAIL SALAH"))
            // alert("Email Atau Password Yang Dimasukan Salah");
    }

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    };
     
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
                        <h2>Sign In</h2>
                        <div className="login-containerR">
                            <p>Belum punya akun?<a onClick={() => navigate('../../Register')}><strong>Sign Up</strong></a></p>
                        </div>
                    </section>
                    {/* <div className="input-containerR name">
                        <label htmlFor="uname">Username</label>
                        <input type="text" id='uname' name='uname' />
                    </div> */}

                    <div className="input-containerR email">
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' name='email' placeholder='Enter Email' onChange={handleInput} />
                    
                    </div>

                    <div className="input-containerR password">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' placeholder='Enter Password' onChange={handleInput}/>
                       
                    </div>

                    {/* <div className="input-containerR cta">
                        <label className="checkbox-containerR" htmlFor="">
                            <input type="checkbox" /><span className='checkmark'>Sign Up</span>
                        </label>
                    </div> */}

                    <button className="signup-btn" type='submit'>Sign In</button>
                    <section className='copy legal'></section>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login