import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from '../BookingForm';
import { useState } from 'react';

function BookingFormWrapper() {
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  
  const mockSubmitForm = jest.fn();

  return (
    <BookingForm
      resDate={resDate}
      setResDate={setResDate}
      resTime={resTime}
      setResTime={setResTime}
      guests={guests}
      setGuests={setGuests}
      occasion={occasion}
      setOccasion={setOccasion}
      submitForm={mockSubmitForm}
    />
  );
}

test('should enable submit button when form is valid', async () => {
  render(<BookingFormWrapper />);

  // Simula llenar todos los campos para que el formulario sea válido
  fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: '2023-12-31' } });
  fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '17:00' } });
  fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: 5 } });
  fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: 'Birthday' } });

  // Espera a que el botón se habilite después de llenar todos los campos
  await waitFor(() => {
    expect(screen.getByRole('button', { name: /Make Your reservation/i })).not.toBeDisabled();
  });
});

test('should disable submit button when form is invalid', async () => {
  render(<BookingFormWrapper />);

  // Simula llenar solo algunos campos para que el formulario sea inválido
  fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: '2023-12-31' } });
  fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: '' } }); // Falta la hora
  fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: 5 } });
  fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: '' } }); // Falta la ocasión

  // Verifica que el botón esté deshabilitado
  await waitFor(() => {
    expect(screen.getByRole('button', { name: /Make Your reservation/i })).toBeDisabled();
  });
});
