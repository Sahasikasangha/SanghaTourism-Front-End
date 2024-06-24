import React from 'react'
import './KarangJahe.css'


import Pandan0 from '../../Wisata/assets/pandan0.jpg'
import Pandan1 from '../../Wisata/assets/pandan1.jpg'
import Pandan2 from '../../Wisata/assets/pandan2.jpg'
import Pandan3 from '../../Wisata/assets/pandan3.jpg'
import Pandan4 from '../../Wisata/assets/pandan4.jpg'

import Jahe0 from '../../Wisata/assets/jahe0.jpeg'
import Jahe1 from '../../Wisata/assets/jahe1.jpg'
import Jahe2 from '../../Wisata/assets/jahe2.jpg'
import Jahe3 from '../../Wisata/assets/jahe3.jpg'
import Jahe4 from '../../Wisata/assets/jahe4.jpg'

const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Jahe2} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai KarangJahe</h1>
                        <p className="home__description">
                        Karang Jahe Beach merupakan salah satu pantai di Rembang yang menawarkan panorama indah hamparan pasir putih dan ribuan pohon cemara.
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Jahe1} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Jahe3} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Jahe4} alt="home image"className='home__cardk-img'/>
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
                        <p className='about__description'>Di pantai Karang Jahe ini, pengunjung dapat menikmati panorama laut yang berwarna biru yang indah. biasanya pantai khas dengan orang-orang berjemur, di pantai Karang Jahe uniknya orang-orang dapat bersantai di bawah teduhnya pohon cemara yang tumbuh sepanjang pesisir pantai dengan perkiraan panjang 1 KM.</p>
                        <button className="btn"><a href='https://maps.app.goo.gl/R3m22cSfJ7Us9Ytc7'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Jahe0} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ