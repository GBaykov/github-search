import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import './searchbar.css'

export default function SearchBar({ addUserName }) {
    const [inputValue, setInputValue] = useState('');
    // const { register, handleSubmit } = useForm();


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)
        addUserName(inputValue);
    }

    const onInputChange = (e) => {
        setInputValue(e.currentTarget.value);
    };

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input type="text" className="searchbar__input"
                placeholder="Enter GitHub username"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}