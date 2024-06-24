import React from 'react'
import './Footer2.css'
import Send from '../../assets/send.png';
import Ig from '../../assets/instagram-line.png';
import Yt from '../../assets/youtube-fill.png';
import Link from '../../assets/linkedin-box-fill.png';

const Footer = () => {
  return (
    <>
    <div className='bodyf'>
    <footer className="section_container footer_container">
        <div className="footer_col">
            <h5><a href="#">Sangha Tourism</a></h5>
        </div>
        <div className="footer_col">
            <h4>Kontak Kami</h4>
            <p>Semarang</p>
            <p>08123456789</p>
            <p>tourismsangha@gmail.com</p>
        </div>
        <div className="footer_col">
            <h4>Tentang Kami</h4>
            <p>Di Sangha Tourism, kami percaya bahwa setiap perjalanan adalah
                 kesempatan untuk menciptakan kenangan indah dan pengalaman yang tak terlupakan. 
                 Oleh karena itu, kami selalu berusaha memastikan setiap detail perjalanan Anda 
                 direncanakan dengan sempurna. Tim kami yang ramah dan profesional siap membantu Anda 
                 mulai dari tahap perencanaan hingga kembali dari liburan Anda. Kami bangga menjadi mitra 
                 perjalanan Anda dan berharap dapat membantu Anda menemukan destinasi pantai impian Anda.
            </p>
        </div>
        <div className="footer_col">
            {/* <h4>Subscribe</h4>
            <form action="/">
                <input type="text" placeholder='Your Email' />
                <button><img src={Send} alt="" /></button>
            </form> */}
            <div className="footer_socials">
                <h4>Ikuti Kami</h4>
                <div>
                    <a href="#"><img src={Ig} alt="" /></a>
                    <a href="#"><img src={Yt} alt="" /></a>
                    <a href="#"><img src={Link} alt="" /></a>
                </div>
            </div>
        </div>
    </footer>
    <div className="footer_bar">
        Copyright @ 2024 Sangha Tourism. All rights reserved
    </div>
    </div>
    </>
  )
}

export default Footer