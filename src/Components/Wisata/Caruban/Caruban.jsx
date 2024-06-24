import React from 'react'
import './Caruban.css'


import Caruban0 from '../../Wisata/assets/caruban0.jpeg'
import Caruban1 from '../../Wisata/assets/caruban1.jpg'
import Caruban2 from '../../Wisata/assets/caruban2.jpeg'
import Caruban3 from '../../Wisata/assets/caruban3.jpg'

const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Caruban0} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai Caruban</h1>
                        <p className="home__description">
                        Lokasi Pantai Caruban berada di alamat Desa Gedongmulyo, Kecamatan Lasem, Kabupaten Rembang, Provinsi Jawa Tengah.
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Caruban1} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Caruban2} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Caruban3} alt="home image"className='home__cardk-img'/>
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
                        <p className='about__description'>Pantai Caruban mendeskripsikan tentang wisata alam pantai, lengkap dengan area pasir pantai yang luas, dan panjang, serta dilengkapi dengan beragam fasilitas wisata.
</p>
                        <button className="btn"><a href='https://maps.app.goo.gl/d8UrzzCiHsudkimk8'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Caruban2} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ