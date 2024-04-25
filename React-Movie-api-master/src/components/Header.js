import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { LanguageContext } from '../context/Language';

const Header = () => {
  const count = useSelector(state => state.counter.count);
  const { toggleLanguage } = useContext(LanguageContext);

  const handleLanguageToggle = (lang) => {
    toggleLanguage(lang);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ffc107' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movies Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Movies
            </Link>
            <Link className="nav-link" to="watch-list">
              Watch List <span className="badge bg-secondary">{count}</span>
            </Link>
            <Link className="nav-link" to="form">
              Register Form 
            </Link>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button className="btn btn-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false"style={{textDecoration:"none" ,color:"black"}}>
                Language
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><button className="dropdown-item" onClick={handleLanguageToggle} value="ar">اللغه العربيه</button></li>
                <li><button className="dropdown-item" onClick={handleLanguageToggle} value="en">English</button></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
