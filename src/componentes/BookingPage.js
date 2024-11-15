import React, { useState, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import ReservationComponent from './ReservationComponent';
import availableTimesReducer from './AvailableTimesReducer';
import { fetchAPI, submitAPI } from '../api';

export const initializeTimes = (date) => {
    return fetchAPI(date);
};

function BookingPage() {
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const navigate = useNavigate();

  // Estado inicial y configuración del reducer
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);




  // Actualizar los tiempos disponibles cada vez que cambia la fecha
  useEffect(() => {
    if (resDate) {
      dispatch({ type: 'RESET_TIMES', payload: initializeTimes(resDate) });
    }
  }, [resDate]);

  // Función para manejar el envío del formulario
  const handleReservationSubmit = () => {
    dispatch({ type: 'ADD_TIME', payload: resTime }); // Añade resTime a availableTimes
    alert(`Reservation made for ${guests} guests on ${resDate} at ${resTime} for ${occasion}`);
  };

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmation');
    } else {
      alert('Mesa reservada intentalo en otro horario o fecha.');
    }
  };

  return (
    <div>
      <ReservationComponent
        availableTimes={availableTimes}
        dispatch={dispatch}
        removeTime={(time) => dispatch({ type: 'REMOVE_TIME', payload: time })}
        resetTimes={() => dispatch({ type: 'RESET_TIMES', payload: fetchAPI(resDate) })}
      />
      <BookingForm
        resDate={resDate}
        setResDate={setResDate}
        resTime={resTime}
        setResTime={setResTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        onSubmit={handleReservationSubmit}
        submitForm={submitForm}
      />
    </div>
  );
}

export default BookingPage;
