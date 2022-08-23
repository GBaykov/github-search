import React from 'react';
import SearchBar from '../SearchBar';
import './header.css'

function Header({ addUserName }) {
    return (
        <header className="header">
            <div className="header__content">
                <p className="logo">
                    <img src="logo.svg" alt="logo imag" className="logo__img" />
                </p>
                <SearchBar addUserName={addUserName} />
            </div>
        </header>
    )
}
export default Header;