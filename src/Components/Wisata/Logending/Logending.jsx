import React from 'react'
import './Logending.css'


import Menganti0 from '../../Wisata/assets/menganti0.jpg'
import Menganti1 from '../../Wisata/assets/menganti1.jpg'
import Menganti2 from '../../Wisata/assets/menganti2.jpg'
import Menganti3 from '../../Wisata/assets/menganti3.jpg'
import Menganti4 from '../../Wisata/assets/menganti4.jpg'

import Logending0 from '../../Wisata/assets/logending0.jpeg'
import Logending1 from '../../Wisata/assets/logending1.jpg'
import Logending2 from '../../Wisata/assets/logending2.jpg'
import Logending3 from '../../Wisata/assets/logending3.jpg'



const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Logending0} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai Logending</h1>
                        <p className="home__description">
                        Pantai Logending. Meskipun terletak di kecamatan Ayah, pantai Logending lebih sering disebut berada dekat atau satu wilayah dengan Gombong yang merupakan suatu kecamatan di kabupaten kebumen
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Logending1} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Logending2} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Logending3} alt="home image"className='home__cardk-img'/>
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
                        <p className='about__description'>Pantai Logending terletak di desa Ayah kecamatan Ayah kabupaten Kebumen yang berbatasan dengan kabupaten cilacap.Pantai ini berjarak sekitar 53 km dari kota kebumen dan sekitar 8 km dari objek wisata Gua Jatijajar. Pantai ini mudah dicapai oleh wisatawan misalnya dari arah Yogyakarta maka wisatawan cukup menempuh jalur selatan ke arah Gombong kemudian ke selatan mengikuti jalan sampai terdapat pantai dan bukit</p>
                        <button className="btn"><a href='https://maps.app.goo.gl/NutvqmEztZz5ANwd6'>Maps</a></button>
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