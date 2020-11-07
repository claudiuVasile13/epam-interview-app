import './Button.css';
import React from "react";

class Button extends React.Component {
    render() {
        const {handleClick, label} = this.props;

        return (
            <button className="Button"
                    type={'button'}
                    onClick={handleClick}
            >
                {label}
            </button>
        );
    }
}

export default Button;
