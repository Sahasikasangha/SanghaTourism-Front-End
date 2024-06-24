import React from 'react'
import './Pungkruk.css'


import Pungkruk0 from '../../Wisata/assets/pungkruk0.jpg'
import Pungkruk1 from '../../Wisata/assets/pungkruk1.jpg'
import Pungkruk2 from '../../Wisata/assets/pungkruk2.jpg'


const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Pungkruk0} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai Pungkruk</h1>
                        <p className="home__description">
                        Pantai Pungkruk adalah tempat wisata kuliner terbesar di Jawa Tengah, karena tempatnya wisata kuliner luas berada di pantai.
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Pungkruk1} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Pungkruk2} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Pungkruk0} alt="home image"className='home__cardk-img'/>
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
                        <p className='about__description'>
                        Pantai Pungkruk merupakan wisata kuliner yang dipadukan dengan wisata pantai Jepara, Pantai Pungkruk menjadi tujuan favorit penggemar wisata kuliner. Wisatawan mengunjungi pantai biasanya tujuan utamanya untuk bersantai, bermain air. Berbeda dengan Pantai Pungkruk, wisatawan yang datang ke Pantai Pungkruk tujuan utamanya bukan untuk bermain air di pantai, melainkan untuk makan (berwisata kuliner) memanjakan lidah dengan menyantap masakan khas Jepara.
                        </p>
                        <button className="btn"><a href='https://maps.app.goo.gl/YdA9bKG3RFUVuFUy6'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Pungkruk1} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ