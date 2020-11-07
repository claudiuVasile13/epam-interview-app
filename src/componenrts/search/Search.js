import React from "react";

import './Search.css';
import Input from "../elements/input/Input";
import Button from "../elements/button/Button";

const Search = (props) => {
    const {inputValue, placeholder, buttonText, onInputValueChange, handleSearchClick} = props;

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
};

export default Search;


