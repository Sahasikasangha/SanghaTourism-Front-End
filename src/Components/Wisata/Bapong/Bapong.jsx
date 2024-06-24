import React from 'react'
import './Bapong.css'

import Bapong0 from '../../Wisata/assets/bapong0.jpg'
import Bapong1 from '../../Wisata/assets/bapong1.jpg'
import Bapong2 from '../../Wisata/assets/bapong2.jpg'
import Bapong3 from '../../Wisata/assets/bapong3.jpg'



const KarimunJ = () => {
  return (
    // body
    <div className='bodyk'>
        <div class="main">
            <div className='home sectionk' id="home">
                <img className="apa" src= {Bapong1} alt="home image" />
                <div className="home__shadow"></div>

                <div className="home__containerk containerk gridd">
                    <div className="home__data">
                        <h3 className='home__subtitle'>Selamat Datang Di</h3>
                        <h1 className="home__title">Pantai Bapong</h1>
                        <p className="home__description">
                        Pantai Bopong merupakan objek wisata dengan mengandalkan keindahan panorama alam berupa laguna di tepi Samudera Indonesia.
                        </p>
                    </div>

                    <div className="home__cardk gridd">
                        <article className='home__cardsk'>
                            <img src={Bapong0} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>

                        </article>

                        <article className='home__cardsk'>
                            <img src={Bapong2} alt="home image"className='home__cardk-img'/>
                            <div className="home__cardk-shadow"></div>
                            
                        </article>

                        <article className='home__cardsk'>
                            <img src={Bapong3} alt="home image"className='home__cardk-img'/>
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
                        <p className='about__description'>Pantai Bopong merupakan pantai yang menghadap lautan bebas dengan hamparan pasir yang cukup luas. Laguna menjadi salah satu daya tarik pantai ini. Laguna berjarak 400 meter dari obyek wisata Pantai Bopong.</p>
                        <button className="btn"><a href='https://maps.app.goo.gl/qHDMKKkvvUcJAzH57'>Maps</a></button>
                    </div>

                    <div className="about__image">
                        <img src={Bapong0} alt="about image"className='about__img'/>
                        <div className="about__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KarimunJ