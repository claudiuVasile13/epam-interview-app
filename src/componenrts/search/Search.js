import React from "react";

import './Search.css';
import Input from "../elements/input/Input";
import Button from "../elements/button/Button";

class Search extends React.Component {
    render() {
        const {inputValue, placeholder, buttonText, onInputValueChange, handleSearchClick} = this.props;

        return (
            <div className="Search">
                <Input
                    inputValue={inputValue}
                    onInputValueChange={onInputValueChange}
                    type={'input'}
                    placeholder={placeholder}
                />

                <Button
                    label={buttonText}
                    handleClick={handleSearchClick}
                />
            </div>
        );
    }
}

export default Search;


