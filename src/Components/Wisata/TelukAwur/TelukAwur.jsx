import React from 'react'
import './TelukAwur.css'


import Logending0 from '../../Wisata/assets/logending0.jpeg'
import Logending1 from '../../Wisata/assets/logending1.jpg'
import Logending2 from '../../Wisata/assets/logending2.jpg'
import Logending3 from '../../Wisata/assets/logending3.jpg'

import Teluk0 from '../../Wisata/assets/teluk0.jpg'
import Teluk1 from '../../Wisata/assets/teluk1.jpg'
import Teluk2 from '../../Wisata/assets/teluk2.jpeg'
import Teluk3 from '../../Wisata/assets/teluk3-c.jpg'


const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Teluk2} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai TelukAwur</h1>
                        <p className="home__description">
                        Pantai Teluk Awur terletak di kota Jepara. Pantai ini ditandai oleh banyaknya pohon mangrove yang berfungsi sebagai peneduh selain sebagai penahan abrasi.
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Teluk1} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Teluk0} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Teluk3} alt="home image"className='home__cardk-img'/>
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
                        <p className='about__description'>Setiap tahun di pantai ini diadakan acara tradisional Pesta Lomban. Berbeda dengan Pantai Kartini Jepara dan Pantai Tirto Samudra Bandengan Jepara, Pantai Teluk Awur tidak memungut bayaran. Karena tidak dikelola secara berbayar, maka fasilitas yang didapatkan pun sederhana.
</p>
                        <button className="btn"><a href='https://maps.app.goo.gl/xrPsjemPshJcuw7U7'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Teluk3} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ