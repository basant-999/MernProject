

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout"
import Home from "./Pages/Home"
import Doctorlogin from "./Pages/Doctorlogin";
import Doctordashboard from "./Pages/Doctordashboard";
import Searchdoctor from "./Pages/Searchdoctor";
import MyPatient from "./Pages/MyPatient";
import PatientAppointment from "./Pages/PatientAppointment";
import About from "./component/About";


function App() {

  return (
    <>
<BrowserRouter>
  <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="doctorlogin" element={<Doctorlogin/>}/>
      <Route path="searchdoctor" element={<Searchdoctor/>}/>
      <Route path="patientapp/:id" element={<PatientAppointment/>}/>
      <Route path="about" element={<About/>}/>
   </Route>
  </Routes>

  <Routes>
      <Route path="doctordashboard" element={<Doctordashboard/>}>
      <Route path="mypatient" element={<MyPatient/>}/>

      </Route>
  </Routes>
</BrowserRouter>



 


    </>
  )
}

export default App
