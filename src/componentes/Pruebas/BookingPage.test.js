// initializeTimes.test.js
import { fetchAPI } from '../../api'; // Asegúrate de la ruta correcta
import { initializeTimes } from '../BookingPage'; // Asegúrate de la ruta correcta

// Mock de fetchAPI para controlar su salida en las pruebas
jest.mock('../../api');

describe('initializeTimes', () => {
  beforeEach(() => {
    fetchAPI.mockClear(); // Limpia el mock antes de cada prueba
  });

  test('debería llamar a fetchAPI y devolver los horarios de reserva', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes); // Mockea la respuesta de fetchAPI

    const result = initializeTimes(new Date()); // Llama a initializeTimes con una fecha

    // Verifica que fetchAPI fue llamado exactamente una vez
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    // Verifica que initializeTimes devuelve el resultado esperado
    expect(result).toEqual(mockTimes);
  });

  test('debería manejar errores de fetchAPI correctamente', () => {
    // Configura fetchAPI para lanzar un error
    fetchAPI.mockImplementation(() => {
      throw new Error('Error en fetchAPI');
    });

    // Verifica que initializeTimes lanza el error esperado
    expect(() => initializeTimes(new Date())).toThrow('Error en fetchAPI');
  });
});


describe('initializeTimes - actualizaciones de horarios', () => {
    beforeEach(() => {
      fetchAPI.mockClear(); // Limpia cualquier mock anterior
    });
  
    test('debería devolver horarios actualizados para una fecha específica', () => {
      const mockDate1 = new Date('2023-12-25'); // Fecha inicial
      const mockTimes1 = ['17:00', '18:00', '19:00']; // Horarios iniciales
      fetchAPI.mockReturnValueOnce(mockTimes1); // Configura fetchAPI para que devuelva los horarios iniciales
  
      const result1 = initializeTimes(mockDate1); // Ejecuta initializeTimes con la fecha inicial
  
      expect(result1).toEqual(mockTimes1); // Verifica que los horarios iniciales coincidan
  
      const mockDate2 = new Date('2023-12-26'); // Nueva fecha
      const mockTimes2 = ['20:00', '21:00']; // Horarios actualizados para la nueva fecha
      fetchAPI.mockReturnValueOnce(mockTimes2); // Configura fetchAPI para devolver los horarios actualizados
  
      const result2 = initializeTimes(mockDate2); // Ejecuta initializeTimes con la nueva fecha
  
      expect(result2).toEqual(mockTimes2); // Verifica que los horarios actualizados coincidan
      expect(fetchAPI).toHaveBeenCalledTimes(2); // Verifica que fetchAPI fue llamada dos veces
    });
  });