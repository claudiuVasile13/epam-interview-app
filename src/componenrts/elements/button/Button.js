import './Button.css';
import React from "react";

const Button = (props) => {
    const {handleClick, label} = props;

    return (
        <button className="Button"
                type={'button'}
                onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default Button;
