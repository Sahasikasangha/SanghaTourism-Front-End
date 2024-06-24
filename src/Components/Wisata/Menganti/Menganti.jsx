import React from 'react'
import './Menganti.css'

import Bapong0 from '../../Wisata/assets/bapong0.jpg'
import Bapong1 from '../../Wisata/assets/bapong1.jpg'
import Bapong2 from '../../Wisata/assets/bapong2.jpg'
import Bapong3 from '../../Wisata/assets/bapong3.jpg'

import Menganti0 from '../../Wisata/assets/menganti0.jpg'
import Menganti1 from '../../Wisata/assets/menganti1.jpg'
import Menganti2 from '../../Wisata/assets/menganti2.jpg'
import Menganti3 from '../../Wisata/assets/menganti3.jpg'
import Menganti4 from '../../Wisata/assets/menganti4.jpg'


const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Menganti0} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai Menganti</h1>
                        <p className="home__description">
                        antai Menganti merupakan sebuah pantai yang berlokasi di Desa Karangduwur, Kecamatan Ayah, Kabupaten Kebumen, Jawa Tengah. Bentang alam pada Pantai Menganti terdiri dari perbukitan dan pasir putih.
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Menganti1} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Menganti2} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Menganti3} alt="home image"className='home__cardk-img'/>
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
                        <p className='about__description'>Pantai Menganti terletak di Desa Karangduwur, Kecamatan Ayah, Kabupaten Kebumen, Jawa Tengah. Kawasan Pantai Menganti terdiri dari pasir putih dan perbukitan batu gamping. Letak Pantai Menganti berbatasan langsung dengan Samudra Hindia.</p>
                        <button className="btn"><a href='https://maps.app.goo.gl/WSVR8k5P8Aa5sw7e6'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Menganti4} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ