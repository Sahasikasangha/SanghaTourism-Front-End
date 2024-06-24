import React from 'react'
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Jerome from '../../assets/jerome1.jpg';
import Junia from '../../assets/Junia.jpg';
import Julia from '../../assets/julia.png';
import Star from '../../assets/star-fill.png';
import StHalf from '../../assets/star-half-line.png';

const Slider = () => {

  return (
    <>
    <div className='section_container client_container' id='client'>
        <div className="client_header">
            <div>
                <p className="section_subheader">Testimoni</p>
                <h2 className="section_header">apa yang klien kami katakan</h2>
            </div>
        </div>

        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className="client_card">
                    <img src={Jerome} alt="" />
                    <div>
                        <h4>Jerome Polin</h4>
                        <div className="client_rating">
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={StHalf} alt="" /></span>
                        </div>
                        <p>
                        Tidak ada kata yang bisa menggambarkan betapa indahnya pantai yang 
                        direkomendasikan oleh Sangha Tourism. Air jernih, pasir putih lembut—sungguh
                        seperti surga! Terima kasih atas rekomendasinya. Saya tak sabar untuk kembali!
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="client_card">
                    <img src={Junia} alt="" />
                    <div>
                        <h4>Junia Damayanti</h4>
                        <div className="client_rating">
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={StHalf} alt="" /></span>
                        </div>
                        <p>
                        Saya baru saja menggunakan website Sangha Tourism untuk merencanakan 
                        liburan ke Pantai, dan saya sungguh terkesan Antarmukanya sangat 
                        mudah digunakan. Saya bisa dengan cepat menemukan informasi 
                        tentang tempat-tempat wisata.
                        </p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="client_card">
                    <img src={Julia} alt="" />
                    <div>
                        <h4>Juliana Ascha</h4>
                        <div className="client_rating">
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={StHalf} alt="" /></span>
                        </div>
                        <p>
                        "Sangha Tourism adalah aplikasi yang luar biasa untuk mencari rekomendasi wisata pantai . Tampilannya ramah bagi user, Dengan bantuan Sangha Tourism, liburan saya menjadi lebih menyenangkan dan berkesan. Sangat direkomendasikan!"
                        </p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="client_card">
                    <img src={Jerome} alt="" />
                    <div>
                        <h4>Jerome Polin</h4>
                        <div className="client_rating">
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={Star} alt="" /></span>
                            <span><img src={StHalf} alt="" /></span>
                        </div>
                        <p>
                        Tidak ada kata yang bisa menggambarkan betapa indahnya pantai yang 
                        direkomendasikan oleh Sangha Tourism. Air jernih, pasir putih lembut—sungguh
                        seperti surga! Terima kasih atas rekomendasinya. Saya tak sabar untuk kembali!
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    
    </>
    
  )
}

export default Slider