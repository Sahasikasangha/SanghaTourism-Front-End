import React from 'react'
import './Rekomen2.css'
import Bapong from '../../assets/PantaiBapong.jpg'
import Bandengan from '../../assets/PantaiBandengan.jpg'
import Widara from '../../assets/PantaiWidara.jpg'
import Karang from '../../assets/PantaiKarang.jpg'
import Jahe from '../../assets/PantaiJahe.jpeg'
import Nampu from '../../assets/PantaiNampu.jpg'
import Karimun from '../../assets/karimunjawa1.jpg'
import Menganti from '../../assets/menganti3.jpg'
import Logending from '../../assets/logending2.jpg'
import { Navigate, useNavigate } from 'react-router-dom'


const Rekomen2 = () => {
    const Navigate = useNavigate ()

  return (
    <div>
    <div id="card-area">
        <div className="wrapper">
            <h4>REKOMENDASI WISATA</h4>
            <div className="box-area">

                <div className="box">
                    <img src={Karimun} alt="" />
                    <div className="overlay">
                        <h3>Pantai Karimunjawa</h3>
                        <p>Kabupaten Jepara, Jawa Tengah</p>
                        <button onClick={() => Navigate('../../Karimun')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Bandengan} alt="" />
                    <div className="overlay">
                        <h3>Pantai Bandengan</h3>
                        <p>Desa Bandengan, Kecamatan Jepara.</p>
                        <button onClick={() => Navigate('../../Bandengan')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Widara} alt="" />
                    <div className="overlay">
                        <h3>Pantai Widarapayung</h3>
                        <p>Kecamatan Binangun, Kabupaten Cilacap</p>
                        <button onClick={() => Navigate('../../WidaraPayung')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Karang} alt="" />
                    <div className="overlay">
                        <h3>Pantai Karangpandan</h3>
                        <p>Kabupaten Cilacap, Jawa Tengah</p>
                        <button onClick={() => Navigate('../../KarangPandan')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Jahe} alt="" />
                    <div className="overlay">
                        <h3>Pantai Karangjahe</h3>
                        <p>Kecamatan Rembang, Kabupaten Rembang</p>
                        <button onClick={() => Navigate('../../KarangJahe')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Nampu} alt="" />
                    <div className="overlay">
                        <h3>Pantai Nampu</h3>
                        <p> Kecamatan Paranggupito, Kabupaten Wonogiri</p>
                        <button onClick={() => Navigate('../../Nampu')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Bapong} alt="" />
                    <div className="overlay">
                        <h3>Pantai Bapong</h3>
                        <p>Kebumen, Jawa Tengah</p>
                        <button onClick={() => Navigate('../../Bapong')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Menganti} alt="" />
                    <div className="overlay">
                        <h3>Pantai Menganti</h3>
                        <p>Kecamatan Ayah, Kabupaten Kebumen</p>
                        <button onClick={() => Navigate('../../Menganti')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Logending} alt="" />
                    <div className="overlay">
                        <h3>Pantai logending</h3>
                        <p>kabupaten Kebumen, Jawa Tengah</p>
                        <button onClick={() => Navigate('../../Logending')}>Selengkapnya</button>
                    </div>
                </div>
                
            </div>
            <button onClick={() => Navigate('../../Eksplore2')} className='btn2'>Lainnya</button>
        </div>
    </div>
    </div>
  )
}

export default Rekomen2