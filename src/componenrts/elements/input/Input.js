import './Input.css';
import React from "react";

const Input = (props) => {
    const {inputValue, onInputValueChange, type, placeholder} = props;

    return (
        <input className="Input"
               type={type}
               placeholder={placeholder}
               value={inputValue}
               onChange={event => onInputValueChange(event.target.value)}
        />
    );
};

export default Input;
