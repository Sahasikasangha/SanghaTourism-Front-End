import React from 'react'
import './Nampu.css'

import Nampu0 from '../../Wisata/assets/nampu0.jpeg'
import Nampu1 from '../../Wisata/assets/nampu1.jpg'
import Nampu2 from '../../Wisata/assets/nampu2-copy.jpg'
import Nampu3 from '../../Wisata/assets/nampu3.jpg'
import Nampu4 from '../../Wisata/assets/nampu4.jpg'
import Nampu5 from '../../Wisata/assets/nampu2.jpg'

const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Nampu5} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai Nampu</h1>
                        <p className="home__description">
                        Pantai Nampu terletak di Dusun Dringo, Desa Gunturharjo, Kecamatan Paranggupito, Kabupaten Wonogiri, Jawa Tengah.
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Nampu0} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Nampu1} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Nampu2} alt="home image"className='home__cardk-img'/>
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
                        <p className='about__description'>Pantai Nampu memiliki lingkungan yang masih tergolong asri. Ratusan pohon pandan dan beberapa bukit karang membingkai pantai menawarkan keindahan. Selama ini, Pantai Nampu masih dikenal oleh penduduk setempat. Belum banyak wisatawan luar daerah yang mengenal pantai ini.</p>
                        <button className="btn"><a href='https://maps.app.goo.gl/uv83vV35JKYiesmz8'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Nampu4} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ