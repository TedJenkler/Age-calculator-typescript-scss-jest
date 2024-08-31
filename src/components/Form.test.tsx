import { screen, render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Form from "./Form";

global.alert = jest.fn();

test('should show alert if all fields are empty on submit', () => {
    render(<Form />);

    const submitButton = screen.getByLabelText('submit btn');

    fireEvent.click(submitButton);

    expect(global.alert).toHaveBeenCalledWith('Fill all fields');
});

test('should correctly calculate age when inputs are provided', () => {
    render(<Form />);
  
    fireEvent.change(screen.getByLabelText('day input'), { target: { value: '7' } });
    fireEvent.change(screen.getByLabelText('month input'), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText('year input'), { target: { value: '2000' } });
  
    fireEvent.click(screen.getByLabelText('submit btn'));
  
    expect(screen.getByLabelText('day input')).toHaveValue('7');
    expect(screen.getByLabelText('month input')).toHaveValue('10');
    expect(screen.getByLabelText('year input')).toHaveValue('2000');
  
    expect(screen.getByLabelText('years')).toHaveTextContent('23 years')
    expect(screen.getByLabelText('months')).toHaveTextContent('10 months')
    expect(screen.getByLabelText('days')).toHaveTextContent('24 days')
  });