import React from 'react';
import { RiSunFill } from 'react-icons/ri';
import { BsFillMoonFill } from 'react-icons/bs';
import logo from '/logo.svg';
import './Header.css';

const Header = ({ change, checked }) => (
  <nav>
    <img src={logo} alt="logo" className="logo" />
    <button className="dark-mode__button" onClick={change}>
      {checked ? (
        <div className="dark-mode__button-content">
          <RiSunFill className="sun-icon" />
          <label className="dark-mode__button-label"> Light</label>
        </div>
      ) : (
        <div className="dark-mode__button-content">
          <BsFillMoonFill className="moon-icon" />
          <label className="dark-mode__button-label"> Dark</label>
        </div>
      )}
    </button>
  </nav>
);

export default Header;
