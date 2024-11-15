import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
import Homepage from './componentes/Homepage';
import Especiales from './componentes/Especiales';
import Testimonials from './componentes/Testimonials';
import BookingPage from './componentes/BookingPage';
import ConfirmedBooking from './componentes/ConfirmedBooking';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/especiales" element={<Especiales/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/reserve" element={<BookingPage />} /> {/* Ruta a la página de reservas */}
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer/>
    </>



  );
}

export default App;
