import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import Service from './Components/Programs/Service';
import Destination from './Components/Destination/Destination';

import Slider from './Components/Testimoni/Slider';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home'
// import Login from './Pages/Logn';
// import SignUp from './Pages/SignUp';
import Eksplore from './Pages/Eksplore';
import Eksplore2 from './Pages/Eksplore2';

import Karimun from './Pages/Karimun';
import Bandeng from './Pages/Bandengan';
import Widara from './Pages/WidaraPayung';
import KarangP from './Pages/KarangPandan';
import KarangJ from './Pages/KarangJahe';
import Nampu from './Pages/Nampu';
import Bapong from './Pages/Bapong';
import Menganti from './Pages/Menganti';
import Logending from './Pages/Logending';
import TelukAwur from './Pages/TelukAwur'
import Caruban from './Pages/Caruban'
import Alam from './Pages/AlamIndah'
import AlamIndah from './Pages/AlamIndah';
import Pungkruk from './Pages/Pungkruk';
import Jodo from './Pages/Jodo';
import Cipta from './Pages/Cipta';
import Pecaron from './Pages/Pecaron';
import SuruManis from './Pages/SuruManis';
import WatuBale from './Pages/WatuBale';

import Register from './Pages/Register';
import Login from './Pages/Login';

import HomeALogin from './Pages/HomeALogin'
import EksploreALogin from './Pages/EksploreALogin';
import Eksplore2ALogin from './Pages/Eksplore2ALogin';
import KarimunLogin from './Pages/KarimunLogin';
import BandengLogin from './Pages/BandenganLogin';
import WidaraLogin from './Pages/WidaraPayungLogin';
import KarangPLogin from './Pages/KarangPandanLogin';
import KarangJLogin from './Pages/KarangJaheLogin';
import NampuLogin from './Pages/NampuLogin';
import BapongLogin from './Pages/BapongLogin';
import MengantiLogin from './Pages/MengantiLogin';
import LogendingLogin from './Pages/LogendingLogin';
import TelukAwurLogin from './Pages/TelukAwurLogin';
import CarubanLogin from './Pages/CarubanLogin'
import AlamIndahLogin from './Pages/AlamIndahLogin';
import PungkrukLogin from './Pages/PungkrukLogin';
import JodoLogin from './Pages/JodoLogin';
import CiptaLogin from './Pages/CiptaLogin';
import PecaronLogin from './Pages/PecaronLogin';
import SuruManisLogin from './Pages/SuruManisLogin';
import WatuBaleLogin from './Pages/WatuBaleLogin';

// import Login from '../src/Components/Sighin/Sighin'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/Logn" element={<Login />}/> */}
        {/* <Route path="/SignUp" element={<SignUp />}/> */}
        <Route path="/Eksplore" element={<Eksplore />}/>
        <Route path="/Eksplore2" element={<Eksplore2 />}/>
        <Route path="/Karimun" element={<Karimun />}/>
        <Route path="/Bandengan" element={<Bandeng />}/>
        <Route path="/WidaraPayung" element={<Widara />}/>
        <Route path="/KarangPandan" element={<KarangP />}/>
        <Route path="/KarangJahe" element={<KarangJ />}/>
        <Route path="/Nampu" element={<Nampu />}/>
        <Route path="/Bapong" element={<Bapong />}/>
        <Route path="/Menganti" element={<Menganti />}/>
        <Route path="/Logending" element={<Logending />}/>
        <Route path="/TelukAwur" element={<TelukAwur />}/>
        <Route path="/Caruban" element={<Caruban />}/>
        <Route path="/AlamIndah" element={<AlamIndah />}/>
        <Route path="/Pungkruk" element={<Pungkruk />}/>
        <Route path="/Jodo" element={<Jodo />}/>
        <Route path="/Cipta" element={<Cipta />}/>
        <Route path="/Pecaron" element={<Pecaron />}/>
        <Route path="/SuruManis" element={<SuruManis />}/>
        <Route path="/WatuBale" element={<WatuBale />}/>
      

        <Route path="/HomeALogin" element={<HomeALogin />}/>
        <Route path="/EksploreALogin" element={<EksploreALogin />}/>
        <Route path="/Eksplore2ALogin" element={<Eksplore2ALogin />}/>
        <Route path="/KarimunLogin" element={<KarimunLogin />}/>
        <Route path="/BandenganLogin" element={<BandengLogin />}/>
        <Route path="/WidaraPayungLogin" element={<WidaraLogin />}/>
        <Route path="/KarangPandanLogin" element={<KarangPLogin />}/>
        <Route path="/KarangJaheLogin" element={<KarangJLogin />}/>
        <Route path="/NampuLogin" element={<NampuLogin />}/>
        <Route path="/BapongLogin" element={<BapongLogin />}/>
        <Route path="/MengantiLogin" element={<MengantiLogin />}/>
        <Route path="/LogendingLogin" element={<LogendingLogin />}/>

        <Route path="/TelukAwurLogin" element={<TelukAwurLogin />}/>
        <Route path="/CarubanLogin" element={<CarubanLogin />}/>
        <Route path="/AlamIndahLogin" element={<AlamIndahLogin />}/>
        <Route path="/PungkrukLogin" element={<PungkrukLogin />}/>
        <Route path="/JodoLogin" element={<JodoLogin />}/>
        <Route path="/CiptaLogin" element={<CiptaLogin />}/>
        <Route path="/PecaronLogin" element={<PecaronLogin />}/>
        <Route path="/SuruManisLogin" element={<SuruManisLogin />}/>
        <Route path="/WatuBaleLogin" element={<WatuBaleLogin />}/>

      </Routes>
    </Router>
  
  )
}

export default App;