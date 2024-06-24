import React from 'react'
import './DestinationLogin.css'

import Karimunjawa from '../../assets/karimunjawa.jpg';
import Menganti from '../../assets/menganti2.jpg';
import Logending from '../../assets/logending1.jpg';

import { Navigate, useNavigate } from 'react-router-dom'

const Destination = () => {
    const Navigate = useNavigate ()
  return (
    <div className='section_container1 destination_container' id='destination'>
        <h3 className="section_subheader">Wisata Populer</h3>
        <div className="destination_grid">
            <div className="destination_card">
                <img src={Karimunjawa} alt="" />
                <div className="destination_detail">
                    <div>
                        <h4>KarimunJawa</h4>
                        <h3>Karimunjawa adalah kepulauan di Laut Jawa yang termasuk dalam Kabupaten Jepara, Jawa Tengah.</h3>
                        <button className='btn' onClick={() => Navigate('../../KarimunLogin')}>Selengkapnya</button>
                    </div>
                </div>
            </div>

            <div className="destination_card">
                <img src={Menganti} alt="" />
                <div className="destination_detail">
                    <div>
                        <h4>Menganti</h4>
                        <h3>Pantai Menganti terletak di Desa Karangduwur, Kecamatan Ayah, Kabupaten Kebumen.</h3>
                        <button className='btn' onClick={() => Navigate('../../MengantiLogin')}>Selengkapnya</button>
                    </div>
                </div>
            </div> 

            <div className="destination_card">
                <img src={Logending} alt="" />
                <div className="destination_detail">
                    <div>
                        <h4>Logending</h4>
                        <h4>Pantai Logending adalah sepanjang dari pantai widarapayung, pantai cemara, pantai ayah.</h4>
                        <button className='btn' onClick={() => Navigate('../../LogendingLogin')}>Selengkapnya</button>
                    </div>
                </div>
            </div>         
        </div>
    </div>
  )
}

export default Destination