import React from 'react'
import './Pecaron.css'

import Pecaron0 from '../../Wisata/assets/pecaron0.jpg'
import Pecaron1 from '../../Wisata/assets/pecaron1.jpg'
import Pecaron2 from '../../Wisata/assets/pecaron2.jpg'
import Pecaron3 from '../../Wisata/assets/pecaron3.jpg'
import Pecaron4 from '../../Wisata/assets/pecaron4.jpg'

const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Pecaron1} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai Pecaron</h1>
                        <p className="home__description">
                        Pantai Pecaron terletak di Desa Srati, Kecamatan Ayah, Kabupaten Kebumen, Jawa Tengah.
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Pecaron0} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Pecaron2} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Pecaron3} alt="home image"className='home__cardk-img'/>
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
                        Pantai Pecaron merupakan pantai yang masih alami yang berada di sebelah timur Pantai Menganti dan Karangbata. Obyek wisata ini menjadi salah satu destinasi wisata di Kebumen yang mendapat julukan "The Hidden Paradise".
                        </p>
                        <button className="btn"><a href='https://maps.app.goo.gl/L7fgU3Z3TtgBJxm87'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Pecaron4} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ