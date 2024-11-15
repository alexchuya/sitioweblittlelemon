function ReservationComponent({dispatch, initialAvailableTimes, availableTimes, removeTime, updatetime, resetTimes}) {

  return (
    <div>
      <h2>Available Times for Reservation</h2>
      <ul>
        {availableTimes.map((time, index) => (
          <li key={index}>
            {time} <button onClick={() => removeTime(time)}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={() => updatetime(123)}>Add 23:00</button>
      <button onClick={resetTimes}>Reset Times</button>
    </div>
  );

}

export default ReservationComponent;
