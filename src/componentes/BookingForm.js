import '../styles/BookingForm.css';
import { useState, useEffect} from 'react';

function BookingForm({
  resDate, setResDate,
  resTime, setResTime,
  guests, setGuests,
  occasion, setOccasion,
  onSubmit,
  submitForm
}) {
  const [isFormValid, setIsFormValid] = useState(false);

  console.log("guests",guests)
  console.log("resDate",resDate)

  // Valida el formulario cada vez que se actualice algún campo
  useEffect(() => {
    if (resDate && resTime && guests > 0 && guests <= 10 && occasion) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [resDate, resTime, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date: resDate, time: resTime, guests: guests, occasion: occasion };
    submitForm(formData);
  };


  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={(e) => {
          setResDate(e.target.value);
        }}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={resTime}
        onChange={(e) => {
          setResTime(e.target.value);
        }}
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => {
          setGuests(e.target.value);
        }}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" disabled={!isFormValid} />
    </form>
  );
}

export default BookingForm;
