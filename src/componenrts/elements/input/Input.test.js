import {render, fireEvent, screen} from '@testing-library/react';
import Input from './Input';
import React from "react";

test('should update the value of input and call the passed method on value change', () => {
    const onInputValueChangeMock = jest.fn();
    const placeholder = 'Test input';

    render(
        <Input
            type={'input'}
            placeholder={placeholder}
            onInputValueChange={onInputValueChangeMock}
        />
    );

    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, {target: {value: '1'}});
    expect(inputElement.value).toBe('1');
    expect(onInputValueChangeMock).toHaveBeenCalledTimes(1);
});
