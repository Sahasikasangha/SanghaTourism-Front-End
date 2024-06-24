import React from 'react'
import './About.css'
import Logo from '../../assets/logo.png';

const About = () => {
  return (
    <div className="section_container about_container" id="about">
        <div className="about_header">
            <div className="about_image">
                <img src={Logo} alt="" />
            </div>
            <div className="about_content">
                <p className="section_subheaderOT">Tentang Kami</p>
                <h2 className="section_headerOT">Sangha Tourism</h2>
                <p className="paragraf">
                Sangha Tourism adalah perusahaan yang berdedikasi untuk memberikan informasi
                dan panduan terpercaya mengenai destinasi wisata pantai terbaik di Indonesia. 
                Dengan pengalaman bertahun-tahun dalam industri pariwisata, kami memahami betapa 
                pentingnya menemukan tempat yang tepat untuk menikmati keindahan alam dan berlibur. 
                Kami berkomitmen untuk membantu para wisatawan menemukan surga pantai yang sesuai 
                dengan preferensi mereka melalui rekomendasi yang dipersonalisasi dan informasi 
                terkini mengenai fasilitas, aktivitas, dan berbagai hal penting lainnya yang perlu d
                iketahui sebelum berlibur.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About