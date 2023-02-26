import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Registration } from './Components/Registration';
import './App.css';
import MyNavbar, { Navbar } from './Components/MyNavbar';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import { MedicalHistoryForm } from './Components/MedicalHistoryForm';
import { PatientRegis } from './Components/PatientRegis';
import { DoctorRegis } from './Components/DoctorRegis';

function App() {
  return (
    <div>
       <BrowserRouter>
       <MyNavbar></MyNavbar>
       
  
       <Routes>
         <Route path = "/" element={<LandingPage></LandingPage>}></Route>
         <Route path = "/Registration" element={<Registration></Registration>}></Route>
         <Route path = "/MedicalHistoryForm" element={<MedicalHistoryForm></MedicalHistoryForm>}></Route>
         <Route path = "/PatientRegis" element={<PatientRegis></PatientRegis>}></Route>
         <Route path = "/DoctorRegis" element={<DoctorRegis></DoctorRegis>}></Route>
         

        

        </Routes>
        <Footer></Footer>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
