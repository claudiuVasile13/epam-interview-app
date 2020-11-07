import './Input.css';
import React from "react";

class Input extends React.Component {
    render() {
        const {inputValue, onInputValueChange, type, placeholder} = this.props;

        return (
            <input className="Input"
                   type={type}
                   placeholder={placeholder}
                   value={inputValue}
                   onChange={event => onInputValueChange(event.target.value)}
            />
        );
    }
}

export default Input;
