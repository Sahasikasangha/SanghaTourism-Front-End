import React from 'react'
import './KarimunJ.css'
import Karim0 from '../../Wisata/assets/karim0.jpeg'
import Karim1 from '../../Wisata/assets/karim1.jpg'
import Karim2 from '../../Wisata/assets/karim2.jpg'
import Karim3 from '../../Wisata/assets/karim3.jpg'
import Karim4 from '../../Wisata/assets/karimAbout.webp'

import Karimun from '../../../assets/karimunjawa1.jpg'

const KarimunJ = () => {
  return (
    // body
    <div className='bodykk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Karim1} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selaat Datang Di</h3>
                        <h1 className="home__title"> Pantai <br /> KarimunJawa</h1>
                        <p className="home__description">
                        Karimunjawa adalah kepulauan di Laut Jawa yang termasuk dalam Kabupaten Jepara, Jawa Tengah
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Karim0} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Karim2} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Karim3} alt="home image"className='home__cardk-img'/>
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
                        <p className='about__description'>Karimunjawa adalah kepulauan di Laut Jawa yang termasuk dalam Kabupaten Jepara, Jawa Tengah. Dengan luas daratan ±1.500 hektare dan perairan ±110.000 hektare, Karimunjawa kini dikembangkan menjadi pesona wisata Taman Laut yang mulai banyak digemari wisatawan lokal maupun mancanegara.</p>
                        <button className="btn"><a href='https://maps.app.goo.gl/dYh5Xx4AkDtj2W1F7'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Karim4} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ