import React from 'react'
import './Rekomen3ALogin.css'
import Bapong from '../../assets/PantaiBapong.jpg'
import Bandengan from '../../assets/PantaiBandengan.jpg'
import Widara from '../../assets/PantaiWidara.jpg'
import Karang from '../../assets/PantaiKarang.jpg'
import Jahe from '../../assets/PantaiJahe.jpeg'
import Nampu from '../../assets/PantaiNampu.jpg'
import Karimun from '../../assets/karimunjawa1.jpg'
import Menganti from '../../assets/menganti3.jpg'
import Logending from '../../assets/logending2.jpg'

import Alam from '../../assets/PantaiAlam.png'
import Caruban from '../../assets/PantaiCaruban.jpg'
import Teluk from '../../assets/PantaiTeluk.png'
import Pungkruk from '../../assets/PantaiPungkruk.png'
import Jodo from '../../assets/PantaiJodo.jpg'
import Cipta from '../../assets/PantaiCipta.png'
import Pecaron from '../../assets/PantaiPecaron.png'
import Suru from '../../assets/PantaiSuru.png'
import Watu from '../../assets/PantaiWatu.png'

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
                    <img src={Teluk} alt="" />
                    <div className="overlay">
                        <h3>Pantai Teluk Awur</h3>
                        <p>Kecamatan Tahunan, Jepara</p>
                        <button onClick={() => Navigate('../../TelukAwurLogin')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Caruban} alt="" />
                    <div className="overlay">
                        <h3>Pantai Caruban</h3>
                        <p>Kecamatan Lasem, Kabupaten Rembang.</p>
                        <button onClick={() => Navigate('../../CarubanLogin')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Alam} alt="" />
                    <div className="overlay">
                        <h3>Pantai Alam Indah</h3>
                        <p>Kecamatan TegalTimur, Tegal</p>
                        <button onClick={() => Navigate('../../AlamIndahLogin')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Pungkruk} alt="" />
                    <div className="overlay">
                        <h3>Pantai Pungkruk</h3>
                        <p>Kecamatan Mlonggo, Jepara</p>
                        <button onClick={() => Navigate('../../PungkrukLogin')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Jodo} alt="" />
                    <div className="overlay">
                        <h3>Pantai Jodo</h3>
                        <p>Kecamatan Gringsing, Kabupaten Batang</p>
                        <button onClick={() => Navigate('../../JodoLogin')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Cipta} alt="" />
                    <div className="overlay">
                        <h3>Pantai Cipta</h3>
                        <p> Kota Semarang, Jawa Tengah</p>
                        <button onClick={() => Navigate('../../CiptaLogin')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Pecaron} alt="" />
                    <div className="overlay">
                        <h3>Pantai Pecaron</h3>
                        <p>Desa Srati, Kabupaten Kebumen</p>
                        <button onClick={() => Navigate('../../PecaronLogin')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Suru} alt="" />
                    <div className="overlay">
                        <h3>Pantai Suru Manis</h3>
                        <p>Kecamatan Ayah, Kabupaten Kebumen</p>
                        <button onClick={() => Navigate('../../SuruManisLogin')}>Selengkapnya</button>
                    </div>
                </div>

                <div className="box">
                    <img src={Watu} alt="" />
                    <div className="overlay">
                        <h3>Pantai Watu Bale</h3>
                        <p>kabupaten Kebumen, Jawa Tengah</p>
                        <button onClick={() => Navigate('../../WatuBaleLogin')}>Selengkapnya</button>
                    </div>
                </div>
                
            </div>
            <button onClick={() => Navigate('../../EksploreALogin')} className='btn2'>Sebelumnya</button>
            {/* <button  className='btn2'><a href='https://maps.app.goo.gl/YSWjaqXHUeuWf5L3A'>previous</a></button> */}
        </div>
    </div>
    </div>
  )
}

export default Rekomen2