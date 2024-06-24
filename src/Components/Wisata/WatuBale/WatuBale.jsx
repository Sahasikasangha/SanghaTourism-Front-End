import React from 'react'
import './WatuBale.css'

import Watu0 from '../../Wisata/assets/watu0.webp'
import Watu1 from '../../Wisata/assets/watu1.jpg'
import Watu2 from '../../Wisata/assets/watu2.png'
import Watu3 from '../../Wisata/assets/watu3.jpg'
import Watu4 from '../../Wisata/assets/watu4.jpg'

const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Watu0} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai WatuBale</h1>
                        <p className="home__description">
                        Pantai ini terletak di pesisir Kebumen Selatan. Secara administratif, pantai ini terletak di Desa Pasir, Kecamatan Ayah, Kabupaten Kebumen. 
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Watu1} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Watu2} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Watu3} alt="home image"className='home__cardk-img'/>
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
                        Pantai Watu Bale menyuguhkan pemandangan batas alam bertebing tinggi yang berbatasan langsung dengan Laut Selatan atau biasa disebut sebagai tanjung berbukit. Ciri khas dari pantai ini yaitu terdapatnya batu karang besar yang berada di tengah-tengah dengan bentuk yang pipih dan lebar mirip bale atau balai
                        </p>
                        <button className="btn"><a href='https://maps.app.goo.gl/i5ugJp6YLX5tUmZZ7'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Watu4} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ