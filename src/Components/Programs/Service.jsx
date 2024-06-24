import React from 'react'
import './Service.css'
import Verified from '../../assets/verified.png'
import Customer from '../../assets/customer.png'
import Personalize from '../../assets/personalize.png'


const Service = () => {
  return (
    <div className='section_containerS service_containerS' id='service'>
        <h3 className='section_subheader'>Mengapa Anda harus memilih kami</h3>
        <div className="service_gridS">
            <div className="service_cardS">
                <img src={Verified} alt="" />
                <h4>informasi terverifikasi</h4>
                <p>Kami memastikan bahwa semua informasi yang diberikan tentang destinasi pantai akurat dan terkini, memungkinkan Anda mengambil keputusan dengan percaya diri</p>
            </div>

            <div className="service_cardS">
            <img src={Personalize} alt="" />
                <h4>Rekomendasi yang Dipersonalisasi</h4>
                <p>Kami meluangkan waktu untuk memahami minat dan keinginan Anda, memberikan rekomendasi yang dipersonalisasi untuk destinasi pantai yang sesuai dengan visi Anda tentang liburan sempurna.</p>
            </div>

            <div className="service_cardS">
            <img src={Customer} alt="" />
                <h4>Dukungan Pelanggan Khusus</h4>
                <p>Yakinlah mengetahui bahwa tim kami yang berdedikasi siap membantu Anda di setiap langkah, mulai dari tahap perencanaan hingga penyelesaian
                liburan pantai Anda, memberi Anda ketenangan pikiran dan layanan luar biasa sepanjang perjalanan Anda.</p>
            </div>
        </div>
   
    </div>

  )
}

export default Service