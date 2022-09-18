import React, { useState, useContext } from 'react';
import { ACTIONS, AppContext } from '../../reducer';
import './searchbar.css';

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const { state, dispatch } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
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
