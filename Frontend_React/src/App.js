import React from "react";
import {Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import BookAppointment from './components/BookAppointment';
import UpdateAppointment from "./components/UpdateAppointment";
import MyAppointment from "./components/MyAppointment";

import "./App.css";

function App() {
 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/updateappointment/:id" element={<UpdateAppointment />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
      </Routes>
    </div>
  );
}

export default App;
