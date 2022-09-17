import React, { useState, useEffect, useContext } from 'react';
import { ACTIONS, AppContext } from '../../reducer';
// import { useForm } from "react-hook-form";
import './searchbar.css';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const { state, dispatch } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    dispatch({
      type: ACTIONS.setUserName,
      payload: { userName: inputValue },
    });
  };

  const onInputChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="searchbar__input"
        placeholder="Enter GitHub username"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}
