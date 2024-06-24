import React from 'react'
import './KarangPandan.css'

import Widara0 from '../../Wisata/assets/widara0.jpg'
import Widara1 from '../../Wisata/assets/widara1.jpg'
import Widara2 from '../../Wisata/assets/widara2.jpg'
import Widara3 from '../../Wisata/assets/widara3.jpg'
import Widara4 from '../../Wisata/assets/widara4.jpg'

import Pandan0 from '../../Wisata/assets/pandan0.jpg'
import Pandan1 from '../../Wisata/assets/pandan1.jpg'
import Pandan2 from '../../Wisata/assets/pandan2.jpg'
import Pandan3 from '../../Wisata/assets/pandan3.jpg'
import Pandan4 from '../../Wisata/assets/pandan4.jpg'

const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Pandan0} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai KarangPandan</h1>
                        <p className="home__description">
                        Pantai Karang Pandan adalah pantai yang berada di pulau Nusakambangan. Pantai ini dapat dijangkau selama 15 menit dari Pantai Teluk Penyu menggunakan transportasi perahu Compreng.
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Pandan1} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Pandan2} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Pandan3} alt="home image"className='home__cardk-img'/>
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
                        <p className='about__description'>Pantai yang berada di area Cagar Alam Nusakambangan Timur in,i dapat diakses dengan naik perahu compreng, yang memakan waktu sekitar 15 menit dari  Pantai Teluk Penyu. Tarif untuk perjalanan menggunakan perahu ini adalah Rp40 ribu per orang. Selama perjalanan melintasi laut, pengunjung akan menikmati pemandangan indah Pulau Nusakambangan serta lalu lalang perahu layar.</p>
                        <button className="btn"><a href='https://maps.app.goo.gl/oE8kZuyeZ22UMBW86'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Pandan4} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ