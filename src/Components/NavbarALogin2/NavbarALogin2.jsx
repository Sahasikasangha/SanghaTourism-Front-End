import React, { useEffect, useState } from 'react'
import './NavbarALogin2.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-line.png'
import { Navigate, useNavigate } from 'react-router-dom'
import Logn from '../../Pages/Logn'

const Navbar = () => {
  const Navigate = useNavigate ()

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])
  
  const [mobileMenu, setMobilMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setMobilMenu(false) : setMobilMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu?'' : 'hide-mobile-menu'}>
            <li><button onClick={() => Navigate('../../HomeALogin')} className='btn2'>Home</button></li>
            <li><button className='btn2'>about</button></li>
            <li><button onClick={() => Navigate('../../EksploreALogin')} className='btn2'>Eksplore</button></li>
            <li><button onClick={() => Navigate('../..//')} className='btn'>Logout</button></li>

        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}
export default Navbar
