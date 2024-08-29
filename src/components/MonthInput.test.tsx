import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import MonthInput from "./MonthInput";

test('Render and type in input', () => {
    const mockMonth = "10";
    const mockSetMonth = jest.fn();

    render(
        <MonthInput
            month={mockMonth}
            setMonth={mockSetMonth}
        />
    );

    const input = screen.getByLabelText('month input');

    expect(input).toHaveValue(mockMonth);

    fireEvent.change(input, { target: { value: '8' } });

    expect(mockSetMonth).toHaveBeenCalledWith('8');
});

test('Rejects all non-numeric inputs', () => {
    const mockMonth = "10";
    const mockSetMonth = jest.fn();

    render(
        <MonthInput 
            month={mockMonth}
            setMonth={mockSetMonth}
        />
    );

    const input = screen.getByLabelText('month input');

    const invalidInputs = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '.', ',', '-', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', '\'', '<', '>', '?', '/',
        ' ', '\t', '\n', '\r', '\f', '\v'
    ];

    invalidInputs.forEach(char => {
        fireEvent.change(input, { target: { value: char } });
    });

    expect(mockSetMonth).toHaveBeenCalledTimes(0);
});