import React from 'react'
import './Widara.css'
import Bandeng0 from '../../Wisata/assets/bandengan0.jpg'
import Bandeng1 from '../../Wisata/assets/bandengan1.jpg'
import Bandeng2 from '../../Wisata/assets/bandengan2.jpg'
import Bandeng3 from '../../Wisata/assets/bandengan3.jpg'
import Bandeng4 from '../../Wisata/assets/bandenganAbout.jpeg'

import Widara0 from '../../Wisata/assets/widara0.jpg'
import Widara1 from '../../Wisata/assets/widara1.jpg'
import Widara2 from '../../Wisata/assets/widara2.jpg'
import Widara3 from '../../Wisata/assets/widara3.jpg'
import Widara4 from '../../Wisata/assets/widara4.jpg'


const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Widara1} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title"> Pantai WidaraPayung</h1>
                        <p className="home__description">
                        Pantai Widarapayung adalah objek wisata pantai yang terletak di Desa Widarapayung, Kecamatan Binangun, Kabupaten Cilacap, Jawa Tengah, Indonesia.
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Widara0} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Widara2} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Widara3} alt="home image"className='home__cardk-img'/>
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
                        <p className='about__description'>Wilayah pantai Widarapayung memang tidaklah terlalu luas, namun kondisi pantainya sangat landai dengan dipagari pohon kelapa, sehingga membuat pantaisejuk. Banyak pepohonan hijau pada bibir pantainya. Fasilitas yang ada cukup memadai seperti MCK, tempat parkir, restoran, kolam renang, tempat pemandian dan sebagainya.[3] Dengan membayar tiket masuk sebesar Rp. 2500,00 per orang kita bisa menikmati keindahan alam bumi cilacap timur ini. Biasanya pantai ini ramai pengunjung pada saat hari Minggu atau libur nasional. Pada bulan puasa sendiri pantai ini sangat ramai pengunjung, apalagi pada saat libur lebaran pengunjung bisa dipastikan membludak.</p>
                        <button className="btn"><a href='https://maps.app.goo.gl/aNAxW6vVVZhMdDR1A'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Widara4} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ