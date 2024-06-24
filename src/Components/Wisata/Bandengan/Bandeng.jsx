import React from 'react'
import './Bandeng.css'
import Bandeng0 from '../../Wisata/assets/bandengan0.jpg'
import Karim1 from '../../Wisata/assets/karim1.jpg'
import Karim2 from '../../Wisata/assets/karim2.jpg'
import Karim3 from '../../Wisata/assets/karim3.jpg'
import Karim4 from '../../Wisata/assets/karimAbout.webp'

import Bandeng1 from '../../Wisata/assets/bandengan1.jpg'
import Bandeng2 from '../../Wisata/assets/bandengan2.jpg'
import Bandeng3 from '../../Wisata/assets/bandengan3.jpg'
import Bandeng4 from '../../Wisata/assets/bandenganAbout.jpeg'


import Karimun from '../../../assets/karimunjawa1.jpg'

const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Bandeng3} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title"> Pantai <br /> Bandengan</h1>
                        <p className="home__description">
                        Pantai Tirto Samudro atau yang dikenal oleh masyarakat umum dengan sebutan Pantai Bandengan adalah pantai yang terletak 7 km sebelah utara dari pusat kota Jepara, Jawa Tengah
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Bandeng1} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Bandeng2} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Bandeng0} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>
                    </div>
                </div>
            </div>
            <div className='about sectionk' id="about">
                <div className="about__containerk containerk gridd">
                    <div className="about__data">
                        <h2 className="sectionk__title">
                            Selengkapnya
                        </h2>
                        <p className='about__description'>Pantai Tirto Samudro atau Pantai Klein Scheveningen atau yang dikenal oleh masyarakat umum dengan sebutan Pantai Bandengan adalah pantai yang terletak 7 km sebelah utara dari pusat kota Jepara, Jawa Tengah.</p>
                        <button className="btn"><a href='https://maps.app.goo.gl/DhmfXueq8aZjuGJDA'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Bandeng4} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ