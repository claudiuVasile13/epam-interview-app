import {render, screen} from '@testing-library/react';
import Search from './Search';
import React from "react";

test('should render input and button', () => {
    const onInputValueChangeMock = jest.fn();
    const placeholder = 'Test input';
    const onBtnClickMock = jest.fn();
    const buttonText = 'Test button';

    render(
        <Search
            type={'input'}
            placeholder={placeholder}
            onInputValueChange={onInputValueChangeMock}
            buttonText={buttonText}
            handleClick={onBtnClickMock}
        />
    );
    const inputElement = screen.getByPlaceholderText(placeholder);
    const buttonElement = screen.getByText(buttonText);

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
});
