import { useState } from 'react'
import Homepage from './components/Homepage'
import Politics from "./pages/Politics"
import {Route, BrowserRouter} from "react-router-dom"
import {Routes} from "react-router"
import Corruption from "./pages/Corruption"
import Murder from "./pages/Murder"
import Abductions from './pages/Abductions'
import GenzProtest from './pages/GenzProtest'
import Adani from './pages/Adani'
import Education from './pages/Education'
import Economy from './pages/Economy'
import Fufuaicc from './pages/Fufuaicc'
import Rejectbill from './pages/Rejectbill'
import Health from './pages/Health'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/politics" element={<Politics/>}></Route>
      <Route path="/corruption" element={<Corruption/>}></Route>
      <Route path="/murders" element={<Murder/>}></Route>
      <Route path="/abductions" element={<Abductions/>}></Route>
      <Route path="/genzprotest" element={<GenzProtest/>}></Route>
      <Route path="/education" element={<Education/>}></Route>
      <Route path="/adani" element={<Adani/>}></Route>
      <Route path="/economy" element={<Economy/>}></Route>
      <Route path="/fufuaicc" element={<Fufuaicc/>}></Route>
      <Route path="/rejectfinancebill2024" element={<Rejectbill/>}></Route>
      <Route path="/health" element={<Health/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
