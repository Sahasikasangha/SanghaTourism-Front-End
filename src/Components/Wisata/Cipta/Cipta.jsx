import React from 'react'
import './Cipta.css'

import Jodo0 from '../../Wisata/assets/jodo0.jpg'
import Jodo1 from '../../Wisata/assets/jodo1.jpg'
import Jodo2 from '../../Wisata/assets/jodo2.jpg'
import Jodo3 from '../../Wisata/assets/jodo3.jpeg'

import Cipta0 from '../../Wisata/assets/cipta0.jpg'
import Cipta1 from '../../Wisata/assets/cipta1.jpg'
import Cipta2 from '../../Wisata/assets/cipta2.jpg'
import Cipta3 from '../../Wisata/assets/cipta3.jpg'
import Cipta4 from '../../Wisata/assets/cipta4.jpg'

const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Cipta4} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai Cipta</h1>
                        <p className="home__description">
                        Pantai Cipta terletak di Desa Bandarharjo, Kecamatan Semarang Utara, Kota Semarang, Jawa Tengah.
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Cipta0} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Cipta1} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Cipta2} alt="home image"className='home__cardk-img'/>
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
                        Pantai Cipta sering disebut sebagai pantai Petikemas karena lokasinya dekat dengan Terminal Petikemas. Kawasan Pantai Cipta memiliki banyak bebatuan dan sedikit pasir. Pantai tersebut juga memiliki ilalang yang menjadi salah satu daya tarik wisatawan.
                        </p>
                        <button className="btn"><a href='https://maps.app.goo.gl/aDWxP2tXVNxYkrJQ7'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Cipta3} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ