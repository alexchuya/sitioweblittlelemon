import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../BookingForm';

describe('BookingForm Component', () => {
  const defaultProps = {
    resDate: '2023-12-25',
    setResDate: jest.fn(),
    resTime: '17:00',
    setResTime: jest.fn(),
    guests: 2,
    setGuests: jest.fn(),
    occasion: 'Birthday',
    setOccasion: jest.fn(),
    onSubmit: jest.fn(),
    submitForm: jest.fn(),
  };


  test('renders static text in BookingForm', () => {
    render(<BookingForm {...defaultProps} />);
    expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Make Your reservation")).toBeInTheDocument();
  });

  test('submits the form when Make Your reservation button is clicked', () => {
    render(<BookingForm {...defaultProps} />);
    fireEvent.click(screen.getByDisplayValue("Make Your reservation"));
    expect(defaultProps.submitForm).toHaveBeenCalledTimes(1);
  });

  test('calls setResDate when date is changed', () => {
    render(<BookingForm {...defaultProps} />);
    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, { target: { value: '2023-12-31' } });
    expect(defaultProps.setResDate).toHaveBeenCalledWith('2023-12-31');
  });

  test('calls setResTime when time is changed', () => {
    render(<BookingForm {...defaultProps} />);
    const timeSelect = screen.getByLabelText("Choose time");
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    expect(defaultProps.setResTime).toHaveBeenCalledWith('18:00');
  });

  test('calls setGuests when guests number is changed', () => {
    render(<BookingForm {...defaultProps} />);
    const guestsInput = screen.getByLabelText("Number of guests");
    fireEvent.change(guestsInput, { target: { value: '4' } }); // Usar string '4' en lugar de número 4
    expect(defaultProps.setGuests).toHaveBeenCalledWith('4');
  });

  test('calls setOccasion when occasion is changed', () => {
    render(<BookingForm {...defaultProps} />);
    const occasionSelect = screen.getByLabelText("Occasion");
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });
    expect(defaultProps.setOccasion).toHaveBeenCalledWith('Anniversary');
  });
});
