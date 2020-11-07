import {render, fireEvent, screen} from '@testing-library/react';
import Button from './Button';
import React from "react";

test('should render a button and call the passed method on click action', () => {
    const onBtnClickMock = jest.fn();
    const buttonText = 'Test button';

    render(
        <Button
            label={buttonText}
            handleClick={onBtnClickMock}
        />
    );

    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(onBtnClickMock).toHaveBeenCalledTimes(1);
});
