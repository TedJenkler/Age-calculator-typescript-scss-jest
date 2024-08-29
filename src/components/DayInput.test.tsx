import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DayInput from './DayInput';

test('renders DayInput and interacts with it', () => {
  const mockDay = '0';
  const mockMonth = '2';
  const mockYear = '2000';
  const mockSetDay = jest.fn();

  render(
    <DayInput 
      day={mockDay} 
      setDay={mockSetDay} 
      month={mockMonth} 
      year={mockYear} 
    />
  );

  const input = screen.getByLabelText('day input');
  expect(input).toHaveValue('0');

  fireEvent.change(input, { target: { value: '15' } });

  expect(mockSetDay).toHaveBeenCalledWith('15');
});

test("Can't type 31 in February in non-leap year", () => {
  const mockDay = '0';
  const mockMonth = '2';
  const mockYear = '2001';
  const mockSetDay = jest.fn();

  render(
    <DayInput 
      day={mockDay} 
      setDay={mockSetDay} 
      month={mockMonth} 
      year={mockYear} 
    />
  );

  const input = screen.getByLabelText('day input');
  fireEvent.change(input, { target: { value: '31' }});
  expect(mockSetDay).toHaveBeenCalledWith('28');
});

test('Cant type 31 in a leap year', () => {
  const mockDay = '0';
  const mockMonth = '2';
  const mockYear = '2001';
  const mockSetDay = jest.fn();

  render(
    <DayInput 
      day={mockDay} 
      setDay={mockSetDay} 
      month={mockMonth} 
      year={mockYear} 
    />
  );

  const input = screen.getByLabelText('day input');
  
  fireEvent.change(input, { target: { value: '31'}});

  expect(mockSetDay).toHaveBeenCalledWith('28');
})

test('Rejects all non-numeric inputs', () => {
  const mockDay = '0';
  const mockMonth = '2';
  const mockYear = '2001';
  const mockSetDay = jest.fn();

  render(
    <DayInput 
      day={mockDay} 
      setDay={mockSetDay} 
      month={mockMonth} 
      year={mockYear} 
    />
  );

  const input = screen.getByLabelText('day input');

  const invalidInputs = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '.', ',', '-', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', '\'', '<', '>', '?', '/',
    ' ', '\t', '\n', '\r', '\f', '\v'
  ];

  invalidInputs.forEach(char => {
    fireEvent.change(input, { target: { value: char } });
  });

  expect(mockSetDay).toHaveBeenCalledWith("");
});