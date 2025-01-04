import { Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Doctors from "./Pages/Doctors"
import Login from "./Pages/Login"
import About from "./Pages/About"
import MyProfile from "./Pages/MyProfile"
import MyApppointments from "./Pages/MyApppointments"
import Appointment from "./Pages/Appointment"
import Footer from "./Components/Footer"


function App() {

  return (
    <>
      <Navbar />

      <div className="mx-4 sm:mx-[10%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyApppointments />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
