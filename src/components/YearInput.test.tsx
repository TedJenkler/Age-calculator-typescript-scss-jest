import { screen, render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import YearInput from "./YearInput";

test('Render and test input', () => {
    const mockYear = '2000';
    const mockSetYear = jest.fn();
    
    render(
        <YearInput 
            year={mockYear}
            setYear={mockSetYear}
        />
    );

    const input = screen.getByLabelText('year input');

    fireEvent.change(input, { target: { value: '11' } });

    expect(mockSetYear).toHaveBeenCalledWith('11');
});

test('Rejects all non-numeric inputs', () => {
    const mockYear = '10';
    const mockSetYear = jest.fn();

    render(
        <YearInput
            year={mockYear}
            setYear={mockSetYear}
        />
    );

    const input = screen.getByLabelText('year input');

    const invalidInputs = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '.', ',', '-', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', '\'', '<', '>', '?', '/',
        ' ', '\t', '\n', '\r', '\f', '\v'
    ];

    invalidInputs.forEach((char) => {
        fireEvent.change(input, { target: { value: char } });
    });

    expect(mockSetYear).toHaveBeenCalledTimes(0);
});