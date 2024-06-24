import React from 'react'
import './SuruManis.css'

import Suru0 from '../../Wisata/assets/suru0.jpeg'
import Suru1 from '../../Wisata/assets/suru1.jpg'
import Suru2 from '../../Wisata/assets/suru2.jpg'
import Suru3 from '../../Wisata/assets/suru3.jpg'
import Suru4 from '../../Wisata/assets/suru4.jpg'

const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Suru1} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai SuruManis</h1>
                        <p className="home__description">
                        Pantai Surumanis terletak di Desa Pasir, Kecamatan Ayah, Kabupaten Kebumen, Jawa Tengah.
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Suru0} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Suru2} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Suru3} alt="home image"className='home__cardk-img'/>
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
                        Panjang garis Pantai Surumanis sekitar 600 meter. Pantai berpasir hitam ini memiliki spot foto yang instagramable. Keindahan alami pantai salah satunya terlihat zaat ada ombak datang menerjang karang. Paduan keduanya dapat diabadikan sebagai koleksi foto. Tebing-tebing menjulang disekitar pantai dapat menjadi spot foto yang indah.
                        </p>
                        <button className="btn"><a href='https://maps.app.goo.gl/VdnQU6qjVXNULZKx7'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Suru4} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ