// Datos de ejemplo de horarios y reservas
const allTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const reservations = [];

// fetchAPI: devuelve horarios disponibles para una fecha específica
function fetchAPI(date) {
  // Filtrar horarios ya reservados para la fecha dada
  const reservedTimes = reservations
    .filter(reservation => reservation.date === date)
    .map(reservation => reservation.time);

  // Horarios disponibles (excluyendo los reservados)
  const availableTimes = allTimes.filter(time => !reservedTimes.includes(time));
  return availableTimes;
}

// submitAPI: guarda la reserva y devuelve true si se completó correctamente
function submitAPI(formData) {
  const { date, time, guests, ocacion } = formData;

  // Verificar si el horario está disponible antes de reservar
  const availableTimes = fetchAPI(date);
  if (!availableTimes.includes(time)) {
    return false; // No se puede reservar si el horario ya está tomado
  }

  // Añadir la reserva a la lista
  const reservation = { id: reservations.length + 1, date, time, guests, ocacion };
  reservations.push(reservation);

  return true; // Reserva realizada correctamente
}

// Exportar funciones para uso en otros módulos (si usas Node.js)
export { fetchAPI, submitAPI };
