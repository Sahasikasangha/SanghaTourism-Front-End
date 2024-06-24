import React from 'react'
import './Jodo.css'

import Jodo0 from '../../Wisata/assets/jodo0.jpg'
import Jodo1 from '../../Wisata/assets/jodo1.jpg'
import Jodo2 from '../../Wisata/assets/jodo2.jpg'
import Jodo3 from '../../Wisata/assets/jodo3.jpeg'


const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Jodo0} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai Jodo</h1>
                        <p className="home__description">
                        Pantai Jodo berada di Jl. Sidorejo, Desa Sidorejo, Kecamatan Gringsing, Kabupaten Batang, Provinsi Jawa Tengah
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Jodo1} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Jodo2} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Jodo3} alt="home image"className='home__cardk-img'/>
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
                        Pantai Jodo Batang dikenal karena berada di satu kawasan dengan bukit cinta yang menghadap ke laut dan dekat dengan rel kereta api. Destinasi wisata pantai ini terletak di sebelah Timur Kota Batang, dimana lokasinya dekat perbatasan antara kota Kendal.
                        </p>
                        <button className="btn"><a href='https://maps.app.goo.gl/QQCeFw6LuU4WorK97'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Jodo0} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ