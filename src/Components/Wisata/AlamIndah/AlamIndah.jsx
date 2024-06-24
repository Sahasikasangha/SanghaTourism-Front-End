import React from 'react'
import './AlamIndah.css'


import Caruban0 from '../../Wisata/assets/caruban0.jpeg'
import Caruban1 from '../../Wisata/assets/caruban1.jpg'
import Caruban2 from '../../Wisata/assets/caruban2.jpeg'
import Caruban3 from '../../Wisata/assets/caruban3.jpg'

import AlamIndah0 from '../../Wisata/assets/alamindah0.jpg'
import AlamIndah1 from '../../Wisata/assets/alamindah1.jpg'
import AlamIndah2 from '../../Wisata/assets/alamindah2.jpg'
import AlamIndah3 from '../../Wisata/assets/alamindah3.jpg'
import AlamIndah4 from '../../Wisata/assets/alamindah4.png'

const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {AlamIndah2} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai AlamIndah</h1>
                        <p className="home__description">
                        Pantai Alam Indah (disingkat PAI) adalah objek wisata pantai yang berlokasi di Kota Tegal, Jawa Tengah
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={AlamIndah1} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={AlamIndah3} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={AlamIndah4} alt="home image"className='home__cardk-img'/>
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
                        Pantai Alam Indah (disingkat PAI) adalah objek wisata pantai yang berlokasi di Kota Tegal, Jawa Tengah. Tempat rekreasi ini dikelola oleh Pemerintah Kota Tegal melalui Dinas Pemuda Olahraga Budaya dan Pariwisata. Dengan panjang sekitar 500 meter, mulai dari area Pelabuhan Tegal sampai dengan Universitas Pancasakti, Pantai Alam Indah menawarkan keindahan Laut Jawa yang tenang, dilengkapi beberapa fasilitas pendukung yang disediakan
                        </p>
                        <button className="btn"><a href='https://maps.app.goo.gl/bKtsj29q62u5SseM7'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={AlamIndah0} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ